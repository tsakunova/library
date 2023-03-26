import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: ${(props) => props.theme.color.shadow.card};
  border-radius: 10px;
  padding: 8px 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const BookImage = styled.div`
  background-color: ${(props) => props.theme.color.grey.black5};
  border: ${(props) => `1px solid ${props.theme.color.grey.black40}`};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: auto;
    width: 100%;
  }
`;

export const BookingOverdueContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.color.main.alertBg};
  backdrop-filter: blur(10px);
  padding: ${(props) => `${props.theme.size.default}px `};
`;

export const DateOfReturn = styled.button`
  background: none;
  outline: none;
  border: none;
  font: ${(props) => props.theme.fonts.buttonLarge};
  color: ${(props) => props.theme.color.main.accent};
`;
