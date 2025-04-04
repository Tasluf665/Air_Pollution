import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import Colors from "../../constent/Colors";

export default function AccountScreen() {

    return (
        <ScrollView style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Text style={styles.profileName}>Ishan</Text>
                <Text style={styles.profileEmail}>ishan@gmail.com</Text>
            </View>

            {/* Menu Options */}
            <View style={styles.menuSection}>
                <MenuItem onPress={() => { }} icon={<MaterialIcons name="person-outline" size={24} color="black" />} title="My Details" />
                <MenuItem onPress={() => { }} icon={<Ionicons name="location-outline" size={24} color="black" />} title="Address" />
                <MenuItem onPress={() => { }} icon={<Feather name="credit-card" size={24} color="black" />} title="Payment Methods" />
                <MenuItem onPress={() => { }} icon={<MaterialIcons name="local-offer" size={24} color="black" />} title="Promo Code" />
                <MenuItem onPress={() => { }} icon={<Ionicons name="notifications-outline" size={24} color="black" />} title="Notifications" />
                <MenuItem onPress={() => { }} icon={<Ionicons name="help-circle-outline" size={24} color="black" />} title="Help" />
                <MenuItem onPress={() => { }} icon={<Ionicons name="information-circle-outline" size={24} color="black" />} title="About" />
            </View>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton} onPress={() => { }}>
                <Ionicons name="log-out-outline" size={20} color={Colors.Primary} />
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const MenuItem = ({ icon, title, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.menuItem}>
        {icon}
        <Text style={styles.menuItemText}>{title}</Text>
        <Ionicons name="chevron-forward-outline" size={20} color="gray" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    profileSection: {
        marginBottom: 20,
        backgroundColor: Colors.Secondary,
        borderRadius: 10,
        paddingHorizontal: wp(5),
        paddingVertical: hp(3),
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        alignItems: "center",
        marginTop: 10
    },
    profileName: {
        fontSize: 18,
    },
    profileEmail: {
        fontSize: 14,
        color: Colors.DarkGray
    },
    editIcon: {
        marginLeft: "auto",
    },
    menuSection: {
        marginBottom: 30,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#EAEAEA",
    },
    menuItemText: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
        paddingVertical: 15,
        borderRadius: 10,
    },
    logoutText: {
        fontSize: 16,
        color: Colors.Primary,
        marginLeft: 10,
    },
});