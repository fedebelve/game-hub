import React from 'react'
import useGenres from './useGenres'

export const useGenre = (id?: number) => {
    const {data: genres} = useGenres()
    const genre = genres?.results.find(g => g.id === id)
    return genre
}
