import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Backbutton } from "../../components/BackButton";
import { useTheme } from "styled-components";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";

import ArrowSvg from "../../assets/arrow.svg";
import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails" as never);
  }

  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Header>
        <Backbutton
          onPress={() => navigation.goBack()}
          color={theme.colors.shape}
        />
        <Title>
          Escolha uma{"\n"}data de inicio e {"\n"}fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={true}>28/09/2022</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={true}>05/10/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
