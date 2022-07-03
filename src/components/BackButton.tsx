import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import {StyledView} from 'react-native-dev-ui';

import {IconChevronLeft} from '../ui/Icon';

export const BackButton = ({style}: {style?: any}) => {
  const {goBack} = useNavigation();
  return (
    <StyledView
      as={Pressable}
      onPress={goBack}
      style={[
        {
          height: 34,
          width: 36,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          borderColor: '#374957',
          borderWidth: 0.5,
          position: 'absolute',
          top: 60,
          left: 16,
          zIndex: 1,
        },
        style,
      ]}>
      <IconChevronLeft />
    </StyledView>
  );
};
