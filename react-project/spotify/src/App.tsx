import React, { useState } from 'react';
import { Search, Music, User, ExternalLink } from 'lucide-react';

interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  external_urls: {
    spotify: string;
  };
  preview_url: string | null;
}

interface SpotifyArtist {
  id: string;
  name: string;
  genres: string[];
  followers: {
    total: number;
  };
  images: Array<{ url: string }>;
  external_urls: {
    spotify: string;
  };
}

const SpotifySearchApp: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [searchType, setSearchType] = useState<'track' | 'artist'>('track');
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [artists, setArtists] = useState<SpotifyArtist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string>('');

  // Função para obter token de acesso (Client Credentials Flow)
  const getAccessToken = async (): Promise<string> => {
    if (accessToken) return accessToken;

    try {
      // IMPORTANTE: Em produção, esta requisição deve ser feita no backend
      // Aqui é apenas para demonstração
      const clientId = '7a577768631a4df6b863093ba1c5ea4b';
      const clientSecret = '82e6be00e1d644b291e12a78bbe80007';
      
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
        },
        body: 'grant_type=client_credentials'
      });

      const data = await response.json();
      setAccessToken(data.access_token);
      return data.access_token;
    } catch (err) {
      throw new Error('Erro ao obter token de acesso');
    }
  };

  const searchSpotify = async (): Promise<void> => {
    if (!query.trim()) return;

    setLoading(true);
    setError('');

    try {
      const token = await getAccessToken();
      
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=${searchType}&limit=10`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error('Erro na busca');
      }

      const data = await response.json();
      
      if (searchType === 'track') {
        setTracks(data.tracks.items);
        setArtists([]);
      } else {
        setArtists(data.artists.items);
        setTracks([]);
      }
    } catch (err) {
      setError('Erro ao buscar no Spotify. Verifique suas credenciais da API.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent | React.KeyboardEvent): void => {
    e.preventDefault();
    searchSpotify();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-black to-green-800 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-3">
            <Music className="text-green-400" size={40} />
            Spotify Search
          </h1>
          <p className="text-green-300">Busque por músicas e artistas no Spotify</p>
        </div>

        {/* Configuração da API */}
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2 text-yellow-300">⚠️ Configuração Necessária</h3>
          <p className="text-sm text-yellow-200">
            Para usar este app, você precisa:
          </p>
          <ol className="text-sm text-yellow-200 mt-2 space-y-1">
            <li>1. Criar um app no <a href="https://developer.spotify.com" className="underline" target="_blank" rel="noopener noreferrer">Spotify Developer Dashboard</a></li>
            <li>2. Obter Client ID e Client Secret</li>
            <li>3. Substituir as credenciais no código</li>
          </ol>
        </div>

        {/* Search Form */}
        <div className="mb-8">
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Digite o nome da música ou artista..."
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none text-white placeholder-gray-400"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit(e);
                    }
                  }}
                />
              </div>
              
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value as 'track' | 'artist')}
                className="px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:border-green-400 focus:outline-none text-white"
              >
                <option value="track">Músicas</option>
                <option value="artist">Artistas</option>
              </select>
              
              <button
                onClick={handleSubmit}
                disabled={loading || !query.trim()}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <Search size={20} />
                {loading ? 'Buscando...' : 'Buscar'}
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
            <p className="text-red-300">{error}</p>
          </div>
        )}

        {/* Results */}
        <div className="space-y-4">
          {/* Tracks Results */}
          {tracks.map((track) => (
            <div key={track.id} className="bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-colors">
              <div className="flex items-center gap-4">
                {track.album.images[2] && (
                  <img
                    src={track.album.images[2].url}
                    alt={track.album.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                )}
                
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white">{track.name}</h3>
                  <p className="text-green-300">
                    {track.artists.map(artist => artist.name).join(', ')}
                  </p>
                  <p className="text-gray-400 text-sm">{track.album.name}</p>
                </div>
                
                <div className="flex gap-2">
                  {track.preview_url && (
                    <audio controls className="w-48">
                      <source src={track.preview_url} type="audio/mpeg" />
                      Seu navegador não suporta áudio.
                    </audio>
                  )}
                  
                  <a
                    href={track.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                    title="Abrir no Spotify"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Artists Results */}
          {artists.map((artist) => (
            <div key={artist.id} className="bg-gray-800/30 rounded-lg p-4 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-colors">
              <div className="flex items-center gap-4">
                {artist.images[2] && (
                  <img
                    src={artist.images[2].url}
                    alt={artist.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white flex items-center gap-2">
                    <User size={20} className="text-green-400" />
                    {artist.name}
                  </h3>
                  <p className="text-green-300">
                    {artist.followers.total.toLocaleString()} seguidores
                  </p>
                  {artist.genres.length > 0 && (
                    <p className="text-gray-400 text-sm">
                      Gêneros: {artist.genres.slice(0, 3).join(', ')}
                    </p>
                  )}
                </div>
                
                <a
                  href={artist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                  title="Abrir no Spotify"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!loading && tracks.length === 0 && artists.length === 0 && !error && query && (
          <div className="text-center py-12">
            <Music className="mx-auto text-gray-500 mb-4" size={64} />
            <p className="text-gray-400 text-lg">Nenhum resultado encontrado</p>
            <p className="text-gray-500">Tente buscar com outros termos</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpotifySearchApp;