import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = () => {
  
  const usandoGet = async () =>{
    const res = await axios.get('http://localhost:3001/');
    alert(res.data);
  }

  const usandoPost = async () => {
    const res = await axios.post('http://localhost:3001/');
    alert(res.data);
  }
  
  return(
    <section>
      <div>oi mundo</div>
      <button onClick={usandoGet}>get</button>
      <button onClick={usandoPost}>post</button>
    </section>
  )
}
  

ReactDOM.render(<App/>, document.querySelector("#root"));