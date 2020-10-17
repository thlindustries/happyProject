import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from '../pages/OrphanagesMap';
import OrphanageDetail from '../pages/OrphanageDetail';

const AppStack: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen name="OrphanageDetail" component={OrphanageDetail} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
