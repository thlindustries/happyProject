import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;

  .map-popup {
    .leaflet-popup-content-wrapper {
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border-radius: 20px;
    }
    .leaflet-popup-content {
      color: #0089a5;
      font-size: 20px;
      font-weight: bold;
      margin: 8px 12px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        width: 40px;
        height: 40px;
        background: #15c3d6;

        box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 12px;
        transition: background-color 0.4s;

        &:hover {
          background: ${shade(0.4, '#15c3d6')};
        }
      }
    }
    .leaflet-popup-tip-container {
      display: none;
    }
  }
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
