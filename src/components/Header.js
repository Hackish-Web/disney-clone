import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/disney-clone-files/images/logo.svg"></Logo>
      <NavMenu>
        <a href="/">
          <img src="/disney-clone-files/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>

        <a href="/">
          <img src="/disney-clone-files/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>

        <a href="/">
          <img src="/disney-clone-files/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>

        <a href="/">
          <img src="/disney-clone-files/images/original-icon.svg" alt="" />
          <span>ORIGINAL</span>
        </a>

        <a href="/">
          <img src="/disney-clone-files/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>

        <a href="/">
          <img src="/disney-clone-files/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImg src="https://lh3.googleusercontent.com/ogw/ADea4I6xrAERiuZaPADvxBOZ_TiYcpKRd2rXRWj-H6Pq=s32-c-mo" />
    </Nav>
  );
}

export default Header;
const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
