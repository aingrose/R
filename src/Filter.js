// import React, { useState } from 'react'

// function Filter({filter}) {

//    let [filterstate,setFilter] = useState("All");
   
//    let updatedStatus = (newStatus) => {
//     setFilter(newStatus);
//     filter(newStatus)
//    } 
//   // function changefilter(){
//   //   setFilter("Completed");
//   //   filteredCards("Completed")
    
//   // }
  
//   // function changefilter2(){
//   //   setFilter("Not Completed")
//   //   filteredCards("Not Completed")
   
//   // }

//   // function changefilterAll(){
//   //   setFilter("All");
//   //   filteredCards("Not Compelted")
   
//   // }

  
 

 
//   return (
//     <div className='col d-flex justify-content-evenly mt-4'>
//     <div>
//     <h2>MY TODOS</h2>
//     </div>
//     <div className='d-flex  '>
//     <h2 className='me-2'>STATUS FILTER : </h2>
     

//     <div class="dropdown ">
//   <button class="btn btn-danger dropdown-toggle m-1 me-1 mb-5" style={{backgroundColor: filter==="Completed"? "green" : "red"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
//     {filterstate}
//   </button>
//   {/* <ul class="dropdown-menu dropdown-menu-dark">
//     <li><a class="dropdown-item " onClick={() => changefilterAll("All")} href="#">All</a></li>
//     <li><a class="dropdown-item " onClick={() => changefilter(("Completed"))} href="#">Completed</a></li>
//     <li><a class="dropdown-item" onClick={() => changefilter2("Not Completed")} href="#">Not Completed</a></li>
//   </ul> */}
//   <ul class="dropdown-menu dropdown-menu-dark">
//       <li><a class="dropdown-item" onClick={() => updatedStatus("All")} href="#">All</a></li>
//       <li><a class="dropdown-item" onClick={() => updatedStatus("Completed")} href="#">Completed</a></li>
//       <li><a class="dropdown-item" onClick={() => updatedStatus("Not Completed")} href="#">Not Completed</a></li>
//     </ul>
// </div>
//       </div>
//     </div>
    
//   )
// }



// export default Filter


// // import React, { useState } from 'react';

// // function Filter({ filterStatus }) {
// //   const [filter, setFilter] = useState("All");

// //   const changeFilter = (selectedFilter) => {
// //     setFilter(selectedFilter);
// //     filterStatus(selectedFilter);
// //   };

// //   return (
// //     <div className='col d-flex justify-content-evenly mt-4'>
// //       <div>
// //         <h2>MY TODOS</h2>
// //       </div>
// //       <div className='d-flex '>
// //         <h2 className='me-2'>STATUS FILTER : </h2>

// //         <div class="dropdown ">
// //           <button
// //             class="btn btn-danger dropdown-toggle m-1 me-1 mb-5"
// //             style={{ backgroundColor: filter === "Completed" ? "green" : "red" }}
// //             type="button"
// //             data-bs-toggle="dropdown"
// //             aria-expanded="false"
// //           >
// //             {filter}
// //           </button>
// //           <ul class="dropdown-menu dropdown-menu-dark">
// //             <li>
// //               <a class="dropdown-item" onClick={() => changeFilter("All")} href="#">
// //                 All
// //               </a>
// //             </li>
// //             <li>
// //               <a class="dropdown-item" onClick={() => changeFilter("Completed")} href="#">
// //                 Completed
// //               </a>
// //             </li>
// //             <li>
// //               <a class="dropdown-item" onClick={() => changeFilter("Not Completed")} href="#">
// //                 Not Completed
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Filter;

import React, { useState } from 'react';

function Filter({ filter }) {
  const [filterstate, setFilter] = useState("All");

  const updatedStatus = (newStatus) => {
    setFilter(newStatus);
    filter(newStatus);
  };
 
  
  
  return (
    <div className='col d-flex justify-content-evenly mt-4'>
      <div>
        <h2>MY TODOS</h2>
      </div>
      <div className='d-flex '>
        <h2 className='me-2'>STATUS FILTER : </h2>

        <div class="dropdown ">
          <button
            class="btn btn-danger dropdown-toggle m-1 me-1 mb-5"
            style={{ backgroundColor: filterstate === "Completed" ? "green" : "red" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filterstate}
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li>
              <a class="dropdown-item" onClick={() => updatedStatus("All")} href="#">
                All
              </a>
            </li>
            <li>
              <a class="dropdown-item" onClick={() => updatedStatus("Completed")} href="#">
                Completed
              </a>
            </li>
            <li>
              <a class="dropdown-item" onClick={() => updatedStatus("Not Completed")} href="#">
                Not Completed
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;
