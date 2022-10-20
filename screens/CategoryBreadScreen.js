import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryBreadScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Category Bread screen</Text>
      <Button
        title="Ir al detalle"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryBreadScreen;
