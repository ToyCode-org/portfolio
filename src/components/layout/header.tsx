import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { LinkMouseEvent, NavMouseEvent } from ".";

const mkHeaderItems = (link: string, item: string) => {
  return {
    link,
    item,
  };
};
const headerItems = [
  mkHeaderItems("/", "Home"),
  mkHeaderItems("/portfolio", "portfolio"),
  mkHeaderItems("https://github.com/LEE-YO-HAN", "Github"),
  mkHeaderItems("https://lee-yo-han.github.io", "Blog"),
];

export const Header = () => {
  const { pathname } = useLocation();

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

  return (
    <>
      <HeaderWrap>
        <HeaderTop></HeaderTop>
        <NavBar onMouseLeave={(e) => navHoverHandler(e, false)}>
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
      <NavHover
        area-hidden="true"
        style={
          navHover.isHover
            ? {
                opacity: "1",
                width: `${navHover.width}px`,
                height: `${navHover.height}px`,
                transform: `translateX(${navHover.x}px)`,
              }
            : { opacity: "0" }
        }
      />
    </>
  );
};

const HeaderWrap = styled.header`
  background-color: ${(props) => props.theme.backgroundColor};
`;

const HeaderTop = styled.div`
  height: 64px;
`;
const NavBar = styled.nav`
  padding: 0 20px;
  display: flex;
  align-items: center;
  box-shadow: inset 0 -1px ${(props) => props.theme.boxShadow};
`;

const NavList = styled(Link)<{ disable: string }>`
  padding: 16px 12px;
  color: ${(props) => {
    if (props.disable === "true") return props.theme.disableColor;
    return props.theme.mainFontColor;
  }};
  font-weight: bold;
  transition: 0.2s;
  user-select: none;
`;

const NavHover = styled.div`
  position: absolute;
  top: 63px;
  background-color: #8b8b8b76;
  transition: 0.2s;
  user-select: none;
  cursor: pointer;
  /* z-index: -1; */
`;
