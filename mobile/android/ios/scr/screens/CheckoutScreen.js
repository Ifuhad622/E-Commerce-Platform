import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CheckoutScreen = ({ route }) => {
  const { cart } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      {/* Render cart items */}
      {cart.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.itemText}>{item.name} - ${item.price}</Text>
        </View>
      ))}
      <Button title="Proceed to Payment" onPress={() => { /* Handle payment */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginVertical: 10,
  },
  itemText: {
    fontSize: 18,
  },
});

export default CheckoutScreen;
