import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const OnboardingScreen = () => {
  return (
    <View>
      <Text style={styles.heading}>You AI Assistant</Text>
      <Text style={styles.subText}>
        Using this software you can ask you questiona and recieve articles using artificial intelligence assistant
      </Text>
        <Image
          source={require('../assets/images/frame.png')} // make sure this path is correct
          style={styles.image}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles=StyleSheet.create({

     heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3369FF',
    marginBottom: 30,
    marginTop:80,
    textAlign: 'center',
  },
   subText: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 20,
    marginTop:20
  },
  image: {
    width: '100%',
    height: height * 0.35, // dynamic height
    marginBottom: 40,
    marginTop:90
  },
    button: {
    backgroundColor: '#3369FF',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    marginTop:150,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  
})