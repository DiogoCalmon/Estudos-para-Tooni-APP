import { useState } from 'react';
import '../App.css'

interface Props {
  adicionarMusica: (novaMusica: []) => void
}

let token: string = ''

export default function adicionarMusica(props: Props){
  const [query, setQuery] = useState<string>("")
  // const [searchType, setSearchType] = useState<string>("track")  // Eu nem preciso dessa linha para ser honesto

  async function getAccessToken(){
    if (token) return token;

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${btoa("7a577768631a4df6b863093ba1c5ea4b:82e6be00e1d644b291e12a78bbe80007")}`
      },
      body: "grant_type=client_credentials"
    })
    const data = await response.json()
    token = data.access_token
    return token 
  }

  async function procurarMusica(){
    const token = await getAccessToken()

    try {
      const dados = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
  
      if (!dados.ok) {
        throw new Error('Erro na busca');
      }
  
      const musica = await dados.json();
      return musica.tracks.items

    } catch (error) {
      console.log(error)
      return 
    }
  }

  async function handleSubmit(event: React.FormEvent | React.KeyboardEvent ){
    event.preventDefault()
    const novaMusica = await procurarMusica()
    props.adicionarMusica(novaMusica)
    
  }

  return (
    <div className="bg-zinc-600 w-2xl p-3 rounded-2xl">
      <h2 className='text-black'>Playlist de musica</h2>
      <div className="bg-zinc-900">
        <form className='mb-6 p-6 flex flex-col items-center' action="">
          <label className="text-xl mb-3" htmlFor="">Adicionar Musica</label>
          <input 
          className="bg-zinc-600 w-120 rounded text-black placeholder:text-center text-center mb-2"
          placeholder='Nome da musica'
          type="text"
          value = {query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" ? handleSubmit(event) : null}
          />
          <button className='bg-zinc-400 w-120 rounded text-zinc-950 placeholder:text-center cursor-pointer' type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}