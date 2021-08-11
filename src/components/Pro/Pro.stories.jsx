import React from 'react';
import Pro from './Pro';

import bookcheck from '../../assets/bookcheck.svg';

export default {
  title: 'Components/Pro',
  component: Pro,
};

export const ProStory = () => (
  <Pro
    src={bookcheck}
    title="A complete guide to get started"
    subtitle="Best tips, guidelines, advice, and recommendations for successful practice"
  />
);
