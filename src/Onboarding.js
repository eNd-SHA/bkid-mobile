import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper'

export default class Onboarding extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
        <View style={styles.slide1}>
          <ImageBackground source={require('./assets/onboarding_1.jpg')} style={{ resizeMode: 'stretch', width: '100%', height: '100%' }}>
            <Text style={{
              color: '#000',
              fontSize: 30,
              fontWeight: 'bold', alignSelf: 'center',
              marginTop: 40
            }} > Welcome Students</Text>
          </ImageBackground>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>This is BKID</Text>
          <Text style={{
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold',
          }}>stand for "Bach Khoa Identification"</Text>
        </View>
        <View style={{ backgroundColor: '#9DD6EB', flex: 1 }}>
          <Image source={require('./assets/school.jpg')} style={{ resizeMode: 'stretch', width: '100%', height: 400 }} />
          <Text style={{ alignSelf: 'center', fontWeight: 'bold', marginTop: 7, fontSize: 22 }}>Press below to sign in</Text>
          <Text style={{ marginTop: 5, alignSelf: 'center' }}>If you are Bach Khoa student</Text>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }} style={{ alignSelf: 'center', width: 200, height: 50, backgroundColor: '#47525E', borderRadius: 10, marginTop: 25 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: '#fff' }}>Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Swiper >
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  }
})