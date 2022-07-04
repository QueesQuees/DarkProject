import {faAngleLeft, faArrowAltCircleLeft, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {navigate} from '../../navigation/rootNavigation';
import {HOME} from '../../navigation/screenNames';
import {dataTopics, listOfTopics} from './dataFake/data';

import styles from './index.styles';

const Market: React.FC = () => {
  const [valueSearch, setValueSearch] = React.useState('');
  const [showSearchValue, setShowSearchValue] = useState(false);

  //Handle search
  // const handleSearch = () => {
  //   setShowSearchValue(true);
  // };

  const listTitleTopics = dataTopics;

  // Content filtered by category
  // Header
  const renderTitleTopics = ({item}: any) => {
    return (
      <View style={styles.wrapperTopics}>
        <Image source={item.topPriceImage} style={styles.imageTopics} />
        <Text>{item.titleTopics}</Text>
      </View>
    );
  };

  //List of content by selected genre
  // content
  const viewToppics = listOfTopics.map((itemX: any) => {
    return (
      <View key={itemX.id}>
        {/* Filter content by common criteria for each selected genre */}
        <View>
          <Pressable style={styles.titleCenterView}>
            <Text style={styles.titleText}>{itemX.title}</Text>
          </Pressable>
        </View>

        {/* Information about a content being sold */}
        <FlatList
          horizontal={true}
          data={itemX.data}
          renderItem={({item}: any) => {
            return (
              <View key={item.id} style={styles.onePiece}>
                <TouchableOpacity>
                  <View>
                    <Image source={item.image} style={styles.imageItemStore} />
                  </View>
                  <View style={styles.sellerAndPrice}>
                    <View>
                      <Image source={item.avatarImage} style={styles.avatarImage} />
                    </View>
                    <View style={styles.textPrice}>
                      <Text style={styles.textSeleer}>{item.seller}</Text>
                      <Text>Price: {item.price} DAKA</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  });

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        {/* Header  */}
        <View>
          {/* Icon Search */}

          {/* Placeholder Seasrch */}
          <View style={styles.containerSearch}>
            <View style={styles.leftView}>
              {showSearchValue ? (
                <Pressable onPress={() => navigate(HOME)}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </Pressable>
              ) : (
                <Pressable onPress={() => setShowSearchValue(true)}>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </Pressable>
              )}
            </View>

            <View style={styles.centerView}>
              <TextInput
                style={styles.searchInput}
                value={valueSearch}
                onChangeText={nextValue => setValueSearch(nextValue)}
                onPressIn={() => setShowSearchValue(false)}
                keyboardType={'default'}
                placeholder={'Search in Dark Arean store'}
              />
              <TouchableOpacity onPress={() => setValueSearch('')}>
                <FontAwesomeIcon icon={faTimes} />
              </TouchableOpacity>
            </View>

            <View style={styles.rightView} />
          </View>

          {/* Left Search*/}
        </View>

        {/* List of content in the market */}
        {/* Content */}
        <View style={styles.listTopics}>
          <FlatList
            horizontal={true}
            data={listTitleTopics}
            renderItem={item => renderTitleTopics(item)}
            keyExtractor={item => item.id}
          />
        </View>

        <View>{viewToppics}</View>
      </View>
    </ScrollView>
  );
};

export default Market;
