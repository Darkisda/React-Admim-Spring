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

const ListPlaylist = props => (
    <List {...props}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="nome" />
            <ArrayField source="musica" >
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="nome" />
                </Datagrid>
            </ArrayField>
            <EditButton />
        </Datagrid>
    </List>
)

const CreatePlaylist = props => (
    <Create title={<span>Insira uma Playlist</span>} {...props} >
        <SimpleForm>
            <TextInput source="nome" />
            <ArrayInput source="musicas" >
                <SimpleFormIterator >
                    <TextInput source="nome" label="nome" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
)

const EditPlaylist = props => (
    <Edit title={<span>Edite uma Playlist</span>} {...props} >
        <SimpleForm>
            <TextInput source="nome" />
            <ArrayInput source="musicas" >
                <SimpleFormIterator >
                    <TextInput source="id" label="id" />
                    <TextInput source="nome" label="nome" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
)

export {ListPlaylist, CreatePlaylist, EditPlaylist}