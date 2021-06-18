import React from 'react'

import{View, Text, Image, StyleSheet} from 'react-native'

import { AntDesign } from '@expo/vector-icons';

import curriculo from '../assets/curriculo.png'

export default function Header() {
  return(
    <View style={styles.header}>
      <View style={styles.titulo}>
        <Text style={styles.curriculum}>Curriculum Vitae </Text>
      </View>
      <AntDesign name="filetext1" size={24} color="black" style = {styles.imagem} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 10,
    borderColor: 'black' ,
    borderWidth: 1,
  },
  titulo: {
    flexDirection: "row",
    maginBottom: 10
  },
  curriculum: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Roboto"
  },

})