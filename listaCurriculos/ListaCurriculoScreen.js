import React, {useState, useEffect} from 'react';
import {View,StyleSheet,Text,FlatList,Image,TouchableOpacity, Alert
} from 'react-native';
import Constants from 'expo-constants';

import AsyncStorage from '@react-native-async-storage/async-storage';


import FotoContato from './FotoContato';
import HeaderModal from '../components/HeaderModal';
import FloatButton from '../components/FloatButton'
import BotaoMenu from '../components/BotaoMenu'
import foto from '../assets/curriculo.png'

export default function ListaCurriculoScreen({navigation, route}) {
 
const [listaCurriculos, setListaCurriculos] = useState([])

useEffect(() => {
  console.log('useEffect' , new Date())
  carregarCurriculos()
}, [])

async function carregarCurriculos() {
  const valores = await AsyncStorage
                           .getItem('@contatos')
                           .then(JSON.parse) || []
                           
  setListaCurriculos(valores)                                
}

  const obterImagemAvatar = (imagemBase64) => (
    <Image  
      source={imagemBase64 ? {uri: imagemBase64} : foto}
      style={styles.foto}
    />  
  )

  const onDelete = (item) => {
    Alert.alert(
      'Remover Currículo',
      `Deseja remover o currículo ${item.nome}` ,
      [
        {text: "Não", style: "cancel"},
        {text: "Sim", onPress: async () => {
          const novaListaCurriculos = listaCurriculos.filter(c => c.nome !== item.nome)
          await AsyncStorage.setItem('@contatos', JSON.stringify(novaListaCurriculos))

          setListaCurriculos(novaListaCurriculos)
          alert('Contato removido com sucesso')
        }}
      ] 
    )
  }

  return (
    <View style={styles.container}>
      <HeaderModal
        titulo="CURRÍCULOS"
        acaoVoltar={() => navigation.goBack()}
        
      />
      <FlatList
        data={listaCurriculos}
        renderItem={
          ({ item }) => 
            <TouchableOpacity
              onPress={() => navigation.navigate('ligar', { contato: item })}
            >
              <FotoContato
                email={item.email}
                nome={item.nome}
                telefone={item.telefone}
                foto={obterImagemAvatar(item.imagemBase64)}
                onDelete={() => onDelete(item)}
              />
            </TouchableOpacity>
        }
      />

     <BotaoMenu style={styles.botao}
          titulo="Clique para Cadastrar"
          acao={() => navigation.navigate('CadastroCurriculo')}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
  },
  foto: {
    width: 70,
    height: 90,
    borderRadius: 14,
    elevation: 10,
  },
  botao: {
    justifyContent: 'space-evenly',
    padding: 20
  }
});
