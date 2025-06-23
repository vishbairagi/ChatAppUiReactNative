


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../assets/images/arrow-left.png')} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>ChatGPT</Text>
            <Text style={styles.status}>Online</Text>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity>
              <Image source={require('../assets/images/volume-high.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/images/export.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.menu}>
             <TouchableOpacity>
              <Image source={require('../assets/images/explain.png')} style={styles.icon2} />
            </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Explain Quantum physics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>What are wormholes explain like I am 5</Text>
          </TouchableOpacity>
           <TouchableOpacity>
              <Image source={require('../assets/images/write&edit.png')} style={styles.icon2} />
            </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Write a tweet about global warming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Write a poem about flower and love</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Write a rap song lyrics about</Text>
          </TouchableOpacity>
           <TouchableOpacity>
              <Image source={require('../assets/images/translate.png')} style={styles.icon2} />
            </TouchableOpacity>       
               <TouchableOpacity style={styles.option}>
            <Text>How do you say "how are you" in korean?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text>Write a poem about flower and love</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Hello chatGPT, how are you today?</Text>
          <TouchableOpacity>
            <Image source={require('../assets/images/microphone-2.png')} style={styles.micIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/images/send.png')} style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    marginTop:20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    marginBottom: 10,
    borderBottomColor: '#ccc',
  },
  titleContainer: {
    flexDirection: 'column',
   // alignItems: 'center',
    marginLeft: 30,

  },
  robotIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#3369FF'
  },
  status: {
    color: 'green',
    fontSize: 12,
    //marginLeft: 2,
  },
  icons: {
    flexDirection: 'row',
    marginLeft:180
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
   icon2: {
    width: 49,
    height: 52,
    marginLeft: 10,
    alignItems:'center',
  },
  menu: {
    padding: 10,
    alignItems:'center'
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color:'#3F3F3F'
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    marginBottom: 10,
    color:'#F4F4F4'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop:160
    
  },
  inputText: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    color:'#3369FF',
    borderRadius:50
  },
  micIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
});

export default ChatScreen;