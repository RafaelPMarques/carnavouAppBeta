import * as React from 'react';
import { View, StyleSheet, Image, ImageBackground, ScrollView  } from 'react-native';
import { Text, TextInput, Button, Icon } from 'react-native-paper';
import Card from '../card';


export default function home(){
    const [text, setText] = React.useState("");

    return(
        <View>
            <View style={styles.header}>
                <Image
                source={require('../../assets/images/carnavou-logo-nav.png')}
                />
            </View>
            <ScrollView style={{marginBottom:60}}>
            <ImageBackground 
                source={require('../../assets/images/banner-home.png')} // Caminho da imagem de fundo
                style={styles.imageBackground}
                >
                    <View style={styles.container}>
                    <Text style={styles.whiteText}>
                        <Text variant="displaySmall" style={styles.whiteText}> 
                        Eu quero é botar{'\n'} 
                        <Text style={[styles.boldText, styles.whiteText]}>
                        meu bloco na rua
                        </Text>
                        </Text>
                        {'\n'}
                        <Text style={styles.whiteText}>
                        Os <Text style={[styles.boldText, styles.whiteText]}>blocos de São Paulo</Text> na palma da sua mão.
                        </Text>
                    </Text>
                    </View>
            </ImageBackground>
            <View style={[styles.mainContainer]}>
            <View style={[styles.searchContainer]}>
            <Text variant='titleMedium' style={styles.boldText}>Pesquise pelo bloco</Text>
            <TextInput
                label="Pesquise pelo nome do bloco..."
                value={text}
                onChangeText={text => setText(text)}
                style={[styles.searchInput]}
                />
            <View style={[styles.searchButtonsContainer]}>
            <Button style={[styles.primaryButton, {flex: 3}]} icon="text-search" mode="contained" onPress={() => console.log('Pressed')}>
                Pesquisar
            </Button>
            <Button style={[styles.filterButton]} icon="filter-menu" mode="outlined" onPress={() => console.log('Pressed')}>
                Filtrar
            </Button>
            </View>
            </View>
            <Text variant="displaySmall" style={[styles.agendaText]}>Agenda 2024</Text>
            <Text variant="titleLarge" style={[styles.boldText, styles.serifText,{ marginBottom:10}]}>Pós Carnaval 🎉</Text>
            <Text variant='bodyLarge' style={[{marginBottom:10, fontWeight: '100', color:'#45434C'}]}>18/02</Text>
            <Card/>
            <Card/>
            <Card/>
            <Button style={[styles.primaryButton]} icon="text-search" mode="contained" onPress={() => console.log('Pressed')}>
                Próximos blocos
            </Button>
            </View>
            <View style={[styles.mapsContainer]}>
                <Text variant='titleLarge' style={[styles.serifText, styles.boldText]}>
                    Cadê o bloco?
                </Text>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#EBFF01',
        justifyContent:'center',
        alignItems:'center',
        padding: 20
    },
    whiteText: {
        color:'#FFFFFF'
    }
    ,
    boldText:{
        fontWeight:'bold'
    },
    serifText:{
        fontFamily:'serif'
    },
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
      },
    container: {
    padding: 20,
    }, 
    mainContainer:{
        margin: 8,
        marginBottom: 40
    },
    searchContainer:{
        display: 'flex',
        gap: 10,
        marginBottom: 60
    },
    searchInput:{
        backgroundColor: 'transparent',   
    },
    searchButtonsContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        gap: 20,
    },
    primaryButton:{
        borderRadius: 10,
        backgroundColor: '#682B7D'
    },
    filterButton:{
        flex: 1,
        borderRadius: 10,
    },
    agendaText:{
        color: '#8D8A92',
        fontFamily: 'serif',
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 38,
        marginBottom: 30
    },
    mapsContainer:{
        paddingHorizontal: 10,
        paddingVertical: 60,
        backgroundColor: '#E3EB89'
    },
})