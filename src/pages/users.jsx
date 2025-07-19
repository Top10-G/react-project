import Nav from "../components/nav";
import Sidebar from "../components/sidebar";


function Users() {
  
  return (
    <>
      <Nav/>

      <div className="row">
        <Sidebar className="col"/>
        
        <div className="col" style={{ marginLeft:50, marginTop:50}}>
        
          <div className="d-flex justify-content-between">
            <p className="fw-semibold" style={{fontSize:25, color:"#013c61"}}>Employees</p>

            <button className=" fw-semibold" style={{marginRight:60, backgroundColor:"#2bda53", border:"0", width:170, fontSize:18, color:"white", borderRadius:5}}>
              Add New
            </button>
          </div>

          <div className=" joshbanner d-flex justify-content-between  mt-4" style={{height:90, color:"#6A7E8A1A", marginRight:60}}>
            <p className=" fw-semibold" style={{fontSize:35, marginLeft:30, marginTop:25, color:"#013c61"}}> 
              Josh Bakery Ventures
            </p>

            <p  style={{fontSize:23, marginRight:60,marginTop:25, color:"#013c61"}}> 62, Bode Thomas, Surulere, Lagos</p>
          </div>

          <div className="d-flex justify-content-between" style={{marginTop:38}}>
            <div className="d-inline-flex  gap-4" style={{}}>

              <div className=" overflow-y-scroll border" style={{width:130, height:30}}>
                <p className="mt-1" style={{marginLeft:14, fontSize:13}}>Change role</p>
              </div>

              <button className=" fw-semibold" style={{backgroundColor:"#2bda53", border:"0", width:100, fontSize:13, color:"white", borderRadius:5, height:30}}>
                Change
              </button>
              
              <div class="input-group" style={{width:400, height:30}}>

                <input type="text" class="form-control" placeholder="Enter staff name here..." aria-label="Username" aria-describedby="visible-addon" style={{fontSize:13}}/>

                <input type="text" class="form-control d-none" placeholder="Hidden input" aria-label="Hidden input" aria-describedby="visible-addon"/>

                <span class="input-group-text" id="visible-addon">

                  <a class="icon-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{color:"#013c61"}} fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                  </a>
                </span>
              </div>
            </div>

            <div className=" " style={{marginRight:60}}>
              <nav aria-label="...">
                <ul class="pagination pagination-sm">
                  <li class="page-item inactive">
                    <a className="page-link"aria-current="page" style={{color:"black"}}>1</a>
                  </li>

                  <p className="mt-1" style={{marginLeft:8, marginRight:8}}>of</p>

                  <li class="page-item">
                    <a class="page-link" href="" style={{color:"black"}}>2</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="tablediv">
            <table class="table" style={{}}>
            <thead>
              <tr> 
                <th scope="col">
                  <div class="form-check">
                   <input class="form-check-input" type="checkbox" value="" id="checkDefault"/>
                  </div>
                </th>
                <th scope="col" >FIRST NAME</th>
                <th scope="col" >LAST NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">PHONE</th>
                <th scope="col">ROLE</th>
                <th scope="col"></th>
              </tr>
            </thead>
            
            <tbody>
              <tr className="">
                <th scope="col">
                  <div class="form-check">
                   <input class="form-check-input" type="checkbox" value="" id="checkDefault"/>
                  </div>
                </th>
                <td>Joshua</td>
                <td>Bakare</td>
                <td>josh.bakery@gmail.com</td>
                <td>2348102345678</td>
                <td>Admin</td>
                <td>
                  <div className="" style={{marginRight:0}}>
                    <a class="icon-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-grid" viewBox="0 0  16" style={{width:20, height:25, color:"#013c61"}}>
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                    </a>
                  </div>
                </td>
                
              </tr>

              <tr className="">
                <th scope="col">
                  <div class="form-check">
                   <input class="form-check-input" type="checkbox" value="" id="checkDefault"/>
                  </div>
                </th>
                <td>Jane</td>
                <td>Clement</td>
                <td>josh.bakery@gmail.com</td>
                <td>2348102345678</td>
                <td>Staff</td>
                <td>
                  <div className="" style={{marginRight:0}}>
                    <a class="icon-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-grid" viewBox="0 0  16" style={{width:20, height:25, color:"#013c61"}}>
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                    </a>
                  </div>
                </td>
                
              </tr>

              <tr className="">
                <th scope="col">
                  <div class="form-check">
                   <input class="form-check-input" type="checkbox" value="" id="checkDefault"/>
                  </div>
                </th>
                <td>Hannah</td>
                <td>Johnson</td>
                <td>josh.bakery@gmail.com</td>
                <td>2348102345678</td>
                <td>Staff</td>
                <td>
                  <div className="" style={{marginRight:0}}>
                    <a class="icon-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-grid" viewBox="0 0  16" style={{width:20, height:25, color:"#013c61"}}>
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                    </a>
                  </div>
                </td>
                
              </tr>

              <tr className="">
                <th scope="col">
                  <div class="form-check">
                   <input class="form-check-input" type="checkbox" value="" id="checkDefault"/>
                  </div>
                </th>
                <td>John</td>
                <td>Ngoka</td>
                <td>josh.bakery@gmail.com</td>
                <td>2348102345678</td>
                <td>Staff</td>
                <td>
                  <div className="" style={{marginRight:0}}>
                    <a class="icon-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-grid" viewBox="0 0  16" style={{width:20, height:25, color:"#013c61"}}>
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                    </a>
                  </div>
                </td>
                
              </tr>

              <tr className="">
                <th scope="col">
                  <div class="form-check">
                   <input class="form-check-input" type="checkbox" value="" id="checkDefault"/>
                  </div>
                </th>
                <td>Omotayo</td>
                <td>Adeleke</td>
                <td>josh.bakery@gmail.com</td>
                <td>2348102345678</td>
                <td>Staff</td>
                <td>
                  <div className="" style={{marginRight:0}}>
                    <a class="icon-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-grid" viewBox="0 0  16" style={{width:20, height:25, color:"#013c61"}}>
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                    </a>
                  </div>
                </td>
                
              </tr>

              <tr className="">
                <th scope="col">
                  <div class="form-check">
                   <input class="form-check-input" type="checkbox" value="" id="checkDefault"/>
                  </div>
                </th>
                <td>Gloria</td>
                <td>Amadi</td>
                <td>josh.bakery@gmail.com</td>
                <td>2348102345678</td>
                <td>Staff</td>
                <td>
                  <div className="" style={{marginRight:0}}>
                    <a class="icon-link" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-grid" viewBox="0 0  16" style={{width:20, height:25, color:"#013c61"}}>
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                    </a>
                  </div>
                </td>
                
              </tr>
            </tbody>
          </table>
          </div>



          


        </div>

        
      </div>

      
      
      
      
    </>
  )
}

export default Users;