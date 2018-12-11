import React, { Component } from 'react'
import {View, TouchableOpacity, Text, TextInput, Alert} from 'react-native'
import {Header, Icon, Card, Button} from 'react-native-elements'
import axios from 'axios';

export default class createStudent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name : "",
            studentID : "",
        }
    }

    onGoBack = () => {
        if(this.state.name || this.state.studentID)
        {
            Alert.alert(
                'Caution',
                'Are you sure?',
                [
                    {text: 'No', onPress: () => console.log('OK Pressed')},
                    {text: 'Yes', onPress: () => this.props.navigation.goBack()},
                ],
                { cancelable: false }
            )
        }
        else if(!this.state.name && !this.state.studentID)
        {
            this.props.navigation.goBack()
        }
    }

    renderMenu = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => {this.onGoBack()}}>
                    <Icon
                        name='arrow-back' 
                        color = 'white'
                    />
                </TouchableOpacity>
            </View>
        );
    }

    renderCenter = () => {
        return (
            <View style={{ flexDirection: "row" }}>
                <Text style={{color: 'white', marginLeft: 10, fontWeight: 'bold', fontSize: 20 }}>Create New Student</Text>
            </View>
        );
    }

    onCreate = () =>
    {
        const {params} = this.props.navigation.state
        if(this.state.name && this.state.studentID)
        {
            axios.post("http://bk-id.herokuapp.com/users/update", {
                UID: params,
                name: this.state.name,
                studentID: this.state.studentID, 
            })
            .then((res)=>{
                if(res.status == 200)
                {
                    Alert.alert(
                        'Server Respone',
                        'A new student has been created',
                        [
                            {text: 'OK', onPress: () => this.props.navigation.goBack()},
                        ],
                        { cancelable: false }
                    )
                }
            })
            .catch(function (error) {
                console.warn(error);
            });
        }
        else
        {
            Alert.alert(
                'Error',
                'Please enter both name and student ID',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }
    }
    
    render()
    {
        const {params} = this.props.navigation.state
        return(
            <View style = {{flex: 1}}>
                <Header
                    leftComponent={this.renderMenu()}
                    centerComponent={this.renderCenter()}
                    outerContainerStyles={{ backgroundColor: '#445870' }}
                />
                <Text style={{ marginVertical: 20, alignSelf: "center", fontSize: 20, fontWeight: 'bold' }}>{params}</Text>
                <Card>
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>Name: </Text>
                        <TextInput
                            style = {{
                                borderWidth: 1,
                                borderRadius: 5,
                                marginLeft: '11%',
                                width: '70%'
                            }}
                            onChangeText={(name) => this.setState({ name })}
                            placeholder = {"Please enter student name"}
                            value={this.state.name}
                        />
                    </View>
                    <View style = {{flexDirection: 'row', alignItems: 'center', marginTop: '5%', marginBottom: '10%'}}>
                        <Text>Studen ID: </Text>
                        <TextInput
                            style = {{
                                borderWidth: 1,
                                borderRadius: 5,
                                marginLeft: '5%',
                                width: '70%'
                            }}
                            onChangeText={(studentID) => this.setState({ studentID })}
                            placeholder = {"Please enter student ID"}
                            value={this.state.studentID}
                        />
                    </View>
                </Card>
                <TouchableOpacity
                    style = {{
                        width: '100%',
                        height: '10%',
                        backgroundColor: '#3a7c78',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: 0,
                    }}
                    onPress = {() => { this.onCreate() }}
                >
                    <Text style = {{fontSize: 18, fontWeight: 'bold', color: 'white'}}>CREATE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}