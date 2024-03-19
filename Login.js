import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Alert} from 'react-native';
import {Button, Input, Icon} from '@rneui/base';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siono: 0,
      correo: '',
      password: '',
    };
  }

  render() {
    const login = () => {
      this.setState({siono: 1});
    };
    const alta = () => {
      this.setState({siono: 2});
    };

    const entrar = () => {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          if (xhttp.response === '0') {
            Alert.alert("Error!", "Credenciales erroneas", [
              {text: 'Ok', onPress: () => console.log('OK Pressed')}
            ])
          } else if (xhttp.response === '1') {
            
          } else if (xhttp.response === "3") {
            Alert.alert("Error!", "Date de alta", [
              {text: 'Ok', onPress: () => console.log('OK Pressed')}
            ])
          }
        }
      };
      xhttp.open('GET', 'filename', true);
      xhttp.send();
      console.log(this.state.correo)
      console.log(this.state.password)
    };
    return (
      <View>
        <ImageBackground
          source={require('./images/fondo.jpg')}
          style={{width: '100%', height: '100%'}}>
          <Button
            title="Login"
            icon={{
              name: 'user',
              type: 'font-awesome',
              size: 15,
              color: 'white',
            }}
            iconContainerStyle={{marginRight: 10}}
            titleStyle={{fontWeight: '700'}}
            buttonStyle={{
              backgroundColor: 'rgba(90, 154, 230, 1)',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
              marginLeft: 100,
              marginTop: '155%',
            }}
            onPress={login}
          />
          <Button
            title="Alta"
            icon={{
              name: 'user-plus',
              type: 'font-awesome',
              size: 15,
              color: 'white',
            }}
            iconContainerStyle={{marginRight: 10}}
            titleStyle={{fontWeight: '700'}}
            buttonStyle={{
              backgroundColor: 'rgba(156, 54, 230, 1)',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
              marginLeft: 100,
            }}
            onPress={alta}
          />
          {this.state.siono == 1 ? (
            <View style={{marginTop: -400}}>
              <Input
                style={styles.input}
                placeholder="Correo"
                leftIcon={<Icon name="mail" size={24} color={'white'} />}
                onChangeText={value => this.setState({correo: value})}
              />
              <Input
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                leftIcon={<Icon name="lock" size={24} color={'white'} />}
                onChangeText={value => this.setState({password: value})}
              />
              <Button radius={'sm'} type="solid" onPress={entrar}>
                Entrar
                <Icon name="arrow-right" color="white" />
              </Button>
            </View>
          ) : null}
          {this.state.siono == 2 ? (
            <View style={{marginTop: -600}}>
              <Input
                style={styles.input}
                placeholder="Nombre"
                leftIcon={<Icon name="person" size={24} color={'white'} />}
                onChangeText={value => this.setState({comment: value})}
              />
              <Input
                style={styles.input}
                placeholder="Direccion"
                leftIcon={<Icon name="location-on" size={24} color={'white'} />}
                onChangeText={value => this.setState({comment: value})}
              />
              <Input
                style={styles.input}
                placeholder="Telefono"
                leftIcon={<Icon name="smartphone" size={24} color={'white'} />}
                onChangeText={value => this.setState({comment: value})}
              />
              <Input
                style={styles.input}
                placeholder="Correo"
                leftIcon={<Icon name="mail" size={24} color={'white'} />}
                onChangeText={value => this.setState({comment: value})}
              />
              <Input
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
                leftIcon={<Icon name="lock" size={24} color={'white'} />}
                onChangeText={value => this.setState({comment: value})}
              />
            </View>
          ) : null}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    color: '#fff',
  },
});
