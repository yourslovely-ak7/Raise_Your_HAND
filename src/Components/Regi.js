import React from 'react'
import { Link } from 'react-router-dom'
export default function Regi()
{
  return (
    <div id='Box2'>
    <img id='pro1' alt='' src='https://www.citypng.com/public/uploads/small/11639594360nclmllzpmer2dvmrgsojcin90qmnuloytwrcohikyurvuyfzvhxeeaveigoiajks5w2nytyfpix678beyh4ykhgvmhkv3r3yj5hi.png'></img>
    <form>
    <label id='d15'>USERNAME</label>
    <input id='d16' type='text' placeholder='Enter your UserName'></input>
    <label id='d17'>E-MAIL</label>
    <input id='d18' type='email' placeholder='Enter your E-mail'></input>
    <label id='d7'>PASSWORD</label>
    <input id='d8' type='password' placeholder='Enter your Passcode'></input>
    <label id='d9'>CONFIRM PASSWORD</label>
    <input id='d0' type='password' placeholder='Re-enter the Passcode'></input>
    <label id='d10'>CONTACT NUMBER</label>
    <input id='d11' type='text' placeholder='Enter your Mobile Number'></input>
    <input id='d12' type='text' value="+91"></input>
    <label id='d13'>AADHAAR NUMBER</label>
    <input id='d14' type='text' placeholder='Enter your Aadhaar Number'></input>
    </form>
    <nav>
    <Link id='li2' to='/log'>Already an User! Log IN</Link>
    <Link id='li3' to='/'><img id='ho' alt='' src='https://icon-library.com/images/transparent-house-icon/transparent-house-icon-13.jpg'></img></Link>
    <Link to='/log'><button id='con'>CONFIRM</button></Link>
    </nav>

    </div>
  )
}
