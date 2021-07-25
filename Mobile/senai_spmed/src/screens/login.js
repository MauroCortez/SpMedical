import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

import api from '../services/api';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            errorMessage : ''
        }
    }

    realizarLogin = async () => {
        console.warn( this.state.email + ' ' + this.state.senha );

        const resposta = await api.post('/login', {
            email : this.state.email,
            senha : this.state.senha
        });

        const token = resposta.data.token;
        console.warn(token);

        await AsyncStorage.setItem('usuario-login', token);


        if (jwtDecode(token).role !== '1') {
            this.props.navigation.navigate('Main')            
        }

        else {
            this.setState({ errorMessage : 'Você não tem permissão para acessar' })
        }

    }

    render(){
        return(
            <View style={styles.main}>

                <TextInput
                    // E-mail
                    style={styles.inputLogin}
                    placeholder='username'
                    keyboardType='email-address'
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput 
                    // Senha
                    style={styles.inputLogin}
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={senha => this.setState({ senha })}
                />

                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={this.realizarLogin}
                >
                    <Text>entrar</Text>
                </TouchableOpacity>

                <Text style={{ color : 'red' }}>{this.state.errorMessage}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main : {
        height : '100%',
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center'
    }
})