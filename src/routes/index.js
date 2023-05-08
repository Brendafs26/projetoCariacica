import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Favoritos from '../pages/Favoritos';
import RedesSociais from '../pages/RedesSociais';


import Feather from 'react-native-vector-icons/Feather';



const Tab = createBottomTabNavigator();

export default function Routes(){
  return(
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFF',

          tabBarStyle:{
            backgroundColor: '#202225',
            borderTopWidth: 0
          }

        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />
            },
          }}
        />

        <Tab.Screen 
          name="Favoritos" 
          component={Favoritos} 
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="star" color={color} size={size} />
            }
          }}
        />
         

        <Tab.Screen
          name="RedesSociais"
          component={RedesSociais}
          options={{
            //headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Feather name="instagram" color={color} size={size} />
            }
          }}
        />


      </Tab.Navigator>
  )
}