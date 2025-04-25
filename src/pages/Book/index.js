import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';

export default function Book({ route }) {
    const { items } = route.params;

    const formattedItems = Object.keys(items).reduce((acc, date) => {
        acc[date] = items[date].map(item => ({
            name: item.subject,
            startTime: item.startTime,
            endTime: item.endTime,
        }));
        return acc;
    }, {});

    const renderItem = (item) => (
        <View style={styles.item}>
            <Text>{item.name}: {item.startTime} - {item.endTime}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Agenda
                items={formattedItems}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 5,
    },
});