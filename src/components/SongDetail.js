import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function SongDetail(props) {
  return (
    <TouchableOpacity onPress={props.songInfo.play}>
      <View style={styles.songContainer}>
        <Image style={styles.songImage} source={props.songInfo.image} />
        <View style={styles.songTextContainer}>
          <Text style={styles.songText1}>{props.songInfo.title}</Text>
          <Text style={styles.songText2}>{props.songInfo.info}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    borderColor: "#E02500",
    borderBottomWidth: 3,
  },
  songImage: {
    width: 110,
    height: 100,
    borderColor: "rgba(151, 109, 171, 0.33)",
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
