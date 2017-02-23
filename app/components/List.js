import React, { Component, PropTypes } from 'react'
import { View, Text, ListView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E5F2FF',
        height:30,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    rightSelection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20
    },
    textRow: {
        paddingLeft: 10
    },
    remove: {
        paddingLeft: 10,
        marginBottom: 10,
        color: '#CD5C5C',
        fontSize: 26,
    },
})

export default class List extends Component {

  constructor(props) {
    super(props);
  }

  renderRow(item, i) {
    return (
        <View style={styles.row}>
          <Text style={styles.textRow}>
            {item}
          </Text>
          <View style={styles.rightSelection}>
              <Checkbox />
              <TouchableOpacity onPress={() => onRemoveItem(i)}>
                  <Text style={styles.remove}> &times; </Text>
              </TouchableOpacity>
          </View>
        </View>
      );
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const {items} = this.props;
    let dataSource = ds.cloneWithRows(items);

    return (
        <ListView style={styles.container} dataSource={dataSource}
                  renderRow={this.renderRow}
                  enableEmptySections={true}
        >
        </ListView>
    );
  }
}
