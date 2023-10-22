import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { StackActions } from '@react-navigation/native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Home'));
        }, 10000);
    }

    render() {
        return (
            <View>
                <Text>Splash Screen</Text>
            </View>
        );
    }
}

export default Home;