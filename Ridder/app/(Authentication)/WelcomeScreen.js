import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { router } from "expo-router";

export default function WelcomeScreen() {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            router.replace("ShopScreen");
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <View>
            <Text>WelcomeScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})