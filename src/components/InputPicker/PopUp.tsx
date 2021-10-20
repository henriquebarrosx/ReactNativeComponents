import React, {memo} from 'react';
import Modal from 'react-native-modal';

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

interface PopUpProps {
  options: Option[];
  isVisible: boolean;
  onClose: () => void;
  placeholder: string;
  onSelect: (option: Option | '') => void;
}

interface Option {
  label: 'string';
}

export default memo((props: PopUpProps) => {
  const {isVisible, options, placeholder, onClose, onSelect} = props;

  return (
    <Modal
      isVisible={isVisible}
      style={styles.container}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.title} onPress={() => onSelect('')}>
          <Text style={styles.titleText}>{placeholder}</Text>
        </TouchableOpacity>

        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {options.map(option => (
            <TouchableOpacity
              key={option.label}
              style={styles.itemContainer}
              onPress={() => onSelect(option)}>
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    borderRadius: 6,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width / 1.1,
    maxHeight: Dimensions.get('window').height / 1.3,
  },
  title: {
    height: 56,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  titleText: {
    color: '#9e9e9e',
    fontWeight: '600',
    alignSelf: 'center',
  },
  itemContainer: {
    height: 66,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});
