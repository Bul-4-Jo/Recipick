import axios from 'axios';

const baseURL = process.env.REACT_APP_URL;

const instanceAuth = axios.create({
  baseURL,
  headers: { 'Content-type': 'application/json' },
});

instanceAuth.interceptors.request.use(
  config => {
    const userToken = localStorage.getItem('Access Token');

    config.headers.Authorization = `Bearer ${userToken}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const instanceForm = axios.create({
  baseURL,
  headers: { 'Content-type': 'multipart/form-data' },
});

export const getFeedList = async skip => {
  try {
    const response = await instanceAuth.get(`/post/feed?limit=5&skip=${skip}`);

    return response.data.posts;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMyInfo = async () => {
  try {
    const response = await instanceAuth.get(`/user/myinfo`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFollowerList = async accountname => {
  try {
    const response = await instanceAuth.get(`/profile/${accountname}/follower?limit=infinite`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFollowingList = async accountname => {
  try {
    const response = await instanceAuth.get(`/profile/${accountname}/following?limit=infinite`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const follow = async accountname => {
  try {
    const response = await instanceAuth.post(`/profile/${accountname}/follow`);

    return response.data.profile.isfollow;
  } catch (error) {
    throw new Error(error);
  }
};

export const unFollow = async accountname => {
  try {
    await instanceAuth.delete(`/profile/${accountname}/unfollow`);

    return false;
  } catch (error) {
    throw new Error(error);
  }
};

export const uploadImages = async files => {
  try {
    const name = [];
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }

    const { data } = await instanceForm.post('/image/uploadfiles', formData);

    for (const i of data) {
      name.push(`https://mandarin.api.weniv.co.kr/${i.filename}`);
    }

    if (name.length > 1) {
      return name.join(',');
    } else {
      return name[0];
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const uploadImg = async formData => {
  try {
    const { data } = await instanceForm.post('/image/uploadfile', formData);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const uploadPost = async post => {
  try {
    const response = await instanceAuth.post('/post', { post });

    return response.data.post;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProduct = async accountname => {
  try {
    const response = await instanceAuth.get(`/product/${accountname}?limit=infinite`);

    return response.data.product;
  } catch (error) {
    throw new Error(error);
  }
};

export const editPost = async (postId, post) => {
  try {
    const response = await instanceAuth.put(`/post/${postId}`, { post });

    return response.data.post;
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePost = async postId => {
  try {
    const response = await instanceAuth.delete(`/post/${postId}`);

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProfile = async accountname => {
  try {
    const response = await instanceAuth.get(`/profile/${accountname}`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const pushProfile = async user => {
  try {
    const response = await instanceAuth.put(`/user`, { user });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPost = async (username, skip, limit = 5) => {
  try {
    const response = await instanceAuth.get(`/post/${username}/userpost?limit=${limit}&skip=${skip}`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPostDetail = async postId => {
  try {
    const response = await instanceAuth.get(`/post/${postId}`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const uploadProduct = async product => {
  try {
    const response = await instanceAuth.post('/product', { product });

    return response.data.product;
  } catch (error) {
    throw new Error(error);
  }
};

export const editProduct = async (productId, product) => {
  try {
    const response = await instanceAuth.put(`/product/${productId}`, { product });

    return response.data.product;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteProduct = async productId => {
  try {
    const response = await instanceAuth.delete(`/product/${productId}`);

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const uploadComment = async (comment, postId) => {
  try {
    const response = await instanceAuth.post(`/post/${postId}/comments`, { comment });

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getComment = async postId => {
  try {
    const { data } = await instanceAuth.get(`/post/${postId}/comments?limit=infinite`);

    return data.comments;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteComment = async (postId, commentId) => {
  try {
    const { data } = await instanceAuth.delete(`/post/${postId}/comments/${commentId}`);

    return data.comments;
  } catch (error) {
    throw new Error(error);
  }
};

export const editProfile = async () => {
  try {
    const response = await instanceAuth.put(`/user`);

    return response.data;
  } catch (error) {
    return new Error(error);
  }
};

export const like = async postId => {
  try {
    const response = await instanceAuth.post(`/post/${postId}/heart`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const unLike = async postId => {
  try {
    const response = await instanceAuth.delete(`/post/${postId}/unheart`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const toolSearch = async keyword => {
  try {
    const response = await instanceAuth.get(`/user/searchuser/?keyword=${keyword}`);

    return response.data;
  } catch (error) {
    return new Error(error);
  }
};

export const reportPost = async postid => {
  try {
    const res = await instanceAuth.post(`/post/${postid}/report`);

    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const reportComment = async (postid, commentid) => {
  try {
    const res = await instanceAuth.post(`/post/${postid}/comments/${commentid}/report`);

    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const idValidation = async accountname => {
  try {
    const res = await instanceAuth.post('/user/accountnamevalid', { user: { accountname } });

    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const registerSubmit = async data => {
  try {
    const res = await instanceAuth.post('/user', data);

    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const emailValid = async email => {
  try {
    const response = await instanceAuth.post('/user/emailvalid', { user: { email } });

    return response;
  } catch (error) {
    throw new Error(error);
  }
};
