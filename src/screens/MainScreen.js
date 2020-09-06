import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  Platform,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Search from "../components/Search";

function MainScreen() {
  return (
    <LinearGradient
      colors={["#955EAA", "#A87B93", "#B08888"]}
      style={styles.gradient}
      start={[1.5, 0.4]}
    >
      <SafeAreaView style={styles.container}>
        {/* BEGINNING OF SEARCH BAR */}
        <Search />
        {/* END OF SEARCHBAR */}
        <View style={styles.contentContainer}>
          <Text>Main screen!</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    height: "100%",
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  contentContainer: {
    width: "85%",
    marginTop: "2%",
    height: "100%",
    backgroundColor: "#00000080",
    alignSelf: "center",

    borderColor: "red",
  },
});

export default MainScreen;
