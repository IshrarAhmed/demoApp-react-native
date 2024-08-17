import 'react-native-gesture-handler';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Welcome from './src/screens/welcome/Welcome';
import Categories from './src/screens/categories/Categories';

const App = gestureHandlerRootHOC(() => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="Categories" component={Categories} />
      </Tab.Navigator>
    </NavigationContainer>
  );
});

export default App;
