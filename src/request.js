import React, {Component} from 'react'
import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native'
import { Header, Icon, Card } from 'react-native-elements';
import Axios from 'axios';

export default class request extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data : [],
            refreshing: false,
        }
    }

    onLoadData = () => {
        this.setState({refreshing: true})
        Axios.get("http://bk-id.herokuapp.com/users")
        .then((res)=>{
            if(res.status == 200)
            {
                let response = []
                res.data.map((item, index) => {
                    if(!item.name && !item.studentID)
                    {
                        response.push(item)
                    }
                })
                this.setState({data: response, refreshing: false})
            }
        })
    }

    componentDidMount = () => {
        this.onLoadData()
    }

    renderMenu = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => {this.props.navigation.openDrawer()}}>
                    <Icon
                        name='menu' 
                        color = 'white'
                    />
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

    renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Create', item.UID)}}>
                <Card style={{width:'100',backgroundColor:'white', flexDirection: 'column'}}>
                    <Text>ID: {item.studentID}</Text>
                    <Text>Name: {item.name}</Text>
                    <Text>UID: {item.UID}</Text>
                </Card>
            </TouchableOpacity>   
        )
    }

    render()
    {
        const {data} = this.state
        if(!data)
        {
            return(
                <View>
                    <Text>
                        Waiting for data
                    </Text>
                </View>
            )
        }
        else{
            return (
                <View style = {{flex: 1}}>
                    <Header
                        leftComponent={this.renderMenu()}
                        centerComponent={this.renderCenter()}
                        outerContainerStyles={{ backgroundColor: '#445870' }}
                    />
                    <Text style={{ marginVertical: 20, alignSelf: "center", fontSize: 20, fontWeight: 'bold' }}>ADD MEMBER REQUESTS</Text>
                    <FlatList
                        data={data}
                        renderItem={this.renderItem}
                        keyExtractor = {(item, index) => item._id}
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
            );
        }
    }
}