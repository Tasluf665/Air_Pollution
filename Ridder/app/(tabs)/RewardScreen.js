import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the reward icon

// Reusable Reward Component
const RewardItem = ({ description, points, onRedeem }) => (
    <View style={styles.rewardContainer}>
        <View style={styles.rewardInfo}>
            <Text style={styles.rewardDescription}>{description}</Text>
            <MaterialCommunityIcons name="tag" size={24} color="#53B175" style={styles.icon} />
        </View>
        <TouchableOpacity style={styles.redeemButton} onPress={onRedeem}>
            <Text style={styles.redeemText}>Redeem for {points}pts</Text>
        </TouchableOpacity>
    </View>
);

const PerksAndRewardsPage = () => {
    const handleRedeem = (points) => {
        console.log(`Redeeming for ${points} points!`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Perks and Rewards</Text>

            <RewardItem
                description="Enjoy 50% less on green fuel from X company"
                points={2500}
                onRedeem={() => handleRedeem(2500)}
            />
            <RewardItem
                description="Enjoy 500 rs cashback @ LIDL"
                points={500}
                onRedeem={() => handleRedeem(500)}
            />
            <RewardItem
                description="Enjoy 50% less on green fuel from X company"
                points={2500}
                onRedeem={() => handleRedeem(2500)}
            />
            <RewardItem
                description="Enjoy 500 rs cashback @ LIDL"
                points={500}
                onRedeem={() => handleRedeem(500)}
            />

            {/* Add more rewards as needed */}

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
    rewardContainer: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 3,
        width: '90%',
        alignSelf: 'center',
    },
    rewardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,

    },
    rewardDescription: {
        fontSize: 16,
        color: '#53B175',
        flex: 1,
    },
    redeemButton: {
        backgroundColor: '#53B175',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    redeemText: {
        color: '#fff',
        fontSize: 16,
    },
    icon: {
        marginRight: 10,

    },
});

export default PerksAndRewardsPage;
