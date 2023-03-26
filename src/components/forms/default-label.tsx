import { FC } from 'react';
import { ValidationErrors } from 'enums';
import { HintErrorSpan } from 'pages/auth/auth.style';

export const DefaultLabel: FC<{ isEmptyBluredLabel: boolean; label: string }> = ({ isEmptyBluredLabel, label }) =>
  isEmptyBluredLabel ? (
    <HintErrorSpan isError={true}>{ValidationErrors.emptyField}</HintErrorSpan>
  ) : (
    <HintErrorSpan isError={false}>{label}</HintErrorSpan>
  );
