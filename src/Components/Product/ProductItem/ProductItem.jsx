import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ImageWrapper, ProductItemWrapper, ProductName, ProductPrice } from './ProductItem.style';
import Modal from './../../Common/Modal/Modal';
import Alert from './../../Common/Alert/Alert';

export default function ProductItem({ productData, deleteProductHandler }) {
  const [isModal, setIsModal] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const navigate = useNavigate();
  const { id, itemName, itemImage, price } = productData;
  const userId = localStorage.getItem('user ID');
  const { accountName } = useParams();
  const [modalList, setModalList] = useState([]);

  useEffect(() => {
    if (userId === accountName) {
      setModalList([
        {
          name: '삭제',
          func: () => setIsAlert(true),
        },
        {
          name: '수정',
          func: () => navigate(`/product/${id}`, { state: productData }),
        },
        {
          name: '웹사이트에서 상품 보기',
          func: () => console.log('웹사이트에서 상품 보기'),
        },
      ]);
    } else {
      setModalList([
        {
          name: '웹사이트에서 상품 보기',
          func: () => console.log('웹사이트에서 상품 보기'),
        },
      ]);
    }
  }, []);

  const onClickHandler = () => {
    setIsModal(true);
  };

  return (
    <ProductItemWrapper onClick={onClickHandler}>
      <ImageWrapper>
        <img src={itemImage} alt={itemName} />
      </ImageWrapper>
      <ProductName>{itemName}</ProductName>
      <ProductPrice>{price.toLocaleString()}원</ProductPrice>

      {isModal && <Modal listObj={modalList} stateFunc={setIsModal} />}
      {isAlert && (
        <Alert
          alertMSG='상품을 삭제할까요?'
          rightMSG='삭제'
          rightFunc={() => deleteProductHandler(id)}
          stateFunc={setIsAlert}
        />
      )}
    </ProductItemWrapper>
  );
}
