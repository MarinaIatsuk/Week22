
import React from 'react'
import data from '../data.json'
import Card from './Card';
import '../style/App.css'


function App() {
  console.log(data);
  return (
    <div>
    {data.map(hero => (
      <Card
        key={hero.id}
        name={hero.name}
        universe={hero.universe}
        alterego={hero.alterego}
        friends={hero.friends}
        superpowers={hero.superpowers}
        rating={hero.rating}
        url={hero.url}
      />
    ))}
  </div>
  );
}

export default App