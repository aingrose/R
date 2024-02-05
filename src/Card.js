
import React, { useState } from 'react';

function Card({ card, RemoveCard, EditCard, cards,state ,cardStatus }) {
  const [status, setStatus] = useState(cardStatus.status);

  
  console.log(cardStatus,"cardobj")

  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState(card.name);
  const [editDesc, setEditDesc] = useState(card.desc);

  const setsts = () => {
    const updatedStatus = status === "Not Completed" ? "Completed" : "Not Completed";
    setStatus(updatedStatus)
    state(updatedStatus)
    cardStatus.status = updatedStatus;
    console.log(cardStatus.status +"cardobj sts" )
    console.log(state+ "is ok ")
    console.log(status+"is ok")
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    EditCard({ ...card, name: editName, desc: editDesc }, cards.indexOf(card));
    setEditMode(false);
  };

  return (
    <div className='col-lg-4 col-md-6 col-sm-12 mt-2 mb-3'>
      <div className="card" style={{ width: "23rem", backgroundColor: "#B7E5B4",paddingLeft: "10px",height:"13rem",paddingTop:"10px" }}>
        <div className="card-body">
          {editMode ? (
            <>
              
              <input
                type="text" 
                style={{ backgroundColor: "#B7E5B4",marginRight:"80px",borderRadius: "5px", }}
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Enter new name"
              />
              <input
                type="text"
                value={editDesc}
                 style={{ backgroundColor: "#B7E5B4",borderRadius: "5px"}}
                onChange={(e) => setEditDesc(e.target.value)}
                placeholder="Enter new description"
              />
              <button className='btn btn-success me-1' onClick={handleSave} style={{marginLeft:"15px",marginBottom:"10px", }}>
                Save
              </button>
            </>
          ) : (
            <>
              <h6 className="card-title me-5 text-start " style={{ marginRight: "200px" }}>Name : {card.name}</h6>
              <h6 className="card-subtitle mb-2 me-5 text-start">Description : {card.desc}</h6>
            </>
          )}

          <div className='d-flex'>
            <h6 className='mt-2'> Status</h6>
            <div className="dropdown-center">
              <button
                className="btn btn-danger dropdown-toggle"
                style={{ backgroundColor: status === "Completed" ? "green" : "red", marginLeft: "15px" }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {status}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={()=>setsts()}
                    style={{ backgroundColor: status === "Completed" ? "red" : "green" }}
                    href="#"
                  >
                    {status === "Completed" ? "Not Completed" : " Completed "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginLeft: "130px", marginTop: "30px" }}>
            {editMode ? null : (
              <button className='btn btn-success me-1' onClick={handleEdit}>
                Edit
              </button>
            )}
            <button onClick={() => RemoveCard(card)} className='btn btn-danger'>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;





