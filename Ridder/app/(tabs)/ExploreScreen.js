import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the checkmark icon

// Reusable Group/Chat Item Component
const GroupChatItem = ({ groupName, message, onPress, newMessage }) => (
    <TouchableOpacity style={styles.chatContainer} onPress={onPress}>
        <View style={styles.chatInfo}>
            <Text style={styles.chatName}>{groupName}</Text>
            <Text style={styles.participantsCount}>{message}</Text>
        </View>
        {newMessage && (
            <MaterialCommunityIcons name="check-circle" size={24} color="#53B175" />
        )}
    </TouchableOpacity>
);

const ExploreScreen = () => {
    const handleChatPress = (chatName) => {
        console.log(`Opening chat: ${chatName}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Groups and Chats</Text>

            <GroupChatItem
                groupName="Islamabad early risers"
                message="20 participants"
                onPress={() => handleChatPress('Islamabad early risers')}
                newMessage={true}
            />
            <GroupChatItem
                groupName="Karachi early travelers"
                message="5 participants"
                onPress={() => handleChatPress('Karachi early travelers')}
            />
            <GroupChatItem
                groupName="Salim Lawal"
                message="2 new messages"
                onPress={() => handleChatPress('Salim Lawal')}
                newMessage={true}
            />

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
    chatContainer: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 3,
    },
    chatInfo: {
        flex: 1,
    },
    chatName: {
        fontSize: 18,
        color: '#53B175',
    },
    participantsCount: {
        fontSize: 14,
        color: '#53B175',
        marginTop: 5,
    },
});

export default ExploreScreen;
