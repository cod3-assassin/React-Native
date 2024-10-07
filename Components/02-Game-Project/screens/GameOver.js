import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Titel from "../Titel";
import Colors from "../utils/colors";
import PrimaryButton from "../PrimaryButton";

export default function GameOver({ roundsNumber, userNumber, onStartGame }) {
  const { width, height } = useWindowDimensions();
  let imgSize = 300;
  if (width < 380) {
    imgSize = 150;
  }

  if (height < 400) {
    imgSize = 80;
  }

  const imgStyle = {
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.screenConatiner}>
        <Titel>Game Over</Titel>
        <View style={[styles.imageContainer, imgStyle]}>
          <Image style={styles.image} source={require("../img/success.png")} />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your Phone need <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
            rounds to guess the number{" "}
            <Text style={styles.highlight}>{userNumber}</Text>{" "}
          </Text>
          <PrimaryButton onPress={onStartGame}>Start New Game</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  screenConatiner: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary400,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary500,
  },
});
