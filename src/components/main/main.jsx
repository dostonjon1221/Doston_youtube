import {useState, useEffect} from 'react'
import {Stack,Box, Container, Typography} from "@mui/material"
import {colors} from '../../constants/colors'
import {Category} from "../"

import {Videos} from "../"
import {ApiService}  from "../service/api.service"

 const Main = () => {
  const [selectedCotegory ,setSelectedCotegory] = useState("New");
  const [videos,setVideos] = useState([])

  
  const selectedCategoryHandler = category =>setSelectedCotegory(category)

  useEffect(()=>{
    const getDate = async()=>{
      try{
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCotegory}`)
        setVideos(data.items)
      }
      catch (error){
        console.log(error)
      }
    }
    getDate()
  },[selectedCotegory])

  //     ApiService.fetching('search').then(data=>setVideos(data))
  // },[])
  return (

    <Stack>
    <Category selectedCategoryHandler = {selectedCategoryHandler}
    selectedCotegory={selectedCotegory} />
    
    <Box p={2} sx={{height:'90vh'}}>
      <Container maxWidth={"90%"}>
        
        <Typography variant={'h4'} fontWeight={"bold"} mb={2}>
          {selectedCotegory} <span style={{color:colors.secondary}}>videos</span>
        </Typography>
       <Videos videos = {videos} />
      
    
      </Container>
    </Box>
   </Stack>
     )
  
}

export default Main
