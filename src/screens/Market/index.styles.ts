import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  containerSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  leftView: {
    flex: 1,
    paddingLeft: 20,
  },
  centerView: {
    flex: 8,
    backgroundColor: '#ddd',
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  searchInput: {
    paddingVertical: 5,
  },
  rightView: {
    flex: 1,
  },
  listTopics: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  wrapperTopics: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTopics: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  titleCenterView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
  },
  imageItemStore: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  onePiece: {
    // borderColor: 'red',
    // borderWidth: 1,
    padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  sellerAndPrice: {
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
  },
  avatarImage: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  textPrice: {
    paddingLeft: 10,
  },
  textSeleer: {
    color: 'green',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default styles;
