import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  text: {
     height: 30,
  },
})

export default class Input extends Component {
    constructor(props){
        super(props);
        this.state = { text: ''};
    }

  render() {
      const {onAddedItem} = this.props;
    return (
        <View style={styles.container}>
          <TextInput
              style={styles.text}
              placeholder="Enter an item!"
              onSubmitEditing={ (event) => {
                  if(event.nativeEvent.text !== '') {
                      onAddedItem(event.nativeEvent.text);
                      this.setState({text:''});
                  }
              }}
              onChangeText={(text) => this.setState({text: text})}
              value={this.state.text}
          >
          </TextInput>
        </View>
    );
  }
}
