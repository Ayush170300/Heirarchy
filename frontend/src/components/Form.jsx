import {React,useState} from 'react'
import {InputGroup,FormControl,Button,Alert} from "react-bootstrap"
import axios from "axios"
const Form = () => {
  let name,URL,from,to,mname
  const [show,setshow]=useState(false)
  const [show1,setshow1]=useState(false)
  const [show2,setshow2]=useState(false)
    const Add=async()=>{
        try{
         if(URL){   
        let arr=URL.split("/")
        name=arr[(arr.length)-1]
        console.log(URL,name)
        
        await axios.post("/api/write",{URL:URL,name:name,level:arr.length})
          setshow(true)
         }
       }
        catch(e){
            console.log(e.message)
            
        }

    }
    const Delete=async()=>{
      try{
        if(URL){   
       let arr=URL.split("/")
       name=arr[(arr.length)-1]
       console.log(URL,name)
       
       await axios.post("/api/delete",{URL:URL,name:name,level:arr.length})
         setshow1(true)
        }
      }
       catch(e){
           console.log(e.message)
           
       }
    }
    const Move=async()=>{
      console.log(from,to,mname)
      await axios.post("/api/move",{from:from,to:to,name:mname})
      setshow2(true)
    }

    
        
    
    return (
        <div>
        <InputGroup className="mb-3 mt-5 mb-5 mx-auto"  onChange={(e)=>{URL=e.target.value}}>
    <InputGroup.Prepend>
      <Button className='btn ' variant="outline-secondary" onClick={Add}>Add File/Folder</Button>
      <Button  className='btn' variant="outline-secondary" onClick={Delete}>Delete File/Folder</Button>
    </InputGroup.Prepend>
    <FormControl aria-describedby="basic-addon1"  />
    </InputGroup>

    <InputGroup className="mb-3 mt-5"  onChange={(e)=>{from=e.target.value}}>
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">From</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  
  <InputGroup className="mb-3" onChange={(e)=>{to=e.target.value}}>
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">To</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>

  <InputGroup className="mb-3" onChange={(e)=>{mname=e.target.value}}>
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">File/Folder to move</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <Button  className='btn' variant="outline-secondary" onClick={Move}>Move File/Folder</Button>
  <Alert show={show} className="my-5" variant="success">
        <p>
          File/Folder Added Successfully!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setshow(false)} variant="outline-success">
            Close me 
          </Button>
        </div>
      </Alert>

      <Alert show={show1} className="my-5" variant="success">
        <p>
          File/Folder Deleted Successfully if Present!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setshow1(false)} variant="outline-success">
            Close me 
          </Button>
        </div>
      </Alert>

      <Alert show={show2} className="my-5" variant="success">
        <p>
          File/Folder Moved Successfully if Present!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setshow2(false)} variant="outline-success">
            Close me 
          </Button>
        </div>
      </Alert>
            
        </div>
    )
}

export default Form
