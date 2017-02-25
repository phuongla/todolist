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
    flexDirection: 'column',
  },
  header: {
    flex: 0.2,
  },
  body: {
    flex: 0.75,
  },
  footer: {
    flex: 0.05,
    alignItems: 'center',
    paddingTop: 10,
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
    const {dispatch} = this.props;
    dispatch(actionCreators.add(text));
  }

  onRemoveItem = (index) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.remove(index));
  }

  onRemoveAllCompleted = () => {
    const {dispatch} = this.props;
    dispatch(actionCreators.removeAllCompleted());
  }

  onToggleCheckbox = (index) => {
    const {dispatch} = this.props;
    dispatch(actionCreators.toogleCheckbox(index));
  }

  render() {
    const {items} = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Title />
          <Input onAddedItem={this.onAddItem}/>
        </View>

        <View style={styles.body}>
          <List items={items}
            onRemoveItem={this.onRemoveItem}
            onToggleCheckbox={this.onToggleCheckbox}
          />
        </View>
        <View style={styles.footer}>
          <Footer onRemoveCompletedItems={this.onRemoveAllCompleted} />
        </View>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
