import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MainStackNavigator, HomeStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
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
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Main" component={MainStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
