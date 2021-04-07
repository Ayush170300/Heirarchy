import {React,useEffect,useState} from 'react'
import axios from "axios"
import {InputGroup,FormControl,Button} from "react-bootstrap"

const Tree = () => {
  
    const [rdata,setData]=useState([])
    const [sdata,setSdata]=useState([])
    var search;
    
    useEffect(() => {
      
        const getTree=async()=>{
        const {data}= await axios.get("/api/read")
          console.log(data)
          setData(data)
          
        
      }
       getTree()
  }, [])

  const Sbutton=()=>{
      const d=rdata.find((e)=>{return e.name===search})
      if(d){
      const data=d.URL.split('/')
      
      const sd=rdata.filter((e)=>{return data.includes(e.name)})
      setSdata(sd)
      
      }
      
      
  }

    return (
        <div>
            <h1>Hierarchy</h1>
            {rdata.map(ele=>(<h3 key={ele.name} style={(ele.name.startsWith('File')||ele.name.startsWith('file'))?{marginLeft:ele.level*40}:{marginLeft:ele.level*40,color:"white"}}>{'- '+ele.name}</h3>))}
            
            <InputGroup className="mb-3 mt-4"  onChange={(e)=>{search=e.target.value}}>
    <InputGroup.Prepend>
      <Button className='btn' variant="outline-secondary" onClick={Sbutton}>Search</Button>
      
    </InputGroup.Prepend>
    <FormControl aria-describedby="basic-addon1"  />
    </InputGroup>

    {sdata.map(ele=>(<h3 key={ele.name} style={(ele.name.startsWith('File')||ele.name.startsWith('file'))?{marginLeft:ele.level*40}:{marginLeft:ele.level*40,color:"white"}}>{'- '+ele.name}</h3>))}
        </div>
    )
}

export default Tree
