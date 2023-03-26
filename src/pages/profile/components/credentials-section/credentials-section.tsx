import { FC, useCallback, useEffect, useMemo } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { PrimaryButton } from 'components/buttons/primary-button';
import { PROFILE_SECTION_TITLES } from 'consts';
import { ButtonType, FormButtonType, TitleVariant, UserAPIFields } from 'enums';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { RegStepOne } from 'pages/auth/components/registration/components/reg-step-one';
import { RegStepThree } from 'pages/auth/components/registration/components/reg-step-three';
import { RegStepTwo } from 'pages/auth/components/registration/components/reg-step-two';
import { fetchUser, updateProfileRequest } from 'store/user/user-action';
import { UpdateUserData } from 'types/actions.types';
import { UserDTO } from 'types/types';

import { ProfileSectionTitle } from '../profile-section-title';

import { ButtonContainer, Buttons, Container } from './credentials-section.style';

export const CredentialsSection: FC<{ user: UserDTO | null; isEdit: boolean; setIsEdit: (value: boolean) => void }> = ({
  user,
  isEdit,
  setIsEdit,
}) => {
  const defaultValues: FieldValues = useMemo(
    () => ({
      [UserAPIFields.login]: user?.username,
      [UserAPIFields.firstName]: user?.firstName,
      [UserAPIFields.lastName]: user?.lastName,
      [UserAPIFields.phone]: user?.phone,
      [UserAPIFields.email]: user?.email,
    }),
    [user]
  );

  const {
    register,
    watch,
    formState: { errors, isValid },
    clearErrors,
    handleSubmit,
    control,
    reset,
  } = useForm({
    defaultValues,
    shouldFocusError: false,
    mode: 'all',
  });

  useEffect(() => {
    if (user) {
      reset({ ...defaultValues });
    }
  }, [defaultValues, reset, user]);

  const dispatch = useAppDispatch();

  const onSubmit = (data: FieldValues) => {
    const value = {
      id: user?.id,
      data: {
        [UserAPIFields.username]: data[UserAPIFields.login],
        [UserAPIFields.firstName]: data[UserAPIFields.firstName],
        [UserAPIFields.lastName]: data[UserAPIFields.lastName],
        [UserAPIFields.phone]: data[UserAPIFields.phone],
        [UserAPIFields.email]: data[UserAPIFields.email],
        [UserAPIFields.password]: data[UserAPIFields.password],
      },
    } as UpdateUserData;

    dispatch(updateProfileRequest(value));
    dispatch(fetchUser());
  };

  const stepProps = { register, errors, watch, control, clearErrors };

  const toggleType = useCallback(() => {
    setIsEdit(!isEdit);
    if (isEdit) {
      reset();
    }
    clearErrors();
  }, [clearErrors, isEdit, reset, setIsEdit]);

  return (
    <Container>
      <ProfileSectionTitle text={PROFILE_SECTION_TITLES.credentials} />
      <form onSubmit={handleSubmit(onSubmit)} data-test-id='profile-form'>
        <RegStepOne inProfile={true} {...stepProps} />
        <RegStepTwo inProfile={true} {...stepProps} />
        <RegStepThree inProfile={true} {...stepProps} />
        <Buttons>
          <ButtonContainer>
            <PrimaryButton
              testId='edit-button'
              onClick={toggleType}
              handlerType={FormButtonType.button}
              title={TitleVariant.edit}
              type={ButtonType.secondaryButton}
              stylesClass='buttonInProfile'
            />
          </ButtonContainer>
          <ButtonContainer>
            <PrimaryButton
              testId='save-button'
              type={ButtonType.primaryButton}
              disabled={!isValid && !isEdit}
              handlerType={FormButtonType.submit}
              title={TitleVariant.save}
              stylesClass='buttonInProfile'
            />
          </ButtonContainer>
        </Buttons>
      </form>
    </Container>
  );
};
