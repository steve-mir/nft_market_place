import { View, Text, Image } from 'react-native'
import { COLORS, SIZES } from '../constants/theme'
import assets from '../constants/assets'

export const NFTTitle = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}

export const EthPrice = () => {
  return (
    <View>
      <Text>EthPrice</Text>
    </View>
  )
}

export const ImageCmp = ({imgUrl, index}) => {
  return (
    <Image
        source={imgUrl}
        resizeMode='contain'
        style={{
            width: 48,
            height: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font
        }}
    />
  )
}

export const People = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      {[assets.person01, assets.person02, assets.person04].map((imgUrl, 
      index) =>(
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
      ) )}
    </View>
  )
}

export const EndDate = () => {
  return (
    <View 
        style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white
        }}>
      <Text>EndDate</Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extralarge,
        flexDirection: "row",
        justifyContent: 'space-between',
        //backgroundColor:COLORS.white
    }}>
      
      <People/>
      <EndDate/>
    </View>
  )
}

