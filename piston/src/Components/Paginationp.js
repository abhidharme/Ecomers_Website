import React , {useEffect , useState} from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../Redux/Products/action';
import { useDispatch } from 'react-redux';
import { Center , Button} from '@chakra-ui/react';
import { ArrowForwardIcon , ArrowBackIcon } from '@chakra-ui/icons';
export const Paginationp = () => {

    const [searchParams ,setsearchParams] = useSearchParams()
    const [page , setPage] = useState(1);
    
  const dispatch = useDispatch()
    useEffect(()=>{
        if(searchParams){
            setsearchParams( {_page:page} ,{replace: true})
           }
        let params ={
         _page: searchParams.get("_page"),
         _limit:9
        } 
        dispatch(fetchProducts(params))
       },[page,setsearchParams,searchParams])
       
       
       

  return (
    <div>

    <Center bg='tomato' h='100px' color='white'>
{page!=1 ?
    <Button leftIcon={<ArrowBackIcon />}  onClick={()=>setPage((page)=> page-1)} colorScheme='teal' variant='outline'>
    Prev
  </Button> :  <Button isDisabled leftIcon={<ArrowBackIcon />}  onClick={()=>setPage((page)=> page-1)} colorScheme='teal' variant='outline'>
  Prev
</Button>
}
{page<=102/9 ?  <Button rightIcon={<ArrowForwardIcon />} onClick={()=>setPage((page)=>page+1)} colorScheme='teal' variant='outline'>
Next
</Button> :  <Button isDisabled rightIcon={<ArrowForwardIcon />} onClick={()=>setPage((page)=>page+1)} colorScheme='teal' variant='outline'>
Next
</Button> }
   
</Center>
   
    </div>
  )
};
