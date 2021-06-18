import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,AsyncStorage} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import HeaderModal from '../components/HeaderModal';

const listaVagas = [
  {
    titulo: 'Desenvolvedor Java Sênior',
    faixaSalarial: 'R$ 8.000,00 - R$ 9.000,00', 
    localizacao: 'Belo Horizonte - MG',
    beneficios: [
      'Assistência médica',
      'Assistência odontológica',
      'Vale-refeição',
      'Vale-transporte',
    ],
    requisitos: [
      'Experiência e profundo conhecimento de programação em plataforma JAVA;',
      'Conhecimentos sólidos em programação orientada a objetos;',
      'Familiaridade com serviços RESTFULL, Hibernate, JPA, SpringBoot;',
      'Conhecimento em Jenkins, Jira, Sonar, Git',
    ],
  },
  {
    titulo: 'Desenvolvedor .NET Pleno',
    faixaSalarial: 'R$ 5.000,00 - R$ 7.000,00',
    localizacao: 'Blumenau, SC',
    beneficios: [
      'Assistência médica',
      'Assistência odontológica',
      'Convênio Farmácia',
      'Vale-refeição',
      'Vale-transporte',
    ],
    requisitos: [
      'Experiência sólida em desenvolvimento de sistemas',
      'Lógica de programação e construção de algoritmos',
      'Orientação a objetos',
      'Domain Driven Design',
      'Testes de software',
    ],
  },
];

export default function ListagemVagaScreen({ navigation, route }) {
  const [vagas, setVagas] = useState([]);

  const goBack = () => navigation.goBack();

  const Card = ({ texto, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <Text style={styles.text}>{texto}</Text>
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    function carregarVagas() {
      setVagas(listaVagas);
    }

    carregarVagas();
  });

  return (
    <View style={styles.container}>
      <HeaderModal
        titulo="Vagas Disponíveis"
        acaoVoltar={() => navigation.goBack()}
      />
      <View style={styles.body}>
        <FlatList
          data={vagas}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetalheVaga', { vaga: item })
              }>
              <View style={styles.card}>
                <View>
                  <Text style={styles.text}>{item.titulo}</Text>
                  <Text style={styles.text}>{item.faixaSalarial}</Text>
                  <Text style={styles.text}>{item.localizacao}</Text>
                </View>
                <View>
                  <MaterialIcons name="navigate-next" size={24} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#d1d1d6',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
    flexGrow: 1,
  },
  body: {
    padding: 16,
  },
  container: {
    //flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    //alignItems: "center"
  }
});
