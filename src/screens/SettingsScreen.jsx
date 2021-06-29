import React, { useState } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { useSelector} from 'react-redux';
import { deleteItem } from './../../store/actions/item';
import {Text} from 'react-native-elements';
const SettingsScreen = (props) => {
  const itemList = useSelector(state => state.xyz.itemList);
  const name = itemList[itemList.length - 1].name;

  const createTwoButtonAlert = () =>
    Alert.alert('ログアウト', '本当にログアウトしますか？', [
      {
        text: 'キャンセル',
        onPress: () => console.log('Cancel Pressed'),
      },
      { text: 'はい', onPress: () => props.navigation.navigate('Login') },
    ]);

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <StatusBar style="auto" />
      <Header>
        <Body>
          <Title>マイページ</Title>
        </Body>
      </Header>
      <SafeAreaView >
        {/* ここはButtonタブでは文字が表示させれないのはなぜでしょう。 */}
        <View style={styles.button2}>
      <Text style={styles.button3}>{`           登録情報：


メールアドレス：${name.inputMail}


パスワード：${name.inputPassword}`}</Text>
      
        </View>
        <View style={styles.button}>
        <TouchableOpacity title="ログアウト" onPress={createTwoButtonAlert}>
          <Text style={{ fontSize: 20 }}>ログアウト</Text>
        </TouchableOpacity>
        </View >
        <View style={styles.button}>
        <TouchableOpacity title="会社情報" onPress= {() => props.navigation.navigate('WebView')}>
          <Text style={{ fontSize: 20 }}>会社情報</Text>
        </TouchableOpacity>
        </View >
      </SafeAreaView>
    </SafeAreaView >
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop:'10%',
    height: 60,
    width: '100 %',
    padding: 10,
    backgroundColor: '#d3d3d3',
    margin: 3,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    borderRadius:20,
    fontSize:20,
    height: 260,
    width: '100 %',
    padding: 10,
    backgroundColor: '#d3d3d3',
    margin: 3,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button3: {
    fontSize:20,
  },
});

export default SettingsScreen;
