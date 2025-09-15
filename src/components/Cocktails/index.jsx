import React from 'react'
import CocktailsList from './components/CocktailsList'
import { cocktailLists, mockTailLists } from '../../../constants'

const Cocktails = () => {
  return (
    <section id="cocktails">

        <div className="list">
            <CocktailsList
                className="popular"
                title="Most popular cocktails:"
                list={cocktailLists}
                isCocktail
            />
            <CocktailsList
                className="loved"
                title="Most loved mocktails:"
                list={mockTailLists}
            />
        </div>
    </section>
  )
}

export default Cocktails