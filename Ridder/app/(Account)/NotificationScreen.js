import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

// Reusable Notification Component
const NotificationItem = ({ message, isNew }) => (
    <View style={styles.notificationCard}>
        <View style={styles.notificationRow}>
            <Text style={styles.notificationText}>{message}</Text>
            {isNew && <Text style={styles.newBadge}>New</Text>}
        </View>
    </View>
);

export default function NotificationScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <NotificationItem message="You have received a penalty invoice." isNew={true} />
            <NotificationItem message="Payment successfully completed." isNew={false} />
            <NotificationItem message="Payment pending." isNew={true} />
            <NotificationItem message="Low emission zone (LEZ) alert." isNew={false} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    notificationCard: {
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
    notificationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    notificationText: {
        fontSize: 16,
        color: '#53B175',
    },
    newBadge: {
        backgroundColor: '#FFD700',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 5,
        overflow: 'hidden',
    },
});