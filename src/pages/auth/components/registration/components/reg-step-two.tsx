import { FC } from 'react';
import { FieldErrors, FieldValues, UseFormClearErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { UserAPIFields } from 'enums';
import { FormSection } from 'pages/auth/auth.style';
import { FORM_INPUT_TEXT } from 'pages/auth/const';

import { InputName } from './step-two/input-name';

export const RegStepTwo: FC<{
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  inProfile?: boolean;
}> = ({ errors, watch, register, clearErrors, inProfile = false }) => (
  <FormSection inProfile={inProfile}>
    <InputName
      register={register}
      watch={watch}
      errors={errors}
      clearErrors={clearErrors}
      name={UserAPIFields.firstName}
      placeholder={FORM_INPUT_TEXT.regName.placeholder}
    />
    <InputName
      register={register}
      watch={watch}
      errors={errors}
      clearErrors={clearErrors}
      name={UserAPIFields.lastName}
      placeholder={FORM_INPUT_TEXT.regSurname.placeholder}
    />
  </FormSection>
);
