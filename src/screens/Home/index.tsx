import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";

export function Home() {
  const carDataOne = {
    brand: "Audi",
    name: "RS 5 coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://www.pngkey.com/png/full/383-3833840_rs-5-coup-price-from-audi-rs5-png.png",
  };

  const carDataTwo = {
    brand: "Lamborghini",
    name: "Aventador SVJ",
    rent: {
      period: "Ao dia",
      price: 650,
    },
    thumbnail:
      "https://www.imagensempng.com.br/wp-content/uploads/2020/12/0010.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo height={RFValue(12)} width={RFValue(108)} />
          <TotalCars>Total 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <Car data={carDataOne} />}
        keyExtractor={(item) => String(item)}
      />
    </Container>
  );
}
