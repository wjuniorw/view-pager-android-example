/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid,
  ScrollView,
  StatusBar
} from 'react-native'


import styles from './components/styles'
import Header from './components/Header'
import Menu from './components/Menu'
// import animate from './components/keyFrames'
// import PromoList from './components/List'

// import type { ViewPagerScrollState } from 'ViewPagerAndroid'
import _ from 'lodash'
// let TITLE = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe']
let TITLE = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273']

export default class PromoApp extends Component {

  state = {
    page: 0,
    title: 'Welcome to PromoApp!',
    activeTab: [true, false, false, false, false]
  }
  onPageSelected = (e) => {
    let index = e.nativeEvent.position
    this.state.activeTab[this.state.page]= false
    this.state.activeTab[index]= true
    this.setState({page: index})
  }
  go = (page) => {
    this.viewPager.setPage(page)
    this.setState({page})
    this.state.activeTab[this.state.page]= false
    this.state.activeTab[page]= true
  }

  render() {
    let pages = []
    TITLE.map((_title, i) => {
      let cor = {
        backgroundColor: _title,
      }
      pages.push(
        <View key={i} style={cor}>
          <Text style={styles.pageText}>
            {_title}
          </Text>
        </View>)
    })
    // alert(_.indexOf(TITLE, '#dde5fe'))

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#446688'} />
        <Header title={this.state.title} />
        <Menu go={this.go} active={this.state.activeTab}/>

        <ViewPagerAndroid
          initialPage={0}
          onPageScroll={this.onPageScroll}
          onPageSelected={this.onPageSelected.bind(this)}
          // onPageScrollStateChanged={}
          pageMargin={10}
          style={styles.page}
          ref={viewPager => { this.viewPager = viewPager}}>
          {pages}
        </ViewPagerAndroid>
      </View>
    )
  }
}

AppRegistry.registerComponent('PromoApp', () => PromoApp)
