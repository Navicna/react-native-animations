import React from 'react';
import {Pressable, Dimensions} from 'react-native';
import {AnimatePresence, MotiView} from 'moti';
import {useState} from 'react';
import {StyledText, StyledView} from 'react-native-dev-ui';
import IconChevronDown from '../../../svg/IconChevronDown';

const data = ['ES', 'AM', 'RJ', 'SP'];

export default function Picker() {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState('');

  function PickerItem({
    item,
    index,
    length,
  }: {
    item: string;
    index: number;
    length: number;
  }) {
    return (
      <MotiView
        transition={{delay: index * 50, damping: 15, mass: 1}}
        from={{
          opacity: 0,
          translateY: 0,
        }}
        animate={{
          opacity: 1,
          translateY: 55 * index,
        }}
        exit={{
          opacity: 0,
          translateY: 0,
        }}>
        <Pressable
          onPress={() => {
            setValue(item);
            setExpanded(false);
          }}>
          <StyledView
            borderTopLeftRadius={index === 0 ? 10 : 0}
            borderTopRightRadius={index === 0 ? 10 : 0}
            borderBottomRightRadius={index + 1 === length ? 10 : 0}
            borderBottomLeftRadius={index + 1 === length ? 10 : 0}
            width={Dimensions.get('screen').width - 32}
            height={55}
            justifyContent="center"
            alignItems="center"
            position="absolute"
            bottom={0}
            right={0}
            bgColor="white">
            <StyledText>{item}</StyledText>
          </StyledView>
        </Pressable>
      </MotiView>
    );
  }

  return (
    <StyledView>
      <Pressable onPress={() => setExpanded(!expanded)}>
        <StyledView
          as={MotiView}
          animate={{
            borderWidth: expanded ? 0.5 : 1,
            borderColor: expanded ? 'orange' : 'black',
          }}
          width={Dimensions.get('screen').width - 32}
          borderWidth={1}
          height={50}
          ph={8}
          alignItems="center"
          justifyContent="space-between"
          borderRadius={10}
          flexDirection="row">
          <StyledText>{value}</StyledText>
          <StyledView
            as={MotiView}
            animate={{
              transform: [{rotate: expanded ? '180deg' : '0deg'}],
            }}>
            <IconChevronDown />
          </StyledView>
        </StyledView>
      </Pressable>
      <AnimatePresence>
        {expanded && (
          <StyledView
            position="absolute"
            right={0}
            left={0}
            bottom={-65}
            zIndex={1}>
            {data.map((item, i) => (
              <PickerItem
                key={i.toString()}
                item={item}
                index={i}
                length={data.length}
              />
            ))}
          </StyledView>
        )}
      </AnimatePresence>
    </StyledView>
  );
}
