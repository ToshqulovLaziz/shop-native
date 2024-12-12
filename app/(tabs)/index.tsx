// import React, { useState } from "react";
// import { Provider } from "react-redux";
// import { store } from "./store";
// import ProductItem from "./ProductItem";
// import CartScreen from "./CartScreen";
// import { View, Button, ScrollView, Dimensions } from "react-native";

// const App = () => {
//   const [isCartVisible, setIsCartVisible] = useState(false); // State to control CartScreen visibility

//   const products = [
//     {
//       id: "1",
//       name: "Telefon",
//       price: 129.99,
//       image:
//         "https://img.lovepik.com/element/40177/3459.png_860.png",
//       rating: 4.5,
//     },
//     {
//       id: "2",
//       name: "Noutbook",
//       price: 399.99,
//       image: "https://www.pikpng.com/pngl/m/49-497587_notebook-png-clip-art-amilo-li3710-transparent-png.png",
//       rating: 4.2,
//     },
//     {
//       id: "3",
//       name: "Watch",
//       price: 19.99,
//       image: "https://e7.pngegg.com/pngimages/758/778/png-clipart-pocket-watch-chronograph-watch-watch-accessory-accessories.png",
//       rating: 4.7,
//     },
//   ];

//   return (
//     <Provider store={store}>
//       <View style={{ flex: 1, padding: 10 }}>
//         <ScrollView contentContainerStyle={{ paddingBottom: 20, paddingTop: 20 }}>
//           {products.map((product) => (
//             <ProductItem key={product.id} product={product} />
//           ))}
//           <Button
//           title="View Cart"
//           onPress={() => setIsCartVisible(!isCartVisible)}
//         />
//           {/* Conditionally render CartScreen at the bottom */}
//           {isCartVisible && (
//             <View style={{ marginTop: 20 }}>
//               <CartScreen />
//             </View>
//           )}
//         </ScrollView>
//       </View>
//     </Provider>
//   );
// };

// export default App;
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductItem from "./ProductItem";
import CartScreen from "./CartScreen";
import {
  View,
  Text,
  Button,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false); // State to control CartScreen visibility

  const products = [
    {
      id: "1",
      name: "Telefon",
      price: 129.99,
      image: "https://tak-tak.ru/upload/resize_cache//ttproductdatatransfer/0d6/310_310_1/fkviam0he8owosc8w7i44dhndeuvwfbx.jpg",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Noutbuk",
      price: 399.99,
      image:
        "https://seventrade.uz/upload/iblock/7da/a4skx029culwfx1dkctdlmb8bg6kc1ge.jpg",
      rating: 4.2,
    },
    {
      id: "3",
      name: "Watch",
      price: 19.99,
      image:
        "https://m.media-amazon.com/images/I/510W5qc9coL._AC_SY1000_.jpg",
      rating: 4.7,
    },
  ];

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>My Shopping App</Text>
        </View>

        {/* Main Section */}
        <ScrollView contentContainerStyle={styles.main}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
          <Button
            title={isCartVisible ? "Hide Cart" : "View Cart"}
            onPress={() => setIsCartVisible(!isCartVisible)}
          />
          {/* Conditionally render CartScreen */}
          {isCartVisible && (
            <View style={styles.cartSection}>
              <CartScreen />
            </View>
          )}
        </ScrollView>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 My Shopping App</Text>
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  main: {
    padding: 10,
    paddingBottom: 20,
    paddingTop: 20,
  },

  cartSection: {
    marginTop: 20,
  },
  footer: {
    height: 50,
    backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 14,
  },
});

export default App;
