import React from 'react'
import { Link } from 'react-router-dom'
export default function Log() {
  return (
    <div id='Box1'>
    <img  id='pro' src='https://www.citypng.com/public/uploads/small/11639594360nclmllzpmer2dvmrgsojcin90qmnuloytwrcohikyurvuyfzvhxeeaveigoiajks5w2nytyfpix678beyh4ykhgvmhkv3r3yj5hi.png'></img>
    <form>
    <label id='d1'>USERNAME</label>
    <input id='d2' type='text' placeholder='Enter your UserName'></input>
    <label id='d3'>PASSWORD</label>
    <input id='d4' type='password' placeholder='Enter your Passcode'></input>
    </form>
    <nav>
    <Link id='li1' to='/reg'>New User! Click to REGISTER</Link>
    <Link id='li4' to='/'><img id='ho' src='https://icon-library.com/images/transparent-house-icon/transparent-house-icon-13.jpg'></img></Link>
    <Link to='/home'><button id='lin'>LOG IN</button></Link>
    </nav>
    </div>
  )
}
