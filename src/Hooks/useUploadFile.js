import { useReducer } from 'react';

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
    dispatch({ type: 'uploadFile', newFile });
  };

  const uploadMultiFile = async newFile => {
    dispatch({ type: 'uploadFiles', newFile });
  };

  const deleteFile = async targetFile => {
    dispatch({ type: 'deleteFile', targetFile });
  };

  return { uploadSingleFile, uploadMultiFile, deleteFile, response };
};
