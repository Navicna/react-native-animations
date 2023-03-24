import React from 'react';
// import {MotiView} from 'moti';
// import {Skeleton as MotiSkeleton} from 'moti/skeleton';
import {StyledView} from 'react-native-dev-ui';

export default function Skeleton() {
  return (
    <StyledView flex={1} bgColor="grey">
      {/* <MotiSkeleton colorMode={'dark'} radius="round" height={75} width={75} /> */}
    </StyledView>
  );
}
