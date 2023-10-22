import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class screenOne extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#99A799' }}>
                <StatusBar backgroundColor='#ADC2A9' />
                <View style={styles.heading}>

                    <View style={{ flex: 1 }}>
                        <Text style={styles.opentext}>Java Learn</Text>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
                        <Icon
                            style={{ marginRight: 10 }}
                            name="info-circle"
                            size={25}
                            color="#ADC2A9" />
                    </TouchableOpacity>
                </View>

                <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', margin: 20, marginBottom: -30 }}>Selamat Datang di Java Learn!</Text>

                <View>
                    <View style={styles.boxdasar}>
                        <View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}
                                style={styles.box1}>
                                <Text style={styles.kostum}>
                                    1
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('bahasaMadya')}
                                style={styles.box2}>
                                <Text style={styles.kostum}>
                                    2
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('tigaNgoko')}
                                style={styles.box3}>
                                <Text style={styles.kostum}>
                                    3
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.krama}>KRAMA</Text>
                            <Text style={styles.madya}>MADYA</Text>
                            <Text style={styles.ngoko}>NGOKO</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between,'
    },
    heading: {
        backgroundColor: '#FEF5ED',
        paddingVertical: 15,
        elevation: 3,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    opentext: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
    },
    box1: {
        padding: 20,
        marginLeft: -40,
        marginRight: 200,
        marginTop: -100,
        backgroundColor: '#FEF5ED',
        marginBottom: 5,
        borderRadius: 5,
        elevation: 15,
    },
    box2: {
        padding: 20,
        marginLeft: 80,
        marginRight: 80,
        marginTop: -85,
        backgroundColor: '#FEF5ED',
        marginBottom: 5,
        borderRadius: 5,
        elevation: 15,
    },
    box3: {
        padding: 20,
        marginLeft: 200,
        marginRight: -40,
        marginTop: -85,
        backgroundColor: '#FEF5ED',
        marginBottom: 5,
        borderRadius: 5,
        elevation: 15,
    },
    boxdasar: {
        padding: 60,
        marginTop: 100,
        marginHorizontal: 20,
        backgroundColor: '#ADC2A9',
        marginBottom: 5,
        borderRadius: 5,
        elevation: 15,
    },
    kostum: {
        color: '#99A799',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    krama: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: -38,
        marginTop: -5
    },
    madya: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 80,
        marginTop: -27
    },
    ngoko: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 200,
        marginRight: -40,
        marginTop: -27,
    }
})

export default screenOne;