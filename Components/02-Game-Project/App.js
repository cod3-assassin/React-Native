import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import React from "react";
import GameScreen from "./screens/GameScreen";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./utils/colors";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameisOver, setGameisOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  // const [fontsLoaded] = useFonts({
  //   "open-sans": require("./Components/02-Game-Project/font/OpenSans-Regular.ttf"),
  //   "sans-bold": require("./Components/02-Game-Project/font/OpenSans-Bold.ttf"),
  // });

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameisOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGameisOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGame onConfirmNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameisOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary400, Colors.accent500]}
      style={styels.rootScreen}
    >
      <ImageBackground
        source={require("./img/background.png")}
        resizeMode="cover"
        style={styels.rootScreen}
        imageStyle={styels.backgroudImg}
      >
        <SafeAreaView style={styels.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styels = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroudImg: {
    opacity: 0.15,
  },
});
