import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomInput from './CommonComponents/CustomInput'
import CustomButton from './CommonComponents/CustomButton'

const App = () => {
  const[userName,SetUsername]= useState('')
  const[password,SetPassword]= useState('')
  const[confirmPassword,SetConfirmPassword]= useState('')
  const [passwordError, setPasswordError] = useState(false);
useEffect(()=>{
setPasswordError(true)
},[password,confirmPassword,userName])
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;

  const validatePassword = () => {
    if(password==confirmPassword){
      if (!passwordPattern.test(password)) {
        setPasswordError(
          "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one special character, and one number"
        );
      } else {
        setPasswordError(false);
      }
    }else{
      setPasswordError('Password and Confirm Password do not match')
    }
  
}
  return (
    <View style={styles.MainPage}>
      <View>
        
      </View>
      
      <CustomInput
      value={userName}
      setValue={SetUsername}
      placeholder={'Username'}
      />
      
      
      <CustomInput
      value={password}
      setValue={SetPassword}
      placeholder={'Password'}
      />
     
     <Text style={{color:'red',fontSize:20}}>{passwordError}</Text>
      
      <CustomInput
      value={confirmPassword}
      setValue={SetConfirmPassword}
      placeholder={'Confirm Password'}
      />

      
      <View style={{display:'flex',flexDirection:'row',alignSelf:'flex-start'}}>
        <Image source={passwordError? require('./icons/rec.png'):require('./icons/check.png')} style={{height:24,width:24}}/>
      <Text style={{color:'#fff',fontSize:20}}>Atleast 8 characters</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',alignSelf:'flex-start'}}>
        <Image source={passwordError? require('./icons/rec.png'):require('./icons/check.png')} style={{height:24,width:24}}/>
      <Text style={{color:'#fff',fontSize:20}}>A lower case letter</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',alignSelf:'flex-start'}}>
        <Image source={passwordError? require('./icons/rec.png'):require('./icons/check.png')} style={{height:24,width:24}}/>
      <Text style={{color:'#fff',fontSize:20}}>An upper case letter</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',alignSelf:'flex-start'}}>
        <Image source={passwordError? require('./icons/rec.png'):require('./icons/check.png')} style={{height:24,width:24}}/>
      <Text style={{color:'#fff',fontSize:20}}>A special character</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',alignSelf:'flex-start'}}>
        <Image source={passwordError? require('./icons/rec.png'):require('./icons/check.png')} style={{height:24,width:24}}/>
      <Text style={{color:'#fff',fontSize:20}}>A number</Text>
      </View>
      <View>

      <CustomButton
      bgColor={'#010203'}
      fgColor={'#fff'}
      text='Create Account'
      onPress={validatePassword}
      />

      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  MainPage:{
    flex:1,
    backgroundColor:'#353435',
    justifyContent:'center',
    alignItems:'center'
  }
})