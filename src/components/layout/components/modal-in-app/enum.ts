import { FullBookDTO, MainBookDTO } from 'types/types';

export enum ModalType {
  rating = 'rating',
  booking = 'booking',
}
export type AppModal = {
  modalType: ModalType;
  isShow?: boolean;
  data: MainBookDTO | FullBookDTO | string | null;
};
