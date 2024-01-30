
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
