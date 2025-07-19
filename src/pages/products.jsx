import Nav from "../components/nav";
import Sidebar from "../components/sidebar";


function Products() {
  
  return (
    <>
      <Nav/>
      
      <div className="row">
        <Sidebar Classname="col"/>

        <div className="col" style={{marginLeft:50}}>
          
        </div>
      </div>
    </>
  )
}

export default Products