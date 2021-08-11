import React from 'react';
import PricingOption from './PricingOption';

export default {
  title: 'Components/PricingOption',
  component: PricingOption,
};

export const PricingOptionStory = () => (
  <>
    <PricingOption
      planDuration={6}
      saveAmount={50}
      planPrice={9.99}
      priceWithoutDisc={119.94}
      priceWithDisc={59.94}
      checkedState={1}
      index={1}
    />
    <PricingOption
      planDuration={6}
      saveAmount={50}
      planPrice={9.99}
      priceWithoutDisc={119.94}
      priceWithDisc={59.94}
      checkedState={1}
      index={2}
    />
  </>
);
