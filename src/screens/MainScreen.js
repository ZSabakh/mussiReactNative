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
import { MaterialIcons } from "@expo/vector-icons";

function MainScreen() {
  return (
    <LinearGradient
      colors={["#955EAA", "#A87B93", "#B08888"]}
      style={styles.gradient}
      start={[1.5, 0.4]}
    >
      <StatusBar backgroundColor="#00000090" />
      <SafeAreaView style={styles.container}>
        {/* BEGINNING OF SEARCH BAR */}
        <View style={styles.search}>
          <View style={styles.searchBar}>
            <MaterialIcons
              style={styles.searchIcon}
              name="search"
              size={24}
              color="black"
            />
            <TextInput style={styles.searchInput} />
          </View>
          <View style={styles.searchProfileCircle}>
            <Text style={styles.searchProfileInitials}>ZS</Text>
          </View>
        </View>
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
  search: {
    width: "100%",
    height: 55,
    backgroundColor: "#00000067",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBar: {
    // width: "60%",
    // flexDirection: "row",
    height: 40,
    width: "60%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000080",
    marginHorizontal: 30,
  },
  searchIcon: {
    padding: 5,
  },
  searchInput: {
    // width: "100%",
    // height: 33,
    // backgroundColor: "#00000080",
    // marginHorizontal: 30,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  searchProfileCircle: {
    width: 44,
    height: 44,
    backgroundColor: "white",
    borderRadius: 22,
    marginRight: 30,
    backgroundColor: "rgba(234, 166, 234, 0.84)",
    justifyContent: "center",
  },
  searchProfileInitials: {
    alignSelf: "center",
    fontSize: 22,
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
