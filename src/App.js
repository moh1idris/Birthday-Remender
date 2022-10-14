import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)           //-->passing the data.js in the useState
  return <main>
    <section className="container">
      <h3>{people.length} birthday's today</h3>
      <List people={people} />
      <button onClick={()=> setPeople([])}>clear all</button>
    </section>
  </main>;
}

export default App;
