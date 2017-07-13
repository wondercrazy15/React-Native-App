
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  WebView ,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
	static navigationOptions = {
    title: 'Welcome to NatShop Portal',
  };
 render() {
    const { navigate } = this.props.navigation;
    return (
	
	
      <View style={styles.container}>
	
        <TouchableOpacity onPress={() => navigate('Chat',{ domain: 'Dhirajsons Online' })}>
          <View style={styles.button}>
            <Image
          style={styles.stretch}
          source={require('./images/dhirajsonslogo.jpg')}
        />
          </View>
        </TouchableOpacity>
		
		<TouchableOpacity onPress={() => navigate('Chat',{ domain: 'Jojoshop' })}>
          <View style={styles.button}>
            <Image
          style={styles.stretch}
          source={require('./images/Jojoshoplogo.jpg')}
        />
          </View>
        </TouchableOpacity>
		
		<TouchableOpacity onPress={() => navigate('Chat',{ domain: 'Maharana DanaChana' })}>
          <View style={styles.button}>
            <Image
          style={styles.stretch}
          source={require('./images/maharanadanachanalogo.jpg')}
        />
          </View>
        </TouchableOpacity>
		
		
      </View>
    );
  }
}


class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.domain}`,
  });
  constructor(props) {
      super(props);
	 }
   
   
  render() {
	const { params } = this.props.navigation.state;
	let URL = '';
    if (params.domain == "Dhirajsons Online") {
      URL = 'http://dhirajsonsonline.com/';
    } else if(params.domain == "Jojoshop"){
       URL = 'http://jojoshop.in/';
    }else{
		URL = 'http://maharanadanachana.com/';
	}
    return (
      <WebView
        source={{uri: URL}}
        style={{marginTop: 20}}
      />
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
   stretch: {
    width: 200,
    height: 100
  }
})

AppRegistry.registerComponent('ReactProject', () => SimpleApp);
