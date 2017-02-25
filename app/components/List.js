import React, { Component, PropTypes } from 'react'
import { View, Text, ListView, StyleSheet, TouchableOpacity, Alert } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E5F2FF',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        paddingBottom: 5,
        paddingTop: 5,
    },
    rightSelection: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
    },
    textRow: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
    },
    remove: {
        color: '#CD5C5C',
        fontSize: 30,
        paddingLeft: 5,
    },
})

export default class List extends Component {

  constructor(props) {
    super(props);
  }

  renderRow = (item, sectionId, index) => {
    const {onRemoveItem, onToggleCheckbox} = this.props;

    return (
        <View style={styles.row}>
          <View style={{
            flex: 0.8,
          }}>
            <Text style={styles.textRow}>
              {item.name}
            </Text>
          </View>
          <View style={styles.rightSelection}>
              <Checkbox
                isFinished={item.isFinished}
                onToogle={() => onToggleCheckbox(index)}
              />
              <TouchableOpacity onPress={() => onRemoveItem(index)}>
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
        <ListView dataSource={dataSource}
                  renderRow={this.renderRow}
                  enableEmptySections={true}
        >
        </ListView>
    );
  }
}
