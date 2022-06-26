import React, {useState} from 'react';
import {View, Image, Text, Modal, TouchableOpacity, Pressable} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes, faUserCog, faUserNinja} from '@fortawesome/free-solid-svg-icons';

import styles from './index.styles';
import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons';
import {openDrawer} from '../../navigation/rootNavigation';

const Header = () => {
  const [showMore, setShowMore] = useState(false);

  const isLogin = false;

  return (
    <>
      <View style={styles.contain}>
        {/* image logo */}
        <View style={styles.logo}>
          <Image source={require('src/assets/icons/logoRed.png')} style={styles.imageLogo} />
        </View>

        {/* App name */}
        <View>
          <Text style={styles.nameAppText}>Dark Area</Text>
        </View>

        {/*Infomation Profile */}
        <View style={styles.profile}>
          <TouchableOpacity onPress={() => setShowMore(true)}>
            <FontAwesomeIcon icon={faUserNinja} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={showMore} animationType="fade">
        <View style={styles.modalContain}>
          <View style={styles.buttonClose}>
            <Pressable onPress={() => setShowMore(false)}>
              <FontAwesomeIcon style={styles.closeIcon} size={30} icon={faTimes} />
            </Pressable>
          </View>

          <View style={styles.containerLogin}>
            {/* Image logo */}
            <View>
              <Image
                source={require('src/assets/icons/logoRed.png')}
                style={styles.imageModalLogo}
              />
            </View>
            <View style={styles.introductionLogin}>
              <Text style={styles.introductionLoginText}>
                Sign in now to tell your story to the world and get DAAR tokens.
              </Text>
              <Text style={styles.introductionLoginText}>Write to earn</Text>
            </View>

            {/* Button login, log out */}
            <View>
              {isLogin ? (
                <>
                  <TouchableOpacity style={styles.btn}>
                    <Text>Log Out</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity style={styles.btn}>
                    <Text>Login</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>

          {/* Dashes separate content the post from each other */}
          <View style={styles.strikethrough} />

          <View>
            <View style={styles.viewSetting}>
              <FontAwesomeIcon size={25} icon={faUserCog} />
              <TouchableOpacity
                style={styles.btnSetting}
                onPress={() => {
                  setShowMore(false);
                  openDrawer();
                }}>
                <Text style={styles.textSetting}>Setting</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.viewSetting}>
              <FontAwesomeIcon size={25} icon={faQuestionCircle} />
              <TouchableOpacity style={styles.btnSetting}>
                <Text style={styles.textSetting}>Help and Feedback</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Header;
