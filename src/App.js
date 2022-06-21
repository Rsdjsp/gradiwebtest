import "./";
import axios from "axios";
import { React, useEffect, useState } from "react";
import Carrousel from "./components/Carrousel";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Description from "./components/Description";

const Home = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    align-items: center;
    justify-content: center;
    padding-left: 10%;
  }
`;

const Title = styled.h1`
  font-size: 12px;
  font-weight: 800;
  padding-top: 70px;
  color: #dedede;
  margin-left: 6%;
  margin-bottom: 15px;

  & > span {
    font-weight: 900;
    color: #616161;
  }
`;

export default function App() {
  const [product, setProduct] = useState({});
  /**
   * [Fecth data]
   *
   * @return  {Object}  [Prouct data]
   */
  useEffect(() => {
    axios
      .get(
        "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
      )
      .then(({ data }) => setProduct(data));
  }, []);

  return (
    <>
      <Navbar />
      <Title>
        Catalog / Snakers / <span>{product.title}</span>{" "}
      </Title>
      <Home>
        <Carrousel product={product} />
        <Description product={product} />
      </Home>
    </>
  );
}
