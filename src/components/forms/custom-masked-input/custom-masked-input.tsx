import { FC } from 'react';
import { Control, Controller, FieldErrors, FieldValues, UseFormWatch } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { UserAPIFields, ValidationErrors } from 'enums';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { FORM_INPUT_TEXT, PHONE_MASK, registerStepThreeValidation } from 'pages/auth/const';
import { UserFormType } from 'store/utils/types';

import {
  Container,
  InputContainer,
  InputLabel,
  InputLine,
  InputWithDynamicalLabel,
  LabelIntroInput,
} from './custom-masked-input.style';

type CustomInputProps = {
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
};

const inputStyles = { backgroundColor: 'transparent', border: 'none', outline: 'none' };

export const CustomMaskedInput: FC<CustomInputProps> = ({ watch, errors, control }) => {
  const watchField = watch(UserAPIFields.phone);
  const { userForm } = useTypedSelector(({ utils }) => utils);
  const isProfile = userForm?.type === UserFormType.edit;
  const isDisabled = isProfile && !userForm.isDisabled;
  const isRequired = !isProfile;
  const isShowLabel = !userForm || (isProfile && userForm?.isDisabled);

  const isError = isProfile
    ? !!watchField && errors[UserAPIFields.phone]?.type === 'isValidValue'
    : !!errors[UserAPIFields.phone];

  return (
    <Container>
      <InputContainer isIntroLabel={!!watchField}>
        <InputWithDynamicalLabel>
          {watchField && <LabelIntroInput>{FORM_INPUT_TEXT.regPhone.placeholder}</LabelIntroInput>}
          <Controller
            control={control}
            name={UserAPIFields.phone}
            rules={{
              required: isRequired,
              validate: registerStepThreeValidation.phone,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <MaskedInput
                name={UserAPIFields.phone}
                mask={PHONE_MASK}
                disabled={isDisabled}
                value={value}
                style={inputStyles}
                keepCharPositions={true}
                placeholder={FORM_INPUT_TEXT.regPhone.placeholder}
                placeholderChar='x'
                onChange={onChange}
                onBlur={onBlur}
                required={isRequired}
              />
            )}
          />
        </InputWithDynamicalLabel>
      </InputContainer>
      <InputLine isError={isError} />

      {isShowLabel && (
        <InputLabel data-test-id='hint' isError={isError}>
          {errors[UserAPIFields.phone]?.type === 'required'
            ? ValidationErrors.emptyField
            : FORM_INPUT_TEXT.regPhone.label}
        </InputLabel>
      )}
    </Container>
  );
};
