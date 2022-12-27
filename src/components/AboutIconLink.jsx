import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'

function AboutIconLink() {
    return (
        <div className='about-link'>
            {/* <Link to={{
                pathname:'/about',
                search:'?sort=name',

            }}> */}
            <Link to='/about'>
                <FaQuestion size={30} />
            </Link>
        </div>
    )
}

export default AboutIconLink