import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

import {RNCamera} from 'react-native-camera';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text
      style={{
        fontSize: 30,
        color: 'red',
      }}>
      Loading....
    </Text>
  </View>
);

const ProfilePic = () => {
  const [image, setImage] = useState(null);

  const takeImage = async camera => {
    try {
      const option = {quality: 0.9, base64: false};
      const data = await camera.takePictureAsync(option);
      console.log('DATA', data);

      setImage(data.uri);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    
      <View style={styles.container}>
        {image ? (
          <View style={styles.preview}>
            <Text style={styles.camtext}>Here is your new Profile Pic</Text>
            <Image
              style={styles.clicked}
              source={{uri: image, width: '100%'}}
            />
            <Button
            title='Click New Photo'
              onPress={() => {
                setImage(null);
              }}>
              Click New Photo
            </Button>
          </View>
        ) : (
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Camera Permission',
              message: 'Required to take pic',
              buttonPositive: 'Allow',
              buttonNegative: 'Decline',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'audio Permission',
              message: 'Required to take audio',
              buttonPositive: 'Allow',
              buttonNegative: 'Decline',
            }}>
            {({camera, status}) => {
              if (status !== 'READY') return <PendingView />;

              return (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}>
                  <TouchableOpacity onPress={() => takeImage(camera)}>
                    <Text style={styles.capture}>Snap</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </RNCamera>
        )}
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A79DF',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  capture: {
    padding: 20,
    backgroundColor: 'red',
    fontSize:30,
    letterSpacing:12
  },
  camtext: {
    backgroundColor: '#3498DB',
    color: '#fff',
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 25,
  },
  clicked: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});

export default ProfilePic;
