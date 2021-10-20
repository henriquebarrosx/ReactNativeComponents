import PopUp from './PopUp';
import HelperIcon from 'react-native-vector-icons/FontAwesome';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Dispatch, memo, SetStateAction, useMemo, useState} from 'react';

interface InputPickerProps {
  label: string;
  value: string;
  options: Option[];
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
}

interface Option {
  label: string;
}

/*
  Requirements:

  1. Install react-native-svg
  https://github.com/react-native-svg/react-native-svg

  2. Install react-native-vector-icons
  https://github.com/oblador/react-native-vector-icons

  Icons: https://fontawesome.com/v5.15/icons

  3. Install react-native-modal
  https://github.com/react-native-modal/react-native-modal
*/

export default memo((props: InputPickerProps) => {
  const {label, value, placeholder, options = []} = props;

  const [showingOptions, showOptions] = useState(false);
  const [currentText, setCurrentText] = useState(value);

  const elementStyle = useMemo(() => {
    return currentText ? styles.text : styles.placeholder;
  }, [currentText]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity
        activeOpacity={0.3}
        style={styles.content}
        onPress={() => showOptions(true)}>
        <Text style={elementStyle}>{currentText || placeholder}</Text>

        <View style={styles.rightSide}>
          <HelperIcon size={24} name={'sort-down'} color="#bdbdbd" />
        </View>
      </TouchableOpacity>

      <PopUp
        options={options}
        placeholder={placeholder}
        isVisible={showingOptions}
        onClose={() => showOptions(false)}
        onSelect={(option: Option) => {
          setCurrentText(option.label);
          showOptions(false);
        }}
      />
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
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderColor: '#757575',
    justifyContent: 'center',
  },
  text: {
    width: '90%',
    paddingHorizontal: 6,
    textTransform: 'capitalize',
  },
  placeholder: {
    width: '90%',
    color: '#ccc',
    paddingHorizontal: 6,
    textTransform: 'capitalize',
  },
  rightSide: {
    width: 32,
    paddingBottom: 8,
    alignItems: 'center',
  },
});
