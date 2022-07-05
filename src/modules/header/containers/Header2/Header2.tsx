import React from 'react';
import {ScreenBox} from '../../../../components/ScreenBox';
import Animated, {
  interpolate,
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  Extrapolate,
} from 'react-native-reanimated';
import {Image, screenProportion, StyledView} from 'react-native-dev-ui';
import {Text} from 'react-native';
import {BackButton} from '../../../../components/BackButton';

const HEADER_MAX_HEIGHT = 300;
const HEADER_HEIGHT = 120;

export default function Header2() {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  });

  const animatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, HEADER_MAX_HEIGHT],
      [HEADER_MAX_HEIGHT, HEADER_HEIGHT],
      Extrapolate.CLAMP,
    );

    return {height};
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [HEADER_MAX_HEIGHT, HEADER_HEIGHT],
      [0, 1],
      Extrapolate.CLAMP,
    );
    return {opacity};
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [HEADER_MAX_HEIGHT, HEADER_HEIGHT],
      [0, 1],
      Extrapolate.CLAMP,
    );

    return {opacity, transform: [{translateX: scrollY.value}]};
  });

  const textAnimatedStyle2 = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [HEADER_MAX_HEIGHT, HEADER_HEIGHT],
      [0, 1],
      Extrapolate.CLAMP,
    );

    return {opacity, transform: [{translateX: -scrollY.value}]};
  });

  return (
    <StyledView flex={1} bgColor="gray">
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT}}>
        {Array(5)
          .fill(null)
          .map(_ => (
            <Skeleton />
          ))}
      </Animated.ScrollView>
      <Animated.View
        style={[
          {
            height: HEADER_MAX_HEIGHT,
            backgroundColor: 'white',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            right: 0,
            left: 0,
          },
          animatedStyle,
        ]}>
        <BackButton />
        <Animated.View
          style={[
            animatedStyle2,
            {
              height: 100,
              width: 100,
              borderRadius: 100 / 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
            },
          ]}>
          <Image
            source={{uri: 'https://i.imgur.com/0kOI4Tc.png'}}
            height={70}
            width={70}
          />
        </Animated.View>
        <Text style={{opacity: 0}}>Tiger</Text>
        <Animated.View style={[{marginTop: 16}, textAnimatedStyle]}>
          <Text>Tiger</Text>
        </Animated.View>
        <Animated.View
          style={[{marginTop: 16, zIndex: 10}, textAnimatedStyle2]}>
          <Text>Tiger is a very dangerous animal</Text>
        </Animated.View>
      </Animated.View>
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
