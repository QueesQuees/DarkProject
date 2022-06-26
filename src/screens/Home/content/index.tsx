import React from 'react';
import {Image, Pressable, View, Text} from 'react-native';
import {Avatar, Button} from 'react-native-paper';

import styles from './index.styles';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFaceGrinHearts, faComment, faEllipsisH} from '@fortawesome/free-solid-svg-icons';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {navigate} from '../../../navigation/rootNavigation';
import {POST} from '../../../navigation/screenNames';

const DataHome = [
  {
    index: 1,
    topIndex: 1,
    displayNamePost: 'Newspaper 1',
    imageUrl: require('../../../assets/images/imageTemplate.jpg'),
    discreption:
      'Mùa xuân có em như chưa bắt đầu. Và cơn gió như khẽ mơn man lay từng nhành hoa rơi. Em đã bước tới như em đã từng',
    date: '10/06/2022',
    numberView: 10,
    authorName: 'Quees',
    imageAuthor: require('../../../assets/images/imageTemplate.jpg'),
    numberLoved: 10,
    numberComments: 25,
    postId: 'asdxc23214',
  },
  {
    index: 2,
    topIndex: 2,
    displayNamePost: 'Newspaper 2',
    imageUrl: require('../../../assets/images/imageTemplate.jpg'),
    discreption:
      'Khúc nhạc hòa cùng nắng chiều dịu dàng để mình gần lại mãi  Nói lời thì thầm những điều thật thà đã giữ trong tim mình   Những chặng đường dài ngỡ mình mệt nhoài Đã một lần gục ngã Tháng tư có em ở đây nhìn tôi mỉm cười',
    date: '10/06/2022',
    numberView: 10,
    authorName: 'Quees',
    numberLoved: 10,
    imageAuthor: require('../../../assets/images/imageTemplate.jpg'),
    numberComments: 25,
    postId: 'asdxc23414',
  },
  {
    index: 3,
    topIndex: 3,
    displayNamePost: 'Newspaper 3',
    imageUrl: require('../../../assets/images/imageTemplate.jpg'),
    discreption: 'Tháng tư là lời nói dối của em',
    date: '10/06/2022',
    numberView: 10,
    authorName: 'Quees',
    imageAuthor: require('../../../assets/images/imageTemplate.jpg'),
    numberLoved: 10,
    numberComments: 25,
    postId: 'asdxs23214',
  },
];

// interface Props {
//   valueSearch: string;
// }
// main function
const Content: React.FC = () => {
  const navigateDetails = () => {
    navigate(POST);
  };
  console.log('content 64');
  const viewDataHome = DataHome.map((item, index) => (
    <View key={index}>
      {/* head of the post */}

      {/* Dashes separate content the post from each other */}
      <View style={styles.strikethrough} />

      {/* main content the post */}
      <View style={styles.content}>
        <View style={styles.topPost}>
          <View style={styles.topContent}>
            {/* image and name auther channel  */}
            <Avatar.Image source={item.imageAuthor} size={35} style={styles.authorImageUrl} />

            {/* name author chanel */}
            <View style={styles.authorName}>
              <Text style={styles.authorNameText}>{item.authorName}</Text>
            </View>

            {/* button to subscribe */}
            <Button color="red" style={styles.register}>
              <Text>Register</Text>
            </Button>
          </View>

          {/* display top index */}
          <Text style={styles.textTopIndex}> Top: {item.topIndex}</Text>
          {/* button se more more function */}
          <View>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faEllipsisH} size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={navigateDetails}>
          {/* Name post */}
          <View style={styles.namePost}>
            <Pressable>
              <Text style={styles.displayNamePost}>{item.displayNamePost}</Text>
            </Pressable>
          </View>

          {/* Discripttion of the post */}
          {/* short content the post */}
          <View style={styles.shortPost}>
            <Pressable>
              <Text numberOfLines={5} style={styles.discreptionShort}>
                {item.discreption}
              </Text>
            </Pressable>
          </View>

          {/* Button navigate to the detail the post page  */}
          <View style={styles.buttonToDetailPage}>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read more</Text>
            </TouchableOpacity>
          </View>

          {/* Image of the post */}
          <Image source={item.imageUrl} style={styles.imagePost} />
        </TouchableOpacity>
      </View>

      {/* View like, comment */}
      <View style={styles.bottomViewPost}>
        <TouchableOpacity style={styles.buttonLover}>
          <View style={styles.numberLovedComments}>
            <Text>{item.numberLoved}</Text>
          </View>
          <FontAwesomeIcon icon={faFaceGrinHearts} color="orange" />
        </TouchableOpacity>

        {/* Comments */}
        {/* content comments */}
        <View>
          <TouchableOpacity style={styles.numberCommnet}>
            <View style={styles.numberLovedComments}>
              <Text>{item.numberComments}</Text>
            </View>
            <FontAwesomeIcon icon={faComment} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ));
  return <View style={styles.wrapper}>{viewDataHome}</View>;
};

export default Content;
