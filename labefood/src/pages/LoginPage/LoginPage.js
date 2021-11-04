import React from "react";
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled";
import  Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import {goToSignupPage} from '../../routers/Coordinator'
import LoginForm from "./LoginForm";
import logo from '../../Logo/img/Eats.png'

const LoginPage = () => {
     
    const history = useHistory()

    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <LoginForm />
                <SignUpButtonContainer>
                    <Button 
                      onClick={() => goToSignupPage(history)}
                      type={"submit"}
                      fullWidth
                      variant={"text"}
                      color={"primary"}
                    >
                        Não possui conta? Cadastre-se
                    </Button>

                </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage;