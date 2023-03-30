import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import moment from 'moment';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Linking,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {Avatar, Badge, Card, Button, Headline, List} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';

const GithubList = ({navigation, route}) => {
  const [repoList, setRepoList] = useState([]);
  const [contentTag, setContentTag] = useState('repos');
  const [isLoading, setIsLoading] = useState(false);

  const {user} = route.params;
  const {login, id, avatar_url, url, created_at, name} = user;
  // console.log(created_at);
  const fetchRepoList = async () => {
    setIsLoading(true);
    try {
      const {data, status} = await Axios.get(`${url}/${contentTag}`);
      console.log('Repo status', status);
      setRepoList(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRepoList();
  }, [contentTag]);

  return (
    <SafeAreaView margin={2}>
      <ScrollView>
        <View style={style.safeBox}>
          <Card key={id}>
            <Card.Cover source={{uri: avatar_url}} />
            <Card.Content
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 44,
              }}>
              <Badge
                style={{
                  minHeight: 38,
                  minWidth: '38%',
                  fontSize: 18,
                  padding: 8,
                  alignSelf: 'center',
                }}>
                {name}
              </Badge>
              <Text style={{color: '#000', fontSize: 18, padding: 4}}>
                Developer Scence {moment(created_at).format('Do MMM YYYY')}
              </Text>
            </Card.Content>
            <Card.Actions
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Button onPress={() => setContentTag('repos')}>Repos</Button>
              <Button onPress={() => setContentTag('followers')}>
                Followers
              </Button>
            </Card.Actions>
          </Card>

          <View style={style.safeBox}>
            <ScrollView contentContainerStyle={{paddingVertical: 10}}>
              {isLoading ? (
                <Headline style={{alignSelf: 'center'}}>Loading...</Headline>
              ) : repoList.length === 0 ? (
                <Headline style={{alignSelf: 'center'}}>
                  No {contentTag} Available
                </Headline>
              ) : (
                repoList.map((repo, index) => {
                  if (contentTag === 'repos')
                    return (
                      <List.Item
                        key={repo.id}
                        title={repo?.name}
                        description={repo?.description}
                        left={props => (
                          <List.Icon {...props} icon="folder" color="orange" />
                        )}
                      />
                    );

                  return (
                    <List.Item
                      key={repo.id}
                      title={repo?.login}
                      description={repo?.type}
                      left={props => (
                        <Avatar.Image
                          size={34}
                          source={{uri: repo?.avatar_url}}
                        />
                      )}
                      onPress={()=>{}}
                      onLongPress={() => {
                        Clipboard.setString(repo?.login);
                        Snackbar.show({
                          text: `"${repo?.login}" Username Copied on clipboard!`,
                          backgroundColor: '#34b1eb',
                        });
                      }}
                    />
                  );
                })
              )}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GithubList;

const style = StyleSheet.create({
  safeBox: {
    margin: 5,
    padding: 5,
  },
});
