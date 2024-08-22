import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from '../Context/FormContext';

export default function Form2({ navigation }) {
  const { formData, setFormData } = useContext(FormContext);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={formData.address}
        onChangeText={(value) => setFormData({ ...formData, address: value })}
      />
      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        value={formData.city}
        onChangeText={(value) => setFormData({ ...formData, city: value })}
      />
      <Text style={styles.label}>Country</Text>
      <TextInput
        style={styles.input}
        value={formData.state}
        onChangeText={(value) => setFormData({ ...formData, state: value })}
      />
      <Text style={styles.label}>Postal Code</Text>
      <TextInput
        style={styles.input}
        value={formData.zip}
        onChangeText={(value) => setFormData({ ...formData, zip: value })}
      />
      <Button title="Next" onPress={() => navigation.navigate('Form3')} color="#FF6347" />
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
