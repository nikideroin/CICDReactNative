/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  constructor() {
    super();
    //Crashes.generateTestCrash();
    this.checkPreviousSession();
  }
  async checkPreviousSession() {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      // eslint-disable-next-line no-alert
      alert('Sorry about that crash');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Track Event"
          onPress={() =>
            Analytics.trackEvent('calculate_inflation', {
              Internet: 'Wifi',
              GPS: 'Off',
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 16,
  },
  label: {
    marginTop: 10,
  },
  smallLabel: {
    marginTop: -8,
    marginBottom: 10,
    fontSize: 12,
    color: 'gray',
  },
  textBox: {
    height: 40,
    paddingLeft: 6,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
