import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from 'react-native';

import {styles} from '../styles'

export default function Description() {

  return (
    <View style={styles.texto}>
      <Text>Fiat Uno</Text>
      <Text>Com Escada Em Cima</Text>
      <Text>Ano: 2010</Text>
      <Text>Com 50% de Desconto</Text>
      <Text>Apenas R$1.000.000</Text>
    </View>
  );
  
}

export {Description};