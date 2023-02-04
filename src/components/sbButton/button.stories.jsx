import React from 'react';
import ButtonVariant from './Button';

export default {
  title: 'Button',
  component: ButtonVariant,
};

export const Primary = () => (
  <ButtonVariant variant="primary">Primary</ButtonVariant>
);
export const Secondary = () => (
  <ButtonVariant variant="secondary">Secondary</ButtonVariant>
);
export const Success = () => (
  <ButtonVariant variant="success">Success</ButtonVariant>
);
export const Danger = () => (
  <ButtonVariant variant="danger">Danger</ButtonVariant>
);
