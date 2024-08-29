import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import Loading from '@/components/loading';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={loading ? 'dark-content' : 'light-content'} 
        translucent={true}
        backgroundColor="transparent"
      />
      {loading ? (
        <Loading/>
      ) : (
        <WebView
          source={{ uri: 'http://gps.tracker.co.ao' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsInlineMediaPlayback={true}
          originWhitelist={['*']}
          mixedContentMode="always"
          onShouldStartLoadWithRequest={(request) => {
            return true;
          }}
          style={styles.webView}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94ce06', 
  },
  webView: {
    marginTop:20,
    flex: 1,
  },
});

export default Home;
