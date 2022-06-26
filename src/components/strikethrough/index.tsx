import React from 'react';
import {View} from 'react-native';

export interface Props {
  height?: number;
  backgroundColor?: string;
  marginTop?: number;
  marginBottom?: number;
}

const Strikethrough: React.FC<Props> = ({
  height = 2,
  backgroundColor = '#ccc',
  marginBottom = 5,
  marginTop = 0,
}) => {
  return (
    <View
      style={{
        height: height,
        backgroundColor: backgroundColor,
        marginBottom: marginBottom,
        marginTop: marginTop,
      }}
    />
  );
};

export default Strikethrough;
