import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Acessory } from "../../components/Acessory";
import { Backbutton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Feather } from "expo-vector-icons";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import { Button } from "../../components/Button";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate("SchedulingComplete" as never);
  }

  return (
    <Container>
      {/* <StatusBar barStyle="light-content" /> */}
      <Header>
        <Backbutton onPress={() => navigation.goBack()} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://www.imagensempng.com.br/wp-content/uploads/2020/12/0010.png",
            "https://www.pngkey.com/png/full/383-3833840_rs-5-coup-price-from-audi-rs5-png.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborguini</Brand>
            <Name>Aventador</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 650</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory name="380Km/h" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={AccelerationSvg} />
          <Acessory name="800 HP" icon={ForceSvg} />
          <Acessory name="Gasolina" icon={GasolineSvg} />
          <Acessory name="Auto" icon={ExchangeSvg} />
          <Acessory name="2 pessoas" icon={PeopleSvg} />
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2022</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 650 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 1950</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          onPress={handleConfirm}
          color={theme.colors.success}
        />
      </Footer>
    </Container>
  );
}
