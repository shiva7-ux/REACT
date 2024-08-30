import React from "react";
import ReactDOM from "react-dom/client";


//food delivery app 


//header code
const Header=()=>{
   return(
      <div className="header">
         <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s "></img>
         </div>
        <div className="Nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
      </div>
      </div>
   );
};
 // const styleCard={
   //   backgroundColor:"red"
  //};

 const RestaurantCard=(props) =>{
   const {resData} = props;

   const{
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
   } =resData?.data;





   return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
         <img  className="res-logo" res alt="res-logo" 
               src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e6ncbezcldzz6rnxedce" + cloudinaryImageId
 }
 />
           <h3>{name}</h3>
           <h4>{cuisines.join(",")}</h4>
           <h4>{avgRating} stars</h4>
           <h4>₹{costForTwo/100}FOR TWO</h4>
           <h4>{deliveryTime} minutes</h4>
      </div>
   );
 };
 const resList =[

 ];
//Body code
const Body = () => {
   return(
   <div className="body">
      <div className="search">Search</div>
        <div className="res-container">
           {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
           ))}
        </div>
    </div>
   );
};


const AppLayout=()=>{
   return(
    <div className="app">
     <Header/>
     <Body/>
     </div>
   );
};
 const parent=ReactDOM.createRoot(document.getElementById("parent"));
 parent.render(<AppLayout/>);




 