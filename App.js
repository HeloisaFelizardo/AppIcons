import React from "react";
import { Text, View } from "react-native";
import { Entypo, EvilIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

import estilos from "./estilos";

export default function App () {
  return (
    <View style={ estilos.container }>
        <View style={ estilos.boxIcones}>
          <Text style={ estilos.boxIconesTitulo}>Entypo</Text>

          <View style={ estilos.iconesLista}>
            <Entypo name="arrow-bold-up" size={ 40 } color="#1f5831" />
            <Entypo name="arrow-bold-down" size={ 40 } color="#1f5831" />
            <Entypo name="arrow-bold-left" size={ 40 } color="#1f5831" />
            <Entypo name="arrow-bold-right" size={ 40 } color="#1f5831" />
            <Entypo name="chat" size={ 40 } color="#038cf5" />
            <Entypo name="cloud" size={ 40 } color="#6a6a6a" />
          </View>
        </View>
        
        <View style={ estilos.boxIcones}>
          <Text style={ estilos.boxIconesTitulo}>EvilIcons</Text>

          <View style={ estilos.iconesLista}>
            <EvilIcons name="close" size={ 40 } color="red" />
            <EvilIcons name="location" size={ 40 } color="gold" />
            <EvilIcons name="navicon" size={ 40 } color="#871ed7" />
            <EvilIcons name="star" size={ 40 } color="yellow" />
            <EvilIcons name="trash" size={ 40 } color="black" />
            <EvilIcons name="search" size={ 40 } color="black" />
          </View>
        </View>
        
        <View style={ estilos.boxIcones}>
          <Text style={ estilos.boxIconesTitulo}>MaterialCommunityIcons</Text>

          <View style={ estilos.iconesLista}>
            <MaterialCommunityIcons name="account-box" size={40} color="#1e71d7" />
            <MaterialCommunityIcons name="alarm" size={40} color="#f16658" />
            <MaterialCommunityIcons name="alert-circle" size={40} color="gold" />
            <MaterialCommunityIcons name="autorenew" size={40} color="green" />
            <MaterialCommunityIcons name="camera-outline" size={40} color="#323232" />
            <MaterialCommunityIcons name="cart" size={40} color="#6a6a6a" />
          </View>
        </View>
    </View>
  )
};
