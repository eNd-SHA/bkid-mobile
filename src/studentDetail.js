import React, { Component } from 'react'
import {View, TouchableOpacity, Image, Text, FlatList, Alert} from 'react-native'
import {Header, Icon, Card} from 'react-native-elements'
import Axios from 'axios';

export default class studentDetail extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data: {},
            refreshing: false,
        }
    }

    onLoadData = () => {
        const {params} = this.props.navigation.state
        this.setState({refreshing: true})
        Axios.get(`http://bk-id.herokuapp.com/users/${params}`)
        .then((res)=>{
            if(res.status == 200)
            {
                this.setState({data: res.data, refreshing: false})
            }
        })
    }

    componentDidMount = () => {
        this.onLoadData()
    }

    renderMenu = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
                    <Icon
                        name='arrow-back' 
                        color = 'white'
                    />
                </TouchableOpacity>
            </View>
        );
    }

    onDelete = () => {
        Alert.alert(
            'Caution',
            'Are you sure?',
            [
                {text: 'No', onPress: () => {}},
                {text: 'Yes', onPress: () => {
                    Axios.post("http://bk-id.herokuapp.com/users/delete", {
                        UID: this.state.data.UID,
                    })
                    .then((res)=>{
                        if(res.status == 200)
                        {
                            Alert.alert(
                                'Server Respone',
                                'This student has been deleted',
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
                }},
            ],
            { cancelable: false }
        )
        
    }

    renderDelete = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => {this.onDelete()}}>
                    <Icon
                        name='delete' 
                        color = 'white'
                    />
                </TouchableOpacity>
            </View>
        );
    }

    renderCenter = () => {
        return (
            <View style={{ flexDirection: "row" }}>
                <Text style={{color: 'white', marginLeft: 10, fontWeight: 'bold', fontSize: 20 }}>Student History</Text>
            </View>
        );
    }

    renderItem = ({item}) => {
        let date = new Date(item.accessTime)
        return (
            <Card style={{width:'100',backgroundColor:'white', flexDirection: 'column'}}>
                <Text>Room: {item.roomID}</Text>
                {item.accessIn && <Text>Check In</Text>}
                {!item.accessIn && <Text>Check Out</Text>}
                <Text>Access Time: {date.getHours()}:{date.getMinutes()}:{date.getSeconds()} {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</Text>
            </Card>
        )
    }
    
    render()
    {
        const {data} = this.state
        return(
            <View style = {{flex: 1}}>
                <Header
                    leftComponent={this.renderMenu()}
                    centerComponent={this.renderCenter()}
                    rightComponent={this.renderDelete()}
                    outerContainerStyles={{ backgroundColor: '#445870' }}
                />
                <Text style={{ marginVertical: 20, alignSelf: "center", fontSize: 20, fontWeight: 'bold' }}>{data.name}</Text>
                <FlatList
                    data = {data.accessHistory}
                    renderItem = {this.renderItem}
                    keyExtractor = {(item, index)=>item._id}
                    ListFooterComponent={ <View style={{ marginBottom: 40, }} /> }
                    ListEmptyComponent={ 
                        <View>
                            <Text style = {{textAlign: 'center'}}>There is no data</Text>
                        </View> 
                    }
                    refreshing = {this.state.refreshing}
                    onRefresh = {this.onLoadData}
                />
            </View>
        )
    }
}