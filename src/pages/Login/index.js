import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Modal } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.areaImage}>
                <Animatable.Image
                    animation="flipInY"
                    duration={1000}
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
                <Text>Alfred</Text>
                <Text>Acessor de agendamento</Text>
            </View>
            <View style={styles.areaInput}>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite seu e-mail cadastrado"
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Digite sua senha"
                    secureTextEntry
                />
                <View style={styles.areaBtn}>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => navigation.navigate('Welcome')}
                    >
                        <Text style={styles.textBtn}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.textBtn}>Novo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.textBtn}>Cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Modal de Cadastro */}
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.areaModal}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite seu e-mail"
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder="Confirme sua senha"
                        secureTextEntry
                    />
                    <View style={styles.areaBtn}>
                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => {
                                // Lógica para salvar em banco
                                setModalVisible(false); // Fechar o modal após o cadastro
                            }}
                        >
                            <Text style={styles.textBtn}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.textBtn}>Novo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => setModalVisible(false)} 
                        >
                            <Text style={styles.textBtn}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C6C6C6',
        padding: 10,
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
    areaInput: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 70,
        width: '100%',
        borderColor: 'black',
        borderWidth: 2,
        padding: 5,
        marginTop: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        fontStyle: 'italic',
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
    btn: {
        padding: 10,
        backgroundColor: "#ffffff",
        width: 'auto',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },
    textBtn: {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    areaModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C6C6C6', 
        padding:10,
    },
});