import { SyntheticEvent, useCallback } from 'react';
import { ModalType } from 'components/layout/components/modal-in-app/enum';
import { setModal } from 'store/utils/utils-slice';
import { FullBookDTO, MainBookDTO } from 'types/types';

import { useAppDispatch } from './use-app-dispatch';

export const useModal = (modalType: ModalType, data: string | MainBookDTO | FullBookDTO | null = null) => {
  const dispatch = useAppDispatch();

  const showModalForBooking = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      dispatch(setModal({ isShow: true, modalType: ModalType.booking, data }));
    },
    [data, dispatch]
  );

  const showModalForRate = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      dispatch(setModal({ isShow: true, modalType: ModalType.rating, data }));
    },
    [data, dispatch]
  );
  const showModal = modalType === ModalType.booking ? showModalForBooking : showModalForRate;

  return { showModal };
};
