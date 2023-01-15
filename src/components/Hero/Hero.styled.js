import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  &#home {
    padding-top: 100px;
    margin-top: -100px;
    -webkit-background-clip: content-box;
    background-clip: content-box;
  }
`;
export const Сontext = styled.div`
  background: #010101;
  box-shadow: 100px 0px 100px #000000;
  z-index: 10;
`;

export const Title = styled.h1`
  font-family: 'Marcellus';
  font-weight: 400;
  font-size: 80px;
  line-height: calc(80 / 70);
  color: #ffffff;
  margin-top: 121px;
  margin-bottom: 39px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-bottom: 31px;
`;

export const Year = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: calc(16 / 10);
  color: #ffffff;
  margin: 0;
  margin-right: 18px;
`;

export const Age = styled.p`
  display: block;
  font-weight: 800;
  font-size: 16px;
  line-height: calc(16 / 12);
  color: #ffffff;

  margin: 0;
`;

export const WrapperAge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 24px;
  border-radius: 50px;

  box-sizing: border-box;
  background: #fff;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);

  margin-right: 18px;
`;

export const WrapperTwoAge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 57px;
  height: 21px;
  border-radius: 50px;

  box-sizing: border-box;
  background: #fff;
  background-clip: padding-box, border-box;
  background-color: black;
`;

export const Time = styled.p`
  display: inline-block;
  font-weight: 800;
  font-size: 16px;
  line-height: (16 / 10);
  color: #ffffff;
  margin: 0;
  margin-right: 42px;
`;

export const Rating = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: (16 / 10);
  color: #ffffff;
  margin: 0;
  margin-right: 12px;
`;

export const Star = styled.img`
  display: block;
  width: 16px;
  height: 16px;
`;

export const Text = styled.h1`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  width: 507px;

  color: #c2c2c2;

  margin: 0;
  padding: 0;
  margin-bottom: 35px;
`;

export const ImgWrapper = styled.div`
  width: 955px;
  background-color: grey;
`;

export const Img = styled.img`
  display: block;
  border: 0px solid;
  width: 955px;
`;

export const WrapperButton = styled.div`
  display: flex;
  gap: 30px;
`;
export const Button = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding: 15px 30px;
  border: 0;

  box-shadow: 0px 4px 50px rgba(50, 108, 255, 0.5);
  border-radius: 100px;
  cursor: pointer;
  background-image: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);

  transition-property: box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  :focus,
  :hover {
    box-shadow: 0px 3px 20px 1px #26fff2;
    background-image: linear-gradient(316.53deg, #326cff 13.2%, #26fff2 71.54%);
  }
  :active {
    transition: 100ms cubic-bezier(0.43, 0.21, 0, 1.03);
    transform: translateY(2px);
  }
`;

export const ButtonMore = styled.a`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #323232;
  padding: 15px 30px;
  border: 0;
  /* background-color: #ffffff; */
  box-shadow: 0px 4px 50px rgba(50, 108, 255, 0.5);
  border-radius: 100px;
  cursor: pointer;
  background-image: linear-gradient(316.53deg, #ffffff 13.2%, #ffffff 71.54%);

  transition-property: box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
  :focus,
  :hover {
    box-shadow: 0px 3px 20px 1px #26fff2;
    background-image: linear-gradient(316.53deg, #ffffff 13.2%, #ffffff 71.54%);
  }
  :active {
    transition: 100ms cubic-bezier(0.43, 0.21, 0, 1.03);
    transform: translateY(2px);
  }
`;

export const Rectangle = styled.div`
  width: 1600px;
  height: 2px;
  background-color: #2f2e2e;
  margin-left: -80px;
`;
