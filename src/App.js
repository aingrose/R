import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Filter from './Filter';
import { useState,useEffect } from 'react';



function App() {
  let [cards,settodo] =useState([]);
  let [filterby,setFilterBy] =useState("All")

   console.log(filterby); 
 
  let [state ,updatestate] =  useState("Not Completed")
  
  let addtocart = (newone) =>{
    newone.status = "Not Completed";
    settodo([...cards,newone])
  }

  function RemoveCard(remove){
    let updatedCard = cards.filter((card) => card.desc !== remove.desc)
    settodo(updatedCard)

   }


  function EditCard(edit,index){
   let updatedCard = [...cards];
   console.log(edit,"edit is working")
   updatedCard[index] = {...edit,status:" Not completed"};
   settodo(updatedCard)
    
  }
  return (
    <div className="App">
       <div className='container'>
        <div className='row'>
         <Input addtocart={addtocart}/>
        </div> 
        

    <div className='row '>
     <Filter filter={setFilterBy} />
    </div>
   

<div className='row'>

 

{cards.map((card) => {
  console.log(card)
  return  filterby === 'All' ? (
    <Card
      key={card.desc}
      card={card}
      RemoveCard={RemoveCard}
      EditCard={EditCard}
      cards={cards}
      state={updatestate}
      cardStatus = {card}
    />
    
  ) : filterby === card.status ? (
    
  
    <Card

      key={card.desc}
      card={card}
      RemoveCard={RemoveCard}
      EditCard={EditCard}
      cards={cards}
      state={updatestate}
      cardStatus = {card}
      
    />
  ) :""
  
})}

{/* {cards.map((card) => {
  console.log('Filter By:', filterby);
  console.log('Card Status:', card.status);
  
  return (filterby === 'All' || filterby === card.status) ? (
    <Card
      key={card.desc}
      status={filterby === 'All' ? 'Not Completed' : filterby}
      card={card}
      RemoveCard={RemoveCard}
      EditCard={EditCard}
      cards={cards}
    />
  ) : null;
})} */}
</div>


</div>

</div>
   


    





          
          
       
    
  );
}

export default App;
