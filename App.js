import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import React from 'react';
import { ScrollView, StyleSheet, Text, View,Image, Pressable,ActivityIndicator } from 'react-native';
// import img7 from './konexio-logo_1.png'
export default function App() {
const [hideLoading, setLoading] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text}>First {/*<text*/} Mobile page </Text>
        <Text style={styles.text}>second {/*<text*/} version of react/react-native lighter not stronger than react js</Text>
        <Text style={styles.text}>Third {/*<text*/} texts to check UI</Text>
      <Pressable onPress={()=>{setLoading(!hideLoading)}} >
        <Text>Press It</Text>
      </Pressable>
      {hideLoading ? <Text>{hideLoading}</Text> : <ActivityIndicator  size='large' color='#111'/>}
      </View> 
      <Image 
   
      source={{uri:'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png'}}
      style={{width:400, height:100, margin:'auto'}}/>
       
    </ScrollView>
  )
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'navy',
    width: '100%', 
    display:"flex",
    textAlign: 'center',
    alignContent:'center',
    flex:1
  },
  container1: {
    backgroundColor: 'navy',
       width:'100%',
       flex:2
  },
  text: {
    color: 'navy',
    marginTop: 80,
    marginBottom: 80,
    fontSize: 30,
    textAlign:"center",
    fontWeight:'bold',
    backgroundColor:'violet',
    

  }
})
