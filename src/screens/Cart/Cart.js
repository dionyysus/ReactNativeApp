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
} from 'react-native';

import colors from '../../consts/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import shoppingList from '../../consts/shoppingList';
import {saveListToStorage} from '../Home/Home.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { parse } from '@babel/core';
import { emptyCartStorage } from '../../consts/storage';

const width = Dimensions.get('screen').width / 2 - 30;

const Cart = ({navigation}) => {
  const [productIndex, setProductIndex] = React.useState(0);

  const Card = ({product}) => {
    return (
      <TouchableOpacity>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}></View>
          <View style={{height: 100, alignItems: 'center'}}>
            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={product.image}
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
            {product.name}
          </Text>

          
          <View style={{height: 100, marginTop: 5, marginLeft: 7, width: 120}}>
            <Button
              color="blueviolet"
              title="Remove"
              onPress={() => {
                let sonuc = shoppingList.indexOf(product);
                setProductIndex(sonuc);
                // saveListToStorage();
                emptyCartStorage();
                delete shoppingList[sonuc];
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
          <Icon
            name="arrow-left"
            size={24}
            onPress={() => 
              navigation.goBack() }
          />
          <Text style={style.textStyle1}>Shopping Cart</Text>
        </View>
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
      </View>

      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={shoppingList}
        renderItem={({item}) => {
          return <Card product={item} />;
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
  textStyle1: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 15,
  },
  textStyle2: {
    fontSize: 38,
    fontWeight: 'bold',
    color: colors.white,
  },
  searchContainer: {
    height: 45,
    backgroundColor: colors.white,
    borderRadius: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.orange,
    flex: 1,
  },
  btn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  categoryTextSelected: {
    color: colors.white,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: 'pink',
  },
  card: {
    height: 225, //buton boyutu
    backgroundColor: colors.white,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    borderRadius: 30,
  },
  imageContainer: {
    flex: 0.5,
    marginTop: 10,
    justifyContent: 'center',
  },
});

export default Cart;
