import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from '../Context/FormContext';

export default function Form3({ navigation, setFormCompleted }) {
  const { formData, setFormData } = useContext(FormContext);

  const handleCompleteForm = () => {
    setFormCompleted(true);
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.input}
        value={formData.cardNumber}
        onChangeText={(value) => setFormData({ ...formData, cardNumber: value })}
      />
      <Text style={styles.label}>Expiry Date</Text>
      <TextInput
        style={styles.input}
        value={formData.expiryDate}
        onChangeText={(value) => setFormData({ ...formData, expiryDate: value })}
      />
      <Text style={styles.label}>CVV</Text>
      <TextInput
        style={styles.input}
        value={formData.cvv}
        onChangeText={(value) => setFormData({ ...formData, cvv: value })}
      />
      <Button title="Complete" onPress={handleCompleteForm} color="#FF6347" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFD700',
  },
  label: {
    fontSize: 18,
    color: '#FF4500',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#FF4500',
    borderWidth: 1,
  },
});
