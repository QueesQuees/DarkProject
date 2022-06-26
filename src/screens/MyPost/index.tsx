import React, {useState} from 'react';
import {View, Modal, Text, Image, ScrollView, Pressable} from 'react-native';
import {Avatar} from 'react-native-paper';

import styles from './index.styles';
import Content from './content';
import Strikethrough from '../../components/strikethrough';

const ProfileData = {
  idAcount: '213dsac',
  useName: 'Long Saruka',
  imageBg: require('../../assets/images/imageTemplate.jpg'),
  imageAvatar: require('../../assets/images/imageTemplate.jpg'),
  subscriber: 160040,
  likes: 10043500,
  unLikes: 32345,
};

const MyPosts: React.FC = () => {
  // state modal show popup add new posts.
  const [modalAddPosts, setModalAddPosts] = useState(false);

  return (
    <>
      <View style={styles.wrapper}>
        {/* Header */}
        <ScrollView>
          <View style={styles.headerProfile}>
            {/* background header */}
            <Image resizeMode="cover" style={styles.imageBg} source={ProfileData.imageBg} />
            {/* contain about acount */}
            <View style={styles.viewImageAvatar}>
              <Image source={ProfileData.imageAvatar} style={styles.imageAvatar} />
              <Text style={styles.userName}>{ProfileData.useName}</Text>
              {/* introdution about subscribers and likes number */}
              <View style={styles.subscribers}>
                <Text>Subscriber: {ProfileData.subscriber}</Text>
                <Text> {'  '}</Text>
                <Text>Like: {ProfileData.likes}</Text>
              </View>
            </View>
          </View>

          {/* Add new News */}
          <Strikethrough height={5} backgroundColor={'#ccc'} marginTop={0} />

          <View style={styles.newPosts}>
            <Text style={styles.newPostsText}>New Posts</Text>
            <View>
              <Pressable style={styles.buttonAddPost} onPress={() => setModalAddPosts(true)}>
                <Avatar.Image size={35} source={ProfileData.imageAvatar} />
                <Text style={styles.btnText}>Add your new story...</Text>
              </Pressable>
            </View>
          </View>

          {/* List My Posts */}
          <View style={styles.lstPosts}>
            <Content />
          </View>
        </ScrollView>
      </View>

      <Modal visible={modalAddPosts}>
        <View style={{backgroundColor: 'red', flex: 1}}>
          <Pressable onPress={() => setModalAddPosts(false)}>
            <Text>Hello</Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

export default MyPosts;
