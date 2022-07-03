import React, {useEffect, useRef} from 'react';

import Svg, {Circle, G} from 'react-native-svg';
import {Animated} from 'react-native';

interface CircularProgressProps {
  percentage?: number;
  radius?: number;
  strokeWidth?: number;
  duration?: number;
  color?: string;
  delay?: number;
  max?: number;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export function CircularProgress({
  percentage = 75,
  radius = 13 * 5,
  strokeWidth = 4 * 2,
  duration = 1000,
  color = 'blue',
  delay = 0,
  max = 100,
}: CircularProgressProps) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const halfCircle = radius + strokeWidth;
  const circunference = 2 * Math.PI * radius;
  const circleRef = useRef();

  const animation = (toValue: number) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start(({finished}) => {
      setTimeout(() => {
        finished && animation(toValue > 0 ? 0 : percentage);
      }, 2000);
    });
  };

  useEffect(() => {
    animation(percentage);
    animatedValue.addListener(v => {
      if (circleRef?.current) {
        const maxPercentage = (100 * v.value) / max;
        const strokeDashoffset =
          circunference - (circunference * maxPercentage) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, []);

  return (
    <Svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
      <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
        <Circle
          stroke="rgba(255, 255, 255, 0.4)"
          fill="transparent"
          cx="50%"
          cy="50%"
          r={radius}
          strokeWidth={strokeWidth}
        />
        <AnimatedCircle
          ref={circleRef}
          stroke={color}
          fill="transparent"
          cx="50%"
          cy="50%"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circunference}
          // strokeDashoffset={circunference}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
}
