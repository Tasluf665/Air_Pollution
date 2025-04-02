import { Stack } from "expo-router";

export default () => {
    return (
        <Stack
            initialRouteName="SplashScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="SplashScreen" />
            <Stack.Screen name="WelcomeScreen" />
            <Stack.Screen name="LoginScreen" />
            <Stack.Screen name="SignupScreen" />
        </Stack>
    );
};
