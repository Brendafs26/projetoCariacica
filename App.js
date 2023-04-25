import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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
export default function App() {
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
      <StatusBar style="auto" />
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
