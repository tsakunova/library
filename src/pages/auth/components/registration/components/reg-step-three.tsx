import { FC } from 'react';
import { Control, FieldErrors, FieldValues, UseFormClearErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CustomInput } from 'components/forms/custom-input';
import { InputLabel } from 'components/forms/custom-input/custom-input.style';
import { CustomMaskedInput } from 'components/forms/custom-masked-input/custom-masked-input';
import { UserAPIFields, ValidationErrors } from 'enums';
import { useIsBlurWithValidation } from 'hooks/use-is-blur-with-validation';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ContainerInputWithLabel, FormSection, HintErrorSpan } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT, registerStepThreeValidation } from 'pages/auth/const';
import { UserFormType } from 'store/utils/types';

export const RegStepThree: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
  clearErrors: UseFormClearErrors<FieldValues>;
  inProfile?: boolean;
}> = ({ errors, watch, register, clearErrors, control, inProfile = false }) => {
  const { isBlur, setIsBlur, isEmptyBluredLabel, watchField } = useIsBlurWithValidation(
    UserAPIFields.email,
    true,
    watch,
    errors
  );
  const { userForm } = useTypedSelector(({ utils }) => utils);
  const isProfile = userForm?.type === UserFormType.edit;
  const isShowLabel = !userForm || (isProfile && userForm?.isDisabled);

  return (
    <FormSection inProfile={inProfile}>
      <CustomMaskedInput watch={watch} errors={errors} control={control} />
      <ContainerInputWithLabel>
        <CustomInput
          name={UserAPIFields.email}
          placeholder={FORM_INPUT_TEXT.regEmail.placeholder}
          required={true}
          register={register}
          validation={registerStepThreeValidation.email}
          watch={watch}
          errors={errors}
          setIsBlur={setIsBlur}
          clearErrors={clearErrors}
          type='email'
        />
        {isShowLabel && (
          <InputLabel data-test-id='hint' isError={isEmptyBluredLabel}>
            {errors[UserAPIFields.email]?.type === 'isValidEmail' ? (
              <HintErrorSpan
                isError={
                  (isBlur && !!errors[UserAPIFields.email]) ||
                  errors[UserAPIFields.email]?.type === 'isValidEmail' ||
                  !registerStepThreeValidation.email.isValidEmail(watchField)
                }
              >
                {ValidationErrors.email}
              </HintErrorSpan>
            ) : (
              isEmptyBluredLabel && <HintErrorSpan isError={true}>{ValidationErrors.emptyField}</HintErrorSpan>
            )}
          </InputLabel>
        )}
      </ContainerInputWithLabel>
    </FormSection>
  );
};
