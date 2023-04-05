import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Base from './Components/Base';
import Log from './Components/Log';
import Regi from './Components/Regi';
import Home from './Components/Home';
import Social from './Components/Social';
import Dm from './Components/Dm';
import MC from './Components/MC';
import CS from './Components/CS';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Base/>}/>
    <Route path='/log' element={<Log/>}/>
    <Route path='/reg' element={<Regi/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/sc' element={<Social/>}/>
    <Route path='/dm' element={<Dm/>}/>
    <Route path='/money' element={<MC/>}/>
    <Route path='/service' element={<CS/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
