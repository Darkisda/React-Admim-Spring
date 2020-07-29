import React from 'react'
import { 
    List, 
    Datagrid, 
    TextField, 
    EditButton,
    Create,
    SimpleForm,
    TextInput,
    ArrayField,
    ArrayInput,
    SimpleFormIterator,
    Edit,
    EmailField,
} from 'react-admin';

const ListCredenciais = props => (
    <List {...props}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="login" />
            <TextField source="senha" />
            {/* <ArrayField source="usuario" >
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="primeiroNome" />
                    <TextField source="segundoNome" />
                    <EmailField source="email" />
                </Datagrid>
            </ArrayField> */}
            <EditButton />
        </Datagrid>
    </List>
)

const CreateCredenciais = props => (
    <Create title={<span>Insira suas Credenciais</span>} {...props} >
        <SimpleForm>
            <TextInput source="login" />
            <TextInput source="senha" />
            <ArrayInput source="usuario" >
                <SimpleFormIterator >
                    <TextInput source="id" label="id" />
                    <TextInput source="primeiroNome" label="primeiroNome" />
                    <TextInput source="segundoNome" label="segundoNome" />
                    <TextInput source="email" label="email"/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
)

const EditCredenciais = props => (
    <Edit title={<span>Edite suas Credenciais</span>} {...props} >
        <SimpleForm>
            <TextInput source="login" />
            <TextInput source="senha" />
            <ArrayInput source="usuario" >
                <SimpleFormIterator >
                    <TextInput source="id" label="id" />
                    <TextInput source="primeiroNome" label="primeiroNome" />
                    <TextInput source="segundoNome" label="segundoNome" />
                    <TextInput source="email" label="email"/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
)

export {CreateCredenciais, ListCredenciais, EditCredenciais}