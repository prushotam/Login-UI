import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomButton = ({text, onPress, type, bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} 
    style={[styles.container, 
    styles[`container_${type}`],
    bgColor?{backgroundColor: bgColor} : {}]}>
      <Text 
      style={[styles.text, 
      styles[`text_${type}`],
      fgColor?{color:fgColor}:{}
      ]}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY:{
    backgroundColor: '#3B71F3',
  },
  //Advance styling learned here to use a button as with different props and and array of styles objects, and also using ternary operations.
  container_TERTIARY:{},

  text: {
    fontWeight:'bold',
    color:'white'
  },
  text_TERTIARY:{
    color:'gray'
  }
});
