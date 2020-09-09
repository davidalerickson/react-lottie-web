import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  .menuBox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: black;
    z-index: 10;
  }
  .menu {
    display: flex;
    justify-items: center;
  }
  .item {
    padding: 1rem 2rem;
    color: white;
    font-size: 1.6rem;
    text-decoration: none;
    @media only screen and (max-width: 56.25em) {
      font-size: 1.2rem;
      padding: 0.8rem 1.6rem;
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <div className="menuBox">
        <div className="menu">
          <Link className="item" to="/">
            Home
          </Link>
          <Link className="item" to="/Animation">
            Animation
          </Link>
          <Link className="item" to="/AnimationSequences">
            Sequences
          </Link>
          <Link className="item" to="/FullPage">
            Full Page
          </Link>
          <Link className="item" to="/Scroll">
            Scroll
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
