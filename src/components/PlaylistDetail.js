import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function PlaylistDetail() {
  return (
    <TouchableOpacity>
      <View style={styles.detailContainer}>
        <ImageBackground
          style={styles.detailImage}
          source={{ uri: "https://i.redd.it/xulalkv9uat11.jpg" }}
        >
          <View style={styles.detailDarken}></View>
        </ImageBackground>

        <View style={styles.detailLogo}>
          <FontAwesome name="random" size={40} color="#FAF3DD" />
        </View>
        <Text style={styles.detailText}>Random</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    height: 135,
    width: 125,
    backgroundColor: "pink",
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: "center",
  },
  detailImage: {
    ...StyleSheet.absoluteFillObject,
  },
  detailDarken: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  detailLogo: {
    position: "absolute",
    alignSelf: "center",
    top: 40,
  },
  detailText: {
    alignSelf: "center",
    top: 40,
    color: "#FAF3DD",
    fontSize: 15,
  },
});

export default PlaylistDetail;
