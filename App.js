import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Card from './Card'

const App = () => {
  
  return (
    <View style={styles.container}>
      <Card/>
    </View>
  )
}

export default App

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})
