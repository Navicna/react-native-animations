import React from 'react';
import {Text, View, StyleSheet, Pressable, Dimensions} from 'react-native';
import {AnimatePresence, MotiView} from 'moti';
import {useState} from 'react';
import {StyledText, StyledView} from 'react-native-dev-ui';
import Picker from './components';

export default function AnimatedPicker2() {
  return (
    <StyledView justifyContent="center" alignItems="center" flex={1}>
      <Picker />
      <StyledView mv={8} />
      <Picker />
      {/* <StyledView>
        <StyledText>TESTE</StyledText>
      </StyledView>
      <StyledView mt={20}>
        <StyledText>TESTE</StyledText>
      </StyledView> */}
    </StyledView>
  );
}
