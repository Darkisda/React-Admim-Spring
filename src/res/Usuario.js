import React from 'react'
import { 
    List, 
    Datagrid, 
    TextField, 
    EmailField, 
    Create, 
    SimpleForm,
    TextInput,
    EditButton,
    Edit,
} from 'react-admin';

const UsuarioList = props => (
    <List {...props}>
        <Datagrid rowClick="edit" >
            <TextField source="id" />
            <TextField source="primeiroNome" />
            <TextField source="segundoNome" />
            <EmailField source="email" />
            <EditButton />
        </Datagrid>
    </List>
)

const CreateUsuario = props => (
    <Create title={<span>Insira um Usuario</span>} {...props} >
        <SimpleForm>
            <TextInput source="primeiroNome" />
            <TextInput source="segundoNome" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>

)
const EditUsuario = props => (
    <Edit title={<span>Edite um Usuario</span>} {...props} >
        <SimpleForm>
            <TextInput source="primeiroNome" />
            <TextInput source="segundoNome" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
)

export {UsuarioList, CreateUsuario, EditUsuario}