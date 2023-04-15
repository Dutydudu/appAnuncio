import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from 'react-native';

import {styles} from '../styles'

export default function Photo(props) {
    let img =
      'https://imgs.search.brave.com/lugm8ETbZQZB1flxBzOIJLaIRLFfJEKvrkrolYFExwE/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/M19haTB3N2Q1R1Zy/YlBjaGxIcUlRSGFF/SyZwaWQ9QXBp';

  return (
    <View>
      <Image
        source={{ uri: img }}
        style={{
          width: props.largura,
          height: props.altura,
          alignSelf: 'center',
          marginTop: 10,
        }}
      />
    </View>
  );
  
}

export {Photo};