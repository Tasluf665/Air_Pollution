import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the checkmark icon

// Reusable Calendar Component
const CalendarComponent = ({ selectedDates, onDateSelect }) => (
    <Calendar
        markedDates={selectedDates}
        onDayPress={(day) => onDateSelect(day)}
        markingType={'simple'}
        theme={{
            todayTextColor: '#53B175',
            selectedDayBackgroundColor: '#53B175',
            selectedDayTextColor: '#fff',
            arrowColor: '#53B175',
            monthTextColor: '#53B175',
        }}
    />
);

const CalendarScreen = () => {
    const [selectedDates, setSelectedDates] = useState({});

    const handleDateSelect = (day) => {
        const selected = { ...selectedDates };
        const dateString = day.dateString;

        if (selected[dateString]) {
            delete selected[dateString]; // Deselect if already selected
        } else {
            selected[dateString] = {
                selected: true,
                selectedColor: '#53B175',
                selectedTextColor: '#fff',
            };
        }

        setSelectedDates(selected);
    };

    const handleBooking = () => {
        console.log('Booking selected days:', selectedDates);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <CalendarComponent selectedDates={selectedDates} onDateSelect={handleDateSelect} />

            <Text style={styles.infoText}>You will save 1kg Carbon emission</Text>

            <TouchableOpacity style={styles.bookingButton} onPress={handleBooking}>
                <Text style={styles.buttonText}>Book Selected Days</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#53B175',
        textAlign: 'center',
        marginBottom: 20,
    },
    infoText: {
        fontSize: 16,
        color: '#53B175',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    bookingButton: {
        backgroundColor: '#53B175',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default CalendarScreen;
