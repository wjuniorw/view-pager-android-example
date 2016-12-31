import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  page: {
    flex: 1,
    // backgroundColor: '#447799',
  },
  pageText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    // marginBottom: 5,
  },
  header: {
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#557799',
  },
  title: {
    textAlign: 'center',
    margin: 19,
    fontSize: 20,
    color: '#fff',
    height:30,
  },
  menu : {
    // width:60,
    // width:100,
    flexDirection: 'row',
    height: 60,
  },
  btn: {
    backgroundColor: '#557799',
    color: '#fff',
    paddingTop: 18,
    paddingLeft: 25,
    width:80,
    // margin: 1,
    // width:90,
    // borderBottomColor: '#446688',
    // borderBottomWidth: 2,
  },
  btna: {
    borderBottomColor: '#fff',
    borderBottomWidth: 3,
  },
})

export default styles
