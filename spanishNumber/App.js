import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import Sound from 'react-native-sound';

const soundList = [
  require('./assests/one.wav'),
  require('./assests/two.wav'),
  require('./assests/three.wav'),
  require('./assests/four.wav'),
  require('./assests/five.wav'),
  require('./assests/six.wav'),
  require('./assests/seven.wav'),
  require('./assests/eight.wav'),
  require('./assests/nine.wav'),
  require('./assests/ten.wav'),
];

// camera app
import ProfilePic from './components/profilePic';

const App = () => {
  const playSound = sound => {
    const soundObj = new Sound(sound, Sound.MAIN_BUNDLE, err => {
      if (err) {
        Alert.alert('Play song', 'ok message', [
          {text: '1', onPress: () => console.log('1')},
        ]);
        return;
      }
    });

    setTimeout(() => soundObj.play(), 100);

    soundObj.release();
  };

  return (
    <>
      <ScrollView style={styles.container}>

        <Image style={styles.logo} source={require('./assests/logo.png')} />
        <Text style={[styles.text, {alignSelf: 'center', fontSize: 15}]}>
          Om Rohokale
        </Text>
        <View style={styles.gridContainer}>
          {soundList.map((sound, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.box}
                onPress={() => playSound(sound)}>
                <Text style={styles.text}>{index}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* <ProfilePic /> */}
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    height: 95,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginVertical: 6,
    backgroundColor: '#0f4c75',
    borderRadius: 5,

    shadowColor: '#393e46',
    elevation: 5,
  },
  text: {
    fontSize: 40,
    color: '#ff4301',
  },
});
