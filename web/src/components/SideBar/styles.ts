import styled from 'styled-components';

export const ContainerLanding = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 62px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }

  footer {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    strong {
      font-weight: 800;
    }
  }
`;

export const ContainerPages = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 48px;
  }

  footer {
    a,
    button {
      width: 48px;
      height: 48px;

      border: 0;

      background: #12afcb;
      border-radius: 16px;

      cursor: pointer;

      transition: background-color 0.4s;

      display: flex;
      justify-content: center;
      align-items: center;
      outline: none;

      &:hover {
        background: #17d6eb;
      }
    }
  }
`;
