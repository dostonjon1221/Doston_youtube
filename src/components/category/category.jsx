import {Stack} from "@mui/material"
import {category} from '../../constants/index'
import {colors} from '../../constants/colors'
const Category = ({selectedCategoryHandler,selectedCotegory}) => {
  return (
    <Stack direction={'row'}
    sx={{overflowX:"scroll"}}
    >
        {category.map(item =>(
        <button key= {item.name} 
        className="category-btn" 
        style={{borderRadius:'0',
        background : item.name === selectedCotegory && colors.secondary,
        color:item.name === selectedCotegory && "white"
    }} 
        onClick={()=> selectedCategoryHandler(item.name)}>
            <span style={{color:item.name === selectedCotegory ? "white" : colors.secondary , marginRight:"15px", }}>{item.icon}</span>
            <span style = {{opacity:"1"}}>{item.name}</span>
        </button>
        ))}
    </Stack>
  )
}

export default Category
