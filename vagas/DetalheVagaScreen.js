import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Button} from 'react-native';
import Constants from 'expo-constants';

import HeaderModal from '../components/HeaderModal';

export default function ({ navigation, route }) {
  const { vaga } = route.params;

  return (
    <View styles={styles.container}>
      <HeaderModal
        titulo="Detalhes da vaga"
        acaoVoltar={() => navigation.goBack()}
      />
      <View style={styles.infoCard}>
        <Text style={styles.texto}>
          <Text style={styles.textoDestaque}>{vaga.titulo}</Text>
        </Text>

        <Text style={styles.texto}>Faixa salarial</Text>
        <Text style={styles.texto}>
          <Text style={styles.textoDestaque}>{vaga.faixaSalarial}</Text>
        </Text>

        <Text style={styles.texto}>Localização</Text>
        <Text style={styles.texto}>
          <Text style={styles.textoDestaque}>{vaga.localizacao}</Text>
        </Text>

        <Text style={styles.texto}>Benefícios</Text>
        <FlatList
          data={vaga.beneficios}
          renderItem={({ item }) => (
            <Text style={styles.textoDestaque}>{item}</Text>
          )}
        />

        <Text style={styles.texto}>Requisitos</Text>
        <FlatList
          data={vaga.requisitos}
          renderItem={({ item }) => (
            <Text style={styles.textoDestaque}>{item}</Text>
          )}
        />

        <View style={{ marginTop: 12 }}>
          <Button
            title="ENVIAR CURRÍCULO"
            onPress={() => {
              alert('Currículo enviado com sucesso!');
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
  },
  infoCard: {
    padding: 50,
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999999',
    lineHeight: 30,
  },
  textoDestaque: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
