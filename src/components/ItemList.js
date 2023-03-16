import React from 'react'
import ItemLine from './ItemLine'

const ItemList = ({loading,erorr,data}) => {
  return (
    <main>
      {
        loading ? <h1 className='load'>Wait Data is Loading ...</h1> :
          erorr ? <h1 className='error'>Sorry the error is occurred</h1> :
            data.map((item) =>
            (
             <ItemLine key={item.id} item={item}/>
            ))
      }
    </main>
  )
}

export default ItemList