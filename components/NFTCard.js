import { useNavigation } from '@react-navigation/native'
import { View, Text, Image } from 'react-native'
import { CircleButton } from '.';
import assets from '../constants/assets';
import { COLORS, SHADOWS, SIZES } from '../constants/theme';
import { SubInfo } from './SubInfo';

const NFTCard = ({data}) => {
    const navigation = useNavigation();
  return (
    <View style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extralarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    }}>

        <View style={{width: "100%", height: 250}}>
            <Image source={data.image} 
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: "100%",
                    borderTopLeftRadius: SIZES.font,
                    borderTopRightRadius: SIZES.font
                }}
            />

            <CircleButton imgUrl={assets.heart} right={10} top={10} />
        </View>
      
      <SubInfo/>
    </View>
  )
}

export default NFTCard