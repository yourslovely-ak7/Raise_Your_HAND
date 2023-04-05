import React from 'react'
import { Link } from 'react-router-dom'
export default function Base() {

  return (
    <div>
    <nav>
    <Link to='/log' id='part'>LOG IN / SIGN UP</Link>
    </nav>
    <div id='head'>
    <img id='logo' alt='' src='https://cutewallpaper.org/24/stop-hand-png/hand-stop-hand-drawn-sign-free-signs-icons.png'></img>
    <h1 id='a1'>Raise</h1>
    <h1 id='a3'>your</h1>
    <h1 id='a2'>HANDS</h1>
    <p id='moto'>"யாதும் ஊரே</p><br></br><p id='moto1'>யாவரும் கேளிர்"</p>
    </div>
    <div id='navs'>
    <nav>
    <Link id='tag0' class="tags" to='/home'>HOME</Link>
    <Link id='tag1' class="tags" to='/sc'>SOCIAL CHAT</Link>
    <Link id='tag2' class="tags" to='/dm'>DM</Link>
    <Link id='tag3' class="tags" to='/money'>MONEY CONVERSION</Link>
    <Link id='tag4' class="tags" to='/service'>COSTUMER SERVICE</Link>
    </nav>
    </div>
    </div>
  )
}