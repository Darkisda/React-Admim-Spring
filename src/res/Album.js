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

const AlbumList = props => (
    <List {...props}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="nome" />
            <TextField source="ano" />
            <ArrayField source="musicas" >
                <Datagrid>
                    <TextField source="nome" />
                </Datagrid>
            </ArrayField>
            <EditButton />
        </Datagrid>
    </List>
);

const AlbumCreate = props => (
    <Create title={<span>Insira um Album</span>} {...props} >
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="ano" />
            <ArrayInput source="artista" >
                <SimpleFormIterator >
                    <TextInput source="id" label="id" />
                    <TextInput source="nome" label="nome" />
                    <TextInput source="estilo" label="estilo" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
)

const AlbumEdit = props => (
    <Edit title={<span>Edite o Album</span>} {...props} >
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="ano" />
            <ArrayInput source="musicas" >
                <SimpleFormIterator >
                    <TextInput source="id" label="id" />
                    <TextInput source="nome" label="nome" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
)


export {AlbumList, AlbumCreate, AlbumEdit}