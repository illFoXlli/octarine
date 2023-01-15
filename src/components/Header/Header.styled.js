import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0px;
  z-index: 100;

  margin-left: auto;
  margin-right: auto;
  background: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* outline: 1px solid red; */
  width: 1600px;
`;

export const Wrapper = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`;
