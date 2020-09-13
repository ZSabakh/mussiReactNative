import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Search from "../components/Search";
import SongDetail from "../components/SongDetail";
import { Audio } from "expo-av";

const songs = [
  {
    title: "Song title",
    info: "Song info",
    image: require("../../assets/music.jpg"),
  },
];
function PlayListScreen() {
  return (
    <LinearGradient
      colors={["#955EAA", "#A87B93", "#B08888"]}
      style={styles.gradient}
      start={[1.5, 0.4]}
    >
      <ExpoStatusBar backgroundColor="#00000090" />
      <SafeAreaView style={styles.container}>
        {/* BEGINNING OF SEARCH BAR */}
        <Search />
        {/* END OF SEARCHBAR */}
        <View style={styles.contentContainer}>
          <SongDetail songInfo={songs[0]} />
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
    width: "90%",
    marginTop: "2%",
    height: "100%",
    backgroundColor: "#00000080",
    alignSelf: "center",

    borderColor: "red",
  },
});

export default PlayListScreen;
