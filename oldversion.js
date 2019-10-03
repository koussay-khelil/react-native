import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import BottomNavigationBar, {
  FullTab
} from 'react-native-material-bottom-navigation';
import { Icon } from 'react-native-elements';


import { Button, Divider , ButtonGroup } from 'react-native-elements';
export default class MyComponent extends React.Component {
  tabs = [
    {
      key: 'games',
      icon: 'gamepad-variant',
      label: 'Games',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'movies-tv',
      icon: 'movie',
      label: 'Movies & TV',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'music',
      icon: 'music-note',
      label: 'Music',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]
 
  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )
 
  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )
 

  render() {
    const buttons = ['Hello', 'World', 'Buttons']
    return (
      <View style={{ flex: 1, backgroundColor: '#f7f9fc' }}>
      <View style={{ flex: 1 }}>
      <View style={styles.header}></View>
      <View> 
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <Text style={styles.name}>Ezzedine</Text>
          <Text style={styles.name}>22 ans</Text>
          <Text style={styles.info}>IHEC Carthage</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <ButtonGroup
              buttons={buttons}
              containerStyle={{height: 100}}
            />
            </View>
            <Divider style={{ backgroundColor: 'blue' }} />
        </View>
        <Text style={styles.info}>MES HABITUDES</Text>
      </View>
      <BottomNavigationBar
        onTabPress={newTab => this.setState({ activeTab: newTab.key })}
        renderTab={this.renderTab}
        tabs={this.tabs}
      />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  bottomNav: {
    backgroundColor: "black"
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'flex-start',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    alignSelf:'center',
    color:"#000000",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'flex-start',
    padding:30,
  },

  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  button1:{
    paddingHorizontal:20,
    paddingVertical:15,
    backgroundColor:'#c37dc6',
    marginRight:0,
    borderRadius:8
  },
  button2:{
    paddingHorizontal:20,
    paddingVertical:15,
    backgroundColor:'#27ddc5',
    borderRadius:8
  },
  groupButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
});
 