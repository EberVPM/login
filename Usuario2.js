import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import Video from 'react-native-video';
import Pedro from './images/pedro.mp4';
import Chipi from './images/chipi.mp4';
import Pony from './images/pony.mp4';

const Usuario2 = ({route}) => {
  const [open, setOpen] = useState(false);
  const {nombre} = route.params;
  const [audio1, setAudio1] = useState(true)
  const [audio2, setAudio2] = useState(true)
  const [audio3, setAudio3] = useState(true)

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
      <TouchableOpacity style={styles.button} onPress={() => setAudio1(!audio1)}>
        <Text style={styles.text}>Pony Salvaje</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setAudio2(!audio2)}>
        <Text style={styles.text}>Chipi chipi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setAudio3(!audio3)}>
        <Text style={styles.text}>Pedro mapache</Text>
      </TouchableOpacity>
      <Video source={Pony} paused={audio1} />
      <Video source={Chipi} paused={audio2} />
      <Video source={Pedro} paused={audio3} />
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
  },
  button: {
    backgroundColor: "blue"
  }
});

export default Usuario2;
