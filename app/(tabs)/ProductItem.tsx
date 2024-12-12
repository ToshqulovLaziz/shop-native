// ProductItem.tsx
import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { Product } from "./types";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./cartSlice";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <View style={styles.container}>
      <View key={product.id} style={styles.productCard}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
        <Text style={styles.productRating}>Rating: {product.rating} ★</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRemoveFromCart}>
          <Text style={styles.buttonText}>Remove from Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "gray",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  productCard: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: "#4caf50",
    marginBottom: 5,
  },
  productRating: {
    fontSize: 14,
    color: "#ff9800",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "#2e5a76",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    margin: "auto",
    marginBottom: 10,
    borderRadius: 8,
  },
  rating: {
    fontSize: 14,
    color: "gold",
    marginTop: 5,
  },
});

export default ProductItem;
