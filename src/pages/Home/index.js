import React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity,SafeAreaView } from 'react-native'; 
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';



import { useNavigation } from '@react-navigation/native';


export default function Home(){
  const navigation = useNavigation();

  function navegaAgro(){
    navigation.navigate('Agroturismo');
  }

  return(
    <SafeAreaView style={styles.container}>
      
      <View style={styles.card}>



<Image
  style={styles.imagem}
  source={require('../../images/cariacica.jpg')}
/>

<Text style={styles.texto}>Cariacica Cidade Maravilhosa </Text>

<Text style={styles.descricao}>



  Cariacica foi uma terra que era conhecida como a fazenda que abastecia a 
  capital e as cidades vizinhas, principalmente nas regiões de Roças Velhas, 
  Ibiapaba e Maricará. O então povoado seria elevado a freguesia, se chamando
  Distrito de São João Batista de Cariacica, apenas na década de 1830.
  Nesta época, as terras eram anexas a Vitória. Já em 1890, se tornou
  a Vila de Cariacica e, ao fim do mesmo ano, pelo decreto estadual 
  nº 57, de 25 de dezembro, foi emancipada da cidade vizinha se 
  tornando município, tendo como data oficial de criação 30 de 
  dezembro, constante na bandeira da nova cidade.
</Text>


</View>

      <View style={styles.sigmentos}>
        <Text>SEGMENTOS</Text>

  
        <TouchableOpacity onPress={navegaAgro}>
     <Text>   <MaterialCommunityIcons name="bike-fast" color="black" size={30} /> Agroturismo </Text>
     </TouchableOpacity> 
    

     <TouchableOpacity>
     <Text>   <Feather name="feather" color="black" size={30} /> Agroturismo  </Text>
     </TouchableOpacity> 
      
     <TouchableOpacity>
   <Text>  <Entypo name="address" color="black" size={30} /> Agroturismo </Text>
   </TouchableOpacity>

   <TouchableOpacity>
       <Text>    <FontAwesome name="institution" color="black" size={30} />  Agroturismo </Text>
       </TouchableOpacity>

  <TouchableOpacity>
      <Text>   <Ionicons name="newspaper" color="black"size={30} /> Agroturismo </Text>
      </TouchableOpacity>

     
    

      
      
      
 
      </View>
   
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
 
   
  },
  imagem:{
    height:250,
    width:400,
  },
  texto:{
   textAlign:'center',
   paddingBottom:10,
   paddingTop:10
  },
  card:{
    flexDirection:'column',
    
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  descricao:{
    paddingLeft:10,
    paddingRight:10,
  },
  sigmentos:{
   
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
 
  

})