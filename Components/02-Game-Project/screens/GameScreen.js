import {
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Title from "../Titel";
import NumberContainer from "../NumberContainer";
import PrimaryButton from "../PrimaryButton";
import Card from "../Card";
import InstructionText from "../InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuesseLog from "../GuesseLog";

function generateRandomBetween(min, max, exlude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exlude) {
    return generateRandomBetween(min, max, exlude);
  } else {
    return rndNum;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  function nextGuessHandler(direction) {
    //direction => "lower" ,"higher"

    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You Know That this is wrong...", [
        { text: "Sorry !", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevRounds) => [newRndNumber, ...prevRounds]);
  }

  const guessRoundsList = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.intructionText}>
          Higher or lower ?
        </InstructionText>
        <View style={styles.buttonsContain}>
          <View style={styles.buttons}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View style={styles.buttons}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttons}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttons}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.scree}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds.map((round, index) => (
          <Text key={index}>{round}</Text>
        ))} */}

        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuesseLog
              roundNumber={guessRoundsList - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scree: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonsContain: {
    flexDirection: "row",
  },
  buttons: {
    flex: 1,
  },
  intructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
