import React, { Component } from 'react';
import { View, Text, Stylesheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Header, Icon, Card } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    renderMenu = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }}>
                    <Icon
                        color = 'white'
                        name='menu' />
                </TouchableOpacity>
            </View>
        );
    }
    renderCenter = () => {
        return (
            <View style={{ flexDirection: "row" }}>
                <Image style={{ width: 30, height: 30 }} source={require('./assets/Bk.png')} />
                <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20, color: 'white' }}>BKID</Text>
            </View>
        );
    }

    render() {
        return (
            <View>
                <Header
                    leftComponent={this.renderMenu()}
                    centerComponent={this.renderCenter()}
                    outerContainerStyles={{ backgroundColor: '#445870' }}
                />
                <View style={{backgroundColor:'#f8f8f9'}}>

                {/* <ImageBackground source={require('./assets/background.jpg')}
                    style={{ width: '100%', height: '100%' }}> */}
                    <Card>
                    <Text style={{marginVertical:20, alignSelf: "center", fontSize: 20, fontWeight:'bold'}}>HOME</Text>
                        <Image source={require('./assets/card_credit.png')} style={{alignSelf:'center', marginTop:20}}/>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width: 100,marginLeft:10}}>
                                <Text>Name:</Text>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text>Nguyễn Trần Hữu Nguyên</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:30}}>
                            <View style={{width: 100,marginLeft:10}}>
                                <Text>Card Number:</Text>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text>0123-4567-89012</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:30}}>
                            <View style={{width: 100,marginLeft:10}}>
                                <Text>Start date:</Text>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text>09/2015</Text>
                            </View>
                        </View>
                    </Card>  
                </View>
                {/* </ImageBackground> */}
            </View>
        );
    }
}