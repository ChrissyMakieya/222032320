import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../Context/CartContext';

export default function Cart({ navigation }) {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    clearCart();
    navigation.navigate('Profile');
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>R{(parseFloat(item.price) * item.quantity).toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>Qty: {item.quantity}</Text>
        <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
        <Text style={styles.buttonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.summaryContainer}>
        <Text style={styles.total}>
          Total: R{cartItems.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0).toFixed(2)}
        </Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  itemContainer: {
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    color: '#FF4500',
  },
  price: {
    fontSize: 16,
    color: 'blue',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantity: {
    fontSize: 16,
    marginRight: 10,
  },
  quantityButton: {
    fontSize: 20,
    color: '#FF6347',
    padding: 5,
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'pink',
    fontWeight: 'bold',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'pink',
    marginBottom: 20,
  },
  checkoutButton: {
    backgroundColor: '#FF69B4',
    padding: 15,
    borderRadius: 20,
    width: 200,
    alignItems: 'center',
  },
});
