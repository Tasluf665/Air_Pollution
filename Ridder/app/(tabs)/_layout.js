import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import Colors from "../../constent/Colors";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.Primary,
            tabBarInactiveTintColor: Colors.DarkGray,
        }}>
            <Tabs.Screen
                name="HomeScreen"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="ExploreScreen"
                options={{
                    title: "Explore",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
                }}
            />
            <Tabs.Screen
                name="LeaderboardScreen"
                options={{
                    title: "Leaderboard",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Entypo name="globe" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="RewardScreen"
                options={{
                    title: "Reward",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialIcons name="monetization-on" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="AccountScreen"
                options={{
                    title: "Account",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
};
