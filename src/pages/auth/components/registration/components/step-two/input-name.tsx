import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CustomInput } from 'components/forms/custom-input';
import { InputLabel } from 'components/forms/custom-input/custom-input.style';
import { UserAPIFields, ValidationErrors } from 'enums';
import { useIsBlurWithValidation } from 'hooks/use-is-blur-with-validation';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ContainerInputWithLabel, HintErrorSpan } from 'pages/auth/auth.style';
import { UserFormType } from 'store/utils/types';

export const InputName: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  name: UserAPIFields;
  placeholder: string;
}> = ({ register, watch, errors, clearErrors, name, placeholder }) => {
  const { userForm } = useTypedSelector(({ utils }) => utils);
  const { setIsBlur, isEmptyBluredLabel } = useIsBlurWithValidation(
    name,
    userForm?.type !== UserFormType.edit,
    watch,
    errors
  );
  const isProfile = userForm?.type === UserFormType.edit;

  return (
    <ContainerInputWithLabel>
      <CustomInput
        required={!isProfile}
        register={register}
        watch={watch}
        errors={errors}
        setIsBlur={setIsBlur}
        clearErrors={clearErrors}
        name={name}
        placeholder={placeholder}
        type='text'
      />

      <InputLabel data-test-id='hint' isError={!isProfile && isEmptyBluredLabel}>
        {!isProfile && isEmptyBluredLabel && (
          <HintErrorSpan isError={true}>{ValidationErrors.emptyField}</HintErrorSpan>
        )}
      </InputLabel>
    </ContainerInputWithLabel>
  );
};
