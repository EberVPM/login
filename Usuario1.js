import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import Video from 'react-native-video';
import Pedro from './images/pedro.mp4';
import Chipi from './images/chipi.mp4';
import Pony from './images/pony.mp4';

const Usuario1 = ({route}) => {
  const [open, setOpen] = useState(false);
  const {nombre} = route.params;
  const [video1, setVideo1] = useState(true);
  const [video2, setVideo2] = useState(true);
  const [video3, setVideo3] = useState(true);

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
      <TouchableOpacity
        onPress={() => setVideo1(!video1)}
        style={{backgroundColor: 'red'}}>
        <Video
          source={Pedro}
          resizeMode="cover"
          style={{width: 400, height: 250}}
          paused={video1}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setVideo2(!video2)}
        style={{backgroundColor: 'blue'}}>
        <Video
          source={Chipi}
          resizeMode="cover"
          style={{width: 400, height: 250}}
          paused={video2}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setVideo3(!video3)}
        style={{backgroundColor: 'black'}}>
        <Video
          source={Pony}
          resizeMode="cover"
          style={{width: 400, height: 250}}
          paused={video3}
        />
      </TouchableOpacity>
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
    color: '#fff',
  },
});

export default Usuario1;
