import React from 'react';
import { View, StyleSheet, Text, Button, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

import logo from '../assets/logo3.jpg';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(161,232,235,97)', 'transparent']}
        style={styles.background}
      />
      <Image source={logo} style={styles.logo} />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          borderColor="#87CEFA"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          borderColor="#87CEFA"
        />

        <Button
          title="Login"
          color="#87CEFA"
          onPress={() => navigation.navigate('TelaInicial')}
        />
      </View>

      <View>
        <Text style={styles.texto}> Esqueceu sua senha? </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 200,
    borderColor: '#87CEFA',
  },

  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
  },

  texto: {
    color: '#87CEFA',
    fontSize: 15,
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
