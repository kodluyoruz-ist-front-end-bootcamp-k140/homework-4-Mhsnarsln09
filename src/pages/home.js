import React, { useEffect, useState } from 'react'
import "./style.css"

const URL = "http://localhost:4000/api/products";

export default function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    loadData(URL);
  }, [])


  const loadData = (URL) => {
    fetch(URL).then(res => res.json())
      .then(res => {
        setItems(res)
      })
  }
  return (
    <>
      <div className="container app-css">
        {items.map((category, i) => (
          <div className="row " key={i}>
            <div className="container"><h3>{category.name}</h3></div>
           
            {category.products.map((item, i) => ( 
              <div className="col-sm-3 " key={i}>
                <div className="card" style={{ width: "16rem"}} key={i} >
                  <img src={item.image_url} className="card-img-top product-css" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <a href="*" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            ))}
            <hr className='hr' />
          </div>
        ))}

      </div>
    </>
  )
}