import { useEffect, useMemo, useState } from 'react';
import { AppModal, ModalType } from 'components/layout/components/modal-in-app/enum';
import { setModal } from 'store/utils/utils-slice';

import { useAppDispatch } from './use-app-dispatch';

export const useModal = (modalType: ModalType) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const modal: AppModal = useMemo(
    () => ({
      modalType,
      isShow,
    }),
    [isShow, modalType]
  );

  useEffect(() => {
    if (isShow) {
      dispatch(setModal(modal));
    }
  }, [dispatch, isShow, modal]);

  return { isShow, setIsShow };
};
