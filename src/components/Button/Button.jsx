import { Button } from './Button.styled';

export const LoadButton = ({ onBtnClick }) => (
  <Button type="button" onClick={onBtnClick}>
    Load more
  </Button>
);
