import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

export default function PaymentScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => console.log('Card Payment selected')}>
                <Text style={styles.paymentTitle}>Card Payment</Text>
                <Text style={styles.paymentDescription}>Pay securely using your credit or debit card.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => console.log('Cash Payment selected')}>
                <Text style={styles.paymentTitle}>Cash</Text>
                <Text style={styles.paymentDescription}>Pay with cash at the time of delivery or service.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => console.log('Bank Transfer selected')}>
                <Text style={styles.paymentTitle}>Bank Transfer</Text>
                <Text style={styles.paymentDescription}>Transfer funds directly from your bank account.</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, // For Android shadow
    },
    paymentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#53B175',
        marginBottom: 5,
    },
    paymentDescription: {
        fontSize: 14,
        color: '#555',
    },
});