import { NavLink } from "react-router";
import myimage from './assets/getchange.png'



function App() {
  
  return (
    <>
      <nav class="navbar navbar-expand-lg" style={{height:70, color:""}}>
           <div class="container-fluid">
              <img src={myimage} className="" style={{height: 40}} />
            </div>
      </nav>


      <div className="container" style={{padding: 150, width:1000}}>
        <h1 className="mb-5" style={{color:"#013C61"}}>Sign In</h1>

        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label" style={{fontSize:19, color:"#6A7E8A"}}>Email address</label>
          <input id='inputfield' type="email" className="form-control border-2" style={{height:40, fontSize:14}} placeholder="name@example.com"/>
        </div>

        <div className="mb-5">
          <label for="inputPassword5" className="form-label" style={{fontSize:19, color:"#6A7E8A"}}>Password</label>
          <input id='inputfield' type="password"  className="form-control border-2" style={{height:40}} aria-describedby="passwordHelpBlock"/>
        </div>

        <div className="">
          <NavLink className="btn btn-primary border-0 nav-link active p-1" to={'/users'} type="submit" style={{backgroundColor:"#2bda53", width:130,height:35 , fontSize:17}}>Continue</NavLink>
        </div>

        <div className="mt-4 fw-semibold" style={{fontSize:13}}>
          Not yet registered? <NavLink to={'/signup'} style={{color:"#2bda53"}}>Sign up</NavLink>
        </div>
      </div>
    </>
  )
}

export default App;
