import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import LT from './Componentes/ListaPlana'



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Princesas da disney</Text>
      <StatusBar style="auto" />
      <LT/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
  title: {
    justifyContent: "center",
    fontSize:30 ,
   },
   
});
