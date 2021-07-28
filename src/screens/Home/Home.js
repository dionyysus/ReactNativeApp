import * as React from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import colors from '../../consts/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import categories from '../../consts/categories';
import shoppingList from '../../consts/shoppingList';
import * as fromStorage from '../../consts/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('screen').width / 2 - 34;

// const STORAGE_KEY = '@save-taxt'


loadCartItemsFromStorage = async () => {
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


saveListToStorage = async () => {
  let jsonData = JSON.stringify(shoppingList);
  console.log('saving ');
  await AsyncStorage.setItem('cartDatas',jsonData);
}

emptyCartStorage = async () => {
  await AsyncStorage.clear();
}


const Home = ({navigation}) => {


//emptyCartStorage();
loadCartItemsFromStorage();

  const categoriess = [
    'Food ',
    '   Meat & Frozen Food',
    '   Junk Food ',
    '   Dessert ',
    '   Vegatable & Fruit ',
    '   Water & Drink ',
    '   Personal Care ',
    '   Pet Shop ',
    '   Mom&Baby ',
    '   Electronic ',
  ];

  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const CategoryList = () => {
    
    return (
      
      <View style={style.categoryContainer}>
        <ScrollView horizontal={true} style={{flex: 1}}>
          {categoriess.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setCategoryIndex(index)}>
              <Text
                key={index}
                style={[
                  style.categoryText,
                  categoryIndex == index && style.categoryTextSelected,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };
   
  const Card = ({category}) => {
    return (
      <TouchableOpacity>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}></View>
          <View style={{height: 100, alignItems: 'center'}}>
            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={category.image}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginTop: 17,
              color: colors.dark,
              marginLeft: 25,
            }}>
            {category.name}
          </Text>


          <View style={{height: 100, marginTop: 5, marginLeft: 7, width: 120}}>
            <Button
              color="blueviolet"
              title="Add To Cart"
              onPress={() => {
                shoppingList.push(category); 
                saveListToStorage();
              }}
            />
          </View>

          
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.blueviolet,
      }}>
      <View style={style.header}>
        <View>
          <Text style={style.textStyle2}>Shopping List</Text>
        </View>
        <Icon
          name="shopping-cart"
          size={28}
          onPress={() => navigation.navigate('Cart')}
        />
        <Icon
          name="info"
          size={28}
          onPress={() => navigation.navigate('OnBoard')}
        />
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={categories[categoryIndex].products}
        renderItem={({item}) => {
          return <Card category={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle2: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 22,
  },
  searchContainer: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.orange,
    flex: 1,
  },
  btn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
    height: 30,
  },
  categoryText: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
  categoryTextSelected: {
    color: colors.white,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: 'pink',
  },
  card: {
    height: 225,
    backgroundColor: colors.white,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    borderRadius: 40,
  },
  add: {
    borderRadius: 40,
    color: colors.white,
  },
});

export default Home;
