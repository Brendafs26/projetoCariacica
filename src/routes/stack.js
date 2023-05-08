import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Agroturismo from '../pages/Agroturismo';

const Stack = createNativeStackNavigator();

export default function StackNavegar(){
  return(
   

        <Stack.Navigator>
           
          <Stack.Screen 
            name="Agroturismo"
            component={perfil}
            options={{
              headerShown: false,
            }}
          />
    
    
        </Stack.Navigator>
     
      )
    }