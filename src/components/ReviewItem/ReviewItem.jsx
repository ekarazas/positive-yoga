import React from 'react';
import * as S from './ReviewItem.style';
import star from '../../assets/star.svg';

const ReviewItem = ({ name, location, rating, reviewImage, review }) => {
  return (
    <>
      <S.Review>
        <S.Title>{name}</S.Title>
        <S.LocationSpan>{location}</S.LocationSpan>
        <S.Rating>
          {rating >= 1 ? <img src={star} alt="rating" /> : null}
          {rating >= 2 ? <img src={star} alt="rating" /> : null}
          {rating >= 3 ? <img src={star} alt="rating" /> : null}
          {rating >= 4 ? <img src={star} alt="rating" /> : null}
          {rating === 5 ? <img src={star} alt="rating" /> : null}
        </S.Rating>
        <img src={reviewImage} alt="reviewer" />
        <S.ReviewText>{review}</S.ReviewText>
      </S.Review>
    </>
  );
};

export default ReviewItem;
