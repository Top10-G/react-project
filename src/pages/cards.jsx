import Nav from "../components/nav";
import Sidebar from "../components/sidebar";


function Cards() {
  
  return (
    <>
      <Nav/>
      
      <div className="row">
        <Sidebar Classname="col"/>

        <div className="col" style={{marginLeft:50}}>
          <h1>hello</h1>
        </div>
      </div>
    </>
  )
}

export default Cards;