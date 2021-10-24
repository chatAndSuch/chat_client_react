import React from 'react';
import './App.css';
import SD from './components/SpeedDial'
import ImageCard from './components/Card'
import PropForm from './components/Form'

function App() {
  return (
    <div className="App">
      <ImageCard 
      img="https://www.romamoulding.com/wp-content/uploads/2014/03/Livechat.jpg"
      alt='this is alt text'
      title='Welcom to neuChat'
      actionOne='SignIn'
      actionTwo='Docs'
      propButtOne= {<PropForm buttonType='LogIn'/>}
      propButtTwo= {<PropForm buttonType='Registar'/>}
      propButtThree= {<PropForm buttonType='Docs'/>}
      />
      <SD />
    </div>
  );
}

export default App;
