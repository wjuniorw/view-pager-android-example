import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text
} from 'react-native'
import styles from './styles'

export default class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.menu}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text style={[styles.btn, this.props.active[0] && styles.btna]}
                onPress={() => this.props.go(0)}>
            link1
          </Text>
          <Text style={[styles.btn, this.props.active[1] && styles.btna]}
                onPress={(e) => this.props.go(1)}>
            link2
          </Text>
          <Text style={[styles.btn, this.props.active[2] && styles.btna]}
                onPress={() => this.props.go(2)}>
            link3
          </Text>
          <Text style={[styles.btn, this.props.active[3] && styles.btna]}
                onPress={() => this.props.go(3)}>
            link4
          </Text>
          <Text style={[styles.btn, this.props.active[4] && styles.btna]}
                onPress={() => this.props.go(4)}>
            link5
          </Text>
        </ScrollView>
      </View>
    )
  }
}
