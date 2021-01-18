import React from "react";
import logo from "../images/logo.jpeg"


function About() {
  return (
   
    <div className="container mt-3">
    
    <div className="row">
      <div className="col-md-6 offset-md-3">
      <div className="card border-dark text-white bg-secondary shadow-lg" style={{width: "30rem"}}>
  <img src={logo} className="card-img-top shadow p-3" alt="..." style={{width:"150px"}}/>
  <div className="card-body">
    <h5 className="card-title">About Me</h5>
    <p className="card-text">I was born and raised in a small town in Oregon. After years of working the same job and 
                     being not happy with my work and life situation. I decided to sell my house, 
                     quit my job and move to Arizona. I needed a change in life.
                     I was looking for a do-over, so I took the necessary steps to better myself and 
                     improve my way of life. I enrolled in a coding bootcamp with zero experience
                     and in just a few short weeks was able to build this portfolio. I look forward 
                     to improving everyday and feel like the possiabilities are endless. </p>
    
  </div>
</div>
      </div>
    </div>
  </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
//    <div className="container custom"> 
//     <div className="col-md-8 test">
//         <div className="row">
//             <div className="col-md-6 mt-3 test">
//                 <h1>About Me</h1>
//                 <hr>
//                 </hr>
//             </div>
//         </div>
//         <div className="row">
//             <div className="col-md-3 test"> 
//                 <img src={logo}alt="kitten" className="img-thumbnail" />
//             </div>
//             <div className="col-md-5 test">
//                 <p>I was born and raised in a small town in Oregon. After years of working the same job and 
//                     being not happy with my work and life situation. I decided to sell my house, 
//                     quit my job and move to Arizona. I needed a change in life.
//                 </p>
//             </div>
//         </div>

//         <div className="row">
//             <div className="col-md-8 test">
//                 <p>I was looking for a do-over, so I took the necessary steps to better myself and 
//                     improve my way of life. I enrolled in a coding bootcamp with zero experience
//                     and in just a few short weeks was able to build this portfolio. I look forward 
//                     to improving everyday and feel like the possiabilities are endless. 
//                 </p>
//                 <p> Click the links in my profile for some examples of the work I have done so far.
                    
//                 </p>


//             </div>
//         </div>
//     </div>
// </div>
  );
}

export default About;
