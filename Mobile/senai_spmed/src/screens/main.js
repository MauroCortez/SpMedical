import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Atendimentos from '../screens/minhasconsultas';
import Perfil from '../screens/perfil';

const bottomTab = createBottomTabNavigator();

export default class Main extends Component {
 render(){
   return (
     <View style={styles.main}>

       <bottomTab.Navigator
           initialRouteName = 'Consultas'
           tabBarOptions={{
               // activeBackgroundColor: '#B727FF',
               // inactiveBackgroundColor: '#DD99FF',
               // activeTintColor: 'red',
               // inactiveTintColor: 'green',
           }}
       >
           <bottomTab.Screen name='Consultas' component={Consultas} />
           <bottomTab.Screen name='Perfil' component={Perfil} />
       </bottomTab.Navigator>
       
     </View>
   );
 }
}

const styles = StyleSheet.create({

 // conteúdo da main
 main: {
   flex: 1,
   backgroundColor: '#F1F1F1'
 },
 // cabeçalho
 mainHeader: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 },
 mainHeaderRow: {
   flexDirection: 'row'
 },
 // imagem do cabeçalho
 mainHeaderImg: {
   width: 22,
   height: 22,
   tintColor: '#ccc',
   marginRight: -5,
   marginTop: -12
 },
 // texto do cabeçalho
 mainHeaderText: {
   fontSize: 16,
   letterSpacing: 5,
   color: '#999',
   fontFamily: 'Open Sans'
 },
 // linha de separação do cabeçalho
 mainHeaderLine: {
   width: 220,
   paddingTop: 10,
   borderBottomColor: '#999',
   borderBottomWidth: 1
 },

 // conteúdo do body
 mainBody: {
   flex: 4,
   alignItems: 'center',
   justifyContent: 'space-between'
 },
 // informações do usuário
 mainBodyInfo: {
   alignItems: 'center'
 },
 mainBodyImg: {
   backgroundColor: '#ccc',
   width: 100,
   height: 100,
   borderRadius: 50,
   marginBottom: 50
 },
 mainBodyText: {
   color: '#999',
   fontSize: 16,
   marginBottom: 20
 },
 // botão de logout
 btnLogout: {
   alignItems: "center",
   justifyContent: "center",
   height: 80,
   width: 240,
   borderTopWidth: 1,
   borderColor: "#ccc",
   marginBottom: 50
 },
 // texto do botão
 btnLogoutText: {
   fontSize: 16,
   fontFamily: "Open Sans",
   color: "#B727FF"
 }

});