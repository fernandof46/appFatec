import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, TouchableOpacity, TextInput } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['br'] = {
    monthNames: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    dayNamesShort: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    today: "Hoje"
};
LocaleConfig.defaultLocale = 'br';

export default function Agendamento() {
    const [selected, setSelected] = useState(''); 
    const [modalVisible, setModalVisible] = useState(false);
    const [startTime, setStartTime] = useState(''); // Inicialize startTime
    const [endTime, setEndTime] = useState('');
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0];

    const formatDate = (dateString) => {
        const [year, month,day] = dateString.split('-');
        return `${day}-${month}-${year}`;
    }

    const handleDayPress = (day) => {
        const formattedDate = formatDate(day.dateString);
        setSelected(formattedDate);
        setModalVisible(true);
        setStartTime(''); // Limpa os campos ao abrir o modal
        setEndTime('');
    };

    const handleSave = () => {
        // Lógica para salvamento dos dados no DB
        console.log(`Agenda para ${selected}: ${startTime} - ${endTime}`);
        setModalVisible(false);
    };

    const handleClear = () => {
        setStartTime('');
        setEndTime('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.areaCalendario}>
                <Calendar
                    current={currentDate}
                    minDate={currentDate}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: 'black',
                        selectedDayBackgroundColor: '#ff0000',
                        todayTextColor: 'black',
                        dayTextColor: 'black',
                        textDisabledColor: 'grey',
                    }}
                    onDayPress={handleDayPress}
                    markedDates={{
                        [selected]: {
                            selected: true,
                            disableTouchEvent: true,
                            selectedDotColor: 'red',
                            selectedColor: '#ff3f48',
                        }
                    }}
                />
            </View>

            <Modal
                animationType="slide"
                transparent={true} // Mude para true para fundo semi-transparente
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.areaModal}>
                    <View style={styles.dadosModal}>
                        <Text style={styles.textoTitulo}>Agenda do dia {selected}</Text>
                        <View style={styles.areaInput}>
                            <Text style={styles.texto}>Início:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="00:00"
                                value={startTime}
                                onChangeText={setStartTime}
                            />
                            <Text style={styles.texto}>Fim:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="00:00"
                                value={endTime}
                                onChangeText={setEndTime}
                            />
                        </View>
                        <View style={styles.areaInput}>
                            <Text style={styles.texto}>Assunto</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Título da disciplina"
                               
                            />
                            
                        </View>
                        <View style={styles.areaBtn}>
                            <TouchableOpacity style={styles.btn} onPress={handleSave}>
                                <Text style={styles.texto}>Salvar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={handleClear}>
                                <Text style={styles.texto}>Limpar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(false)}>
                                <Text style={styles.texto}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C6C6C6',
        padding: 10,
    },
    areaCalendario: {
        borderWidth: 2,
        borderColor: 'black',
        height: '100%', 
        width: '100%',
    },
    areaModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(198, 198, 198, 0.8)', // Fundo semi-transparente
        padding: 10,
    },
    dadosModal: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    textoTitulo: {
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
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
});