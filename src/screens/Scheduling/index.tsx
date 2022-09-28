import React from "react";
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

export function Scheduling() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Backbutton onPress={() => {}} color={theme.colors.shape} />
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

      <Content></Content>
      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
