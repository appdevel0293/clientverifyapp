import logo from './logo.svg';
import './App.css';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
 
  const id = urlParams.get('id');
   console.log(urlParams)
   console.log(id)

  return (
    <div className="App">
      <header className="App-header">
  
        <p>
          Should display parameter here:  {id}
        </p>
       
      </header>
    </div>
  );
}

export default App;
