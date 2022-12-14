import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { Container, Content, Title, Message, Footer } from "./styles";
import { ConfirmButton } from "../../components/ConfirmButton";
import { StatusBar } from "expo-status-bar";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function goBackToHome() {
    navigation.navigate("Home" as never);
  }

  return (
    <Container>
      <StatusBar style="light" />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro Alugado</Title>

        <Message>
          Agora você só precisa ir {"\n"}até a concessionária da RENTX {"\n"}
          pegar o seu automóvel
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={goBackToHome} />
      </Footer>
    </Container>
  );
}
