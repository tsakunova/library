import { FC } from 'react';
import { MenuSVG, SearchSVG, SortAscendingSVG, SquareFourSVG } from 'assets/icons';
import { CircleButton } from 'components/buttons/circle-button';
import { WithIconButton } from 'components/buttons/with-icon-button';
import { SearchInput } from 'components/forms/search-input';
import { TitleVariant, ViewVariant } from 'types/enum';

import { ButtonContainer, Container, DefaultButtonContainer } from './filter-list.style';

type FilterListProps = {
  onViewClick: (type: ViewVariant) => void;
  typeView: ViewVariant;
};

export const FilterList: FC<FilterListProps> = ({ onViewClick, typeView }) => (
  <Container>
    <ButtonContainer isVisibleMobile={false}>
      <SearchInput data-test-id='input-search' />
      <WithIconButton title={TitleVariant.rating} icon={SortAscendingSVG} />
    </ButtonContainer>
    <ButtonContainer isVisibleMobile={true}>
      <CircleButton
        onClick={() => {}}
        type={ViewVariant.search}
        icon={SearchSVG}
        isActive={false}
        data-test-id='button-search-open'
      />
      <CircleButton onClick={() => {}} type={ViewVariant.sortDown} icon={SortAscendingSVG} isActive={false} />
    </ButtonContainer>
    <DefaultButtonContainer>
      <CircleButton
        onClick={onViewClick}
        type={ViewVariant.window}
        icon={SquareFourSVG}
        isActive={typeView === ViewVariant.window}
        testId='button-menu-view-window'
      />
      <CircleButton
        onClick={onViewClick}
        type={ViewVariant.list}
        isActive={typeView === ViewVariant.list}
        icon={MenuSVG}
        testId='button-menu-view-list'
      />
    </DefaultButtonContainer>
  </Container>
);
