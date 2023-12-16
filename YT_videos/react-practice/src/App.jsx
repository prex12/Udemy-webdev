// import ReactPortals from './components/react-portals';
// import './App.css';
import React from 'react';
import Effects from './components/Effects'

function App() {
  // const [click, setClick] = useState(false)
  // const handleClick =()=>{
  //   setClick(true)
  // }
  return (
    <div className="App">
      {/* <h1>Hello all of you</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, labore corporis. Eum, vel odio. Neque facere quas veritatis iusto! Debitis non obcaecati, voluptates nobis autem nisi doloribus nostrum nam nesciunt!</p>
      <button onClick={handleClick}>open portal</button>
      {click && <ReactPortals />} */}
      <Effects />
    </div>
  );
}

export default App;
