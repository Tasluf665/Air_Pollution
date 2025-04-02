import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Colors from "../../constent/Colors";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.Primary,
            tabBarInactiveTintColor: Colors.DarkGray,
        }}>
            <Tabs.Screen
                name="ShopScreen"
                options={{
                    title: "Shop",
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
                name="CartScreen"
                options={{
                    title: "Cart",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
                }}
            />
            <Tabs.Screen
                name="FavouriteScreen"
                options={{
                    title: "Favorites",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="star" color={color} />,
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
