import React from 'react'
import { 
    List, 
    Datagrid, 
    TextField, 
    Create, 
    SimpleForm, 
    TextInput, 
    Edit, 
    EditButton,
    ArrayField
} from 'react-admin';

const ArtistaList = props => (
    <List {...props}>
        <Datagrid rowClick="edit" >
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="estilo" />
            <ArrayField source="albums" >
                <Datagrid>
                    <TextField source="nome" />
                    <TextField source="ano" />
                </Datagrid>
            </ArrayField>
            <EditButton />
        </Datagrid>
    </List>
)

const CreateArtista = props => (
    <Create title={<span>Insira um Artista</span>} {...props} >
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="estilo"/>
        </SimpleForm>
    </Create>
)

const EditArtista = props => (
    <Edit title={<span>Edite um Artista</span>} {...props} >
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="estilo" />
        </SimpleForm>
    </Edit>
)

export {ArtistaList, CreateArtista, EditArtista}