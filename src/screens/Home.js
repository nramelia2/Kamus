import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { judul: 'Api', deskripsi: 'Grama' },
                { judul: 'Bangun', deskripsi: 'Wungu' },
                { judul: 'Bawa', deskripsi: 'Asta' },
                { judul: 'Bawaan', deskripsi: 'Ampilan' },
                { judul: 'Besar', deskripsi: 'Ageng' },
                { judul: 'Bergantian', deskripsi: 'Gentosan' },
                { judul: 'Bicara', deskripsi: 'Ngendika' },
                { judul: 'Bohong', deskripsi: 'Dora' },
                { judul: 'Buat', deskripsi: 'Damel' },
                { judul: 'Cepat', deskripsi: 'Enggal' },
                { judul: 'Darah', deskripsi: 'Rah' },
                { judul: 'Daun', deskripsi: 'Ron' },
                { judul: 'Gajah', deskripsi: 'Liman' },
                { judul: 'Ganti, Bertukar', deskripsi: 'Gantos' },
                { judul: 'Genap, Lengkap', deskripsi: 'Jangkep' },
                { judul: 'Kering', deskripsi: 'Aking' },
                { judul: 'Kurus', deskripsi: 'Susut' },
                { judul: 'Mudah', deskripsi: 'Gampil' },
                { judul: 'Mau', deskripsi: 'Kersa' },
                { judul: 'Mengapa', deskripsi: 'Kenging punapa' },
                { judul: 'Menggugat', deskripsi: 'Gigat' },
                { judul: 'Manfaat', deskripsi: 'Gina' },
            ],

            dataTampil: [
                { judul: 'Api', deskripsi: 'Grama' },
                { judul: 'Bangun', deskripsi: 'Wungu' },
                { judul: 'Bawa', deskripsi: 'Asta' },
                { judul: 'Bawaan', deskripsi: 'Ampilan' },
                { judul: 'Besar', deskripsi: 'Ageng' },
                { judul: 'Bergantian', deskripsi: 'Gentosan' },
                { judul: 'Bicara', deskripsi: 'Ngendika' },
                { judul: 'Bohong', deskripsi: 'Dora' },
                { judul: 'Buat', deskripsi: 'Damel' },
                { judul: 'Cepat', deskripsi: 'Enggal' },
                { judul: 'Darah', deskripsi: 'Rah' },
                { judul: 'Daun', deskripsi: 'Ron' },
                { judul: 'Gajah', deskripsi: 'Liman' },
                { judul: 'Ganti, Bertukar', deskripsi: 'Gantos' },
                { judul: 'Genap, Lengkap', deskripsi: 'Jangkep' },
                { judul: 'Kering', deskripsi: 'Aking' },
                { judul: 'Kurus', deskripsi: 'Susut' },
                { judul: 'Mudah', deskripsi: 'Gampil' },
                { judul: 'Mau', deskripsi: 'Kersa' },
                { judul: 'Mengapa', deskripsi: 'Kenging punapa' },
                { judul: 'Menggugat', deskripsi: 'Gigat' },
                { judul: 'Manfaat', deskripsi: 'Gina' },
            ],

            pencarian: ''
        };
    }

    pencarian = () => {
        let data = this.state.data;

        data = data.filter(item =>
            item.judul.toLowerCase().includes(this.state.pencarian.toLowerCase()),
        );

        this.setState({ dataTampil: data });
    };

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

                    <View style={{ flex: 1 }}>
                        <Text
                            style={{
                                color: '#000000',
                                fontWeight: 'bold',
                                fontSize: 18,
                            }}>
                            Krama
                        </Text>
                    </View>

                </View>

                <TextInput
                    value={this.state.pencarian}
                    onChangeText={(text) =>
                        this.setState({ pencarian: text }, () => this.pencarian())
                    }
                    style={{
                        backgroundColor: '#D3E4CD',
                        marginHorizontal: 20,
                        marginTop: 20,
                        borderRadius: 5,
                        marginBottom: 20,
                    }}
                    placeholder="Masukan kata disini"
                />


                <FlatList
                    data={this.state.dataTampil}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={{
                                marginVertical: 10,
                                marginHorizontal: 20,
                                backgroundColor: '#ADC2A9',
                                padding: 10,
                                borderRadius: 5,
                                elevation: 3
                            }}
                            onPress={() => this.props.navigation.navigate('Detail', {
                                judul: item.judul,
                                deskripsi: item.deskripsi,
                            })}>
                            <Text style={{ color: '#000000' }}>{item.judul}</Text>
                            <Text style={{ color: '#000000' }}>{item.deskripsi}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.judul}
                />
            </View>
        );
    }
}

export default Home;