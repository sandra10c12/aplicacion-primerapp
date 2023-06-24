import React from 'react'
import imagen1 from '../assets/java.jpg'
import imagen2 from '../assets/node.jpg'
import imagen3 from '../assets/react.jpg'
import Card from './Card'

const cards=[
    {
        id:1,
        title: 'Java',
        image: imagen1,
        Instructor: "Agustin Meza"
    },

    {
        id:2,
        title: 'Node',
        image: imagen2,
        Instructor: "Sheyla Nav"
    },

    {
        id:3,
        title: 'React',
        image: imagen3,
        Instructor: "Andres Cast"
    }

]

export default function Cards() {
    console.log(cards)
  return (
    <div className='container d-flex justify-content-center align-item-center h-100'>
        <div className='row'>
            {
                cards.map( c=>(
                    <div className='col-md-4' key={cards.id}> 
                    <Card
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    image={c.image}
                    instructor={c.instructor}
                    />                   
                    </div>
                )

                )
            }
                    

        </div>
        
        </div>
  )
}
