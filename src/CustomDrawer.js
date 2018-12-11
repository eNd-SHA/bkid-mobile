import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

export default class CustomDrawer extends Component {
    constructor(props) {
        super(props);
    }

    renderBK = () => {
        return (
            <View>
                <Image style={{ width: 30, height: 30 }} source={require('./assets/Bk.png')} />
            </View>
        )
    }

    render() {
        const menu = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/220px-Hamburger_icon.svg.png';
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Header
                    leftComponent={this.renderBK()}
                    centerComponent={{ text: 'BKID', style: {color: 'white', fontSize: 20, fontWeight: 'bold' } }}
                    outerContainerStyles={{ backgroundColor: '#445870' }}
                />
                <TouchableOpacity style={s.item} onPress={() => {this.props.navigation.navigate('Home screen')}}>
                    <View style={{flexDirection:'row', marginLeft:10}}>
                        <Image style={{ width: 30, height: 30 }} source={require('./assets/icon_card.png')} />
                        <Text style={{ fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>HOME</Text>
                    </View>
                    <Image style={{ width: 30, height: 30 }} source={require('./assets/arrow_right.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={s.item} onPress={() => {this.props.navigation.navigate('History')}}>
                    <View style={{flexDirection:'row', marginLeft:10}}>
                        <Image style={{ width: 30, height: 30 }} source={require('./assets/history.png')} />
                        <Text style={{ fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>STUDENTS</Text>
                    </View>
                    <Image style={{ width: 30, height: 30 }} source={require('./assets/arrow_right.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={s.item} onPress={() => {this.props.navigation.navigate('Request')}}>
                    <View style={{flexDirection:'row', marginLeft:10}}>
                        <Image style={{ width: 30, height: 30 }} source={require('./assets/add-user.png')} />
                        <Text style={{ fontWeight: 'bold', marginLeft: 10, marginTop: 5 }}>REQUESTS</Text>
                    </View>
                    <Image style={{ width: 30, height: 30 }} source={require('./assets/arrow_right.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const s = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginTop: 10,
        marginVertical: 10,
        width: '100%',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
});