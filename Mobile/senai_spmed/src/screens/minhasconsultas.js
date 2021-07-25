import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Consultas extends Component {
  constructor(props){
    super(props);
    this.state = {
      listaMinhasConsultas : []
    }
  }

  buscarMinhasConsultas = async () => {
    const resposta = await api.get('/consultas/meus', {
      headers : {
        'Authorization' : 'Bearer ' + await AsyncStorage.getItem('usuario-login')
      }
    })

    this.setState({ listaMinhasConsultas : resposta.data })
  };

  componentDidMount(){
    this.buscarMinhasConsultas();
  };

    render(){
      return (
        <View style={styles.main}>
  
          <FlatList 
            contentContainerStyle={styles.mainBody}
            data={this.state.listaMeusAtendimentos}
            keyExtractor={ item => item.idConsulta }
            renderItem={this.renderItem} // map
          />
          
        </View>
      );
    }

    renderItem = ({ item }) => (

      <View style={styles.mainBodyList}>

        <Text>{item.idConsulta}</Text>
        <Text>{item.idMedicoNavigation.nomeMedico}</Text>
        <Text>{item.idPacienteNavigation.nomePaciente}</Text>
        <Text>{item.descricao}</Text>
        <Text>{Intl.DateTimeFormat("pt-BR", {
          year: 'numeric', month: 'numeric', day: 'numeric',
          hour: 'numeric', minute: 'numeric',
          hour12: false
        }).format(new Date(item.dataAtendimento))}</Text>
        <Text>{item.idSituacaoNavigation.nomeSituacao}</Text>

      </View>

    )
  }

const styles = StyleSheet.create({

  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center'
  },

  mainBody: {
    flex: 1,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },

  mainBodyList: {
    flex: 1,
    width: 300
  }
})