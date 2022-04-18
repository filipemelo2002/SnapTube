import styled from "styled-components/native";
import { KeyboardAvoidingView } from "react-native";
import { Text } from "react-native-paper";
import LottieView from "lottie-react-native";

export const Animation = styled(LottieView)`
  align-self: center;
  width: 100%;
`;

export const Title = styled(Text)`
  font-size: 30px;
  align-self: center;
  padding-bottom: 16px;
  font-family: "Noto-Bold";
  align-items: center;
  justify-content: center;
`;
export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 25%;
`;
