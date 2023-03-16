import './App.css';
import Fetcher from './helpers/Fetcher';
function App() {

  const { data, erorr } = Fetcher("https://api.wisey.app/api/v1/core/preview-courses")
  return (

    <div className="App">
      <div>{erorr ? <h1>Fucking Eror</h1> : data.map((item) =>
      (
        <div key={item.id}>{item.title}</div>
      ))
      }</div>
    </div>
  );
}

export default App;
