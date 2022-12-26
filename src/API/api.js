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

const instanceForm = axios.create({
  baseURL,
  headers: { 'Content-type': 'multipart/form-data' },
});

export const getFollowerList = async () => {
  try {
    const response = await instance.get(`/profile/${userAccountName}/follower`);

    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const getFollowingList = async () => {
  try {
    const response = await instance.get(`/profile/${userAccountName}/following`);

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

export const uploadImage = async files => {
  try {
    const name = [];
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }

    const { data } = await instanceForm.post('/image/uploadfiles', formData);

    for (const i of data) {
      name.push(i.filename);
    }

    if (name.length > 1) {
      return name.join(',');
    } else {
      return name[0];
    }
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const uploadPost = async post => {
  try {
    const response = await instance.post('/post', { post });

    return response.data.post;
  } catch (error) {
    throw new Error(error);
  }
};
