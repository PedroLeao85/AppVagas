import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import Constants from 'expo-constants';

import Header from '../components/Header';
import BotaoMenu from '../components/BotaoMenu';

export default function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.opcoes}>
        <BotaoMenu
          titulo="CADASTRO DE CURRÍCULO"
          acao={() => navigation.navigate('CadastroCurriculo')}
        />

        <BotaoMenu
          titulo="CURRÍCULOS"
          acao={() => navigation.navigate('ListaCurriculo')}
        />

        <BotaoMenu
          titulo="VISUALIZAÇÃO DE VAGAS"
          acao={() => navigation.navigate('ListagemVaga')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  opcoes: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 20,
  },
});
