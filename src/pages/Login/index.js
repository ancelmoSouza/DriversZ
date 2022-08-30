import React from "react";
import { Text } from 'react-native';

import { Container, Button, ButtonText } from '../../styles';

const Login = () => {
    return (
        <Container color="info50">
            <Container
            justify="space-around"
            padding={60}
            position="absolute"
            height={270}
            zIndex={9}
            >
                <Button type="info">
                    <ButtonText color="light"> Fazer Login com  Facebook</ButtonText>
                </Button>

                <Button type="light">
                    <ButtonText> Fazer Login com Google</ButtonText>
                </Button>
            </Container>
        </Container>
    )
}

export default Login;