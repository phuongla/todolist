import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 15,
    },
})

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      const {onRemoveCompletedItems} = this.props;
    return (
      <TouchableOpacity onPress={() => onRemoveCompletedItems()}>
          <Text style={styles.text}>
              Remove completed items
          </Text>
      </TouchableOpacity>
    );
  }
}
