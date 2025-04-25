import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'; 
import * as Animatable from 'react-native-animatable'; 
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();
    const [items, setItems] = useState({});

    // Função para lidar com a seleção de data
    const handleSelectDate = (date, startTime, endTime, subject) => {
        if (!items[date]) {
            items[date] = [];
        }
        items[date].push({ subject, startTime, endTime });
        setItems({ ...items });
    };

    return (
        <View style={styles.container}> 
            <View style={styles.areaImage}>
                <Animatable.Image
                    animation='fadeIn'
                    duration={1000}
                    source={require('../../assets/fatec.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain" 
                />
                <Animatable.Image
                    animation='flipInY'
                    duration={1000}
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%', marginTop: 20 }}
                    resizeMode="contain" 
                />
                <Text style={{fontSize:25, fontStyle:'italic', fontWeight:'bold'}}> Alfred</Text>
            </View>
            
            <View style={styles.areaTexto}>
                <Text style={styles.texto}> Bem vindo(a)!!</Text>
                <Text style={styles.texto}> O que deseja fazer?</Text>
            </View>

            <View style={styles.areaBtn}>
                <TouchableOpacity 
                    style={styles.btnAcao} 
                    onPress={() => navigation.navigate('Agendamento', { onSelectDate: handleSelectDate })}>
                    <Text style={styles.btnTexto}>Agendar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnAcao} 
                    onPress={() => navigation.navigate('Book', { items })}>
                    <Text style={styles.btnTexto}>Consultar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnAcao} 
                    onPress={() => navigation.navigate('Sobre')}>
                    <Text style={styles.btnTexto}>Sobre</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C6C6C6",
        padding: 10,
    },
    areaImage: {
        height: '60%',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
    },
    areaBtn: {
        height: 70,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ff3f48',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
    },
    areaTexto: {
        height: '20%',
        width: '100%',
        backgroundColor: '#C6C6C6',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderColor: 'red',
        paddingStart: 5,
        paddingEnd: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAcao: {
        height: '90%',
        padding: 10,
        backgroundColor: "#ffffff",
        width: 'auto',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },
    btnTexto: {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'black',
    },
    texto: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginTop: '10%',
        fontStyle: 'italic',
        textAlign: 'justify',
    },
});