// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav``;

export const ListNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  gap: 54px;
`;

export const ItemNav = styled.li`
  display: flex;
  list-style: none;
  position: relative;
`;

export const LinkItemNav = styled.a`
  display: inline-flex;

  align-items: center;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: (20 / 16);
  text-decoration: none;

  transition-property: color transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: #ffffff;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    font-weight: 800;
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;

      display: block;

      width: 100%;
      height: 2px;
      background: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);
      border-radius: 50px;
      transition-property: opacity;
      transition-duration: 250ms;
      transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
    }
  }
  :focus-visible:not(.active),
  :hover:not(.active) {
    opacity: 1;
    font-weight: 800;
  }
`;
