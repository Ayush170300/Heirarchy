import Tree from "./components/Tree"
import './App.css';
import {Row,Col} from "react-bootstrap"
import Form from "./components/Form"
function App() {
  return (
    <div className="App">
    <Row>
     <Col lg={3}>
     <Tree></Tree>
     
     </Col>
     <Col lg={6}>
       <Form></Form>
     </Col>
    </Row>
     
    
    </div>
  );
}

export default App;
