import logo from './logo.svg';
import './App.css';
import Greatings from './components/Greatings'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">

      <Counter />

    {/* <Message /> */}
          {/* <Greatings  firstname="Ssentamu" secondname="Abel">
         This is the ssentamu text
      </Greatings>
      <Greatings firstname="Kasibante" secondname="Grace" >
         This is also a text
      </Greatings>
      <Welcome firstname="Sekaayi" secondname="Jonathan" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
