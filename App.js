import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicialScreen from './home/TelaInicialScreen';
import CadastroCurriculoScreen from './cadastroCurriculo/CadastroCurriculoScreen';
import ListagemVagaScreen from './vagas/ListagemVagaScreen';
import DetalheVagaScreen from './vagas/DetalheVagaScreen';
import LoginScreen from './home/LoginScreen'
import ListaCurriculoScreen from './listaCurriculos/ListaCurriculoScreen';

const Stack = createStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="TelaInicial" component={TelaInicialScreen} />
        <Stack.Screen
          name="CadastroCurriculo"
          component={CadastroCurriculoScreen}
        />
        <Stack.Screen name="ListagemVaga" component={ListagemVagaScreen} />
        <Stack.Screen name="DetalheVaga" component={DetalheVagaScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ListaCurriculo" component={ListaCurriculoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
