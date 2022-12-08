import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profiles = () => {
  return (
    <View style={styles.container}>
      <Text>Profiles</Text>
    </View>
  )
}

export default Profiles

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})