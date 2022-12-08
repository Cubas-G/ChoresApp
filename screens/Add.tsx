import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Add = () => {
  return (
    <View style={styles.container}>
      <Text>Add</Text>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})