import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from '../pages/OrphanagesMap';
import OrphanageDetail from '../pages/OrphanageDetail';
import CreateOrphanageDetail from '../pages/CreateOrphanageDetail';
import CreateOrphanageMap from '../pages/CreateOrphanageMap';
import Landing from '../pages/Landing';

import Header from '../components/Header';

const AppStack: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen name="Landing" component={Landing} />
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen
          name="OrphanageDetail"
          component={OrphanageDetail}
          options={{
            headerShown: true,
            header: () => <Header title="Orfanato" hasX={false} />,
          }}
        />

        <Screen
          name="CreateOrphanageMap"
          component={CreateOrphanageMap}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />,
          }}
        />
        <Screen
          name="CreateOrphanageDetail"
          component={CreateOrphanageDetail}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
