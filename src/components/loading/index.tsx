import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
const animationData = require('@/assets/loading.json');

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={animationData}
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
