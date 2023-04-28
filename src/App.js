import React, { useState , useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from './header';
import Footer from './footer';













function App() {
  const [nasaData,setNasaData] = useState({ });

  function getAxios() {
    
    axios.get('https://api.nasa.gov/planetary/apod?api_key=xFQ2LBibm3wwPtXg7AryBPfOpv0HeKtdF0WRzsQg&date=2023-04-26&thumbs=true')
    .then(res =>{
      
      setNasaData(res.data)
            
    })
    .catch(error =>{
      console.log('Error');
    })
  }

  useEffect(() => {
    getAxios();
  },[]);
  
  return (
    <div className="App">
      
        <Header/>
        
        <p>Date: {nasaData && nasaData.date}</p>
        <p>{nasaData && nasaData.explanation}</p>
        <span>
          <b>{nasaData && nasaData.title} </b><br/>
          <img src = {nasaData.url} alt={'Image of the Day !'}/>
        </span> <br/>
        <img src = {nasaData.hdurl} alt = 'Image of the Day !'/>
        <p>{nasaData && nasaData.media_type}</p>
        <p>{nasaData && nasaData.service_version}</p>

        <Footer/>    
        
      
    </div>
  );
}

export default App;
