import React from 'react';

import {TouchableOpacity, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import styles from './index.styles';

import {faHeart, faHeartCrack, faStar} from '@fortawesome/free-solid-svg-icons';

const Comments = (_props: any) => {
  const numberComments = 10;
  return (
    <>
      {/* Contain footer (button) */}
      <View style={styles.bottomContain}>
        {/* left footer */}
        <View style={styles.leftBottom}>
          <TouchableOpacity>
            <FontAwesomeIcon size={22} icon={faHeart} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.pdl10}>
            <FontAwesomeIcon size={22} icon={faHeartCrack} />
          </TouchableOpacity>
        </View>

        {/* center comments */}
        <View style={styles.comments}>
          <Text>Comments</Text>
          <Text style={styles.pdl10}>{numberComments}</Text>
        </View>

        {/* right footer, bottom */}
        <View>
          <TouchableOpacity style={styles.buttonSave}>
            <FontAwesomeIcon icon={faStar} />
            <Text style={styles.pdl10}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Comments;
