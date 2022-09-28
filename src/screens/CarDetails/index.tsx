import React from "react";
import { StatusBar } from "react-native";
import { Acessory } from "../../components/Acessory";
import { Backbutton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

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
  About,
  Acessories,
  Footer,
} from "./styles";
import { Button } from "../../components/Button";

export function CarDetails() {
  return (
    <Container>
      {/* <StatusBar barStyle="light-content" /> */}
      <Header>
        <Backbutton onPress={() => {}} />
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

        <About>
          Este automóvel é deportivo. Surgiu do lendário touro de lide indultado
          na praça Real Marstranza de Sevilla. É um belíssimo carro para quem
          gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
