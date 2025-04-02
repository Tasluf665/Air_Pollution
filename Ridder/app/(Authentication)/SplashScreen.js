import { StyleSheet, View, Image, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";

import Colors from "../../constent/Colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigation.replace("WelcomeScreen");
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={Colors.Primary} // Match background color
                barStyle="light-content" // Light icons for dark background
            />
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
    logo: {
        width: wp("60%"),
        height: hp("20%"),
        resizeMode: "contain"
    },
});
