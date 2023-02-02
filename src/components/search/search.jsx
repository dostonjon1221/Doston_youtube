import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import {ApiService} from "../service/api.service"
import {colors} from "../../constants/colors"
import { Container,Box ,Typography  } from "@mui/material"
import {Videos} from "../"

const Search = () => {
  const [videos,setVideos] = useState()
  const {id} = useParams()
  console.log(id)
  useEffect (()=>{
    const  getDate = async ()=>{
      try{
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        setVideos(data.items)
        console.log(data)
      }catch (error){
        console.log(error)
      }
    }
  },[id])
  console.log(videos)
  return (
    <div>
    <Box p={2} sx={{height:'90vh'}}>
      <Container maxWidth={'90%'} >
        <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
          Search result fro <span style={{color:colors.secondary}}>{id}</span> videos
        </Typography>
        <Videos video={videos}></Videos>
      </Container>

    </Box>
    </div>
  )
}

export default Search
