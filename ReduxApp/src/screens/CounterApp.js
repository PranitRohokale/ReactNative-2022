import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {decreaseCount, increaseCount} from '../action/counterAction';

const CounterApp = ({increaseCount, decreaseCount, Value}) => {
  // const [Value, setValue] = useState(0);

  return (
    <>
      <View style={styles.safeBox}>
        <Button
          style={styles.safeBox}
          title="Increment"
          onPress={increaseCount}></Button>
        <Text style={styles.text}>{Value}</Text>
        <Button
          style={styles.safeBox}
          title="decrement"
          onPress={decreaseCount}></Button>
      </View>
    </>
  );
};

//config
CounterApp.propType = {
  increaseCount: propTypes.func.isRequired,
  decreaseCount: propTypes.func.isRequired,
  Value: propTypes.number.isRequired,
};

const mapDispatchToProps = {
  increaseCount: () => increaseCount(),
  decreaseCount: () => decreaseCount(),
};

const mapStateToProps = state => ({
  Value: state.countReducer.countValue,
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
  safeBox: {
    padding: 5,
    margin: 5,
  },
  text: {
    fontSize: 33,
    color: '#FFF',
    alignSelf: 'center',
  },
});
