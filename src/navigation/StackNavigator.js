import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MainScreen from "../screens/MainScreen";
import PlayListScreen from "../screens/PlayListScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen
        name="PlayList"
        component={PlayListScreen}
        // options={{ header: null }}
      />
    </Stack.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{ header: null }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, HomeStackNavigator };
