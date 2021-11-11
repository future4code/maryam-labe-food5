import React from "react";
import { InputsContainer, SignUpFormContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import Button  from "@material-ui/core/Button";
import {useForm} from "../../hooks/useForm";
import {useHistory} from "react-router-dom";
import signUp from "../../services/user"

const SignUpForm = () => {

    const [form , onChange, clear] = useForm({name: "", email: "",cpf: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history)
        
    }

    const history = useHistory()

    
    return (
        <form onSubmit={onSubmitForm}>
           <SignUpFormContainer>
             <InputsContainer>
                       <TextField
                        name={"name"}
                        value={form.nome}
                        onChange={onChange}
                        variant={"outlined"}
                        label={"Nome"}
                        margin={"normal"}
                        fullWidth
                        required
                        type={"name"}
                      />
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
                           name={"cpf"}
                           value={form.cpf}
                           onChange={onChange}
                           variant={"outlined"}
                           label={"CPF"}
                           margin={"normal"}
                           required
                           type={"number"} 
                           
                           placeholder="Ex.: 000.000.000-00" 
                           fullWidth
                      />
                      <TextField
                           name={"password"}
                           value={form.password}
                           onChange={onChange}
                           variant={"outlined"}
                           label={"Senha"}
                           margin={"normal"}
                           fullWidth
                           required
                           type={"password"} 
                      />
                 </InputsContainer>
                      <Button 
                          type={"submit"}
                          fullWidth
                          variant="contained"
                          color={"primary"}
                          >Criar
                      </Button>
        </SignUpFormContainer>
    </form>
    )
}
export default SignUpForm;