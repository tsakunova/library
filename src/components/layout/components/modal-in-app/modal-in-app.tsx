import { FC } from 'react';
import { Modal } from 'components/modal';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { setModal } from 'store/utils/utils-slice';

import { BookingCalendarModal } from './components/booking-calendar-modal';
import { RatingModal } from './components/rating-modal';
import { ModalType } from './enum';
import { OverlayForModal } from './modal-in-app.style';

const ModalComponent: FC<{ type?: ModalType; closeHandler: () => void }> = ({ type, closeHandler }) =>
  type === ModalType.rating ? <RatingModal onClick={closeHandler} /> : <BookingCalendarModal />;

export const ModalInApp: FC = () => {
  const modal = useTypedSelector(({ utils }) => utils.modal);
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(setModal({ ModalType: modal?.modalType, isShow: false }));
  };

  return (
    <OverlayForModal data-test-id='modal-outer' isShow={modal?.isShow || false} onClick={closeModal}>
      <Modal>
        <ModalComponent type={modal?.modalType} closeHandler={closeModal} />
      </Modal>
    </OverlayForModal>
  );
};
