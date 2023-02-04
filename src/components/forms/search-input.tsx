import { FC, useRef, useState } from 'react';
import { CloseSVG, SearchSVG } from 'assets/icons';
import { devices } from 'consts';
import styled from 'styled-components';
import { TitleVariant } from 'types/enum';

const SearchInputContainer = styled.div`
  width: 350px;
  padding: ${(props) => props.theme.size.button.paddingS};
  position: relative;
  border-radius: ${(props) => props.theme.size.button.borderRadius};
  box-shadow: ${(props) => props.theme.color.shadow.card};
  @media ${devices.tablet} {
    width: 274px;
  }
  & input {
    width: 100%;
    height: 100%;
    outline: none;
    font: ${(props) => props.theme.fonts.bodySmall};
    letter-spacing: 0, 1px;
    border: none;
    padding-left: 25px;
    &:focus {
      & ~ .searchIcon {
        path {
          fill: ${(props) => props.theme.color.main.accent};
        }
      }
    }
  }
  & .searchIcon {
    position: absolute;
    top: 10px;
    left: ${(props) => `${props.theme.size.default}px`};
    width: ${(props) => `${props.theme.size.default}px`};
    height: ${(props) => `${props.theme.size.default}px`};
    path {
      fill: ${(props) => props.theme.color.grey.black40};
    }
  }
  & .searchCancelIcon {
    position: absolute;
    top: 10px;
    right: ${(props) => `${props.theme.size.default}px`};
    width: ${(props) => `${props.theme.size.default}px`};
    height: ${(props) => `${props.theme.size.default}px`};
    path {
      fill: ${(props) => props.theme.color.main.accent};
    }
  }
  &:hover {
    border: ${(props) => `1px solid ${props.theme.color.main.hover}`};
    box-shadow: ${(props) => props.theme.color.shadow.button};
  }
`;

export const SearchInput: FC = () => {
  const [currentValue, setCurrentValue] = useState('');
  const searchInputRef = useRef<any>(null);
  const [blur, setBlur] = useState(true);

  const changeText = (event: any) => {
    setCurrentValue(event.target.value);
  };

  return (
    <SearchInputContainer>
      <input
        onChange={changeText}
        ref={searchInputRef}
        value={currentValue}
        type='text'
        onFocus={() => setBlur(false)}
        onBlur={() => setBlur(true)}
        placeholder={TitleVariant.searchPlaceholder}
      />
      <SearchSVG className='searchIcon' />
      {!blur && <CloseSVG className='searchCancelIcon' />}
    </SearchInputContainer>
  );
};
