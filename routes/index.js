import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../src/pages/Home';
import Favoritos from '../src/pages/Favoritos';
import Artistas from '../src/pages/Artistas';

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
            name="HomeStack"
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
                return <Feather name="file-text" color={color} size={size} />
              }
            }}
          />
  
          <Tab.Screen
            name="Artistas"
            component={Artistas}
            options={{
              //headerShown: false,
              tabBarIcon: ({ color, size }) => {
                return <Feather name="phone-call" color={color} size={size} />
              }
            }}
          />
        </Tab.Navigator>
    )
  }