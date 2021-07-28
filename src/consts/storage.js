import AsyncStorage from '@react-native-async-storage/async-storage';

export const test = () => {
    console.log("dtests");
}

export const loadCartItemsFromStorage = async () => {
    await AsyncStorage.getItem('cartDatas').then((result) => (
        parseCart(result)
    ));
  }

  
async function parseCart(rawData) {
  let cartItems = JSON.parse(rawData);
  for (t in cartItems) {
    shoppingList.push(cartItems[t]);
  }
}


export const saveListToStorage = async () => {
    let jsonData = JSON.stringify(shoppingList);
    console.log('saving ');
    await AsyncStorage.setItem('cartDatas',jsonData);
}

export const emptyCartStorage = async () => {
    await AsyncStorage.clear();
}

  