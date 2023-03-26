import { FC, Fragment } from 'react';
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

export const InputUsername: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
}> = ({ errors, watch, register, clearErrors }) => {
  const { userForm } = useTypedSelector(({ utils }) => utils);
  const isProfile = userForm?.type === UserFormType.edit;
  const isShowLabel = !userForm || (isProfile && userForm?.isDisabled);
  const name = isProfile ? UserAPIFields.login : UserAPIFields.username;
  const { isBlur, setIsBlur, isEmptyBluredLabel, watchField } = useIsBlurWithValidation(name, true, watch, errors);

  return (
    <ContainerInputWithLabel>
      <CustomInput
        name={name}
        placeholder={FORM_INPUT_TEXT.regLogin.placeholder}
        type='text'
        required={true}
        register={register}
        validation={registerStepOneValidation.username}
        watch={watch}
        errors={errors}
        setIsBlur={setIsBlur}
        clearErrors={clearErrors}
      />
      {isShowLabel && (
        <InputLabel data-test-id='hint' isError={isEmptyBluredLabel}>
          {errors[name]?.type === 'isStringValue' || errors[name]?.type === 'isNumberValue' ? (
            <Fragment>
              {'Используйте для логина '}
              <HintErrorSpan
                isError={
                  (isBlur && !!errors[name]) ||
                  errors[name]?.type === 'isStringValue' ||
                  !registerStepOneValidation.username.isStringValue(watchField)
                }
              >
                {ValidationErrors.latin}
              </HintErrorSpan>
              {' и '}
              <HintErrorSpan
                isError={
                  (isBlur && !!errors[name]) ||
                  errors[name]?.type === 'isNumberValue' ||
                  !registerStepOneValidation.username.isNumberValue(watchField)
                }
              >
                {ValidationErrors.number}
              </HintErrorSpan>
            </Fragment>
          ) : (
            <DefaultLabel isEmptyBluredLabel={isEmptyBluredLabel} label={FORM_INPUT_TEXT.regLogin.label} />
          )}
        </InputLabel>
      )}
    </ContainerInputWithLabel>
  );
};
