import { useReducer } from 'react';
import { uploadImg } from '../API/api';

const uploadReducer = (files, action) => {
  const { newFile, targetFile } = action;

  switch (action.type) {
    case 'uploadFile':
      return [newFile];

    case 'uploadFiles':
      return [...files, newFile];

    case 'deleteFile':
      return files.filter(item => item !== targetFile);

    default:
      throw Error(`${action.type} : 알 수 없는 액션 타입입니다.`);
  }
};

export const useUploadFile = () => {
  const [response, dispatch] = useReducer(uploadReducer, []);

  const uploadSingleFile = async newFile => {
    const formData = new FormData();

    formData.append('image', newFile);

    const status = await uploadImg(formData);

    if (!status.data) {
      console.log('이미지 입력 실패');
      throw Error('이미지 입력 실패');
    } else {
      console.log(status.data.filename);
      dispatch({ type: 'uploadFile', response: status.data.filename });
    }
  };

  const uploadMultiFile = async newFile => {
    const formData = new FormData();

    formData.append('image', newFile);

    const status = await uploadImg(formData);

    if (!status.data) {
      console.log('이미지 입력 실패');
      throw Error('이미지 입력 실패');
    } else {
      console.log(status.data.filename);
      dispatch({ type: 'uploadFile', response: status.data.filename });
    }

    dispatch({ type: 'uploadFiles', newFile });
  };

  const deleteFile = async targetFile => {
    dispatch({ type: 'deleteFile', targetFile });
  };

  return { uploadSingleFile, uploadMultiFile, deleteFile, response };
};
