import React from 'react';
import {ViewProps} from 'react-native';

import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {
  Image,
  screenProportion,
  StyledView,
  StyledViewProps,
} from 'react-native-dev-ui';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../../../constants/Colors';

type ScreenBoxProps = {
  safeTop?: boolean;
  children: JSX.Element | JSX.Element[];
} & ViewProps &
  StyledViewProps;

const HEADER_HEIGHT = 50;

export default function Header() {
  const {top} = useSafeAreaInsets();
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollY.value = e.contentOffset.y;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT],
      [HEADER_HEIGHT, 0],
      Extrapolation.CLAMP,
    );
    const translateY = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT],
      [0, -HEADER_HEIGHT],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      scrollY.value,
      [0, HEADER_HEIGHT],
      [1, 0],
      Extrapolation.CLAMP,
    );

    const backgroundColor = interpolateColor(
      scrollY.value,
      [0, 1],
      ['white', 'red'],
    );

    return {
      transform: [{translateY}],
      opacity,
      height,
      //   backgroundColor,
    };
  });

  return (
    <StyledView flex={1} pt={top}>
      <Animated.View
        style={[
          {borderBottomColor: Colors.grayOver, borderBottomWidth: 1},
          animatedStyles,
        ]}>
        <Image
          ml={16}
          source={{uri: 'https://i.imgur.com/s6jK6G4.png'}}
          height={50}
          width={100}
          resizeMode="contain"
        />
      </Animated.View>
      <Animated.ScrollView
        scrollEventThrottle={5}
        bounces={false}
        onScroll={scrollHandler}>
        {Array(5)
          .fill(null)
          .map(_ => (
            <Skeleton />
          ))}
      </Animated.ScrollView>
    </StyledView>
  );
}

const Skeleton = () => (
  <StyledView
    alignItems="center"
    mv={8}
    ml={16}
    width={screenProportion('FULL_WIDTH') - 32}
    height={300}
    borderRadius={10}
    bgColor="#666666"
  />
);
