import React from 'react'

const CocktailsList = ({className, title, list, isCocktail=false}) => {
  return (
    <div className={className}>
        <h2>{title}</h2>

        <ul>
            {list.map(({name, country, detail, price}) => (
                <li key={name}>
                    <div className={isCocktail ? "md:me-28" : "me-28"}>
                        <h3>{name}</h3>
                        <p>{country} | {detail}</p>
                    </div>
                    <span>- {price}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CocktailsList