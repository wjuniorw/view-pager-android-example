import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'


export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}
