import React from 'react'
import { Link } from 'react-router-dom'

export default function movie() {
  return (
    <> You are in the MoviePage
        <Link to="/element">
          <button>movie link</button>
        </Link>
    </>
  )
}
