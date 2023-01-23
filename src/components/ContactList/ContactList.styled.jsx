import styled from '@emotion/styled';

export const FilteredList = styled.ul`
  margin: 8px 0 60px;
  text-align: left;
  padding: 0 16px;
  list-style-position: outside;
  min-height: 200px;
`;
export const FilteredListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;

  & img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }

  & p {
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
`;
export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-family: 'Roboto', monospace;
  width: 80px;
  height: 24px;
  background-color: #d6eaed;
  border: 1px solid #efefef;
  border-radius: 6px;
  transition: background-color 350ms linear;
  cursor: poiter;

  &:hover {
    background-color: #8bcad1;
  }
`;
