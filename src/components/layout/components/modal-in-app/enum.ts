export enum ModalType {
  rating = 'rating',
  booking = 'booking',
}
export type AppModal = {
  modalType: ModalType;
  isShow: boolean;
};
