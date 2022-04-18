import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AuthNavigation from './src/Components/AuthNavigation';



export default function App() {

  return (
    <SafeAreaView style={styles.root}>
      <AuthNavigation />
    </SafeAreaView>
  )

}


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%'
  }
});
