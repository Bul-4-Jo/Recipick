import axios from 'axios';

const baseURL = process.env.REACT_APP_URL;
const userToken = process.env.REACT_APP_TOKEN;
const userAccountName = process.env.REACT_APP_ACCOUNT_NAME;

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${userToken}`,
    'Content-type': 'application/json',
  },
});

export const getFollowerList = async () => {
  try {
    const response = await instance.get(`/profile/${userAccountName}/follower?limit=50`);

    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const follow = async accountname => {
  try {
    const response = await instance.post(`/profile/${accountname}/follow`);

    return response.data.profile.isfollow;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const unFollow = async accountname => {
  try {
    await instance.delete(`/profile/${accountname}/unfollow`);

    return false;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
