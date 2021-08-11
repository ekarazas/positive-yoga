import React from 'react';
import * as S from './ReviewSection.style';
import ReviewItem from '../ReviewItem/ReviewItem';
import Button from '../Button/Button';

import reviewImage1 from '../../assets/reviewImage1.svg';
import reviewImage2 from '../../assets/reviewImage2.svg';
import reviewImage3 from '../../assets/reviewImage3.svg';

const ReviewSection = () => {
  return (
    <>
      <S.Title>Hear success stories from our clients</S.Title>
      <S.Container>
        <ReviewItem
          name="Emily, 28"
          location="Delaware, NJ"
          rating={5}
          reviewImage={reviewImage1}
          review="I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts."
        />
        <ReviewItem
          name="Kylie, 40"
          location="Los Angeles"
          rating={5}
          reviewImage={reviewImage2}
          review="I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress."
        />
        <ReviewItem
          name="Jesica, 51"
          location="San Francisco, CA"
          rating={5}
          reviewImage={reviewImage3}
          review="I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation."
        />
      </S.Container>
      <S.CenterButton>
        <Button>Get my plan</Button>
      </S.CenterButton>
    </>
  );
};

export default ReviewSection;
