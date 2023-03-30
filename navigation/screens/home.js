import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Headline,
  Surface,
  List,
  Button,
  Checkbox,
  FAB,
  IconButton,
  Colors,
} from 'react-native-paper';

import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation, route}) => {
  const [listOfSeasons, setListOfSeasons] = useState([1]);
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    setLoading(true);

    const storedValue = await AsyncStorage.getItem('@season_list');

    if (!storedValue) {
      setListOfSeasons([]);
    }

    const list = JSON.parse(storedValue);
    setListOfSeasons(list);

    setLoading(false);
  };

  const markAsWatched = async id => {
    const newList = listOfSeasons.map(season => {
      if (season.id === id) season.isWatched = !season.isWatched;
      return season;
    });

    await AsyncStorage.setItem('@season_list', JSON.stringify(newList));
    setListOfSeasons(newList);
    // console.log(newList);
  };

  const clearList = async () => {
    const newList = [];

    await AsyncStorage.setItem('@season_list', JSON.stringify(newList));
    setListOfSeasons(newList);
    console.log(newList);
    console.warn('CLEAN');
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    getList();
  }, [isFocused]);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {listOfSeasons.length == 0 ? (
          <Surface style={styles.container}>
            <Headline style={styles.heading}>
              Watchlist is empty. Please add a season
            </Headline>
          </Surface>
        ) : (
          <>
            <Headline style={styles.heading}>Next series to watch</Headline>
            <IconButton
              icon="camera"
              color={Colors.red500}
              size={20}
              onPress={clearList}
            />
            <List.Section>
              {listOfSeasons.map(season => {
                console.log(season.name);
                return (
                  <List.Item
                    key={season.id}
                    style={styles.listItem}
                    title={season.id}
                    titleStyle={styles.seasonName}
                    description="nksd"
                    right={() => (
                      <Checkbox.Item
                        key={season.id}
                        onPress={() => markAsWatched(season.id)}
                        status={season.isWatched ? 'checked' : 'unchecked'}
                      />
                    )}
                  />
                );
              })}
            </List.Section>
          </>
        )}

        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => navigation.navigate('Add')}
        />
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  emptyContainer: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    padding: 5,
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  actionButton: {
    marginLeft: 5,
  },
  seasonName: {
    color: '#fdcb9e',
    textAlign: 'justify',
  },
  listItem: {
    marginLeft: 0,
    marginBottom: 20,
  },
});
