import React from "react";
import { Text, View } from 'react-native';

import { 
    Container,
    Button,
    ButtonText,
    Title, 
    SubTitle,
    PickerButton 
} from "../../styles";


const Payment = () => {
    return (
        <Container padding={30} justify="flex-start">
            <Container align="flex-start" height={40}>
                <Title>Escolha como Pagar</Title>
                <SubTitle>Preencha os dados do cartão de crédito.</SubTitle>
            </Container>
            <Container>
            </Container>
            <Container height={70} justify="flex-end">
                <Button>
                    <ButtonText>Comece a </ButtonText>
                </Button>
            </Container>
        </Container>
    );
};

export default Payment;