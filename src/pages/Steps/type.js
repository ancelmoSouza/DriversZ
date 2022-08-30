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

const Type = () => {
    return (
        <Container padding={30} justify="flex-start">
            <Container align="flex-start" height={40}>
                <Title>Passageiro ou Motorista?</Title>
                <SubTitle>Selecione sua função no DriversZ.</SubTitle>
            </Container>
            <Container>
                <PickerButton active>
                    <View style={{width: '35%', height: '35%', backgroundColor: '#c4c4c4'}}/>
                    <Title>Motorista</Title>
                </PickerButton>
                <PickerButton>
                    <View style={{width: '35%', height: '35%', backgroundColor: '#c4c4c4'}}/>
                    <Title>Passageiro</Title>
                </PickerButton>
            </Container>
            <Container height={70} justify="flex-end">
                <Button>
                    <ButtonText> Próximo Passo</ButtonText>
                </Button>
            </Container>
        </Container>
    );
};

export default Type;