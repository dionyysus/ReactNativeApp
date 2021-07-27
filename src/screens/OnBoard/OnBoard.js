import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../../consts/colors';

const image = {uri: "https://i.pinimg.com/originals/1e/35/b8/1e35b89ff91df890c3dd693246f15243.jpg"}

const OnBoard = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground style={{flex: 1, 
                               backgroundColor: colors.blue
                               }} source = {image}>
        <View style={style.details}>
         
          <Text style={style.about}>Created By</Text>

          <Text style={style.textName}>Gizem Coşkun</Text>

          <Text style={style.textName}>Hasan Çolak</Text>
          <Text style={style.textName}>Melike Divdiv</Text>
          <Text style={style.textName}>Kader Sutlu</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Home')}>
            <View style={style.btn}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.white,
                  fontSize: 16,
                  marginLeft: 35,
                }}>
                Turn Back
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  detail: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 150,
    backgroundColor: colors.blueviolet,
    marginTop: 160,
    borderRadius: 30,
    justifyContent: 'center',
    marginHorizontal: 120,
  },
  textName: {
    color: colors.white,
    marginTop: 15,
    fontSize: 19,
    marginLeft: 130,
    height: 21,
  

  },
  about: {
    textAlign: 'center',
    marginTop: 258,
    color: colors.white,
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginLeft: 180,
  },
});

export default OnBoard;
