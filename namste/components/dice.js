import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import diceOne from '../assets/dice1.png';
import diceTwo from '../assets/dice2.png';
import diceThree from '../assets/dice3.png';
import diceFour from '../assets/dice4.png';
import diceFive from '../assets/dice5.png';
import diceSix from '../assets/dice6.png';

const Dice = () => {
  const [uri, setUri] = useState(diceOne);

  function rollDice() {
    const num = (Math.floor(Math.random() * 256) % 6) + 1;
    switch (num) {
      case 1:
        setUri(diceOne);
        break;
      case 2:
        setUri(diceTwo);
        break;
      case 3:
        setUri(diceThree);
        break;
      case 4:
        setUri(diceFour);
        break;
      case 5:
        setUri(diceFive);
        break;
      case 6:
        setUri(diceSix);
        break;

      default:
        setUri(diceThree);
    }
  }

  return (
    <>
      <View style={styles.diceContainer}>
        <TouchableWithoutFeedback onPress={rollDice}>
          <Image source={uri} style={styles.img} />
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
  },
  diceContainer: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
  },
});

export default Dice;
