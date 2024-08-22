import React, { useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from '../Context/FormContext';

export default function Form1({ navigation }) {
  const { formData, setFormData } = useContext(FormContext);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={(value) => setFormData({ ...formData, name: value })}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(value) => setFormData({ ...formData, email: value })}
      />
      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={formData.phone}
        onChangeText={(value) => setFormData({ ...formData, phone: value })}
      />
      <Button title="Next" onPress={() => navigation.navigate('Form2')} color="#FF6347" />
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
