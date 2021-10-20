import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import InputField from './src/components/InputText';

import {
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.content]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <InputField
        label="Email"
        value={inputValue}
        autoCapitalize="none"
        iconName="user-circle"
        keyboardType="email-address"
        onChangeText={setInputValue}
        placeholderTextColor={'#bdbdbd'}
        placeholder="ex: JohnGreen@gmail.com"
      />

      <View style={styles.diviser} />

      <InputField
        iconName="lock"
        secureTextEntry
        label="Password"
        value={inputValue}
        autoCapitalize="none"
        displaySecureIndicator
        onChangeText={setInputValue}
        placeholderTextColor={'#bdbdbd'}
        placeholder="Enter your password here"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 200,
    backgroundColor: '#fff',
  },
  diviser: {
    marginTop: 16,
  },
});

export default App;
