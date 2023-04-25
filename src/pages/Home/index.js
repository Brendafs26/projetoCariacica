import React from 'react';
import { View, Text, StyleSheet, Image,SafeAreaView,FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';


export default function Home(){
    const navigation = useNavigation();
  
    return (
      <SafeAreaView style={styles.container}>
       <View style={styles.card}>
        <Image
        style={styles.foto}
        source={require('./assets/cariacica.jpg')}
        />
        <Text> Terra Maravilhosa</Text>
        <FlatList/>
  
       </View>
       
      </SafeAreaView>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      
    },
    foto:{
      width:380,
       height:300,
       
    },
    card:{
      padding:20,
      backgroundColor:'pink',
    }
  });
  