import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Search() {
  return (
    <View style={styles.search}>
      <View style={styles.searchBar}>
        <MaterialIcons
          style={styles.searchIcon}
          name="search"
          size={24}
          color="#FFDEC2"
        />
        <TextInput style={styles.searchInput} />
      </View>
      <View style={styles.searchProfileCircle}>
        <Text style={styles.searchProfileInitials}>ZS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 16,
    color: "#FFE8D4",
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
});

export default Search;
