import React from "react";
import { InputsContainer, SignUpFormContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import Button  from "@material-ui/core/Button";
import {useForm} from "../../hooks/useForm"



const SignUpForm = () => {

    const [form , onChange, clear] = useForm({name: "", email: "",cpf: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        
    }
    
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
                           name={"number"}
                           value={form.cpf}
                           onChange={onChange}
                           variant={"outlined"}
                           label={"CPF"}
                           margin={"normal"}
                           fullWidth
                           required
                           type={"number"} 
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