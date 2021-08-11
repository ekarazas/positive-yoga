import React from 'react';
import ReviewItem from './ReviewItem';
import reviewImage1 from '../../assets/reviewImage1.svg';

export default {
  title: 'Components/ReviewItem',
  component: ReviewItem,
};

export const ReviewItemStory = () => (
  <ReviewItem
    name="Emily, 28"
    location="Delaware, NJ"
    rating={5}
    reviewImage={reviewImage1}
    review="I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts."
  />
);
