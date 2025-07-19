import { NavLink } from 'react-router';
import modelImage from '../assets/model.png'


function Signup() {
  
  return (
    <>
      <div className=" signuppage d-flex">
        <div className="">
          <img src={modelImage} className="img-fluid rounded-start model" alt="model" style={{}}/>
        </div>

        <div className=' container'>
          <div style={{marginLeft:150, marginTop:90}}>
            <h1 className='mb-4 mt-4' style={{color:"#013C61"}}>Create your free account</h1>

            <div className=' fw-semibold mb-4' style={{fontSize:14, color:"#013C61"}}>
              Already registered? <NavLink to={'/'} style={{color:"#2bda53"}}>Sign In</NavLink>
            </div>
          </div>

          <form className=" supform bg-white" style={{width:600, paddingTop:5, marginLeft:150, borderRadius:10, paddingBottom:20}}>
            <div className=' d-inline-flex gap-5 mb-5 mt-4 bg-w'>
              <div className="">
                <label htmlFor="name" className=' form-label' style={{color:"#6A7E8A", fontSize:14, marginLeft:40}}>First Name</label>

                <div className="input-group">
                  
                  <input id='inputfield' type="text" className="form-control" aria-describedby="basic-addon3 basic-addon4" style={{width:195, marginLeft:40}}/>

                  <span className="input-group-text" id="basic-addon3">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16" style={{color:"#013C61"}}>
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                  </span>
                </div>
                
              </div>

              <div>
                <label htmlFor="name" className=' form-label' style={{color:"#6A7E8A", fontSize:14}}>Last Name</label>
                
                <div className="input-group">
                  
                  <input id='inputfield' type="text" className="form-control" aria-describedby="basic-addon3 basic-addon4" style={{width:215}}/>

                  <span className="input-group-text" id="basic-addon3">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16" style={{color:"#013C61"}}>
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                  </span>
                </div>
                
              </div>
            </div>

            <div className=" mb-5">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label" style={{color:"#6A7E8A", fontSize:14, marginLeft:40}}>Email address</label>

                <div className="input-group">
                  
                  <input id='inputfield' type="text" className="form-control" aria-describedby="basic-addon3 basic-addon4" style={{marginLeft:40}}/>

                  <span className="input-group-text" id="basic-addon3" style={{marginRight:40}}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16" style={{color:"#013C61"}}>
                      <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="">
              <label for="inputPassword5" className="form-label" style={{color:"#6A7E8A", fontSize:14, marginLeft:40}}>Password</label>

              <div className="input-group" style={{}}>
                  
                <input id='inputfield' type="password"  className="form-control border-2" style={{marginLeft:40}} aria-describedby="passwordHelpBlock"/>

                <span className="input-group-text" id="basic-addon3" style={{marginRight:40}}>
                    
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16" style={{color:"#013C61"}}>
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                  </svg>
                </span>
              </div>
              
            </div>

            <div className=" signupbtn" style={{marginRight:40}}>
              <NavLink className="btn btn-primary border-0 nav-link active p-1" to={'/users'} type="submit" style={{backgroundColor:"#2bda53", width:190,height:35 , fontSize:17, marginTop:50}}>Continue</NavLink>
            </div>
            
          </form>

          <footer className=' d-flex justify-content-between' style={{marginTop:80, marginLeft:20}}>
            <div style={{color:"#6A7E8A"}}> 
              By signing up, you agree to our <NavLink style={{color:"#2bda53"}}> Terms</NavLink> and <NavLink style={{color:"#2bda53"}}>Privacy Policy</NavLink>
            </div>

            <div style={{ marginRight:30, color:"#6A7E8A"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-c-circle" viewBox="0 0 16 16">
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
              </svg> 2019 Tinylabs. All rights reserved
            </div>
          </footer>
              
        </div>

      </div>

      
    </>
  )
}

export default Signup;