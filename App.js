import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import BottomNavigationBar, {
  FullTab
} from 'react-native-material-bottom-navigation';
import { ButtonGroup, Button, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const width = '100%';
const buttonWidth = '100%';



export default class MyComponent extends React.Component {
  tabs = [
    {
      key: 'games',
      icon: 'car',
      label: 'Trajets',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'movies-tv',
      icon: 'wechat',
      label: 'Messages',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'music',
      icon: 'file-o',
      label: 'Mon Compte',
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
    const MyComponent1 = () => (
      <View style={{alignItems: 'center'}}>
        <Icon name="cc-visa"
      size={15}
      color="Black"
      
    />
    <Text>DT Economies</Text>
      </View>
    )
    const MyComponent2 = () => (
      <View style={{alignItems: 'center'}}>
        <Icon name="car"
      size={15}
      color="Black"
      
    />
    <Text>Court-Voiturage</Text>
      </View>
    )
    const MyComponent3 = () => (
      <View style={{alignItems: 'center'}}>
        <Icon name="recycle"
      size={15}
      color="Black"
      
    />
    <Text>Kg de CO2</Text>
      </View>
    )
    
 
    const buttons = [{ element: MyComponent1 }, { element: MyComponent2 }, { element: MyComponent3 }]
    return (
<ScrollView style={styles.container, { backgroundColor: '#eff0f1', flexGrow: 1, 
  flexDirection: 'column'}}>
  <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={{flex: 1}}>
          <Text style={styles.name}>John Doe</Text>
          <Text >22 Ans</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{color: '#00BFFF'}}>IHEC Carthage</Text>
          <Badge value="Passager" status="success" style={{height: 100}} />
          </View>
          </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <ButtonGroup
              buttons={buttons}
              containerStyle={{height: 100, width: width, borderColor: 'transparent', marginLeft: 0 }}
              />
              <Text style={styles.title}>MES HABITUDES</Text>  
              <View style={{width: width}}>
              <Button type='clear' buttonStyle={{width: buttonWidth, justifyContent: 'flex-start', backgroundColor: '#fff'}} titleStyle={{color: 'black'}}
              title="Mon trajet"
              />
                <Button buttonStyle={{ justifyContent: 'flex-start', backgroundColor: '#fff'}} type='clear' titleStyle={{color: 'black'}}
              title="Mes adresses"
              />
              </View>
              <Text style={styles.title}>MES INFOS PERSONNELLES</Text>
              <View style={{width: width}}>
              <Button icon={
    <Icon
      name="arrow-right"
      size={15}
      color="black"
    />
  } iconRight buttonStyle={{width: buttonWidth, justifyContent: 'space-between', backgroundColor: '#fff'}} type='clear' titleStyle={{color: 'black', textAlign: 'left'}}
              title="Mon profil"
              />

                <Button icon={
    <Icon
      name="shield"
      size={15}
      color="red"
    />
  } iconRight buttonStyle={{ justifyContent: 'space-between', backgroundColor: '#fff'}} type='clear' titleStyle={{color: 'black'}}
              title="Vérifier mon compte"
              />
              </View>
              <Text style={styles.title}>MON COMPTE</Text>
              <View style={{width: width}}>
              <Button  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="black"
    />
  } iconRight buttonStyle={{width: buttonWidth, justifyContent: 'space-between', backgroundColor: '#fff'}} type='clear' titleStyle={{color: 'black'}}
              title="Mon historique"
              />
              </View>
            </View>
            <BottomNavigationBar
        style={{flexGrow: 1}}
        onTabPress={newTab => this.setState({ activeTab: newTab.key })}
        renderTab={this.renderTab}
        tabs={this.tabs}
      />
        </View>
      </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'flex-start',
    marginTop:30
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
    marginTop:80
  },
  title:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
    marginTop:80,
    marginBottom: 5
  },
  body:{
    marginTop:0,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'flex-start',
  },

  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:110,
    alignItems: 'flex-start',
    marginLeft: -75
  },

});
 