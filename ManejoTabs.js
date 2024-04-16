import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Usuario from './Usuario';
import Usuario1 from './Usuario1';
import Usuario2 from './Usuario2';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const ManejoTabs = props => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      activeColor="#865ba0"
      inactiveColor="#747d84"
      barStyle={{backgroundColor: '#161d25'}}>
      <Tab.Screen
        name="Imagen"
        component={Usuario}
        initialParams={{nombre: props.route.params.nombre}}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="image" color={'#747d84'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={Usuario1}
        initialParams={{nombre: props.route.params.nombre}}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="video" color={'#747d84'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Sonido"
        component={Usuario2}
        initialParams={{nombre: props.route.params.nombre}}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="speaker" color={'#747d84'} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ManejoTabs;
