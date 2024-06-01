import React from 'react'
import ManageEvents from './ManageEvents';
import { useState, useEffect} from 'react';
import Card from './Card';
// import "../css Files/form.css"

// Importing Firebase

import {db} from "../Firebase/FirebaseConfig";
import {collection, addDoc, getFirestore, getDocs, onSnapshot, doc, deleteDoc, getDoc, updateDoc} from "firebase/firestore";


export default function Form() {


 // We are creating a Firebase collection Ref
const collectionRef = collection(db, "rijin");

// UseStates
    const[name, setName]= useState();//Name
    const[price, setPrice] = useState();//Price
    const[eventDay, setEventDay] = useState(); //EventDay
    const[eventVenue, setEventVenue]= useState(); //EventVenue
    const[directionLink, setDirectionLink]= useState(); //Direction Link
    const[startDate, setStartDate]= useState();//Start Date
    const[endDate, setEndDate]= useState(); //End Date
    const[youtubeLink, setYoutubeLink]= useState(); //Youtube Link
    const[category, setCategory]= useState();//Category
    const[eventVenue2, setEventVenue2]= useState();//EventVenue2

    const[data, setData]= useState([]);
    const[updatedData, setUpdatedData]= useState({}) 
    const[id, setId]= useState('');
 


    // ------------------Fetching the data from firebase using snapshot method(Read)---------------------
useEffect(()=>{
    const fetchData= async()=>{
    onSnapshot(collectionRef, (snapshot)=>{
      setData(snapshot.docs.map((d)=>({
        ...d.data(), id:d.id
      })))
    })
}
    fetchData();
    // console.log(data);

    setName(updatedData.name);
    setPrice(updatedData.price);
    setEventDay(updatedData.eventDay);
    setEventVenue(updatedData.eventVenue);
    setDirectionLink(updatedData.directionLink);
    setStartDate(updatedData.startDate);
    setEndDate(updatedData.endDate);
    setYoutubeLink(updatedData.youtubeLink);
    setCategory(updatedData.category);
    setEventVenue2(updatedData.eventVenue2);
console.log("useEffect is running");
    },[updatedData])
    // ---------------------------------------------------------------------------------------------
       //Adding a data into firebase (Create)-----------------------
const formSubmit = async (e)=>{
    e.preventDefault();
    if(id===''){  //If Id is empty
        await addDoc(collectionRef, {name, price,eventDay,eventVenue,directionLink, startDate, endDate, youtubeLink, category, eventVenue2 });
        console.log("Form Submitted");
         setName('');
    setPrice('');
    setEventDay('');
    setEventVenue('');
    setDirectionLink('');
    setStartDate('');
    setEndDate('');
    setYoutubeLink('');
    setCategory('');
    setEventVenue2('');
    }else{
        const updateData = doc(db,'rijin',id);
        updateDoc(updateData,{name, price, eventDay,eventVenue,directionLink, startDate, endDate, youtubeLink, category, eventVenue2 })
  setName('');
    setPrice('');
    setEventDay('');
    setEventVenue('');
    setDirectionLink('');
    setStartDate('');
    setEndDate('');
    setYoutubeLink('');
    setCategory('');
    setEventVenue2('');

    }

   
    }



    const formSubmitHandler = async (e)=>{
        e.preventDefault();
            await addDoc(collectionRef, {name, price, eventDay, eventVenue, directionLink, startDate, endDate, youtubeLink, category, eventVenue2 });
            console.log("Form Submitted");
        
      
    }

    //------------------------------------------------------------


    // ----------------------------Delete a data in the firebase (Delete)-----------------------------------------------------------------

const deleteHandler =(id)=>{
   
    const deleteData = doc(db,'rijin',id);
    deleteDoc(deleteData)
    console.log("Deleted id");
  }
//   ------------------------------------------------------------------------------------------------   

    // ----------------------------Update a data in the firebase (Update)-----------------------------------------------------------------

    const updateHandler =(id)=>{
        setId(id)
        const updateData = doc(db,'rijin',id);
        getDoc(updateData)
        .then((d)=> {
            setUpdatedData(d.data());
        })
        console.log("Updated the values");
      }

//--------------------------------------------------------------------
  return (
    <div>

<form onSubmit={formSubmitHandler}>
  <div className='conatiner'>
    <div className='row'>
      <div className='col-12'>
        
      <div class="card my-3">
    <div class="row">
	
	
      <div class="col-md-6 form-group mb-2">
        <label>Name</label>
        <input type="text" class="form-control" onChange={(e)=>{setName(e.target.value)}}/> 
      </div>
	    <div class="col-md-6 form-group mb-2">
        <label> Starting Price</label>
        <input type="number" class="form-control" onChange={(e)=>{setPrice(e.target.value)}}/>
      </div>
	  
	  <div class="col-md-4 form-group mb-2">
        <label>Event Day Type</label><br></br>
        <select id="event-day-type" name="event-day-type" class="form-control" onChange={(e)=>{setEventDay(e.target.value)}}>
                <option value="">Select Event Day Type</option>
                <option value="day1">Day 1</option>
                <option value="day2">Day 2</option>
                <option value="day3">Day 3</option>
            </select>
      </div>
	    <div class="col-md-4 form-group mb-2">
        <label>Event Venue</label>
        <input type="text" class="form-control" onChange={(e)=>{setEventVenue(e.target.value)}}/>
      </div>
	   <div class="col-md-4 form-group mb-2">
        <label>Direction Link</label>
        <input type="text" class="form-control" onChange={(e)=>{setDirectionLink(e.target.value)}}/>
      </div>

      <div class="col-md-6 form-group mb-2">
        <label>Start Date</label><br></br>
        <input type="date" class="form-control" placeholder='Start Date and Time' onChange={(e)=>{setStartDate(e.target.value)}}/>
      </div>
	    <div class="col-md-6 form-group mb-2">
        <label>End date</label>
        <input type="date" class="form-control" placeholder='End Date and Time' onChange={(e)=>{setEndDate(e.target.value)}} />
      </div>

      <div class="col-md-6 form-group mb-2">
        <label>Banner Image</label>
        <input type="file" id="banner-image" name="banner-image" class="form-control" disabled/>
      </div>
	    <div class="col-md-6 form-group mb-2" >
        <label>Youtube Link</label><br></br>
        <input type="url" id="youtube-link" name="youtube-link" class="form-control" onChange={(e)=>{setYoutubeLink(e.target.value)}}/>
      </div>
      <div class="col-md-6 form-group mb-2">
        <label>Category</label><br></br>
        <select id="event-day-type" name="event-day-type" class="form-control" onChange={(e)=>{setCategory(e.target.value)}}>
                <option value="">Select Category</option>
                <option value="day1">1</option>
                <option value="day2">2</option>
                <option value="day3">3</option>
            </select>
      </div>
	    <div class="col-md-6 form-group mb-2">
        <label>Event Venue</label>
        <input type="text" class="form-control" onChange={(e)=>{setEventVenue2(e.target.value)}}/>
      </div>
      <div class="col-md-12 form-group mb-2">
        <label>Gallery</label>
        <input type="file" id="banner-image" name="banner-image" class="form-control" disabled/>
      </div>
      <div class="col-md-2 form-group mb-2">
      <button type="submit" class="btn btn-primary ms-2">Submit</button>
    
      </div>
	  
	  </div>
	  </div>

    
      </div>
  
    </div>
  </div>
</form>
<Card name={name} price={price} eventDay={eventDay} eventVenue={eventVenue} directionLink={directionLink} startDate={startDate} endDate={endDate} youtubeLink={youtubeLink} category={category} eventVenue2={eventVenue2}/>
    </div>
  )
}
