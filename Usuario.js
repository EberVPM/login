import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';

const Usuario = ({route}) => {
  const [open, setOpen] = useState(false);

  const {nombre} = route.params

  toggleOpen = () => {
    setOpen(!open);
  };

  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        <TouchableOpacity onPress={toggleOpen}>
          <Text style={styles.text}>Bienvenido: {nombre}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MenuDrawer
        open={open}
        position={'left'}
        drawerContent={drawerContent()}
        drawerPercentage={45}
        animationTime={250}
        overlay={true}
        opacity={0.4}>
        <View style={styles.view}>
          <TouchableOpacity onPress={toggleOpen} style={styles.body}>
            <Text style={styles.text}>Open</Text>
          </TouchableOpacity>
        </View>
      </MenuDrawer>
      <Image source={require("./images/fondo.jpg")} style={{ width:150, height:150 }}  />
      <Image source={require("./images/gato.jpg")} style={{ width:300, height:300 }}  />
      <Image source={require("./images/perro.jpg")} style={{ width:300, height:300 }}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: 0,
  },
  animatedBox: {
    flex: 1,
    backgroundColor: '#001529',
    padding: 10,
  },
  body: {
    backgroundColor: '#1890ff',
  },
  view: {
    width: 50,
    height: 50,
  },
  text: {
    color: "#fff"
  }
});

export default Usuario;
