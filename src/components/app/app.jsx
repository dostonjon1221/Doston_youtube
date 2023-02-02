import { Main,Channel,Video,Search ,Navbar} from "../"

import {Box} from "@mui/material"
import {Routes, Route} from "react-router-dom"
const App = () => {
  return (
   <Box>
   <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/channel/:id" element={<Channel></Channel>}></Route>
        <Route path="/video/:id" element={<Video></Video>}></Route>
        <Route path="/search/:id" element  ={< Search />}></Route>
  
    </Routes>
    </Box>
  )
}

export default App
