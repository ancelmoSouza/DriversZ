import React, { useState, useEffect } from "react";
import { Keyboard } from 'react-native';

import { 
    Container,
    Button,
    ButtonText,
    Title, 
    SubTitle,
    Input,
    Spacer
} from "../../styles";

const Car = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => 
            setVisible(false),
        );

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => 
            setVisible(true),
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        }
    }, [])

    return (
        <Container padding={30} justify="flex-start">
            <Container align="flex-start" height={40}>
                <Title>Cadastre seu Veículo</Title>
                <SubTitle>Preencha os campos abaixo.</SubTitle>
            </Container>
            <Container justify="flex-start">
                <Spacer height={70}/>
                <Input placeholder="Placa do veículo"/>
                <Spacer height={20}/>
                <Input placeholder="Marca do veículo"/>
                <Spacer height={20}/>
                <Input placeholder="Modelo do veículo"/>
                <Spacer height={20}/>
                <Input placeholder="Cor do veículo"/>
            </Container>
            {visible && 
                <Container height={70} justify="flex-end">
                    <Button>
                        <ButtonText>Começar a Usar</ButtonText>
                    </Button>
                </Container>
            }
        </Container>
    );
};

export default Car;