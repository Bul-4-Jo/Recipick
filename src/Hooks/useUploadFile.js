import { useReducer } from 'react';
import { uploadImg } from '../API/api';

const uploadReducer = (files, action) => {
  const { newFile, targetFile } = action;

  switch (action.type) {
    case 'uploadFile':
      return [newFile];

    case 'uploadFiles':
      return [...files, newFile].filter(
        (arr, index, callback) => index === callback.findIndex(t => t.name === arr.name)
      );

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

    console.log(status.filename);
    // if (!status.filename) {
    //   console.log('이미지 입력 실패');
    //   dispatch({ type: 'uploadFile', newFile: null });
    //   throw Error('이미지 입력 실패');
    // } else {
    //   console.log(status.filename);
    // }
    dispatch({ type: 'uploadFile', newFile: status.filename });
  };

  const uploadMultiFile = async newFile => {
    dispatch({ type: 'uploadFiles', newFile });
  };

  const deleteFile = async targetFile => {
    dispatch({ type: 'deleteFile', targetFile });
  };

  return { uploadSingleFile, uploadMultiFile, deleteFile, response };
};
