import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';

import { Dimensions } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

import BackgroundImage from './assets/main_screen.png'; // 배경 이미지 파일 경로에 맞게 수정해주세요

import IntroPage from './screens/IntroPage';
import RecodePage from './screens/RecodePage';
import GameStart from './screens/GameStart';
import Makedrink from './screens/Makedrink';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <StatusBar style="auto" />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('IntroPage')}
        >
          <Text style={styles.buttonText}>게임 설명</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('RecodePage')}
        >
          <Text style={styles.buttonText}>전적보기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => navigation.navigate('GameStart')}
        >
          <Text style={styles.buttonText3}>도전?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button4}
          onPress={() => navigation.navigate('Makedrink')}
        >
          <Text style={styles.buttonText}>폭탄주 제조</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    left: screenWidth * 0.64, // 화면 너비의 30% 위치에 설정
    top: screenHeight * 0.573, // 화면 높이의 40% 위치에 설정
    padding: 15,
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#FADAA2',
  },

  button2: {
    position: 'absolute',
    left: screenWidth * 0.65, // 화면 너비의 30% 위치에 설정
    top: screenHeight * 0.723, // 화면 높이의 40% 위치에 설정
    padding: 15,
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#F37979',
  },

  button3: {
    position: 'absolute',
    left: screenWidth * 0.15, // 화면 너비의 30% 위치에 설정
    top: screenHeight * 0.7, // 화면 높이의 40% 위치에 설정
    padding: 20,
    transform: [{ rotate: '13deg' }],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },

  button4: {
    position: 'absolute',
    left: screenWidth * 0.64, // 화면 너비의 30% 위치에 설정
    top: screenHeight * 0.87, // 화면 높이의 40% 위치에 설정
    padding: 3,
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#FADAA2',
  },

  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 27,
  },

  buttonText1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },

  buttonText3: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 45,
  },
});
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="IntroPage" component={IntroPage} />
        <Stack.Screen name="RecodePage" component={RecodePage} />
        <Stack.Screen name="GameStart" component={GameStart} />
        <Stack.Screen name="Makedrink" component={Makedrink} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
