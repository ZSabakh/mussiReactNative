import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import MainScreen from "./src/screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "Main") {
            iconName = focused ? "ios-musical-notes" : "ios-musical-note";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#E7700D",
        inactiveTintColor: "gray",
        activeBackgroundColor: "#212121",
        style: {
          height: 58,
          //49 default
          borderWidth: 0,
          borderTopWidth: 1,
          borderTopColor: "#151515",
          backgroundColor: "#181818",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarVisible: false }}
      />
      <Tab.Screen name="Main" component={MainScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor="#00000090" /> */}
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
}

export default App;
