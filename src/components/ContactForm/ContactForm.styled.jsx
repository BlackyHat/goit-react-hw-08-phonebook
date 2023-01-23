import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormBetter = styled(Form)`
  display: flex;
  flex-direction: column;
  color: #0091a1;
  gap: 16px;
  font-family: 'Roboto', sans-serif;
  padding: 12px;
  border: 1px solid lightgrey;

  & label {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    font-size: 16px;
    gap: 4px;
    & div {
      color: red;
      font-size: 12px;
      position: absolute;
      bottom: -16px;
      left: 0;
    }
  }

  & input {
    width: 50%;
  }
  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 28px;
    gap: 8px;
    background-color: #d6eaed;
    border: 1px solid #efefef;
    border-radius: 6px;
    transition: background-color 350ms linear;
    cursor: poiter;
    font-weight: 500;

    &:hover {
      background-color: #8bcad1;
    }
  }
`;
