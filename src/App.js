import React from 'react';
import { Admin, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server'
import { UsuarioList, CreateUsuario, EditUsuario } from './res/Usuario';
import { ArtistaList, CreateArtista, EditArtista } from './res/Artista';
import { AlbumList, AlbumCreate, AlbumEdit } from './res/Album';
import { ListMusica, CreateMusica, EditMusica } from './res/Musica';
import { ListPlaylist, CreatePlaylist, EditPlaylist } from './res/Playlist';
import { ListCredenciais, CreateCredenciais, EditCredenciais } from './res/Credenciais';

const dataProvider = jsonServerProvider('http://localhost:8080')

const App = () =>( 
  <Admin dataProvider={dataProvider} >
    <Resource 
      name="usuario" 
      list={UsuarioList}
      create={CreateUsuario}
      edit={EditUsuario}
    />
    
    <Resource 
      name="artista" 
      list={ArtistaList}
      create={CreateArtista}
      edit={EditArtista}
    />

    <Resource 
      name="album" 
      list={AlbumList}
      create={AlbumCreate}
      edit={AlbumEdit}
    />

    <Resource 
      name="musica" 
      list={ListMusica}
      create={CreateMusica}
      edit={EditMusica}
    />

    <Resource 
      name="playlist" 
      list={ListPlaylist}
      create={CreatePlaylist}
      edit={EditPlaylist}
    />

    <Resource 
      name="credenciais" 
      list={ListCredenciais}
      create={CreateCredenciais}
      edit={EditCredenciais}
    />

  </Admin>
 )
export default App;
