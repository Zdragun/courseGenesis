import React from 'react'
import '../scss/itemline.scss'
import Skills from '../components/Skills';
import { Link } from 'react-router-dom';
const ItemList = ({ loading, erorr, data }) => {

  return (
    <main className='mainContainer'>
      {
        loading ? <h1 className='load'>Wait Data is Loading ...</h1> :
          erorr ? <h1 className='error'>Sorry the error is occurred</h1> :
            data.map((item) =>
            (
              <div  className='container' key={item.id}>
                <div>
                  <img src={item.previewImageLink + `/cover.webp`} alt={item.title} width="370" height="294" />
                  <video className="video"  width={370} height={294} muted loop controls>
                  <source src={item.meta.courseVideoPreview.link} type="application/x-mpegURL"/>
                  </video>
                 <Link to={"/coursesDetails"}><h1 className='title' style={{ textAlign: 'center' }}>{item.title}</h1></Link>
                  <Skills item={item} />
                  <div className='lessons'>
                    <h3>Lessons: {item.lessonsCount}</h3>
                    <h3>Rating: <span>{item.rating}</span></h3>
                  </div>
                </div>
              </div>
            ))
      }
    </main>
  )
}

export default ItemList