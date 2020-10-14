import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
`;

export const CreateOrphanageButton = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;

  transition: background-color 0.4s;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;

  &:hover {
    cursor: pointer;
    background: ${shade(0.4, '#17d6eb')};
  }
`;
