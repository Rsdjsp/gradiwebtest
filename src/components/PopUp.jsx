import React from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

const PopContainer = styled.div`
  position: absolute;
  padding-top: 20px;
  top: 0;
  right: 0;
  z-index: 30;
  border: 2px solid #b4b4b4;
  background: #ffffff;
  width: 28%;
  display: flex;
  flex-direction: row;
  flex-direction: column;
  align-items: center;
  height: fit-content;

  & h1 {
    border-bottom: 2px solid #dedede;
    width: 90%;
    height: fit-content;
    font-size: 15px;
    font-weight: 400;
    color: #b4b4b4;
    display: flex;

    & > span {
      color: #0c0a0d;
      font-size: 20px;
      margin-left: auto;
      cursor: pointer;
    }

    & section > {
      & > img {
        width: 50px;
        height: 50px;
      }
    }
  }
  & > button {
    width: 90%;
    background: transparent;
    font-weight: 500;
    height: 30px;
    margin-bottom: 20px;
    margin-top: 20px;
    border: 2px solid #b4b4b4;
    border-radius: 5%;
    cursor: pointer;

    :hover {
      opacity: 50%;
    }
  }
`;

const Esquema = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;

  & > img {
    width: 60px;
    height: 60px;
    position: absolute;
    left: 0;
    top: 5px;
  }

  & > h1 {
    margin-top: 5px;
    width: 70%;
    display: flex;
    margin-left: auto;
    align-items: center;
    font-size: 15px;
    border: none;
    color: #0c0a0d;
    font-weight: 600;

    & > span {
      margin-left: auto;
      font-size: 15px;
      font-weight: 400;
    }
  }

  & > h2 {
    margin-top: 2px;
    width: 70%;
    margin-left: auto;
    font-size: 13px;
    font-weight: 400;
  }

  & > p {
    width: 70%;
    margin-left: auto;
    font-size: 13px;
    font-weight: 400;
  }
`;

export default function PopUp({ product, color, size, amount, setModal }) {
  const { media } = product;
  return (
    <PopContainer>
      <h1>
        You are about to add:
        <span onClick={() => setModal(false)}>
          <CgClose />
        </span>
      </h1>
      <Esquema>
        {media && <img src={media[0].src} alt="product_photo" />}
        <h1>
          {product.title}
          <span> X {amount}</span>
        </h1>
        <h2>Color:{color}</h2>
        <p>Size : {size}</p>
      </Esquema>
      <button onClick={() => setModal(false)}>Confirm</button>
    </PopContainer>
  );
}
