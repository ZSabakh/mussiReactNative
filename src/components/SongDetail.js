import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { Logo } from "react";

function SongDetail(props) {
  return (
    <View style={styles.songContainer}>
      <Image style={styles.songImage} source={Logo} />
      <View style={styles.songTextContainer}>
        <Text style={styles.songText1}>Song Title</Text>
        <Text style={styles.songText2}>Song Info</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  songContainer: {
    width: "98%",
    alignSelf: "center",
    borderColor: "red",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 17,
    borderTopWidth: 3,
    borderColor: "red",
    borderBottomWidth: 3,
  },
  songImage: {
    width: 110,
    height: 100,
    backgroundColor: "red",
    borderColor: "blue",
    borderWidth: 3,
    marginVertical: 5,
  },
  songTextContainer: {
    marginLeft: 30,
  },
  songText1: {
    fontSize: 20,
    color: "#D5F9DE",
  },
  songText2: {
    color: "#A6F2B9",
  },
});

export default SongDetail;
