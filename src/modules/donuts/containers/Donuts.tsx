import React from 'react';

import {StyledView} from 'react-native-dev-ui';
import {BackButton} from '../../../components/BackButton';
import {CircularProgress} from '../../../components/CircularProgress';

import {ScreenBox} from '../../../components/ScreenBox';

export default function Donuts() {
  return (
    <ScreenBox>
      <BackButton />
      <StyledView alignItems="center" justifyContent="center" flex={1}>
        <CircularProgress />
      </StyledView>
    </ScreenBox>
  );
}
