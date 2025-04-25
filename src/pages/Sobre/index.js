import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.areaImage}>
                <Animatable.Image
                    animation="fadeIn"
                    duration={1000}
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
                <Text style={styles.title}> Alfred </Text>
            </View>
            <View style={styles.areaTexto}>
                <Text style={styles.texto}>
                    Olá! 
                </Text>
                <Text style={styles.texto}>
                    Você está utilizando o Alfred, um aplicativo simples e intuitivo para o agendamento de laboratórios da Fatec, Campus Araçatuba.
                </Text>
                <Text style={styles.texto}>
                    Nosso intuito é facilitar a utilização de laboratórios de uso múltiplo de forma simples e prática, evitando conflitos de agendamentos e transtornos para professores e alunos.
                </Text>
                <Text style={styles.texto}>
                    Este aplicativo foi desenvolvido pela própria instituição através de seu programa de estágio para o curso de ADS - Análise e Desenvolvimento de Sistemas.
                </Text>
            </View>
            <View style={styles.areaBtn}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                    <Text style={styles.textoBtn}> Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#c6c6c6'
    },
    areaImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
    },
    areaTexto: {
        flex: 2,
        backgroundColor: '#ffffff',
        padding: 5,
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 10,
    },
    title: {
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    texto: {
        marginTop: 5,
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'justify',
        padding: 5
    },
    areaBtn: {
        padding: 10,
        alignItems: 'center',
    },
    btn: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth:1
    },
    textoBtn: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
    }
});