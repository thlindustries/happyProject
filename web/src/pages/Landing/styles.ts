import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/imgs/bgLanding.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.53deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;

  position: relative;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${bgImg}) no-repeat 80% center;
`;

export const MainTitle = styled.h1`
  max-width: 350px;
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`;

export const MainDescription = styled.p`
  max-width: 350px;
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const Button = styled(Link)`
  position: absolute;

  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;

  background: #ffdd66;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.4s;
  text-decoration: none;

  &:hover {
    background: ${shade(0.4, '#96FEFF')};
    cursor: pointer;
  }
`;
