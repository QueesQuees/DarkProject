import React, {useState} from 'react';
import {} from 'react-native-gesture-handler';
import styles from './index.styles';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faClock,
  faEye,
  faHeart,
  faHeartCrack,
  faShare,
  faStar,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {Avatar} from 'react-native-paper';

import Comments from '../../components/comments';

const DataPostDetail = {
  idPost: 'dsads32422',
  postDetail: {
    displayName: 'Dam ba cái tuổi trẻ',
    discriptionDetail: [
      {
        discriptionDetail2:
          'Doctor Strange đã du hành qua rất nhiều vũ trụ trong phần phim solo mới nhất của mình, và dành 1 khoảng thời gian lớn để ở lại trong thực tại Earth-838. Thoạt nhìn qua, thực tại này có khá nhiều điểm tương đồng với Earth-616, tức dòng thời gian chính của MCU. Tuy nhiên càng về sau, khán giả cũng như bản thân Strange có thể dần nhận ra những khác biệt vô cùng rõ rệt giữa 2 vũ trụ đó, đặc biệt là khi hội kín Illuminati chính thức xuất hiện trên màn ảnh lớn. Có thể bạn chưa biết, series Inhumans ra mắt vào năm 2017 và đã được xác nhận là 1 phần chính thức của MCU. Tuy nhiên, series này đã bị khai tử chỉ sau 1 mùa phim duy nhất, khiến cho số phận của các Inhumans trở nên phức tạp và mờ mịt hơn trong 1 vũ trụ điện ảnh vốn đang ngày càng mở rộng. May mắn thay, khái niệm đa vũ trụ trong Doctor Strange in the Multiverse of Madness đã giúp Marvel Studios phần nào đó giải quyết ổn thỏa trường hợp của chủng tộc hùng mạnh này và đẩy họ sang 1 thực tại khác - Earth-838.',
        imagePostDetail: require('../../assets/images/imageTemplate.jpg'),
      },
      {
        discriptionDetail2:
          'Dưới đây là những khác biệt quan trọng nhất giữa Earth-838 với dòng thời gian chính của MCU mà chúng ta đã quá quen thuộc trong hơn 1 thập kỷ qua.',
        imagePostDetail: require('../../assets/images/imageTemplate.jpg'),
      },
      {
        discriptionDetail2:
          'Mặc dù Doctor Strange in the Multiverse of Madness không lý giải chi tiết xuất thân của các thành viên thuộc hội Illuminati trong Earth-838, nhưng có thể thấy Black Bolt (và các Inhumans nói chung) đã có khá nhiều điểm khác biệt so với phiên bản trong MCU (xuất hiện trong series phụ Inhumans). Siêu anh hùng này vẫn do Anson Mount thủ vai, nhưng lại có diện mạo sát với nguyên tác truyện tranh hơn rất nhiều.',
        imagePostDetail: require('../../assets/images/imageTemplate.jpg'),
      },
    ],
    likePostDetail: [
      {
        idAccount: 'sadsa4324',
        nameAccount: 'Hanna',
        avatar: require('../../assets/images/imageTemplate.jpg'),
      },
      {idAccount: 'sadsa1324', nameAccount: 'Duo'},
      {idAccount: 'sa5sa4324', nameAccount: 'Mai Vang'},
    ],
    commentsPostDetail: [
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sadsa3e24',
        nameAccount: 'Mai',
        commentsDetail: 'Bai nay hay qua',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sasa3e24',
        nameAccount: 'Ngoc',
        commentsDetail:
          'với sự trẻ trung, xinh đẹp, phong cách thời trang thời thượng và phương pháp giáo dục con khoa học, những nàng hot mom thế hệ mới như',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sad2sa3e24',
        nameAccount: 'Tung',
        commentsDetail: 'Ai like cho toi di',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sad2sa3e24',
        nameAccount: 'Tung',
        commentsDetail: 'Ai like cho toi di',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sad2sa3e24',
        nameAccount: 'Tung',
        commentsDetail: 'Ai like cho toi di',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sad2sa3e24',
        nameAccount: 'Tung',
        commentsDetail: 'Ai like cho toi di',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sad2sa3e24',
        nameAccount: 'Tung',
        commentsDetail: 'Ai like cho toi di',
      },
      {
        avatar: require('../../assets/images/imageTemplate.jpg'),
        idAccount: 'sad2sa3e24',
        nameAccount: 'Tung',
        commentsDetail: 'Ai like cho toi di',
      },
    ],
    infomationPostDetail: {
      date: '02/05/2022',
      view: 100,
      like: 45,
    },
  },
  postAuthor: {
    idAuthor: 'qwe3dsfe34',
    nameAuthor: 'Quees',
    imageUrl: require('../../assets/images/imageTemplate.jpg'),
  },
};

