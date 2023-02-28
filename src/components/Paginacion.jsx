import React from 'react'

const Paginacion = ({ prev, next, onNext, onPrevious }) => {

    const handleNext = () => {
        onNext();
    };

    const hanldePrevious = () => {
        onPrevious();
    };

    return (
        <nav className='my-5'>
            <ul className='pagination justify-content-center'>
                {prev ? (
                    <li className='page-item'>
                        <button className='page-link' onClick={hanldePrevious}>Anterior</button>
                    </li>
                )
                    : null
                }
                {next ? (
                    <li className='page-item'>
                        <button className='page-link' onClick={handleNext}>Siguiente</button>
                    </li>
                )
                    : null
                }
            </ul>
        </nav>
    )
}

export default Paginacion