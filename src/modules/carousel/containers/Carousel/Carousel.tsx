import React, {useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {
  Image,
  screenProportion,
  StyledText,
  StyledView,
} from 'react-native-dev-ui';
import {BackButton} from '../../../../components/BackButton';
import {Colors} from '../../../../constants/Colors';
import {animals} from '../../../../utils/Data';

const DOT_SIZE = 8;

const Backdrop = ({scrollX}) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: animals.map((_, i) => i * screenProportion('FULL_WIDTH')),
    outputRange: animals.map(({bgColor}) => bgColor),
  });
  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, {backgroundColor}]} />
  );
};

export default function Carousel() {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        data={animals}
        scrollEventThrottle={32}
        pagingEnabled
        horizontal
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({item, index}) => (
          <StyledView
            flex={1}
            alignItems="center"
            justifyContent="center"
            width={screenProportion('FULL_WIDTH')}>
            {index === 0 && <BackButton />}
            <Image
              source={{uri: item.image}}
              height={300}
              width={300}
              resizeMode="contain"
            />
            <StyledText
              mt={48}
              fontSize={30}
              color={index % 2 === 0 ? 'black' : 'white'}
              style={{fontWeight: 'bold'}}>
              {item.name}
            </StyledText>
          </StyledView>
        )}
      />
      <Indicator
        scrollX={scrollX}
        numberOfItems={animals.length}
        isAbsoluteFillItem
      />
    </>
  );
}

const Indicator = ({
  scrollX,
  numberOfItems,
  itemWidth = screenProportion('FULL_WIDTH'),
  spacing = 0,
  numberOfItemsPerWindow = 1,
  isAbsoluteFillItem,
}: {
  scrollX: Animated.Value;
  numberOfItems: number;
  itemWidth?: number;
  spacing?: number;
  numberOfItemsPerWindow?: number;
  isAbsoluteFillItem?: boolean;
}) => {
  return (
    <StyledView
      width={screenProportion('FULL_WIDTH')}
      alignItems="center"
      mt={16}
      position="absolute"
      bottom={90}
      justifyContent="center"
      flexDirection="row">
      {Array(isAbsoluteFillItem ? numberOfItems : Math.trunc(numberOfItems / 2))
        .fill(null)
        .map((_, i) => {
          const inputRange = [
            (i - 1) * (itemWidth + spacing) * numberOfItemsPerWindow,
            i * (itemWidth + spacing) * numberOfItemsPerWindow,
            (i + 1) * (itemWidth + spacing) * numberOfItemsPerWindow,
          ];
          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: [Colors.grayOver, 'white', Colors.grayOver],
            extrapolate: 'clamp',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          });
          const width = scrollX.interpolate({
            inputRange,
            outputRange: [DOT_SIZE, DOT_SIZE * 2, DOT_SIZE],
            extrapolate: 'clamp',
          });
          return (
            <StyledView
              mh={4}
              height={DOT_SIZE}
              width={DOT_SIZE}
              borderRadius={DOT_SIZE / 2}
              as={Animated.View}
              style={{
                width,
                opacity,
                backgroundColor,
              }}
            />
          );
        })}
    </StyledView>
  );
};
