import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from "expo-router";

// Reusable Input Component
const InputField = ({ label, placeholder, value, onChange, isDropdown = false, dropdownData = [] }) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        {isDropdown ? (
            <Picker
                selectedValue={value}
                style={styles.input}
                onValueChange={(itemValue) => onChange(itemValue)}
            >
                {dropdownData.map((item, index) => (
                    <Picker.Item key={index} label={item} value={item} />
                ))}
            </Picker>
        ) : (
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
            />
        )}
    </View>
);

const HomeScreen = () => {
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('2024/09/02');
    const [time, setTime] = useState('09:24 AM');
    const router = useRouter();

    const sourceOptions = ['Islamabad', 'Karachi', 'Lahore', 'Peshawar'];
    const destinationOptions = ['Karachi', 'Islamabad', 'Lahore', 'Peshawar'];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../../assets/images/google-map-image.jpeg')} // Replace with your Google Map background image
                style={styles.backgroundImage}
            />
            <View style={styles.formContainer}>
                <InputField
                    label="Source"
                    value={source}
                    onChange={setSource}
                    isDropdown={true}
                    dropdownData={sourceOptions}
                />
                <InputField
                    label="Destination"
                    value={destination}
                    onChange={setDestination}
                    isDropdown={true}
                    dropdownData={destinationOptions}
                />
                <View style={styles.dateTimeContainer}>
                    <Text style={styles.label}>Date</Text>
                    <TextInput
                        style={styles.input}
                        value={date}
                        onChangeText={setDate}
                        placeholder="Select Date"
                    />
                    <Text style={styles.label}>Time</Text>
                    <TextInput
                        style={styles.input}
                        value={time}
                        onChangeText={setTime}
                        placeholder="Select Time"
                    />
                </View>
                <TouchableOpacity style={styles.findButton} onPress={() => router.push('/HomeScreen/SearchResultScreen')}>
                    <Text style={styles.findButtonText}>Find</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.3,
    },
    formContainer: {
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        color: '#53B175',
        marginBottom: 5,
    },
    input: {
        height: 60,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#53B175',
    },
    dateTimeContainer: {
        marginBottom: 20,
    },
    findButton: {
        backgroundColor: '#53B175',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    findButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
