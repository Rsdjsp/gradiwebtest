import { React, useState } from "react";
import styled from "styled-components";
import { BsChevronCompactRight } from "react-icons/bs";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  @media (max-width: 520px) {
    width: 100;
    padding-right: 10%;
    display: flex;
  }
`;
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  max-width: 80%;
  position: relative;
  @media (max-width: 520px) {
    width: 100%;
    display: flex;
  }
`;
const FrontPage = styled.img`
  width: 100%;
  max-width: 100%;
  margin-top: 0;

  @media (max-width: 520px) {
    margin-left: auto;
    margin-top: auto;
  }
`;
const NextButton = styled.button`
  position: absolute;
  top: 0;
  right: 0px;
  height: 100%;
  width: 6%;
  background: transparent;
  color: transparent;
  cursor: pointer;
  border: none;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    color: #aaaaaa;
  }
`;

const Images = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  max-width: 80%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 20px;

  @media (max-width: 970px) {
    margin-top: 20px;
    gap: 15px;
    width: 20%;
  }
`;

const ChangeButton = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 1%;
  padding: 0;
  cursor: pointer;
  :hover {
    border: 3px solid #3a3a3a;
  }
  :focus {
    border: 3px solid #3a3a3a;
  }

  & > img {
    width: 100%;
    @media (max-width: 970px) {
      opacity: 0;
    }
  }

  @media (max-width: 970px) {
    background: #aaaaaa;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function Carrousel({ product }) {
  const [counter, setCounter] = useState(0);
  const { media } = product;

  const next = () => {
    if (media) {
      setCounter(counter + 1);
      if (counter >= media.length - 1) {
        setCounter(0);
      }
    }
  };

  const changeImg = (index) => {
    if (index !== counter) {
      setCounter(index);
    }
  };

  return (
    <MainContainer>
      <Container>
        {media && (
          <FrontPage
            src={media[counter].src}
            alt="frontPage"
            autoFocus={counter === 0 ? true : false}
          />
        )}
        <NextButton onClick={next}>
          <BsChevronCompactRight />
        </NextButton>
      </Container>
      <Images>
        {media &&
          media.map((image, index) => {
            return (
              <ChangeButton
                key={image.id}
                onMouseEnter={() => changeImg(index)}
              >
                <img src={image.src} alt="roller" />
              </ChangeButton>
            );
          })}
      </Images>
    </MainContainer>
  );
}
