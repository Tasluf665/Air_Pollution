import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons"; // Import icons
import { router } from "expo-router";

// Reusable Result Component
const ResultItem = ({ time, duration, distance, description, emission }) => (
  <View style={styles.resultItem}>
    <Text style={styles.resultText}>
      {time} | {duration} | {distance} - {description}
    </Text>
    <View style={styles.iconContainer}>
      <Text style={styles.greenIcon}>🌱</Text>
      <Text style={styles.greenIcon}>🌱</Text>
      <Text style={{ ...styles.resultText, ...{ marginLeft: 15 } }}>{emission}</Text>
    </View>
  </View>
);

// Tab views for different result types
const TrainTab = () => (
  <ScrollView>
    <ResultItem
      time="8 a.m"
      duration="1 hour"
      distance="50m away"
      description="from destination"
      emission={"- 15% less emission + 60 GP"}

    />
    <ResultItem
      time="9 a.m"
      duration="1 hour"
      distance="50m away"
      description="from destination"
      emission={"- 12% less emission + 50 GP"}
    />
    <ResultItem
      time="10 a.m"
      duration="30m then 45m via bus"
      description="via bus"
      emission={"- 18% less emission + 65 GP"}
    />
  </ScrollView>
);

const BusTab = () => (
  <ScrollView>
    <ResultItem
      time="8 a.m"
      duration="1 hour 30m"
      distance="10m away from destination"
      description="from destination"
      emission={"- 15% less emission + 60 GP"}
    />
    <ResultItem
      time="9 a.m"
      duration="1 hour 30m"
      distance="50m away from destination"
      description="from destination"
      emission={"- 12% less emission + 50 GP"}
    />
    <ResultItem
      time="10 a.m"
      duration="30m then 45m via bus"
      description="via bus"
      emission={"- 18% less emission + 65 GP"}
    />
  </ScrollView>
);

const CarTab = () => (
  <ScrollView>
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push("/ProfileScreen")}
    >
      <Text style={styles.driverName}>#Mohammad Shayan</Text>
      <Text style={styles.time}>8 AM</Text>
      <Text style={styles.otherInfo}>
        Ferrari GTR, 2/4 bookings left, $2/day
      </Text>
      <View style={styles.iconContainer}>
        <Text style={styles.yellowIcon}>🌱</Text>
        <Text style={{ ...styles.resultText, ...{ marginLeft: 15 } }}>- 4% less emission + 12 GP</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push("/ProfileScreen")}
    >
      <Text style={styles.driverName}>#Melissa Puerto</Text>
      <Text style={styles.time}>9 AM</Text>
      <Text style={styles.otherInfo}>BMW M3, 1/8 bookings left, $20/day</Text>
      <View style={styles.iconContainer}>
        <Text style={styles.greenIcon}>🌱</Text>
        <Text style={{ ...styles.resultText, ...{ marginLeft: 15 } }}>- 5% less emission + 15 GP</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push("/ProfileScreen")}
    >
      <Text style={styles.driverName}>#AbdulKadir Abubakar</Text>
      <Text style={styles.time}>8 AM</Text>
      <Text style={styles.otherInfo}>
        Bugatti Veyron, 2/2 bookings left, $0.25/day
      </Text>
      <View style={styles.iconContainer}>
        <Text style={styles.redIcon}>🌱</Text>
        <Text style={styles.redIcon}>🌱</Text>
        <Text style={{ ...styles.resultText, ...{ marginLeft: 15 } }}>- 10% less emission + 25 GP</Text>
      </View>
    </TouchableOpacity>
  </ScrollView>
);

const PeopleTab = () => (
  <ScrollView>
    <View style={styles.card}>
      <Text style={styles.name}>Salim Lawal</Text>
      <Text style={styles.time}>8 AM</Text>
      <TouchableOpacity
        style={styles.connectButton}
        onPress={() => router.push("/ExploreScreen")}
      >
        <Text style={styles.connectButtonText}>Connect</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.card}>
      <Text style={styles.name}>Hatef Shamshiri</Text>
      <Text style={styles.time}>8 AM</Text>
      <TouchableOpacity
        style={styles.connectButton}
        onPress={() => router.push("/ExploreScreen")}
      >
        <Text style={styles.connectButtonText}>Connect</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.card}>
      <Text style={styles.name}>Early Birds Karachi to Islamabad</Text>
      <TouchableOpacity
        style={styles.connectButton}
        onPress={() => router.push("/ExploreScreen")}
      >
        <Text style={styles.connectButtonText}>Join Group</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

// Main Screen with Tab View and Search Bar
const SearchResultScreen = () => {
  const [source, setSource] = useState("Islamabad");
  const [destination, setDestination] = useState("Karachi");

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "train",
      title: "Train",
      icon: <FontAwesome name="train" size={24} color="#53B175" />,
    },
    {
      key: "bus",
      title: "Bus",
      icon: <MaterialIcons name="directions-bus" size={24} color="#53B175" />,
    },
    {
      key: "car",
      title: "Car",
      icon: <FontAwesome name="car" size={24} color="#53B175" />,
    },
    {
      key: "people",
      title: "People",
      icon: <Ionicons name="people" size={24} color="#53B175" />,
    },
  ]);

  const renderScene = SceneMap({
    train: TrainTab,
    bus: BusTab,
    car: CarTab,
    people: PeopleTab,
  });

  const renderTabBar = (props) => (
    <View style={styles.tabBar}>
      {props.navigationState.routes.map((route, i) => (
        <View
          key={route.key}
          style={[styles.tabItem, index === i && styles.activeTabItem]}
          onStartShouldSetResponder={() => {
            setIndex(i);
            return true;
          }}
        >
          {route.icon}
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={source}
          onChangeText={setSource}
          placeholder="Search source"
          placeholderTextColor="#bbb"
        />
        <TextInput
          style={styles.input}
          value={destination}
          onChangeText={setDestination}
          placeholder="Search destination"
          placeholderTextColor="#bbb"
        />
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: 300 }}
        style={styles.tabView}
      />
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  searchContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
    color: "#53B175",
  },
  tabView: {
    marginBottom: 50,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f9f9f9",
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  activeTabItem: {
    backgroundColor: "#e6f7e6",
    borderRadius: 10,
  },
  resultItem: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    width: "98%",
    alignSelf: "center",

  },
  resultText: {
    fontSize: 16,
    color: "#53B175",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    alignItems: "center",
  },
  greenIcon: {
    fontSize: 20,
    color: "#53B175",
    marginRight: 5,
  },
  yellowIcon: {
    fontSize: 20,
    color: "#FFD700",
    marginRight: 5,
  },
  redIcon: {
    fontSize: 20,
    color: "#FF0000",
    marginRight: 5,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // For Android shadow
    width: "98%",
    alignSelf: "center",
  },
  driverName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#53B175",
    marginBottom: 5,
  },
  otherInfo: {
    fontSize: 12,
    color: "#777",
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#53B175",
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: "#555",
  },
  connectButton: {
    backgroundColor: "#53B175",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 10,
  },
  connectButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SearchResultScreen;
