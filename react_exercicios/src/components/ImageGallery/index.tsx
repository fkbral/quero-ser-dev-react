import './styles.css'

export function ImageGallery() {

  // const urls = [
  //   'https://source.unsplash.com/random/?city,night,1',
  //   'https://source.unsplash.com/random/?city,night,2',
  //   'https://source.unsplash.com/random/?city,night,3',
  //   'https://source.unsplash.com/random/?city,night,4',
  //   'https://source.unsplash.com/random/?city,night,5',
  //   'https://source.unsplash.com/random/?city,night,6',
  //   'https://source.unsplash.com/random/?city,night,7',
  //   'https://source.unsplash.com/random/?city,night,8',
  //   'https://source.unsplash.com/random/?city,night,9',
  //   'https://source.unsplash.com/random/?city,night,10',
  //   'https://source.unsplash.com/random/?city,night,11',
  //   'https://source.unsplash.com/random/?city,night,12',
  // ]

  // const urls = []
  // let contador = 0
  // while(contador < 12) {
  //   urls.push(`https://source.unsplash.com/random/?city,night,${contador}`)
  //   contador += 1
  // }

  const urlDaImagem = "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

  const urls = Array.from({ length: 12 }, (_, index) => {
    return `https://source.unsplash.com/random/?city,night,${index}`
    // return 'https://source.unsplash.com/random/?city,night,' + index
  })

  return (
    <div>
      <img src={urlDaImagem} alt="" width={180} />

      <h2>Galeria de imagens</h2>

      <ul className='image-gallery'>
        {urls.map(url => {
          return (
            <li>
              <img src={url} alt="" />
            </li>
          ) 
        })}
      </ul>
    </div>
  )
}