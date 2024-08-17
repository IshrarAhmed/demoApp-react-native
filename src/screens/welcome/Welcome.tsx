import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'

const Welcome = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Welcome !</Text>
  </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, justifyContent: 'center', alignItems: 'center',
        
    },
    text:{
      color:"black",
      fontWeight:"700",
      fontSize:scale(25)
    }
})
export default Welcome