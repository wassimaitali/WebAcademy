// import React, { useState, useEffect, useRef } from 'react';
// import { Text, View, StyleSheet, Button, Image } from 'react-native';
// import InscriptionScreen from './inscription';
// import ConnexionScreen from './connexion';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AccueilScreen from './Accueil';
// import * as MediaLibrary from 'expo-media-library';
// import { Camera } from 'expo-camera';
// import { MaterialIcons } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';

// const Stack = createNativeStackNavigator();

// export default function Accueil({ navigation }) {
//   const [hasCameraPermission, setHasCameraPermission] = useState(null);
//   const [image, setImage] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
//   const cameraRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       const cameraStatus = await Camera.requestCameraPermissionsAsync();
//       setHasCameraPermission(cameraStatus.status === 'granted');
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       try {
//         const { uri } = await cameraRef.current.takePictureAsync();
//         console.log(uri);
//         setImage(uri);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   const savePicture = async () => {
//     if (image) {
//       try {
//         await MediaLibrary.saveToLibraryAsync(image);
//         alert('Photo enregistrée avec succès!');
//         setImage(null);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   if (hasCameraPermission === null) {
//     return <View />;
//   }

//   if (hasCameraPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {!image ? (
//         <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef}>
//           <View style={styles.cameraControls}>
//             <Button
//               title="Flip"
//               onPress={() => {
//                 setType(
//                   type === Camera.Constants.Type.back
//                     ? Camera.Constants.Type.front
//                     : Camera.Constants.Type.back
//                 );
//               }}
//               color="#fff"
//             />
//             <Button
//               title="Flash"
//               onPress={() => {
//                 setFlash(
//                   flash === Camera.Constants.FlashMode.off
//                     ? Camera.Constants.FlashMode.on
//                     : Camera.Constants.FlashMode.off
//                 );
//               }}
//               // color="#fff"
//             />
//             <MaterialIcons name="flash-on" size={24} color="white" />
         
            
//           </View>
//         </Camera>
//       ) : (
//         <Image source={{ uri: image }} style={styles.previewImage} />
//       )}

//       <View style={styles.controls}>
//         {image ? (
//           <View style={styles.buttonContainer}>
//             <Button title="Retake" onPress={() => setImage(null)} />
//             <Button title="Save" onPress={savePicture} />
//           </View>
//         ) : (
//           <Button title="Take Picture" onPress={takePicture} />
//         )}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   camera: {
//     flex: 1,
//     width: '100%',
//     aspectRatio: 1,
//   },
//   cameraControls: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     marginBottom: 15,
//   },
//   controls: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   previewImage: {
//     flex: 1,
//     width: '100%',
//     resizeMode: 'contain',
//   },
// });






import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Accueil() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  const navigation = useNavigation();


  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert('Photo Enregistrer!🎉');
        setImage(null);
        console.log('saved successfully');
        navigation.navigate('UserList');
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={{flex: 1}}
          // style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flash}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
            }}
          >
            <TouchableOpacity         
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                );
              }}
            >
               <Ionicons name="camera-reverse-outline" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                )
              }
            >
              <Ionicons
                name="flash"
                size={30}
                color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#fff'}
                
              />
            </TouchableOpacity>
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}
          >
            <TouchableOpacity
              onPress={() => setImage(null)}
            >
              <Ionicons name="return-down-back" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={savePicture}>
              <Ionicons name="save-outline" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={takePicture}
            style={styles.button}
          >
            <Ionicons name="radio-button-on" size={75} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 8,
    paddingBottom: 60,
    // paddingTop:
  },
  controls: {
    flex: 0,
  },
  button: {
    height: 70,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E9730F',
    marginLeft: 10,
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
  topControls: {
    flex: 1,
  },
});

















