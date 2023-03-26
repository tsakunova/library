import { AppModal } from 'components/layout/components/modal-in-app/enum';
import { AppToast } from 'components/toast/toast.enum';

export enum UserFormType {
  register = 'register',
  edit = 'edit',
}

export type UserForm = {
  type: UserFormType;
  isDisabled: boolean;
};

export type UtilsState = {
  toast: AppToast | null;
  isDescendingSort: boolean;
  searchString: string;
  modal: AppModal | null;
  userForm: UserForm | null;
};
