import React, {useState} from 'react';
import {Pressable, View, Text, ScrollView, TouchableOpacity, TextInput} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleLeft,
  faArrowAltCircleLeft,
  faArrowAltCircleUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import Content from '../Home/content';

import styles from './index.styles';
import {navigate} from '../../navigation/rootNavigation';
import {HOME} from '../../navigation/screenNames';

const historySearch = {
  displayText: [
    {name: 'Music'},
    {name: 'Game New'},
    {name: 'Top App'},
    {name: 'Music'},
    {name: 'Music'},
    {name: 'ukraine'},
  ],
};

const Search = () => {
  const [valueSearch, setValueSearch] = React.useState('');
  const [showSearchValue, setShowSearchValue] = useState(false);

  //Handle search
  const handleSearch = () => {
    setShowSearchValue(true);
  };

  const historySearchView = historySearch.displayText.map((item, index) => {
    return (
      // render each item in the history
      <View key={index} style={styles.itemHistory}>
        <View style={styles.leftView} />
        <View style={styles.centerViewHistory}>
          <TouchableOpacity
            style={styles.chooseHistory}
            onPress={() => {
              setValueSearch(item.name);
              handleSearch();
            }}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightView}>
          <TouchableOpacity style={styles.replaceInput} onPress={() => setValueSearch(item.name)}>
            <FontAwesomeIcon icon={faArrowAltCircleUp} />
          </TouchableOpacity>
        </View>
      </View>
    );
  });

  return (
    <View style={styles.wrapper}>
      {/* Container search input */}
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
            style={styles.SearchInput}
            value={valueSearch}
            onChangeText={nextValue => setValueSearch(nextValue)}
            onPressIn={() => setShowSearchValue(false)}
            keyboardType={'default'}
            placeholder={'Search on Dark Area'}
          />
          <TouchableOpacity onPress={() => setValueSearch('')}>
            <FontAwesomeIcon icon={faTimes} />
          </TouchableOpacity>
        </View>

        <View style={styles.rightView} />
      </View>

      {/* Container history search */}
      <View style={styles.containerHistory}>
        <ScrollView>{!showSearchValue && historySearchView}</ScrollView>
      </View>

      {/* View value search */}
      {showSearchValue && (
        <ScrollView>
          <Content />
        </ScrollView>
      )}
    </View>
  );
};
export default Search;
