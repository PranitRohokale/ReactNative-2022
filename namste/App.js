import React, {useState} from 'react';

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Currency from './components/currencyCalculator';

import Dice from './components/dice';

const App = () => {
  const [randomColor, setRandomColor] = useState('red');

  const changeBG = () => {
    const color = `rgb( ${Math.floor(Math.random() * 256)} , ${Math.floor(
      Math.random() * 256,
    )} ,${Math.floor(Math.random() * 256)})`;

    // console.log(color);
    setRandomColor(color);
    alert("ok")
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View
          style={[
            styles.component,
            {backgroundColor: randomColor, padding: 10},
          ]}>
          <Currency />
          {/* <Dice /> */}

          <TouchableOpacity onPress={changeBG}>
            <Text
              style={[
                {fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'},
                styles.text,
              ]}>
              om please {'\n'} Tap Me!
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.resetBtn}
            onPress={() => setRandomColor('black')}>
            <Text style={{letterSpacing: 5, fontSize: 15, fontWeight: '800'}}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>

        <StatusBar backgroundColor={randomColor} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 15,
    marginHorizontal: 25,
    backgroundColor: '#BB2CD1',
  },
  resetBtn: {
    padding: 15,
    margin: 10,
    backgroundColor: 'black',
    color: '$fff',
    borderRadius: 10,
  },
});

export default App;
