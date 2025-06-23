import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const ChatScreen2 = () => {
  const [messages, setMessages] = useState([
    { from: 'user', text: 'Hello chatGPT, how are you today?' },
    { from: 'bot', text: 'Hello, I’m fine. How can I help you?' },
    { from: 'user', text: 'What is the best programming language?' },
    {
      from: 'bot',
      text:
        'There are many programming languages in the market that are used in designing and building websites, various applications and other tasks. All these languages are popular in their place and in the way they are used, and many programmers learn and use them.',
    },
    { from: 'user', text: 'So explain to me more' },
    {
      from: 'bot',
      text:
        'There are many programming languages in the market that are used in designing and building websites, various applications and other tasks. All these languages are popular in their place and in the way they are used, and many programmers learn and use them.',
    },
  ]);

  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;
    setMessages([...messages, { from: 'user', text: inputText }]);
    setInputText('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={10}
    >
      {/* Header */}
      <View style={{ padding: 16, borderBottomWidth: 1, borderColor: '#ddd' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>ChatGPT</Text>
        <Text style={{ fontSize: 12, color: 'green' }}>● Online</Text>
      </View>

      {/* Chat Messages */}
      <ScrollView style={{ flex: 1, paddingHorizontal: 10 }} contentContainerStyle={{ paddingBottom: 80 }}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={{
              alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.from === 'user' ? '#3b82f6' : '#f2f2f2',
              padding: 10,
              borderRadius: 10,
              marginVertical: 6,
              maxWidth: '80%',
            }}
          >
            <Text style={{ color: msg.from === 'user' ? '#fff' : '#000' }}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navbar Input */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 10,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderColor: '#ddd',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Write your message"
          style={{
            flex: 1,
            backgroundColor: '#f2f2f2',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 25,
            marginRight: 10,
          }}
        />
        <TouchableOpacity onPress={sendMessage} style={{ padding: 10, backgroundColor: '#3b82f6', borderRadius: 20 }}>
          <Text style={{ color: '#fff' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen2;
