import { AppModal } from 'components/layout/components/modal-in-app/enum';
import { AppToast } from 'components/layout/components/toast/toast.enum';

export type UtilsState = {
  toast: AppToast | null;
  isDescendingSort: boolean;
  searchString: string;
  modal: AppModal | null;
};
