import React from 'react'
import '../scss/itemline.scss'
import Skills from '../components/Skills'
const ItemList = ({ loading, erorr, data }) => {
  return (
    <main className='mainContainer'>
      {
        loading ? <h1 className='load'>Wait Data is Loading ...</h1> :
          erorr ? <h1 className='error'>Sorry the error is occurred</h1> :
            data.map((item) =>
            (
              <div className='container' key={item.id}>
                <div>
                  <img src={item.previewImageLink + `/cover.webp`} alt={item.title} width="370" height="294" />
                  
                  <h1 style={{textAlign:'center'}}>{item.title}</h1>
                  <h3>{item.lessonsCount}</h3>
                  <h3>{item.rating}</h3>
                  <h2 style={{fontWeight:400,textAlign:'center'}}>{item.meta.slug}</h2>
                  <div className='text'>
                  <Skills item={item} />
                  </div>
                </div>
              </div>
            ))
      }
    </main>
  )
}

export default ItemList