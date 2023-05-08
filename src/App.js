import logo from './logo.svg';
import './App.css';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
 
  const id = urlParams.get('id');
  const currentUrl = window.location.href;
   console.log(urlParams)
   console.log(id)

  return (
    <div className="App">
      <header className="App-header">
  
        <p>
          {currentUrl}  {id}
        </p>
       
      </header>
    </div>
  );
}

export default App;
