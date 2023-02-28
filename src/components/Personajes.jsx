import React from 'react'
import Card from "react-bootstrap/Card"

const Personajes = ({personajes}) => {
    return (
        <div className='row'>
            {
                personajes.map((item, index) => (
                    <div key={index} className='col mb-5'>
                        <div className='card' style={{minWidth:"200px"}}>
                            <img src={item.image} alt={item.name}/>
                            <div className='card-body'>
                                <Card.Title>Card</Card.Title>
                                <h5 className='mb-4 text-muted'>{item.name}</h5>
                                <h5>{item.species}</h5>
                                <h5>{item.location.name}</h5>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Personajes