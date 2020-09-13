import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button } from "react-native";

function HomeScreen(props) {
  console.log(props.navigation);
  return (
    <View style={styles.container}>
      <Text>Hello !</Text>
      <Button
        title="Go to main !"
        onPress={() => {
          props.navigation.navigate("Main");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
