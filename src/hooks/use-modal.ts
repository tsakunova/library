import { SyntheticEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { AppModal, ModalType } from 'components/layout/components/modal-in-app/enum';
import { setModal } from 'store/utils/utils-slice';
import { FullBookDTO, MainBookDTO } from 'types/types';

import { useAppDispatch } from './use-app-dispatch';

export const useModal = (modalType: ModalType, data: MainBookDTO | FullBookDTO | null = null) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const modal: AppModal = useMemo(
    () => ({
      modalType,
      isShow,
      data,
    }),
    [data, isShow, modalType]
  );

  useEffect(() => {
    if (modal) {
      dispatch(setModal(modal));
    }
  }, [dispatch, isShow, modal]);

  const showModalForBooking = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      setIsShow(true);
      dispatch(setModal({ isShow, modalType: ModalType.booking, data }));
    },
    [data, dispatch, isShow]
  );

  return { isShow, setIsShow, showModalForBooking };
};
