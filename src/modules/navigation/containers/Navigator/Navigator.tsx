import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen
          name="Initial"
          options={{
            headerShown: false,
          }}
          getComponent={() =>
            require('../../../initial/containers/InitialScreen').default
          }
        />
        <Stack.Screen
          name="Carousel"
          options={{
            headerShown: false,
          }}
          getComponent={() =>
            require('../../../carousel/containers/Carousel').default
          }
        />
        <Stack.Screen
          name="Donuts"
          options={{
            headerShown: false,
          }}
          getComponent={() =>
            require('../../../donuts/containers/Donuts').default
          }
        />
        <Stack.Screen
          name="Header"
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
          getComponent={() =>
            require('../../../header/containers/Header').default
          }
        />
        <Stack.Screen
          name="Header2"
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
          getComponent={() =>
            require('../../../header/containers/Header2').default
          }
        />

        <Stack.Screen
          name="Accordion"
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
          getComponent={() => require('../../../../screens/Accordion').default}
        />
        <Stack.Screen
          name="AnimatedPicker"
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
          getComponent={() =>
            require('../../../../screens/AnimatedPicker').default
          }
        />
        <Stack.Screen
          name="Skeleton"
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
          getComponent={() => require('../../../../screens/Skeleton').default}
        />
        <Stack.Screen
          name="AnimatedPicker2"
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
          getComponent={() =>
            require('../../../../screens/AnimatedPicker2').default
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
