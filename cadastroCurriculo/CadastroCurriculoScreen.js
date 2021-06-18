import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView} from 'react-native';
import {useAsyncStorage}from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { TextInput, Button, Avatar } from 'react-native-paper';

import HeaderModal from '../components/HeaderModal';
import Foto from './Foto'

export default function CadastroCurriculoScreen({ navigation, route }) {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cidade, setCidade] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [funcao, setFuncao] = useState('');
  const [salario, setSalario] = useState('');
  const [imagemBase64, setImagemBase64] = useState()
  const {getItem, setItem} = useAsyncStorage('@contatos')

  const actionSalvar = async () => {
    const listaCurriculos = await getItem().then(JSON.parse) || []

    listaCurriculos.push({nome,data,email,cpf,cidade,escolaridade,telefone,
    funcao,salario,imagemBase64})

    await setItem(JSON.stringify(listaCurriculos))

    console.log('Lista de Curriculos', JSON.stringify(listaCurriculos))

    alert('Currículo cadastrado com sucesso!');
    route.params.setListaCurriculos(listaCurriculos)
    navigation.goBack();
  };

  return (
    <ScrollView>  
      <View style={styles.container}>
        <HeaderModal
          titulo="Cadastro de Currículo"
          acaoVoltar={() => navigation.goBack()}
        />

        <View style={styles.inputs}>
          {
            imagemBase64
              ?<Avatar.Image size={124} source={{uri: imagemBase64}} style={styles.avatar}/>
              :<Foto 
                  takePicture={(base64) => setImagemBase64(base64)}
              />
          }
          
          <Text>Preencha os campos</Text>
            <TextInput
              placeholder="NOME"
              mode="outlined"
              onChangeText={(text) => setNome(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="DATA DE NASCIMENTO"
              mode="outlined"
              onChangeText={(text) => setData(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="EMAIL"
              mode="outlined"
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="CPF"
              mode="outlined"
              onChangeText={(text) => setCpf(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="CIDADE"
              mode="outlined"
              onChangeText={(text) => setCidade(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="ESCOLARIDADE"
              mode="outlined"
              onChangeText={(text) => setEscolaridade(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="TELEFONE"
              mode="outlined"
              onChangeText={(text) => setTelefone(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="FUNÇÃO PRETENDIDA"
              mode="outlined"
              onChangeText={(text) => setFuncao(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="PRETENSÃO SALARIAL R$"
              mode="outlined"
              onChangeText={(text) => setSalario(text)}
              style={styles.input}
            />

          <View style={{ marginTop: 20 }}>
            <Button icon="camera" mode="contained" onPress={actionSalvar}>
              SALVAR
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>  
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    //alignItems: "center"
  },
  inputs: {
    padding: 15,
  },
  input: {
    height: 40,
    width: 250,
  },
  avatar: {
    alignSelf: 'center'
  }
});
