import React, { Component } from 'react';
import { Header } from 'react-native-elements'
import { View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { WebView } from 'react-native-webview';

export default class App extends Component {

  // ローディング画面
  loading = () => {
    return <ActivityIndicator style={{ flex: 1, bottom: "30%" }}
                              color='hsla(0, 100%, 50%, 0.9)'
                              size='large' />
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* --- ヘッダー --- */}
        <Header
          centerComponent={{
            text: '会社概要',
            style: {
              fontSize: 24,
            }
          }}
          leftComponent={
            <Icon
              name="chevron-left"
              size={20} color="black"
              style={{ marginLeft: 5 }}
              onPress={() => this.webView.goBack()}
            />
          }
          rightComponent={
            <Icon
              name="chevron-right"
              size={20}
              color="black"
              style={{ marginRight: 5 }}
              onPress={() => this.webView.goForward()}
            />
          }
          backgroundColor="white"
          barStyle="light-content"
        />

        {/* --- WebView --- */}
        <WebView
          ref={ref => this.webView = ref}
          source={{ uri: 'https://www.jhcc.co.jp/' }}
          renderLoading={() => this.loading()}
          startInLoadingState={true}
        />
      </View>
    );
  }
}