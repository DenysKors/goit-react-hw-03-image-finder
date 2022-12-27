import { ModalWindow, ModalOverlay } from './Modal.styled';

export const Modal = ({ largeImageURL, tags }) => {
  return (
    <ModalOverlay>
      <ModalWindow>
        <img src={largeImageURL} alt={tags} />
      </ModalWindow>
    </ModalOverlay>
  );
};
