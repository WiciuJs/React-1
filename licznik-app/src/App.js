import './style cp/App.css';
import Head from './cp/Head';
import Counter from './cp/Counter';

const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
      <Head/>
     </header>
    <Counter initValue={0}/>
    </div>
  );
}

export default App;
