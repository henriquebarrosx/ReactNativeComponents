import {TouchableOpacity} from 'react-native';
import HelperIcon from 'react-native-vector-icons/FontAwesome';
import React, {Dispatch, memo, SetStateAction, useMemo} from 'react';

interface SecureTextProps {
  visible: boolean;
  changeVisibility: Dispatch<SetStateAction<boolean>>;
}

export default memo(({visible, changeVisibility}: SecureTextProps) => {
  const iconName = useMemo(() => {
    return visible ? 'eye-slash' : 'eye';
  }, [visible]);

  const iconColor = useMemo(() => {
    return visible ? '#bdbdbd' : '#5c6bc0';
  }, [visible]);

  return (
    <TouchableOpacity onPress={() => changeVisibility(prevValue => !prevValue)}>
      <HelperIcon name={iconName} size={24} color={iconColor} />
    </TouchableOpacity>
  );
});
