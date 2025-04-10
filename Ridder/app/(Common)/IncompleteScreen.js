import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from "../../constent/Colors"

const IncompleteScreen = () => {
    return (
        <View style={styles.container}>
            <MaterialIcons name="construction" size={80} color={Colors.Primary} />
            <Text style={styles.title}>We're Working On It!</Text>
            <Text style={styles.subtitle}>This feature is coming soon</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Secondary,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.Primary,
        marginVertical: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: Colors.DarkGray,
        textAlign: 'center',
        marginHorizontal: 40,
    },
});

export default IncompleteScreen;