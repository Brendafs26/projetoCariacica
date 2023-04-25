

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();


<Tab.Screen
name={Home}
component={Home}
options={{
  tabBarIcon: ({color,size}) => {
    return <Feather name="home" color={color} size={size}  />
  },
}}
/>
