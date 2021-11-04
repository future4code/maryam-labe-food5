import React from "react";
import { InputsContainer, LoginFormContainer} from "./styled";
import  TextField  from "@material-ui/core/TextField";
import  Button  from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import {goToHomePage} from '../../routers/Coordinator'
import { useForm } from "../../hooks/useForm";





const LoginForm = () => {

    const [form, onChange, clear] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    const history = useHistory();
    return (
        <LoginFormContainer>
            <form onSubmit={onSubmitForm}>
              < InputsContainer>
                  <TextField 
                      name={"email"}
                      value={form.email}
                      onChange={onChange}
                      variant={"outlined"}
                      label={"E-mail"}
                      margin={"normal"}
                      fullWidth
                      required
                      type={"email"}
                      
                  />
                   <TextField 
                      name={"password"}
                      value={form.password}
                      onChange={onChange}
                      label={"Senha"}
                      variant={"outlined"}
                      margin={"normal"}
                      fullWidth
                      required
                      type={"password"}
                  />
              </ InputsContainer>
                  <Button
                      onClick={() => goToHomePage(history)}
                      type={"submit"}
                      fullWidth
                      variant="contained"
                      color={"primary"}>
                          Entrar
                  </Button>
            </form>
        </LoginFormContainer>
    )
}
export default LoginForm;