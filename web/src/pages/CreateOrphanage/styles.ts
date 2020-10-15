import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const MainContainer = styled.main`
  flex: 1;

  form {
    width: 700px;
    margin: 64px auto;

    background: #ffffff;
    border: 1px solid #d3e2e5;
    border-radius: 20px;

    padding: 64px 80px;

    overflow: hidden;

    fieldset {
      border: 0;

      & + fieldset {
        margin-top: 80px;
      }

      legend {
        width: 100%;

        font-size: 32px;
        line-height: 34px;
        color: #5c8599;
        font-weight: 700;

        border-bottom: 1px solid #d3e2e5;
        margin-bottom: 40px;
        padding-bottom: 24px;
      }
    }
  }
`;

export const InputBlock = styled.div`
  & + .input-block {
    margin-top: 24px;
  }

  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: #8fa7b3;
      margin-left: 24px;
      line-height: 24px;
    }
  }

  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;

    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }

  input {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;

    height: 64px;
    padding: 0 16px;
  }
`;

export const AddImg = styled.button`
  width: 100%;
  height: 64px;
  background: #f5f8fa;
  border: 1px dashed #96d2f0;
  border-radius: 20px;

  transition: background-color 0.4s;
  outline: none;

  &:hover {
    cursor: pointer;
    background: ${shade(0.1, '#f5f8fa')};
  }
`;

export const YesButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    height: 64px;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    color: #5c8599;

    outline: none;
    cursor: pointer;

    &:first-child {
      border-radius: 20px 0px 0px 20px;
    }
    &:last-child {
      border-radius: 0 20px 20px 0;
      border-left: 0;
    }
  }
  .active {
    background: #edfff6;
    border: 1px solid #a1e9c5;
    color: #37c77f;
  }
`;

export const ConfirmButton = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3cdc8c;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  transition: background-color 0.2s;

  svg {
    margin-right: 16px;
  }

  &:hover {
    background: ${shade(0.2, '#3cdc8c')};
  }
`;
