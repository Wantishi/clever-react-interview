import React from 'react';
import { storiesOf } from '@storybook/react';
import ReviewCard from '../ReviewCard';

storiesOf('ReviewCard', module)
  .add('basic render', () => (
      <ReviewCard />
  ));
