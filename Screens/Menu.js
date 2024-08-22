import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { CartContext } from '../Context/CartContext';

const menuItems = [
  {
    id: '1',
    name: 'Seafood paella',
    image: require('../assets/Seafood_paella.jpg'),
    description: 'The sea is lapping just by your feet, a warm breeze whips the tablecloth around your legs and a steamy pan of paella sits in front of you. Shrimp, lobster, mussels and cuttlefish combine with white rice and various herbs, oil and salt in this Valencian dish to send you immediately into holiday mode.',
    price: '139.95',
  },
  {
    id: '2',
    name: 'Tacos',
    image: require('../assets/taco.jpeg'),
    description: 'A fresh, handmade tortilla stuffed with small chunks of grilled beef rubbed in oil and sea salt then covered with guacamole, salsa, onions, cilantro or anything else you want – perfect for breakfast, lunch or dinner.',
    price: '94.95',
  },
  {
    id: '3',
    name: 'Chili crab',
    image: require('../assets/chilli_crab.jpg'),
    description: 'While there are dozens of ways to prepare crab (with black pepper, salted egg yolk, cheese-baked, et cetera) chili crab remains the local bestseller. Spicy chili-tomato gravy tends to splatter, which is why you need to mop everything up with mini mantou buns.',
    price: '249.95',
  },
  {
    id: '4',
    name: 'Sushi',
    image: require('../assets/sushi.jpg'),
    description: 'Prepared with vinegared rice and a wide range of ingredients including seafood, vegetables, and sometimes fruits. Sushi tastes best when served with wasabi, pickled ginger, and soy sauce.',
    price: '114.95',
  },
  {
    id: '5',
    name: 'Ramen',
    image: require('../assets/ramen.jpg'),
    description: 'Ramen is a Japanese dish made of wheat noodles and served in the broth along with vegetables and meat. Ramen comes in several flavours, from tangy to spicy, depending on the flavour of the broth.',
    price: '172.99',
  },
  {
    id: '6',
    name: 'Kebab',
    image: require('../assets/kebab.jpg'),
    description: 'A dish popular across the Middle East, Kebabs are originally from Turkey. They consist of ground meat or seafood, fruits, and vegetables in some cases and are cooked on a skewer with a big fire underneath, just like a barbeque on the grill.',
    price: '240',
  },
  {
    id: '7',
    name: 'Pho',
    image: require('../assets/pho.jpeg'),
    description: 'A simple yet an incredible dish, Pho is a Vietnamese dish made of rice noodles and meat (usually beef or chicken) served in broth and topped with herbs.',
    price: '154.95',
  },
  {
    id: '8',
    name: 'Goulash',
    image: require('../assets/goulash.jpg'),
    description: 'A dish most popular in Central Europe, Goulash is stew meat dating back to 9th century Hungary. The main elements of the dish are the spices, especially paprika. Goulash is prepared from either beef, pork, veal, or lamb.',
    price: '124.95',
  },
  {
    id: '9',
    name: 'Lasagna',
    image: require('../assets/lasagna.jpg'),
    description: 'Italys lasagna takes over Pizza to be added in the "worlds best food dishes" list because of its comeback. It is one of the oldest pasta but has become popular only in the present times. The ingredients itself sound mouthwatering - meats, pasta, vegetables, tomato sauce, and lots and lots of cheese.',
    price: '189.95',
  },
  {
    id: '10',
    name: 'Kimchi',
    image: require('../assets/kimchi.jpg'),
    description: 'Kimchi is a staple Korean side dish prepared from fermented vegetables such as Korean radishes, and cabbage and topped with several seasonings, including garlic, chilli powder, scallions, and ginger.',
    price: '127.95',
  }
];

export default function Menu({ navigation }) {
  const { addToCart } = useContext(CartContext);
  

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.cartButtonText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    color: 'red',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#FF6347',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    width: 120,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'pink',
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

