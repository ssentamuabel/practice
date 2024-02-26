import logo from './logo.svg';
import './App.css';
import Greatings from './components/Greatings'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionComponent from './components/FunctionComponent'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <div className="App">

      <ParentComponent />

      {/* <EventBind /> */}

    {/* <FunctionComponent /> */}
    {/* <ClassClick /> */}
      {/* <Counter /> */}

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
