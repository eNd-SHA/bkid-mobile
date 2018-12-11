import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { id: '', pass: '' };
    }
    
    onPressLogin = () => {
        axios.post('http://bk-id.herokuapp.com/stations/login', {
            username: this.state.id,
            password: this.state.pass
          })
          .then( (response) => {
              if(response.data.username)
              {
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Drawer' })],
                  });
                this.props.navigation.dispatch(resetAction);
              }
              else{
                alert('You have entered wrong id or password');
              }  
            // alert(JSON.stringify(response));
          })
    }

    render() {
        return (
            <ImageBackground source={require('./assets/background.jpg')} style={{ width: '100%', height: '100%' }}>
                <Image source={require('./assets/Bk.png')} style={{ alignSelf: "center", width: 100, height: 100, marginTop: 50 }}></Image>
                <Text style={{ marginTop: 20, alignSelf: "center", fontWeight: "bold", fontSize: 30, color: 'white' }}>BKID</Text>
                <View style={{ flexDirection: 'row', marginTop: 30, justifyContent:'space-between' }}>
                    <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Student ID</Text>
                    <TextInput
                        style={{ height: 40, width: 200, marginRight: 20, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(id) => this.setState({ id })}
                        placeholder="Your ID"
                        value={this.state.id}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent:'space-between', marginTop: 15 }}>
                    <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={{ height: 40, width: 200, marginRight: 20, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(pass) => this.setState({ pass })}
                        placeholder="Your password"
                        value={this.state.pass}
                        secureTextEntry={true}
                        autoCorrect={false}
                    />
                </View>
                <TouchableOpacity style={{ marginTop: 40 }} onPress={() => { this.onPressLogin()}}>
                    <View style={{ width: 200, height: 50, backgroundColor: '#47525E', borderRadius: 10, alignContent:'center',alignSelf:'center', justifyContent:'center' }}>
                        <Text style={{alignSelf:'center', fontWeight: 'bold', color: '#fff', fontSize: 20 }}>Log In</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}
