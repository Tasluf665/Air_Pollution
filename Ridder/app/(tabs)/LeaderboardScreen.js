import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the medal icon

// Reusable User Component
const LeaderboardItem = ({ name, score, isWinner }) => (
    <View style={styles.itemContainer}>
        <View style={styles.userInfo}>
            {isWinner && <MaterialCommunityIcons name="trophy" size={24} color="#FFD700" />}
            <Text style={styles.userName}>{name}</Text>
        </View>
        <Text style={styles.score}>{score}</Text>
    </View>
);

const LeaderboardScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Leaderboard</Text>
            <Text style={styles.subtitle}>You traveled 3000 km this year</Text>
            <Text style={styles.subtitle}>You saved 2591kg of emissions</Text>

            <LeaderboardItem name="Tasluf Morshed" score="3343" isWinner={true} />
            <LeaderboardItem name="AbdulKadir Abubakar" score="3321" />
            <LeaderboardItem name="Angelina" score="2999" />
            <LeaderboardItem name="David" score="2599" />
            <LeaderboardItem name="You" score="0" />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#53B175',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#53B175',
        textAlign: 'center',
        marginBottom: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontSize: 18,
        color: '#53B175',
        marginLeft: 10,
    },
    score: {
        fontSize: 18,
        color: '#53B175',
    },
    button: {
        backgroundColor: '#53B175',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default LeaderboardScreen;
