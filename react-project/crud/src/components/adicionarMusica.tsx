import '../App.css'

export default function adicionarMusica(){
    return (
      <div className="bg-zinc-600 w-2xl p-3 rounded-2xl">
        <h2 className='text-black'>Playlist de musica</h2>
        <div className="bg-zinc-900">
          <form className='mb-6 p-6 flex flex-col items-center' action="">
            <label className="text-xl mb-3" htmlFor="">Adicionar Musica</label>
            <input className="bg-zinc-600 w-120 rounded text-black placeholder:text-center text-center mb-2" placeholder='Nome da musica' type="text" />
            <button className='bg-zinc-400 w-120 rounded text-zinc-950 placeholder:text-center cursor-pointer' type="submit">Enviar</button>
          </form>
        </div>
      </div>
      
    )
}