import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, SHADOWS, SIZES } from '../constants/theme'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity 
        style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extralarge,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props,
        }}
        onPress={handlePress}
        >


            <Image source={imgUrl} 
                resizeMode='contain'
                style={{
                    width: 24,
                    height: 24,
                }}
            />
        
    </TouchableOpacity>
  )
}

export const RectButton = () => {
  return (
    <View>
      <Text>RectButton</Text>
    </View>
  )
}