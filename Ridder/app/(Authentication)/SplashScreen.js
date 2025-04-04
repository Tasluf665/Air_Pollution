import { StyleSheet, View, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Import the icon library

import Colors from "../../constent/Colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const SplashScreen = () => {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            router.replace("HomeScreen");
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={Colors.Primary} // Match background color
                barStyle="light-content" // Light icons for dark background
            />
            <MaterialCommunityIcons name="bike" size={hp("15%")} color="#fff" style={styles.icon} />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Primary,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        alignSelf: "center",
    },
});