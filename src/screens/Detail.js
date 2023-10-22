import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#99A799' }}>
                <StatusBar backgroundColor='#ADC2A9' />
                <View
                    style={{
                        backgroundColor: '#FEF5ED',
                        paddingVertical: 15,
                        elevation: 3,
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Icon
                            style={{ marginRight: 10 }}
                            name="chevron-left"
                            size={25}
                            color="#ADC2A9" />
                    </TouchableOpacity>

                    <Text
                        style={{
                            color: '#000000',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 18,
                        }}>
                        Detail
                    </Text>
                </View>

                <Text
                    style={{
                        textAlign: 'center',
                        color: '#000000',
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginTop: 30,
                    }}>
                    {this.props.route.params.judul}
                </Text>

                <Text
                    style={{
                        textAlign: 'center',
                        color: '#000000',
                        fontSize: 18,
                    }}>
                    {this.props.route.params.deskripsi}
                </Text>
            </View>
        );
    }
}

export default Home;