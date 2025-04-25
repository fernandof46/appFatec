import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, TouchableOpacity, TextInput } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// Configurando o Locale
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

export default function Agendamento({ route }) {
    const { onSelectDate } = route.params;
    const [selectedDate, setSelectedDate] = useState(''); 
    const [modalVisible, setModalVisible] = useState(false);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [subject, setSubject] = useState('');

    const today = new Date();
    const currentDate = today.toISOString().split('T')[0];
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 15);
    const formattedMaxDate = maxDate.toISOString().split('T')[0];

    const markedDates = {};
    let dateCursor = new Date(currentDate);

    // Marca as datas clicáveis
    while (dateCursor <= maxDate) {
        const dateString = dateCursor.toISOString().split('T')[0];
        markedDates[dateString] = { enabled: true };
        dateCursor.setDate(dateCursor.getDate() + 1);
    }

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}-${month}-${year}`;
    };

    const handleDayPress = (day) => {
        setSelectedDate(formatDate(day.dateString));
        setModalVisible(true);
        setStartTime('');
        setEndTime('');
        setSubject('');
    };

    const handleSave = () => {
        onSelectDate(selectedDate, startTime, endTime, subject); // Chama a função para salvar os dados
        setModalVisible(false);
    };

    const handleClear = () => {
        setStartTime('');
        setEndTime('');
        setSubject('');
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.areaCalendario}>
                <Calendar
                    current={currentDate}
                    minDate={currentDate}
                    maxDate={formattedMaxDate}
                    markedDates={markedDates}
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
                />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.areaModal}>
                    <View style={styles.dadosModal}>
                        <Text style={styles.textoTitulo}>Agenda do dia {selectedDate}</Text>
                        <View style={styles.areaInput}>
                            <Text style={styles.texto}>Início:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="00:00"
                                value={startTime}
                                onChangeText={setStartTime}
                                keyboardType='numeric'
                            />
                            <Text style={styles.texto}>Fim:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="00:00"
                                value={endTime}
                                onChangeText={setEndTime}
                                keyboardType='numeric'
                            />
                        </View>
                        <View style={styles.areaInput}>
                            <Text style={styles.texto}>Assunto</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Título da disciplina"
                                value={subject}
                                onChangeText={setSubject}
                            />
                        </View>
                        <View style={styles.areaBtn}>
                            <TouchableOpacity
                             style={styles.btn}
                             onPress={handleSave}>
                                <Text style={styles.texto}>Salvar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                             style={styles.btn} 
                             onPress={handleClear}>
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
        backgroundColor: 'rgba(198, 198, 198, 0.8)',
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