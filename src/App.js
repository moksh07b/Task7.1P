import { Route, Routes } from 'react-router-dom'
import NavBar from './routes/NavBar'
import AllFile from './routes/MainFile'
import Login from './routes/Login'
import SignUp from './routes/Sign-up'

export default function App(){
    return(
        <Routes>
        <Route path='/' element= {<NavBar/>}>
        <Route index element={<AllFile/>}/>  
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<SignUp/>} />
        </Route>
        </Routes>
    )
}