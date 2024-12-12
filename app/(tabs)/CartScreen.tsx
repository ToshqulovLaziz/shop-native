// // CartScreen.tsx
// import React from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState, AppDispatch } from "./store";
// import { removeFromCart, updateQuantity } from "./cartSlice";
// import { CartItem } from "./types";

// const CartScreen = () => {
//   const cartItems = useSelector((state: RootState) => state.cart.items);
//   const dispatch: AppDispatch = useDispatch();

//   const handleRemoveItem = (id: string) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleUpdateQuantity = (id: string, quantity: number) => {
//     if (quantity > 0) {
//       dispatch(updateQuantity({ id, quantity }));
//     }
//   };

//   const renderItem = ({ item }: { item: CartItem }) => (
//     <View style={styles.cartItem}>
//       <Image source={{ uri: item.product.image }} style={styles.image} />
//       <Text style={styles.productName}>{item.product.name}</Text>
//       <Text style={styles.productPrice}>
//         ${item.product.price.toFixed(2)} x {item.quantity}
//       </Text>
//       <TouchableOpacity
//         style={styles.removeButton}
//         onPress={() => handleRemoveItem(item.product.id)}
//       >
//         <Text style={styles.removeButtonText}>Remove</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.updateButton}
//         onPress={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
//       >
//         <Text style={styles.updateButtonText}>Increase Quantity</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={cartItems}
//         keyExtractor={(item) => item.product.id}
//         renderItem={renderItem}
//       />
//       <Text style={styles.total}>
//         Total: $
//         {cartItems
//           .reduce(
//             (total, item) => total + item.product.price * item.quantity,
//             0
//           )
//           .toFixed(2)}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   cartItem: {
//     padding: 15,
//     marginBottom: 10,
//     backgroundColor: "#f8f8f8",
//     borderRadius: 5,
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   productPrice: {
//     fontSize: 16,
//     color: "gray",
//   },
//   removeButton: {
//     backgroundColor: "red",
//     padding: 5,
//     marginTop: 10,
//     borderRadius: 5,
//   },
//   removeButtonText: {
//     color: "white",
//   },
//   updateButton: {
//     backgroundColor: "#2e5a76",
//     padding: 5,
//     marginTop: 5,
//     borderRadius: 5,
//   },
//   updateButtonText: {
//     color: "white",
//   },
//   total: {
//     marginTop: 20,
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   image: {
//     width: 200,
//     height: 200,
//     margin: "auto",
//     marginBottom: 10,
//     borderRadius: 8,
//   },
//   rating: {
//     fontSize: 14,
//     color: "gold",
//     marginTop: 5,
//   },
// });

// export default CartScreen;
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { removeFromCart, updateQuantity } from "./cartSlice";
import { CartItem } from "./types";

const CartScreen = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch: AppDispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.productName}>{item.product.name}</Text>
        <Text style={styles.productPrice}>
          ${item.product.price.toFixed(2)} x {item.quantity}
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
          >
            <Text style={styles.updateButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
          >
            <Text style={styles.updateButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => handleRemoveItem(item.product.id)}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.product.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <Text style={styles.total}>
        Total: $
        {cartItems
          .reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
          )
          .toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f4f4f4",
  },
  listContainer: {
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  details: {
    flex: 1,
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  updateButton: {
    backgroundColor: "#4caf50",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    width: 30,
    alignItems: "center",
  },
  updateButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#f44336",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "white",
    fontSize: 12,
  },
  total: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default CartScreen;
