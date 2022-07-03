import React from 'react';
import {ViewProps} from 'react-native';

import {StyledView, StyledViewProps} from 'react-native-dev-ui';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type ScreenBoxProps = {
  safeTop?: boolean;
  children: JSX.Element | JSX.Element[];
} & ViewProps &
  StyledViewProps;

export function ScreenBox({safeTop = true, children, ...rest}: ScreenBoxProps) {
  const {top} = useSafeAreaInsets();

  return (
    <StyledView
      overflow="hidden"
      flex={1}
      pt={safeTop ? top : 0}
      bgColor="white"
      {...rest}>
      {children}
    </StyledView>
  );
}
