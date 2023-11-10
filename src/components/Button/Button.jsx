import { BtnContainer, GalletyBtn } from './Button.styled';

export const Button = ({ loadMoreBtnClick }) => {
  return (
    <BtnContainer>
      <GalletyBtn onClick={loadMoreBtnClick} type="button">
        Load More
      </GalletyBtn>
    </BtnContainer>
  );
};
