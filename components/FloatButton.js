import React from 'react'
import {StyleSheet, TouchableHighlight,Text} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'; 

export default function FloatButton({acao}) {
  return(
    
    <TouchableHighlight 
      style={styles.botao}
      onPress={acao}
      >
      
      <MaterialIcons name="add" size={35} color="white" />
    </TouchableHighlight>

    
  )
}

const styles = StyleSheet.create({
  botao:{
    borderRadius: 100,
    width: 70,
    height: 70,
    backgroundColor: '#87CEFA',
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 40,
    right: 20,
    elevation: 8,
  }
})