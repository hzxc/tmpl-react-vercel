import styled from '@emotion/styled';
import { Button, Dropdown, Menu } from 'antd';
import { Row } from 'components/lib';

export const PanLink = styled(Button)`
  color: rgb(118, 69, 217);
  font-weight: 600;
`;

export const PanDropdown = styled(Dropdown)``;

export const PanMenu = styled(Menu)`
  /* color: rgb(140, 110, 170); */
  font-weight: 500;
  border-bottom: none;

  > .pancake-menu-submenu-active:hover {
    background: rgb(239, 244, 245);
    /* cursor: pointer; */
  }

  > .pancake-menu-submenu {
    border-radius: 2rem;
    /* background: rgb(239, 244, 245); */
  }

  /* > * > .pancake-menu-vertical > .pancake-menu-item {
    font-weight: 600 !important;
  } */

  /* > * .pancake-menu-horizontal:not(.pancake-menu-dark) > .pancake-menu-item:hover::after,
  .pancake-menu-submenu:hover::after,
  .pancake-menu-item-active::after,
  .pancake-menu-submenu-active::after,
  .pancake-menu-item-open::after,
  .pancake-menu-submenu-open::after,
  .pancake-menu-item-selected::after,
  .pancake-menu-submenu-selected::after {
    border-bottom: unset !important;
  } */

  /* > .pancake-menu-item:hover::after,
  .pancake-menu-submenu:hover::after,
  .pancake-menu-item-active::after,
  .pancake-menu-submenu-active::after,
  .pancake-menu-item-open::after,
  .pancake-menu-submenu-open::after,
  .pancake-menu-item-selected::after,
  .pancake-menu-submenu-selected::after {
    border-bottom: none !important;
  } */

  /* > .pancake-menu-item:hover,
  .pancake-menu-submenu:hover,
  .pancake-menu-item-active,
  .pancake-menu-submenu-active,
  .pancake-menu-item-open,
  .pancake-menu-submenu-open,
  .pancake-menu-item-selected,
  .pancake-menu-submenu-selected {
    border-bottom: initial !important;
  } */

  /* > .pancake-menu-item-selected,
  .pancake-menu-submenu-selected {
    font-weight: bold;
  } */
  /*
  > .pancake-menu-light > .pancake-menu-item:hover,
  .pancake-menu-item-active,
  .pancake-menu:not(.pancake-menu-inline) .pancake-menu-submenu-open,
  .pancake-menu-submenu-title:hover,
  .pancake-menu-submenu-active {
    color: rgb(118, 69, 217) !important;
  } */
`;

export const Nav = styled.div`
  width: 34rem;
  /* > * > .pancake-menu-title-content {
    font-weight: 600;
  } */
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 5.6rem 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'main';
  height: 100vh;
`;

export const Header = styled(Row)`
  grid-area: header;
  align-items: center;
  padding: 0rem 1.6rem;
  /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1); */
  border-bottom: 1px solid rgb(231, 227, 235);
  /* background-color: antiquewhite; */
  /* z-index: 1; */
  /* background-color: rgb(255, 255, 255); */
`;
export const HeaderLeft = styled(Row)`
  /* background-color: azure; */
`;
export const HeaderRight = styled(Row)`
  /* background-color: royalblue; */
`;
export const Main = styled.main`
  grid-area: main;
  /* background-color: aliceblue; */
  /* display: flex;
flex-direction: column;
overflow: hidden;
align-items: center; */
`;
