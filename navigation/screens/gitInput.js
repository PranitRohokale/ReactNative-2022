import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import {Avatar, TextInput, Button} from 'react-native-paper';
import Axios from 'axios';
import Snackbar from 'react-native-snackbar';
import Developer from '../assests/developer.svg';

const URL = 'https://api.github.com/users/';

const GithubInput = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);
    if (!username) return alert('Enter username!!');
    console.log(username);
    try {
      const {data, status} = await Axios.get(`${URL}${username}`);

      console.log(status);
      navigation.navigate('GithubList', {
        user: data,
        title: `${data?.login} Github Profile`,
      });
    } catch (error) {
      console.log(error);
      Snackbar.show({
        text: 'Username is not Exists!',
        backgroundColor:'#34b1eb'
      });
    }
    setIsLoading(false);
    setUsername('');
  };

  const handleInput = text => setUsername(text);

  return (
    <ScrollView
      // backgroundColor="#1b262c"
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="automatic">
      <View style={[styles.safeBox]}>
        <TextInput
          mode="outlined"
          label="Username"
          placeholder="Type username"
          style={[{margin: 5}]}
          onChangeText={handleInput}
          value={username}
          autoComplete='name'
        />

        <Button
          style={[styles.safeBox]}
          mode="contained"
          disabled={isLoading}
          onPress={() => fetchUser()}>
          Fetch Data
        </Button>

        <View
          style={{
            flex: 1,
          }}>
          {/* <Developer width="100%" height="70%" /> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default GithubInput;

const styles = StyleSheet.create({
  safeBox: {
    padding: 5,
    margin: 5,
  },
});
