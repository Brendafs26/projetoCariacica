import React from 'react';
import { View, Text, StyleSheet, Image,SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function Home(){
    const navigation = useNavigation();
  
    function navegaDetalhes(){
      navigation.navigate('Detalhes')
    }
  
    return (
      <SafeAreaView style={styles.container}>
       <View style={styles.card}>
        <Image
        style={styles.foto}
        source={require('./assets/cariacica.jpg')}
        />
        <Text> Terra Maravilhosa</Text>
        <Text></Text>
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
  