import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/TabNavigator";

function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor="#00000090" /> */}
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </View>
  );
}

export default App;
