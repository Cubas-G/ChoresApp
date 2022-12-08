import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Edit = () => {
  return (
    <View style={styles.container}>
      <Text>Edit</Text>
    </View>
  )
}

export default Edit

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})