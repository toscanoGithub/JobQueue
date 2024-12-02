import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const auth = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>auth</Text>
    </SafeAreaView>
  )
}

export default auth

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#E4EDF7"
  }
})