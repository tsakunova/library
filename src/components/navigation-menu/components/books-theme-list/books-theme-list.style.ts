import styled from 'styled-components';

export const BooksList = styled.ul<{ isListOpen: boolean }>`
  display: ${(props) => (props.isListOpen ? 'block' : 'none')};
  padding: 0 5px 0 20px;
  margin-top: 25px;
  & ul {
    padding-left: 5px;
    margin-top: ${(props) => `${props.theme.size.default}px`};
  }
`;
