import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  StatusBar
} from 'react-native';

const Payment = () => {
  return (
    <ScrollView contentContainerStyle={StyleSheet.conatainer}>

        <StatusBar backgroundColor='#FFF' />

      <View style={[styles.conatainer]}>
        {/* price input  */}
        <View style={styles.safeBox}>
          <Text style={styles.headingText}>Enter Amount</Text>

          <View
            style={[
              styles.safeBox,
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              },
            ]}>
            <Text style={{color: '#000', fontSize: 40}}>₹</Text>
            <TextInput
              keyboardType="numeric"
              style={[styles.price, styles.safePadding]}
              placeholder="0.00"
              focusable={true}
              placeholderTextColor="#EEEEEE"
            />
          </View>
        </View>

        {/* input  */}
        <View style={styles.safeBox}>
          {/* name  */}
          <View style={styles.safeBox}>
            <Text style={styles.headingText}>Name</Text>
            <TextInput
              style={[styles.safePadding, styles.inputBox]}
              placeholder="Netflix, Amazon Prime"
              placeholderTextColor="#D1D1D1"
            />
          </View>
          {/* Description  */}
          <View style={styles.safeBox}>
            <Text style={styles.headingText}>Description</Text>
            <TextInput
              style={[styles.safePadding, styles.inputBox]}
              placeholder="Primium Plan"
              placeholderTextColor="#D1D1D1"
            />
          </View>
        </View>

        {/* plan selection btn  */}
        <View
          style={[
            styles.safeBox,
            {flex: 1, flexDirection: 'row', justifyContent: 'space-around'},
          ]}>
          <TouchableOpacity style={styles.btn}>
            <Text style={[styles.headingText, {color: '#FFF'}]}>Recurring</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={[styles.headingText, {color: '#FFF'}]}>One Time</Text>
          </TouchableOpacity>
        </View>

        {/* options  */}
        <View style={[styles.safeBox]}>
          {/* last bill  */}
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 5,
              },
            ]}>
            <Text style={styles.headingText}>Last Billed</Text>
            <TouchableOpacity style={styles.whiteBox}>
              <Text style={styles.headingText}> 17-03-2022 </Text>
            </TouchableOpacity>
          </View>

          {/* billing period  */}
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 4,
              },
            ]}>
            <Text style={styles.headingText}>Billing Period</Text>
            <TouchableOpacity style={styles.whiteBox}>
              <Text style={styles.headingText}> 1 Day (s) </Text>
            </TouchableOpacity>
          </View>

          {/* payment method */}
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 4,
              },
            ]}>
            <Text style={styles.headingText}>Payment Method</Text>
            <TouchableOpacity style={styles.whiteBox}>
              <Text style={styles.headingText}> Credit Card </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* adding note */}
        <View style={styles.safeBox}>
          <Text style={styles.headingText}>Note</Text>
          <TextInput
            style={[styles.safePadding, styles.inputBox]}
            placeholder="Add A special text as notify message"
            placeholderTextColor="#D1D1D1"
            multiline={true}
            numberOfLines={4}
          />
        </View>

        {/* adding tage  */}
        <View style={[styles.safeBox]}></View>

        {/* subscription button  */}
        <View style={[styles.safeBox]}>
          <TouchableOpacity style={[styles.btn, {width: '100%', height: 50}]}>
            <Text
              style={[
                styles.headingText,
                {
                  color: '#FFF',
                  letterSpacing: 2,
                  fontWeight: '500',
                  fontSize: 22,
                },
              ]}>
              Save Subscrption
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: '3%',
    paddingVertical: '5%',
  },
  headingText: {
    color: '#000',
    fontSize: 16,
  },
  price: {
    borderWidth: 0,
    width: '50%',
    height: 50,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 28,
  },
  safeBox: {
    marginVertical: 8,
    marginHorizontal: 4,
  },
  safePadding: {
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  inputBox: {
    backgroundColor: '#EEEEEE',
    // width:'100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: '#000',
    fontSize: 18,
    marginVertical: 8,
  },
  btn: {
    backgroundColor: '#5D5BF5',
    width: '45%',
    height: 40,
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#5D8BF4',
    borderRadius: 5,
  },
  whiteBox: {
    padding: 12,
    backgroundColor: '#DFF6FF',
    height: 50,
    minWidth: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
