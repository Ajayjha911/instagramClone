import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

declare type AvatarProps = {
  height?: number;
  width?: number;
  title?: string;
  titleSize?: number;
};

const Avatar: React.FC<AvatarProps> = ({
  height = 50,
  width = 50,
  title = '',
  titleSize = 28,
}) => {
  return (
    <View
      style={[
        style.avatarContainer,
        {
          height,
          width,
        },
      ]}>
      <Text
        style={[
          style.avatarText,
          {
            fontSize: titleSize,
          },
        ]}>
        {title?.[0]?.toLowerCase()}
      </Text>
    </View>
  );
};
export default Avatar;

const style = StyleSheet.create({
  avatarContainer: {
    backgroundColor: 'grey',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
  },
});
