
import { useState } from 'react'
import './App.css'
import Adicionar from "./components/adicionarMusica"
import Lista from "./components/listaDeMusicas"

export default function App() {
  type Musica = {
    id: string
    titulo: string
    autor: string
    estado: boolean
  }

  let [musicas, setMusicas] = useState([
    {
      id: "1",
      titulo: "No Face",
      autor: "Drake",
      estado: false
    },
    {
      id: "2",
      titulo: "Like That",
      autor: "Future",
      estado: false
    },
    {
      id: "3",
      titulo: "Num id Change",
      autor: "Yeat",
      estado: false
    },
  ])

  interface SpotifyAlbum {
    name: string;
    id: string;
    artist: string,
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
  }

  interface SpotifyTrackComplete {
    album: SpotifyAlbum;
    name: string;
    id: string;
    duration_ms: number;
    explicit: boolean;
    artists: Array<{
      name: string;
      id: string;
    }>;
  }

  function adicionar(novaMusica: SpotifyTrackComplete[]){
    const listaDoSpotify = novaMusica
    let novaLista: Musica[] = []
    
    for (let i = 0, l = listaDoSpotify.length; i < l; i++){
      let novaMusica: Musica = {
        id: listaDoSpotify[i].album.id,
        titulo: listaDoSpotify[i].album.name,
        autor: "teste",
        estado: true
      }

      novaLista.push(novaMusica)
    }
    setMusicas(novaLista)
    novaLista = []
  }

  //adicionar(musicas[2])

  return (
    <>
      <Adicionar adicionarMusica={adicionar}/>
      <Lista lista={musicas}/>
    </>
  )
}
