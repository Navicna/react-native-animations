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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
