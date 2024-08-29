import React from 'react';
import { View, StyleSheet, Text, Pressable, Image, Linking } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';  

const animationData = require('@/assets/welcome.json');
const img = require('@/assets/produto.png');

const Welcome = () => { 
  const navigation = useNavigation(); 

  const handleImagePress = async () => {
    const imageUrl = 'https://techinovationgroup.com/';
    try {
      await Linking.openURL(imageUrl);
    } catch (error) {
      console.error("Não foi possível abrir a URL da imagem:", error);
    }
  };

  const handleButtonPress = () => {
    navigation.navigate('Home');  
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={animationData}
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
          top: -40,
        }}
        onAnimationFinish={() => console.log('Animation Finished')}
      />
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={[styles.text, { color: '#008000', fontSize: 20, fontWeight: "bold" }]}>
          O melhor momento para
        </Text>
        <Text style={[styles.text, { color: '#008000', fontSize: 20, fontWeight: "bold" }]}>
          proteger seu veículo é agora
        </Text>
      </View>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
        position: "absolute",
      }}>
        <Text style={[styles.text, { color: 'black', fontSize: 10, }]}>Produzido por:</Text>
        <Pressable onPress={handleImagePress}>
          <Image source={img} style={{
            width: 105,
            height: 12,
          }} />
        </Pressable>
      </View>
      <Pressable style={styles.button} onPress={handleButtonPress}>
        <Text style={[styles.text, { fontWeight: "bold", fontSize: 16 }]}>Prosseguir</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    position: "absolute",
    bottom: 70,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#008000',
    width: "90%",
    height: 60,
  },
  text: {
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Welcome;
