import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Usuario from './Usuario';
import Usuario1 from './Usuario1';
import Usuario2 from './Usuario2';

const ManejoTabs = props => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="tab1"
        component={Usuario}
        initialParams={{nombre: props.route.params.nombre}}
      />
      <Tab.Screen
        name="tab2"
        component={Usuario1}
        initialParams={{nombre: props.route.params.nombre}}
      />
      <Tab.Screen
        name="tab3"
        component={Usuario2}
        initialParams={{nombre: props.route.params.nombre}}
      />
    </Tab.Navigator>
  );
};

export default ManejoTabs;
