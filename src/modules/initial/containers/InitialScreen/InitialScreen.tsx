import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import {StyledText, StyledView} from 'react-native-dev-ui';
import {ScreenBox} from '../../../../components/ScreenBox';
import {Colors} from '../../../../constants/Colors';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

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
      <Icon name="chevron-right" size={30} />
    </StyledView>
  );
};

export default function InitialScreen() {
  const {navigate} = useNavigation();
  const data: ItemProps[] = [
    {
      title: 'Onboarding Animation',
      onPress: () => console.warn(),
    },
    {
      title: 'Circular Progress',
      onPress: () => console.warn(),
    },
    {
      title: 'Carousel',
      onPress: () => navigate('Carousel'),
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
