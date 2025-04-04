import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the user and car icons
import { router } from 'expo-router';

// Reusable User and Booking Components
const BookingDetails = ({ label, value }) => (
    <View style={styles.detailContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            value={value}
            editable={false}
        />
    </View>
);

const ProfileScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.iconRow}>
                    <MaterialCommunityIcons name="account-circle" size={50} color="#53B175" />
                    <MaterialCommunityIcons name="car" size={50} color="#53B175" style={styles.carIcon} />
                </View>
                <Text style={styles.userName}>Tasluf Morshed</Text>
            </View>

            <Text style={styles.rating}>⭐ 4.5/5 Stars</Text>

            <BookingDetails label="Pickup" value="5m away (walk) - Pocoria 5A" />
            <BookingDetails label="Destination" value="10m away - City Center" />

            <Text style={styles.label}>Comments</Text>
            <TextInput
                style={styles.commentInput}
                value="Lorem ipsum dolor sit amet, consectetur adipiscing"
                editable={false}
                multiline={true}
            />

            <TouchableOpacity style={styles.bookingButton} onPress={() => router.push('/CalendarScreen')}>
                <Text style={styles.buttonText}>Booking</Text>
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
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#53B175',
        marginTop: 10,
    },
    rating: {
        fontSize: 18,
        color: '#53B175',
        textAlign: 'center',
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        color: '#53B175',
        marginBottom: 5,
    },
    detailContainer: {
        marginBottom: 15,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#53B175',
    },
    commentInput: {
        height: 100,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#53B175',
        textAlignVertical: 'top',
    },
    bookingButton: {
        backgroundColor: '#53B175',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    carIcon: {
        marginLeft: 20, // Add spacing between the icons
    },
});

export default ProfileScreen;
