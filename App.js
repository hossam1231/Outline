import React from "react";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  Text,
  HStack,
  Center,
  Heading,
  Image,
  Spinner,
  Box,
  ZStack,
  Switch,
  Link,
  useColorMode,
  NativeBaseProvider,
  Icon,
  CheckIcon,
  Input,
  Checkbox,
  extendTheme,
  VStack,
  Code,
} from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <NativeBaseProvider>
      <Box flex={1}>
        <HStack bg="#FF6700" p="20px" w="100%" h="120px">
          <Text
            ml="20px"
            color="white"
            fontSize="6xl"
            fontFamily="RajdhaniBold"
          >
            OUTLINES.
          </Text>
          <HStack
            h="100px"
            alignItems="center"
            justifyContent="Center"
            position="absolute"
            right="0px"
          >
            <Text
              fontSize="4xl"
              color="white"
              fontFamily="RajdhaniBold"
              mr="60px"
            >
              COLLECTION
            </Text>
            <Text
              fontSize="4xl"
              color="white"
              fontFamily="RajdhaniBold"
              mr="60px"
            >
              SERVICES
            </Text>
            <Text
              fontSize="4xl"
              color="white"
              fontFamily="RajdhaniBold"
              mr="40px"
            >
              ABOUT
            </Text>
          </HStack>
        </HStack>

        <Center flex={1}>
          <Box position="absolute" left="50px" h="400px" bg="#FFFFFF" w="600px">
            <Text>Hrllo</Text>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    OutfitBlack: require("./assets/fonts/Outfit/static/Outfit-Black.ttf"),
    OutfitThin: require("./assets/fonts/Outfit/static/Outfit-Thin.ttf"),
    OutfitExtraLight: require("./assets/fonts/Outfit/static/Outfit-ExtraLight.ttf"),
    OutfitLight: require("./assets/fonts/Outfit/static/Outfit-Light.ttf"),
    OutfitRegular: require("./assets/fonts/Outfit/static/Outfit-Regular.ttf"),
    OutfitMedium: require("./assets/fonts/Outfit/static/Outfit-Medium.ttf"),
    OutfitSemiBold: require("./assets/fonts/Outfit/static/Outfit-SemiBold.ttf"),
    OutfitBold: require("./assets/fonts/Outfit/static/Outfit-Bold.ttf"),
    OutfitExtraBold: require("./assets/fonts/Outfit/static/Outfit-ExtraBold.ttf"),
    RajdhaniBold: require("./assets/fonts/Rajdhani/Rajdhani-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider>
        <Center flex={1}>
          <Spinner color="#FF6700" />
        </Center>
      </NativeBaseProvider>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
