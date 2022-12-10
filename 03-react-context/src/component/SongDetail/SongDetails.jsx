import { useSongContext } from '@/context/SongContext'

const SongDetails = () => {
  const context = useSongContext()
  const song = context.selectedSong

  return (
    <>
      {context.selectedSong.title
        ? <div>
          <img src={`https://picsum.photos/seed/${context.selectedSong.id}/400/400`} alt='' />
          <h1>{song.title}</h1>
          <h4>{song.artist}</h4>
          <h6>{song.year}</h6>
          </div>
        : <h1>Seleccione una cancion</h1>}
    </>
  )
}

export default SongDetails
