import React from 'react';
import {Pressable, Text, View} from 'react-native';

import styles from './index.styles';

const DataProduct = {
  topPrice: [
    {
      id: 1,
      image: require('../../assets/images/IMG20200101170922.jpg'),
      price: 12,
      seller: 'Quynh',
    },
    {id: 1, image: '../../assets/images/IMG20191224080049.jpg', price: 12, seller: 'Quynh'},
    {id: 1, image: '../../assets/images/IMG20200101170922.jpg', price: 12, seller: 'Quynh'},
  ],
  encourage: [
    {id: 1, image: '../../assets/images/IMG20191224080049.jpg', price: 12, seller: 'Quynh'},
    {id: 1, image: '../../assets/images/IMG20200101170922.jpg', price: 12, seller: 'Quynh'},
    {id: 1, image: '../../assets/images/IMG20191224080049.jpg', price: 12, seller: 'Quynh'},
  ],
};

const Market: React.FC = () => {
  return (
    <>
      <View>
        {/* Button Search  */}
        <View>
          {/* Icon Search */}

          {/* Placeholder Seasrch */}
          <Pressable>
            <Text>Search</Text>
          </Pressable>

          {/* Left Search*/}
        </View>

        {/* List of products in the market */}
        <View></View>
      </View>
    </>
  );
};

export default Market;
