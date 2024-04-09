import React from 'react';
import Login from './Login';
import Usuario from './Usuario';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='usuario' component={Usuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
