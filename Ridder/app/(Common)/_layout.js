import { Stack } from "expo-router";

export default () => {
    return (
        <Stack
            initialRouteName="ProfileScreen"
        >
            <Stack.Screen
                name="ProfileScreen"
                options={{ title: "Profile" }}
            />
            <Stack.Screen
                name="CalendarScreen"
                options={{ title: "Calendar" }}
            />
        </Stack>
    );
};
