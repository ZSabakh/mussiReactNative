import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  View,
  SafeAreaView,
  Image,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import Search from "../components/Search";
import SongDetail from "../components/SongDetail";
import { FlatList } from "react-native-gesture-handler";

const songs = [
  {
    title: "Biceps Triceps",
    info: "Workout song",
    image: require("../../assets/music.jpg"),
    uri: "https://www.mboxdrive.com/biceps.mp3",
  },
  {
    title: "The Lawyer - I wanna MMM",
    info: "Mmmmm...",
    image: require("../../assets/music.jpg"),
    uri: "https://www.mboxdrive.com/mmii.mp3",
  },
];

export default class PlayListScreen extends React.Component {
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: true,
  };

  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true,
      });

      this.loadAudio();
    } catch (e) {
      console.log(e);
    }
  }

  async loadAudio() {
    const { currentIndex, isPlaying, volume } = this.state;

    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: songs[currentIndex].uri,
      };

      const status = {
        shouldPlay: isPlaying,
        volume: volume,
      };

      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);
      this.setState({
        playbackInstance,
      });
    } catch (e) {
      console.log(e);
    }
  }

  onPlaybackStatusUpdate = (status) => {
    this.setState({
      isBuffering: status.isBuffering,
    });
  };

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state;
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();

    this.setState({
      isPlaying: !isPlaying,
    });
  };

  handlePreviousTrack = async () => {
    let { playbackInstance, currentIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      this.setState({
        currentIndex: currentIndex === 0 ? songs.length - 1 : currentIndex - 1,
      });
      this.loadAudio();
    }
  };

  handleNextTrack = async () => {
    let { playbackInstance, currentIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      this.setState({
        currentIndex:
          currentIndex + 1 > songs.length - 1 ? 0 : currentIndex + 1,
      });
      this.loadAudio();
    }
  };

  handleCustomTrack = async (songIndex) => {
    let { playbackInstance, currentIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      this.setState({
        currentIndex: songIndex,
      });
      this.loadAudio();
    }
  };

  render() {
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
            <FlatList
              data={songs}
              keyExtractor={(song) => song.uri}
              renderItem={({ item, index }) => {
                return (
                  <SongDetail
                    songInfo={item}
                    onPress={() => {
                      if (!this.state.isPlaying) {
                        this.handlePlayPause();
                        this.handleCustomTrack(index);
                        console.log("case 1");
                      } else if (
                        this.state.isPlaying &&
                        this.state.currentIndex == index
                      ) {
                        this.handlePlayPause();
                        console.log("case 2");
                      } else {
                        this.handleCustomTrack(index);
                        console.log("case 3");
                      }
                    }}
                  />
                );
              }}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
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
