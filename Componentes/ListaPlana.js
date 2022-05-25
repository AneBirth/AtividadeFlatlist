import React from 'react';
import {View, Text,FlatList,Image,StyleSheet, ImageBackground, ImageBackgroundComponent} from 'react-native'

const princesas =[
  {
    id:'1',
    desc :['Jasmine','Arábia','15','47kg','1,60'],
  },
  {
    id:'2',
    desc:['Ariel','mar','25','50kg','1,90'],
  },
  {
    id:'3',
    desc:['Cinderela','Cairparavel','18','51kg','1,70'],
  },
  {
    id:'4',
    desc:['Fiona','Pantano','23','100kg','2,80'],  
  },
  {
    id:'5',
    desc:['Branca de Neve','Floreta','21','48kg','1,75'],
  },
  {
    id:'6',
    desc:['Merida','Montanhas','17','60kg','1,80'],
  },
  {
    id:'7',
    desc:['Bela','Castelo','23','65kg','1,85'],
  },

  ]

 
 export default function App() {
    return (
     <View>
         <FlatList
         data={princesas}
         keyExtractor={item=>item.id}
renderItem={({item})=>
<View style={estilos.item}><Text style={estilos.prod}>Nome:  {item.desc[0]},   
    Cidade:  {item.desc[1]},         <View></View> 
         Idade:   {item.desc[2]},
               Peso:  {item.desc[3]},  Altura:{item.desc[4]}</Text></View>}
               />
            </View>
    )
 }

      const estilos=StyleSheet.create({
          item:{
        backgroundColor:'#CD5C5C',
           padding:15,
           marginVertical:8,
           marginHorizontal:16,
          },
          prod:{
              fontSize:15,
              color:'#fff'

          },
          





      })







