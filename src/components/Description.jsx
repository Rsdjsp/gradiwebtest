import React, { useState } from "react";
import styled from "styled-components";
import PopUp from "./PopUp";

const DesciptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProductTitle = styled.section`
  border-bottom: 2px solid #dedede;
  height: fit-content;
  margin-right: 10%;

  & > span {
    font-size: 10px;
    font-weight: 800;
    color: #dedede;
  }

  & > h1 {
    font-size: 22px;
    font-weight: 700;
    color: #0c0a0d;
  }

  & > h2 {
    font-size: 18px;
    font-weight: 600;
    color: #0c0a0d;
    margin-bottom: 20px;

    & > span {
      color: #dedede;
      font-weight: 600;
      font-size: 18px;
      margin-left: 20px;
      text-decoration: line-through;
    }
  }
`;
const ProductColor = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #dedede;
  height: 30px;
  max-height: fit-content;
  margin-right: 10%;
  padding-top: 10px;
  padding-bottom: 10px;

  & > p {
    color: #b4b4b4;
    padding: 0;
    font-size: 15px;
    font-weight: 600;
  }
  & > #color {
    background: transparent;
    border: none;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-left: 5px;
    font-size: 15px;
    cursor: pointer;

    :focus {
      border: 2px solid #000000;
      border-radius: 11%;
    }
    :hover {
      border: 2px solid #000000;
      border-radius: 11%;
    }
  }
`;
const ProductSize = styled.section`
  color: #b4b4b4;
  padding: 0;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 30px;
  margin-right: 10%;
  border-bottom: 2px solid #dedede;
  max-width: 100%;
  max-height: fit-content;

  & > p {
    color: #b4b4b4;
    padding: 0;
    font-size: 15px;
    font-weight: 600;
  }

  @media (max-width: 970px) {
    height: fit-content;
  }
`;
const Payment = styled.section`
  display: flex;
  margin-right: 10%;
  text-align: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  & > #total {
    border: none;
    width: fit-content;
    padding-top: 5px;
    color: #b4b4b4;
    margin-left: auto;
    font-size: 16px;

    & > span {
      font-weight: bold;
      color: #0c0a0d;
    }
  }
`;

const Counter = styled.div`
  border: 2px solid #b4b4b4;
  width: fit-content;
  display: flex;

  & > button {
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    font-size: 20px;
  }

  & > #count {
    padding-top: 5px;
    height: 30px;
    width: 30px;
  }
`;

const FormButtons = styled.div`
  margin-right: 10%;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  font-size: 16px;

  & > #favorite {
    width: 50%;
    background: #dedede;
    border: none;
    cursor: pointer;
    color: #0c0a0d;
    height: 40px;

    :hover {
      opacity: 0.5;
    }

    @media (max-width: 650px) {
      width: 100%;
    }
  }

  & > #cart {
    width: 50%;
    height: 40px;
    background: #0c0a0d;
    border: none;
    color: #dedede;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }

    @media (max-width: 650px) {
      width: 100%;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const SizeContainer = styled.article`
  display: flex;
  & > #size {
    border: 2px solid #b4b4b4;
    background: transparent;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;

    :focus {
      border: 2px solid #000000;
      border-radius: 11%;
    }
    :hover {
      border: 2px solid #000000;
      border-radius: 11%;
    }
  }

  @media (max-width: 970px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 10px;
    row-gap: 10px;
  }
`;

const ProducDesc = styled.article`
  font-size: 10px;
  margin-right: 10%;
`;

export default function Description({ product }) {
  const [onColor, setOnColor] = useState("Red");
  const [onSize, setOnSize] = useState("9");
  const [amount, setAmount] = useState(1);
  const [modal, setModal] = useState(false);
  const { options } = product;
  const { values: colors } = options
    ? options.find((option) => option.name === "Color")
    : {};
  const { values: sizes } = options
    ? options.find((option) => option.name === "Size")
    : {};

  const addToCart = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <DesciptionContainer>
        <ProductTitle>
          <span>by Nike x ALYX</span>
          <h1>{product.title}</h1>
          <h2>
            $ {product.price / 100 + ".00"}
            <span>$ {product.compare_at_price_max / 100 + ".00"}</span>
          </h2>
        </ProductTitle>
        <form onSubmit={addToCart}>
          <ProductColor>
            <p>Colors:</p>
            {colors &&
              colors.map((color) => {
                return (
                  <input
                    key={color}
                    type="button"
                    value={color}
                    id="color"
                    name="color"
                    onClick={() => setOnColor(color)}
                    style={{
                      border: `${
                        onColor === color
                          ? "2px solid #000000"
                          : "2px solid #b4b4b4"
                      }`,
                    }}
                  />
                );
              })}
          </ProductColor>
          <ProductSize>
            <p>Sizes:</p>
            <SizeContainer>
              {sizes &&
                sizes.map((sizes) => {
                  return (
                    <input
                      key={sizes}
                      type="button"
                      value={sizes}
                      id="size"
                      name="sltdSizes"
                      onClick={() => setOnSize(sizes)}
                      style={{
                        border: `${
                          onSize === sizes
                            ? "2px solid #000000"
                            : "2px solid #b4b4b4"
                        }`,
                      }}
                    />
                  );
                })}
            </SizeContainer>
          </ProductSize>
          <Payment>
            <Counter>
              <button
                id="minus"
                onClick={(e) => {
                  e.preventDefault();
                  setAmount(amount - 1 < 0 ? 0 : amount - 1);
                }}
              >
                -
              </button>
              <p id="count">{amount}</p>
              <button
                id="pluss"
                onClick={(e) => {
                  e.preventDefault();
                  setAmount(amount + 1);
                }}
              >
                +
              </button>
            </Counter>
            <p id="total">
              Total price
              <span> ${(product.price / 100) * amount + ".00"}</span>
            </p>
          </Payment>
          <FormButtons>
            <button id="favorite" onClick={(e) => e.preventDefault()}>
              Add to favorites
            </button>
            <button id="cart" onClick={() => setModal(true)}>
              Add to cart
            </button>
          </FormButtons>
          <ProducDesc
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></ProducDesc>
        </form>
      </DesciptionContainer>
      {modal && (
        <PopUp
          product={product}
          color={onColor}
          size={onSize}
          amount={amount}
          modal={modal}
          setModal={setModal}
        />
      )}
    </>
  );
}
