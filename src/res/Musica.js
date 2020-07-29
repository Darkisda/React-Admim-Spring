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
    Edit
} from 'react-admin';

const ListMusica = props => (
    <List {...props}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="nome" />
            <EditButton />
        </Datagrid>
    </List>
)

const CreateMusica = props => (
    <Create title={<span>Insira uma Musica</span>} {...props} >
        <SimpleForm>
            <TextInput source="nome" />
            <ArrayInput source="album" >
                <SimpleFormIterator >
                    <TextInput source="id" label="id" />
                    <TextInput source="nome" label="nome" />
                    <TextInput source="ano" label="ano" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
)

const EditMusica = props => (
    <Edit title={<span>Edite o Album</span>} {...props} >
        <SimpleForm>
            <TextInput source="nome" />
            <ArrayInput source="album" >
                <SimpleFormIterator >
                    <TextInput source="id" label="id" />
                    <TextInput source="nome" label="nome" />
                    <TextInput source="ano" label="ano" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
)

export {ListMusica, CreateMusica, EditMusica}