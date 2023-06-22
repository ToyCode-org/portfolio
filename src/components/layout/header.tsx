import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { LinkMouseEvent, NavMouseEvent } from ".";
import { publicImage } from "../../util/publicimage";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const mkHeaderItems = (link: string, item: string) => {
  return {
    link,
    item,
  };
};
const headerItems = [
  mkHeaderItems("/", "Home"),
  mkHeaderItems("/portfolio", "Portfolio"),
  mkHeaderItems("https://github.com/LEE-YO-HAN", "Github"),
  mkHeaderItems("https://lee-yo-han.github.io", "Blog"),
];

export const Header = () => {
  const { pathname } = useLocation();
  const { scrollPosition } = useScrollPosition();
  const [navHover, setNavHover] = useState({
    width: 0,
    height: 0,
    x: 0,
    isHover: false,
  });
  const navHoverHandler = (
    e: LinkMouseEvent | NavMouseEvent,
    isHover: boolean
  ) => {
    const target = e.target as HTMLElement;
    const { width, height, x } = target.getBoundingClientRect();
    if (isHover)
      return setNavHover((prev) => ({ ...prev, width, height, x, isHover }));
    setNavHover((prev) => ({ ...prev, isHover }));
  };

  const goScrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    goScrollTop();
  }, [pathname]);

  return (
    <>
      <HeaderWrap>
        <HeaderTop style={scrollPosition === 0 ? {} : { height: "0px" }}>
          <Logo src={`${publicImage("simplelogo")}`} alt="logo" />
          <h1>John's Profile</h1>
        </HeaderTop>
        <NavBar onMouseLeave={(e) => navHoverHandler(e, false)}>
          <NavHover
            area-hidden="true"
            style={
              navHover.isHover
                ? {
                    opacity: "1",
                    width: `${navHover.width}px`,
                    height: `${(navHover.height * 2) / 3}px`,
                    top: `${scrollPosition === 0 ? 74 : 24}px`,
                    transform: `translateX(${navHover.x}px)`,
                  }
                : { opacity: "0" }
            }
          />
          <NavUnderbar
            area-hidden="true"
            style={
              navHover.isHover
                ? {
                    opacity: "1",
                    width: `${navHover.width}px`,
                    height: `${navHover.height}px`,
                    top: `${scrollPosition === 0 ? 64 : 14}px`,
                    transform: `translateX(${navHover.x}px)`,
                  }
                : { opacity: "1" }
            }
          />
          {headerItems.map((el, index) => {
            return (
              <NavList
                to={el.link}
                key={index}
                target={
                  el.item === "Github" || el.item === "Blog"
                    ? "_blank"
                    : "_self"
                }
                disable={`${pathname !== el.link}`}
                onMouseEnter={(e) => navHoverHandler(e, true)}
              >
                {el.item}
              </NavList>
            );
          })}
        </NavBar>
      </HeaderWrap>
    </>
  );
};

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  z-index: 99;
`;

const HeaderTop = styled.div`
  padding: 0 24px;
  padding-top: 14px;
  display: flex;
  height: 50px;
  overflow: hidden;
  transition: 0.3s;
`;
const Logo = styled.img`
  margin-right: 20px;
  border-radius: 50px;
  cursor: pointer;
`;

const NavBar = styled.nav`
  padding: 0 20px;
  display: flex;
  align-items: center;
  box-shadow: inset 0 -1px ${(props) => props.theme.boxShadow};
`;

const NavList = styled(Link)<{ disable: string }>`
  position: relative;
  padding: 16px 12px;
  color: ${(props) => {
    if (props.disable === "true") return props.theme.disableColor;
    return props.theme.mainFontColor;
  }};
  border-bottom: ${(props) => {
    if (props.disable === "false")
      return `2px solid ${props.theme.mainFontColor}`;
  }};
  font-weight: bold;
  transition: 0.2s;
  user-select: none;
  z-index: 1;
  &:hover {
    color: ${(props) => props.theme.mainFontColor};
  }
`;

const NavHover = styled.div`
  position: absolute;
  left: 0px;
  background-color: #8b8b8b76;
  transition: 0.2s;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  z-index: 0;
`;

const NavUnderbar = styled.div`
  position: absolute;
  left: 0px;
  border-bottom: 2px solid ${(props) => props.theme.mainFontColor};
  transition: 0.2s;
  user-select: none;
  cursor: pointer;
  z-index: 0;
`;
