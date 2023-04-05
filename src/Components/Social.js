import React from 'react'
import Base from './Base'

export default function Social() {
  return (
    <div>
    <Base/>
    <br></br>
    <br></br>
    <br></br>
    <div id='cb'>
    <div id='chat'>
    <p id='alert'>For your kind ATTENTION! This chat box connects you socially with those people around you, by gathering the information from your "LOCTAION"<br></br> so it is mandatory to provide location access to the application. Also beaware of the strangers before sharing your personal information here. It is instructed to use the DM for direct messaging.</p>
    <input type='text' id='mess' placeholder='Your messages here!'></input>
    <button id='sen'><img id='send' src='https://static.thenounproject.com/png/3509207-200.png'></img></button>
    </div>
    </div>
    </div>
  )
}
