import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FormContext } from '../Context/FormContext';
import { ThemeContext } from '../Context/ThemeContext';

export default function Profile() {
  const { formData } = useContext(FormContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (bgColor, textColor) => {
    setTheme({ backgroundColor: bgColor, textColor: textColor });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.label, { color: theme.textColor }]}>Name: {formData.name}</Text>
      <Text style={[styles.label, { color: theme.textColor }]}>Email: {formData.email}</Text>
      <Text style={[styles.label, { color: theme.textColor }]}>Address: {formData.address}</Text>

      <View style={styles.themeContainer}>
        <TouchableOpacity style={styles.themeButton} onPress={() => handleThemeChange('white', 'pink')}>
          <Text style={styles.buttonText}>Light Theme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.themeButton} onPress={() => handleThemeChange('white', 'pink')}>
          <Text style={styles.buttonText}>Dark Theme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  themeContainer: {
    marginTop: 30,
  },
  themeButton: {
    backgroundColor: '#FF69B4',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
