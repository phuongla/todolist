import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default class Input extends Component {
    constructor(props){
        super(props);
        isReset = true;
        this.state = { text: ''};
    }

  render() {
      const {onAddedItem} = this.props;
    return (
        <TextInput
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
    );
  }
}
