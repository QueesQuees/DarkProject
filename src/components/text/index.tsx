import getScreenRatio, {getPixelRatio} from 'app/utils/responsive';
import React from 'react';
import {Text, TextProps, TextStyle, Platform, StyleSheet} from 'react-native';

export interface Props extends TextProps {
  type?: 'regular' | 'medium' | 'bold';
  text?: string; // The text to display if not using nested components.
  size?: number; // Font size if not using style to avoid inline style & responsive.
  lineHeight?: number; // Line height if not using style to avoid inline style & responsive.
  color?: string; // Color if not using style to avoid inline style.
  pixelRatioResponsive?: boolean; // text responsive using pixel ratio
}

const AppText: React.FC<Props> = ({
  type = 'regular',
  text,
  size,
  lineHeight,
  color = '#4B4B4B',
  style,
  children,
  pixelRatioResponsive = false,
  ...rest
}) => {
  let fontFamily: TextStyle['fontFamily'] = 'Poppins-Regular';
  let fontWeight: TextStyle['fontWeight'] = '400';
  let flexibleSize = 10;
  let flexibleLineHeight;

  if (style) {
    const textStyle = StyleSheet.flatten(style);
    if (textStyle.fontSize) {
      flexibleSize = textStyle.fontSize;
    }
    if (textStyle.lineHeight) flexibleLineHeight = textStyle.lineHeight;
  }

  if (size) flexibleSize = size;
  if (lineHeight) flexibleLineHeight = lineHeight;

  const ratio = !pixelRatioResponsive ? getScreenRatio() : getPixelRatio();

  if (flexibleLineHeight !== undefined) {
    flexibleLineHeight *= ratio;
  }
  flexibleSize *= ratio;

  switch (type) {
    case 'medium':
      fontFamily = 'Poppins-Medium';
      fontWeight = '500';
      break;
    case 'bold':
      fontFamily = 'Poppins-Bold';
      fontWeight = Platform.OS === 'android' ? '600' : '700';
      break;
  }

  const content = text || children;

  return (
    <Text
      style={[
        {fontFamily, color, fontWeight},
        style,
        {fontSize: flexibleSize, lineHeight: flexibleLineHeight},
      ]}
      {...rest}>
      {content}
    </Text>
  );
};

export default AppText;
