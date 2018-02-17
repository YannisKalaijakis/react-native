import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import api from './utilities/api';

// import App from './App';

class FetchData extends Component{
    constructor(props){
        super(props);
        this.state = {
            dat: [],
            datName:''
        }
    }

    ComponentWillMount(){
        api.getData().then((res) => {
            this.setState({
                dat: res.dat,
                datName: res.dat[0].title
            })
        })
    }
    render(){
        console.log("Data: ", this.state.title);
        return (
            <View style ={styles.container}>
              <Text style={styles.welcome}>
                  Data
              </Text>
              <Text style={styles.instructions}>
                    Dat: {this.state.title}
              </Text>
             </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
       
    borderColor: '#d6d7da',
    },
    welcome:{
         fontSize: 28,
    fontWeight: 'bold',
    },
    instructions:{
        color: 'red',
    }
});


AppRegistry.registerComponent('Hello', () => FetchData);
