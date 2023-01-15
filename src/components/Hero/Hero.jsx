import {
  Age,
  Button,
  ButtonMore,
  Img,
  ImgWrapper,
  Rating,
  Rectangle,
  Star,
  Text,
  Time,
  Title,
  Wrapper,
  WrapperAge,
  WrapperButton,
  WrapperInfo,
  WrapperTwoAge,
  Year,
  Сontext,
} from './Hero.styled';
import img from '../../images/hero/hero.jpg';
import icon from '../../images/hero/star.svg';
import play from '../../images/hero/sprite.svg';

const Hero = () => {
  return (
    <>
      <Wrapper id="home">
        <Сontext>
          <Title>Zack Snyder's Justice League</Title>
          <WrapperInfo>
            <Year>2021</Year>
            <WrapperAge>
              <WrapperTwoAge>
                <Age>18+</Age>
              </WrapperTwoAge>
            </WrapperAge>
            <Time>4h 2min</Time>
            <Rating>8.8</Rating>
            <Star src={icon}></Star>
          </WrapperInfo>
          <Text>
            Determined to ensure Superman's ultimate sacrifice was not in vain,
            Bruce Wayne aligns forces with Diana Prince with plans to recruit a
            team of metahumans to protect the world from an approaching threat
            of catastrophic proportions.
          </Text>
          <WrapperButton>
            <Button type="button">
              <svg width="14px" height="18px">
                <use href={`${play}#play`}></use>
              </svg>
              Watch
            </Button>
            <ButtonMore>More information</ButtonMore>
          </WrapperButton>
        </Сontext>
        <ImgWrapper>
          <Img src={img} alt="фото" height="764px" />
        </ImgWrapper>
      </Wrapper>
      <Rectangle />
    </>
  );
};

export default Hero;
