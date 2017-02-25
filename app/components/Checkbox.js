import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

const styles = StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
})

export default class Checkbox extends Component {

  static propTypes = {
    onToggle: PropTypes.func,
    isChecked: PropTypes.bool,
  }

  constructor(props){
    super(props);
  }

  render() {
    const {onToogle, isFinished} = this.props;
    return (
        <TouchableOpacity onPress={onToogle}>
          <View style={styles.box}>
            { isFinished && <View style={styles.inner}/> }
          </View>
        </TouchableOpacity>
    )
  }
}
