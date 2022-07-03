import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigator from './src/modules/navigation/containers/Navigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
