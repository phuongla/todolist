import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text, Alert} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'

import Title from '../components/Title'
import Input from '../components/Input'
import Footer from '../components/Footer'
import List from '../components/List'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.18,
  },
  body: {
    flex: 0.77,
    justifyContent: 'center',
  },
  footer: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
  }

  onAddItem = (text) => {
    console.log(this.props);
    const {dispatch} = this.props;
    dispatch(actionCreators.add(text));
  }

  onRemoveItem = (index) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.remove(index));
  }

  render() {
    const {items} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Title />
          <Input onAddedItem={this.onAddItem}/>
        </View>
        <View style={styles.body}>
          <List items={items}/>
        </View>
        <View style={styles.footer}>
          <Footer onRemoveCompletedItems={() => alert('Remove all completed')} />
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
