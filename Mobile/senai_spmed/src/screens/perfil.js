import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Perfil extends Component {

  realizarLogout = async () => {
      await AsyncStorage.removeItem('usuario-login');

      this.props.navigation.navigate('Login')
  }


    render(){
      return (
        <View style={styles.main}>
  
          <Text>Perfil</Text>

          <TouchableOpacity
              style={styles.btnLogin}
              onPress={this.realizarLogout}
          >
              <Text>sair</Text>
          </TouchableOpacity>
          
        </View>
      );
    }
  }

const styles = StyleSheet.create({

  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems : 'center',
    justifyContent : 'center'
  }
})