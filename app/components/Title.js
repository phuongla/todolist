import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00CCFF',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 10,
    }
})

export default class Title extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>
              Todo List
          </Text>
        </View>
    );
  }
}
