import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './Screens/Home';
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import Menu from './Screens/Menu';
import Cart from './Screens/Cart';
import Profile from './Screens/Profile';

import { CartProvider } from './Context/CartContext';
import { ThemeProvider } from './Context/ThemeContext';
import { FormProvider } from './Context/FormContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Menu') {
          iconName = 'ios-fast-food';
        } else if (route.name === 'Cart') {
          iconName = 'ios-cart';
        } else if (route.name === 'Profile') {
          iconName = 'ios-person';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#e91e63',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Menu" component={Menu} />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default function App() {
  const [formCompleted, setFormCompleted] = useState(false);

  return (
    <CartProvider>
      <ThemeProvider>
        <FormProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {!formCompleted ? (
                <>
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Form1">
                    {(props) => <Form1 {...props} setFormCompleted={setFormCompleted} />}
                  </Stack.Screen>
                  <Stack.Screen name="Form2" component={Form2} />
                  <Stack.Screen name="Form3">
                    {(props) => <Form3 {...props} setFormCompleted={setFormCompleted} />}
                  </Stack.Screen>
                </>
              ) : (
                <Stack.Screen name="Main" component={TabNavigator} />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </FormProvider>
      </ThemeProvider>
    </CartProvider>
  );
}
