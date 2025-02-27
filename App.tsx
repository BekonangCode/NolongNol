import {StyleSheet, Text, View, Button, Alert, } from 'react-native'
import Tombol from './src/component/buttonComp'
import Card from './src/component/cardComp'
import React from 'react'

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
      }} 
    >
      <Text>App</Text>
      <Tombol/>
      <Tombol/>
      <Tombol/>
    </View>
  )
}





export default App


const styles = StyleSheet.create({})