const Post = ({route}: {route: any}) => {
  console.log('postDetail');
  React.useEffect(() => {
    if (route.params?.postId) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.postId]);

  const [valueCommnet, setValueCommnet] = useState('');

  const numberComments = DataPostDetail.postDetail.commentsPostDetail.length;

  const discriptionDetail = DataPostDetail.postDetail.discriptionDetail.map((item, index) => {
    return (
      <View key={index}>
        <View style={styles.imagePost}>
          <Image resizeMode="stretch" style={styles.imagePost} source={item.imagePostDetail} />
        </View>
        <Text>{item.discriptionDetail2}</Text>
      </View>
    );
  });

  const [showComments, setShowComments] = useState(false);

  // render on comments
  const renderComments = DataPostDetail.postDetail.commentsPostDetail.map(item => {
    return (
      <>
        <View style={styles.oneAccountDetail}>
          <View style={styles.avatarContain}>
            <Avatar.Image size={25} source={item.avatar} />
          </View>

          <View style={styles.wrapperDetailOneComment}>
            <Text style={styles.nameAccount}>{item.nameAccount}</Text>
            <Text>{item.commentsDetail}</Text>
          </View>
        </View>
      </>
    );
  });

  //modal commnets
  const renderModalContentElement = (
    <View style={styles.modalContent}>
      <View style={styles.viewHidemodal} onTouchEnd={() => setShowComments(false)} />
      <View style={styles.contentComments}>
        <View style={styles.inputModal}>
          <Comments />
          <View style={styles.strikethrough} />

          {/* Write Comments */}
          <View style={styles.viewInputCommnet}>
            <TextInput
              style={styles.inputComments}
              value={valueCommnet}
              onChangeText={item => setValueCommnet(item)}
            />
            <TouchableOpacity style={styles.iconFaTimes}>
              <FontAwesomeIcon icon={faTimes} />
            </TouchableOpacity>
          </View>
        </View>

        {/* List comments */}
        <ScrollView>
          <View style={styles.listComments}>{renderComments}</View>
        </ScrollView>
      </View>
    </View>
  );

  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <ScrollView style={styles.contain}>
          <View style={styles.headerPostDetail}>
            {/* Button back */}
            <View style={styles.leftHeader}>
              {/* <TouchableOpacity>
              <Icon name="arrow-back-outline" fill="#8F9BB3" style={styles.goBack} />
            </TouchableOpacity> */}

              {/* Button see author */}
              <View style={styles.centerHeader}>
                <Avatar.Image size={30} source={DataPostDetail.postAuthor.imageUrl} />
                <TouchableOpacity>
                  <Text style={styles.nameAuthor}>{DataPostDetail.postAuthor.nameAuthor}</Text>
                </TouchableOpacity>
                <Pressable>
                  <Text style={styles.register}>Register</Text>
                </Pressable>
              </View>
            </View>

            {/* Button Share */}
            <View style={styles.rightHeader}>
              {/* <TouchableOpacity>
              <Icon name="arrow-back-outline" fill="#8F9BB3" style={styles.goBack} />
            </TouchableOpacity> */}
              <TouchableOpacity>
                <FontAwesomeIcon icon={faShare} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Content detail Post */}
          <View>
            {/* Name News */}
            <View>
              <Text style={styles.namePost}>{DataPostDetail.postDetail.displayName}</Text>
            </View>

            {/* Infomation detail news */}
            <View style={styles.infomationPostDetail}>
              <FontAwesomeIcon icon={faClock} />
              <Text>
                {DataPostDetail.postDetail.infomationPostDetail.date} {'    '}
              </Text>
              <FontAwesomeIcon icon={faEye} />
              <Text>{DataPostDetail.postDetail.infomationPostDetail.like}</Text>
            </View>

            <View>{discriptionDetail}</View>
          </View>
        </ScrollView>

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
            <TouchableOpacity onPress={() => setShowComments(true)}>
              <Text>Comments</Text>
            </TouchableOpacity>
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
      </View>
      {/* //Modal Commments */}
      <Modal animationType="slide" visible={showComments} transparent={true}>
        {renderModalContentElement}
      </Modal>
    </React.Fragment>
  );
};

export default Post;
