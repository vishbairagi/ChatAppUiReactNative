import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

const ChatScreen2 = () => {
  const [messages, setMessages] = useState([
    { from: 'user', text: 'Hello chatGPT, how are you today?' },
    { from: 'bot', text: "Hello, I’m fine. How can I help you?" },
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
        'There are many programming languages in the market that are used in designing and building websites, various applications and other tasks...',
    },
  ]);

  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      {/* Top Navbar */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/images/arrow-left.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>ChatGPT</Text>
          <Text style={styles.status}>Online</Text>
        </View>
        <View style={styles.rightIcons}>
          <TouchableOpacity>
            <Image source={require('../assets/images/volume-high.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/images/export.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Message List */}
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              msg.from === 'user' ? styles.userBubble : styles.botBubble,
            ]}
          >
            {msg.from === 'bot' && <Text style={styles.botIcon}>🤖</Text>}
            <Text style={msg.from === 'user' ? styles.userText : styles.botText}>
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Row */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Write your message"
          placeholderTextColor="#999"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity>
          <Image source={require('../assets/images/microphone-2.png')} style={styles.micIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Image source={require('../assets/images/send.png')} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3369FF',
  },
  status: {
    fontSize: 12,
    color: 'green',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 22,
    height: 22,
    marginLeft: 10,
  },
  messagesContainer: {
    padding: 12,
    flexGrow: 1,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#3369FF',
    borderBottomRightRadius: 5,
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#f2f2f2',
    borderBottomLeftRadius: 5,
  },
  botIcon: {
    marginRight: 5,
    fontSize: 16,
  },
  userText: {
    color: '#fff',
    fontSize: 14,
  },
  botText: {
    color: '#333',
    fontSize: 14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    marginRight: 8,
  },
  micIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#3369FF',
  },
  sendButton: {
    backgroundColor: '#3369FF',
    padding: 10,
    borderRadius: 50,
  },
  sendIcon: {
    width: 18,
    height: 18,
    tintColor: '#fff',
  },
});
