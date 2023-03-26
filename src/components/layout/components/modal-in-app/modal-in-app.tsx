import { FC, useCallback } from 'react';
import { Modal } from 'components/modal';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { hideModal } from 'store/utils/utils-slice';
import { FullBookDTO, MainBookDTO } from 'types/types';

import { BookingCalendarModal } from './components/booking-calendar-modal';
import { RatingModal } from './components/rating-modal';
import { ModalType } from './enum';
import { OverlayForModal } from './modal-in-app.style';

const ModalComponent: FC<{
  type?: ModalType;
  closeHandler: () => void;
  data?: MainBookDTO | FullBookDTO | string | null;
}> = ({ type, closeHandler, data }) =>
  type === ModalType.rating ? (
    <RatingModal onClick={closeHandler} data={data as string} />
  ) : (
    <BookingCalendarModal onClick={closeHandler} data={data as MainBookDTO | FullBookDTO} />
  );

export const ModalInApp: FC = () => {
  const modal = useTypedSelector(({ utils }) => utils.modal);
  const dispatch = useAppDispatch();
  const closeModal = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  return (
    <OverlayForModal data-test-id='modal-outer' isShow={modal?.isShow || false} onClick={closeModal}>
      <Modal>
        <ModalComponent type={modal?.modalType} closeHandler={closeModal} data={modal?.data} />
      </Modal>
    </OverlayForModal>
  );
};
