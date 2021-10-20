import SecureText from './SecureText';
import React, {memo, useState} from 'react';
import HelperIcon from 'react-native-vector-icons/FontAwesome';
import {Text, View, TextInput, StyleSheet, TextInputProps} from 'react-native';

interface InputTextProps extends TextInputProps {
  label: string;
  iconName: string;
  displaySecureIndicator?: boolean;
}

/*
  Requirements:

  1. Install react-native-svg
  https://github.com/react-native-svg/react-native-svg

  2. Install react-native-vector-icons
  https://github.com/oblador/react-native-vector-icons

  Icons: https://fontawesome.com/v5.15/icons
*/

export default memo((props: InputTextProps) => {
  const {label, iconName, displaySecureIndicator = false} = props;
  const [isVisible, setVisible] = useState(displaySecureIndicator);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.content}>
        <View style={styles.leftSide}>
          <HelperIcon size={24} name={iconName} color="#bdbdbd" />
        </View>

        <TextInput
          {...props}
          style={styles.input}
          secureTextEntry={isVisible}
        />

        {displaySecureIndicator && (
          <SecureText visible={isVisible} changeVisibility={setVisible} />
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  label: {
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  content: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderColor: '#757575',
  },
  leftSide: {
    width: 32,
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '80%',
    paddingHorizontal: 6,
  },
});
