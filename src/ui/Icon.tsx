import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = {
  size?: number;
  color?: string;
};

const IconChevronRight = ({size = 30, color = 'black'}: IconProps) => (
  <Icon name="chevron-right" size={size} color={color} />
);

const IconChevronLeft = ({size = 30, color = 'black'}: IconProps) => (
  <Icon name="chevron-left" size={size} color={color} />
);

export {IconChevronRight, IconChevronLeft};
