import { FC, Fragment, useCallback } from 'react';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CustomInput } from 'components/forms/custom-input';
import { InputLabel } from 'components/forms/custom-input/custom-input.style';
import { DefaultLabel } from 'components/forms/default-label';
import { UserAPIFields, ValidationErrors } from 'enums';
import { useIsBlurWithValidation } from 'hooks/use-is-blur-with-validation';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ContainerInputWithLabel, HintErrorSpan } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT, registerStepOneValidation } from 'pages/auth/const';
import { UserFormType } from 'store/utils/types';

export const InputPassword: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  onBlur?: (value: boolean) => void;
}> = ({ errors, watch, register, clearErrors, onBlur = () => {} }) => {
  const { isBlur, setIsBlur, isEmptyBluredLabel, watchField } = useIsBlurWithValidation(
    UserAPIFields.password,
    true,
    watch,
    errors
  );

  const { userForm } = useTypedSelector(({ utils }) => utils);
  const isProfile = userForm?.type === UserFormType.edit;
  const isShowLabel = !userForm || (isProfile && userForm?.isDisabled);

  const onBlurHandler = useCallback(
    (value: boolean) => {
      setIsBlur(value);
      onBlur(value);
    },
    [onBlur, setIsBlur]
  );

  const errorInProfile =
    (!isBlur && !!errors[UserAPIFields.password]) ||
    errors[UserAPIFields.password]?.type === 'required' ||
    (isBlur && !watchField);

  const isError = isProfile ? errorInProfile : isEmptyBluredLabel;

  return (
    <ContainerInputWithLabel>
      <CustomInput
        name={UserAPIFields.password}
        placeholder={FORM_INPUT_TEXT.regPass.placeholder}
        type='password'
        required={true}
        register={register}
        validation={registerStepOneValidation.password}
        watch={watch}
        errors={errors}
        setIsBlur={onBlurHandler}
        clearErrors={clearErrors}
      />

      {isShowLabel && (
        <InputLabel data-test-id='hint' isError={isEmptyBluredLabel}>
          {errors[UserAPIFields.password]?.type === 'isLengthValue' ||
          errors[UserAPIFields.password]?.type === 'isUpperCaseValue' ||
          errors[UserAPIFields.password]?.type === 'isNumberValue' ? (
            <Fragment>
              {'Пароль '}
              <HintErrorSpan
                isError={
                  (isBlur && !!errors[UserAPIFields.password]) ||
                  errors[UserAPIFields.password]?.type === 'isLengthValue' ||
                  !registerStepOneValidation.password.isLengthValue(watchField)
                }
              >
                {ValidationErrors.length}
              </HintErrorSpan>
              {', '}
              <HintErrorSpan
                isError={
                  (isBlur && !!errors[UserAPIFields.password]) ||
                  errors[UserAPIFields.password]?.type === 'isUpperCaseValue' ||
                  !registerStepOneValidation.password.isUpperCaseValue(watchField)
                }
              >
                {ValidationErrors.upperCase}
              </HintErrorSpan>
              {' и '}
              <HintErrorSpan
                isError={
                  (isBlur && !!errors[UserAPIFields.password]) ||
                  errors[UserAPIFields.password]?.type === 'isNumberValue' ||
                  !registerStepOneValidation.password.isNumberValue(watchField)
                }
              >
                {ValidationErrors.passNumber}
              </HintErrorSpan>
            </Fragment>
          ) : (
            <DefaultLabel isEmptyBluredLabel={isError} label={FORM_INPUT_TEXT.regPass.label} />
          )}
        </InputLabel>
      )}
    </ContainerInputWithLabel>
  );
};
