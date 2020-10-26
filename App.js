/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  SectionList,
  View,
  Text,
  StatusBar,
  ScrollView
} from 'react-native';

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


class App extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <View>
          <View style={styles.logo}>
            <Image
              style={styles.tinyLogo}
              source={require('./static/images/logo.png')}
            />
            <Text style={styles.logoText}>We are at meeting</Text>
          </View>
        </View>
        <View style={styles.inputArea}>
          <View style={styles.phoneWrap}>
            <Text style={styles.areaCode}>+86</Text>
            <ScrollView style={styles.scrollView}>
              <SectionList
                sections={DATA}
                renderItem={({ item }) => <Item title={item} />}
              >
              </SectionList>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    marginTop: 129,
    height: 100,
    alignItems: 'center'
  },
  tinyLogo: {
    width: 170,
    height: 49,
  },
  logoText: {
    marginTop: 14,
  },
  inputArea: {
    alignItems: 'center'
  },
  phoneWrap: {
    width: 325,
    height: 52,
    marginTop: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    justifyContent: 'center',
    position: 'relative'
  },
  areaCode: {
    width: 40,
    height: 24,
    fontSize: 17,

  },
  scrollView: {
    // display: 'none',
    height: 60,
    position: 'absolute',
    top: 40,
    left: 0,
    zIndex: 10
  }
});

export default App;
