import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, LinKing} from 'react-native';
import {styles} from './styles'

import {Photo} from './components/photo'
import {Description} from './components/description'

export default function App() {

    return (

      <View style={styles.container}>
        <View style={{ textAlign: 'center' }}>
          <Text style={{ fontSize: 25, marginBottom: 25, marginTop: 15, color: '#da1a29', fontWeight: 'bold'}}>
            Anúncios
          </Text>
        </View>
        <View>
        </View>
        <View style={{alignSelf:'center', justifyContent: 'center'}}>
          <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={true}>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Description />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Description />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Description />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Description />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Description />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Description />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Description />{' '}
            </View>
            <View style={styles.box}>
              {' '}
              <Photo largura={120} altura={80} /> <Description />{' '}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
