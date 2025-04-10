import { Stack } from "expo-router";

export default () => {
    return (
        <Stack>
            <Stack.Screen name="NotificationScreen" options={{ title: "Notifications" }} />
            <Stack.Screen name="PaymentScreen" options={{ title: "Payments" }} />
        </Stack>
    );
};
