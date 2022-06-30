
import { React, userState} from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { COLORS } from '../constants/theme';
import { NFTData } from '../constants/dummy';

import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';


const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList
            data={NFTData}
            renderItem={({item}) => <NFTCard data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator = {false}
            ListHeaderComponent={<HomeHeader/>}
          />
        </View>

        <View style={{
          position: "absolute",
          top: 0,
          botttom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>

          <View style={{height: 300, backgroundColor: COLORS.primary}}/>
          <View style={{height: 300, backgroundColor: COLORS.white}}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home