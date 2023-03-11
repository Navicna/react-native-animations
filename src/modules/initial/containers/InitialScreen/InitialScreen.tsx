import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import {StyledText, StyledView} from 'react-native-dev-ui';
import {ScreenBox} from '../../../../components/ScreenBox';
import {Colors} from '../../../../constants/Colors';
import {IconChevronRight} from '../../../../ui/Icon';

type ItemProps = {
  title: string;
  onPress(): void;
};

const Item = ({title, onPress}: {title: string; onPress(): void}) => {
  return (
    <StyledView
      onPress={onPress}
      as={Pressable}
      flexDirection="row"
      justifyContent="space-between"
      mh={16}
      borderBottomWidth={1}
      borderColor={Colors.grayOver}
      pv={8}>
      <StyledText fontSize={20}># {title}</StyledText>
      <IconChevronRight />
    </StyledView>
  );
};

export default function InitialScreen() {
  const {navigate} = useNavigation();
  const data: ItemProps[] = [
    {
      title: 'Header Animation',
      onPress: () => navigate('Header'),
    },
    {
      title: 'Circular Progress',
      onPress: () => navigate('Donuts'),
    },
    {
      title: 'Carousel',
      onPress: () => navigate('Carousel'),
    },
    ,
    {
      title: 'Header Animation 2',
      onPress: () => navigate('Header2'),
    },
    {
      title: 'Accordion',
      onPress: () => navigate('Accordion'),
    },
    ,
  ];
  return (
    <ScreenBox>
      <StyledView flex={1} bgColor="white">
        {data.map(({title, onPress}) => (
          <Item title={title} onPress={onPress} />
        ))}
      </StyledView>
    </ScreenBox>
  );
}
