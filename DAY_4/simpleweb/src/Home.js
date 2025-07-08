import React from "react";
import "./Home.css";
import Explore  from "./Explore";
import Exco from "./Exco";
import img1 from "./home1.webp"
import img2 from "./home2.avif"
import img3 from "./home3.webp"
function Home(){
    return(
        <div className="home">
           <div className="navbar">
            <h1 className="logo">HowIsiT</h1>
            <ul id="nav" >
                <li>Home</li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li>Explore</li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li>Create</li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li>Share</li>
            </ul>
           </div>
        
          <div className="maincnt">
              <div className="incnt">
              
                      <div className="top"> <h1> Build Solid Profils and Gain </h1>
                                            <h1 > More Profit </h1> 
                      </div>

                     <div class="low">
    <pre>
     A paragraph is a distinct unit of writing, <br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that focuses on a single idea or topic. <br></br>  <br></br>
     A paragraph is a distinct unit of writing,<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that focuses on a single idea or topic.<br></br> <br></br>
     A paragraph is a distinct unit of writing,<br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that focuses on a single idea or topic.<br></br> <br></br>
    </pre>
  </div>

                    
              </div>
              <div className="form">
                  <h2 id="h2">Sign Up Today</h2>
                  <h4 id="h4">Please Fill Out The form to Register</h4>
                  <input type="text" id="in" placeholder="User Name"></input>
                  <input type="text"  id="in" placeholder="Email"></input> 
                  <input type="text" id="in" placeholder="Password"></input> 
                  <input type="text" id="in" placeholder="password"></input>
                  <button id="in">Submit</button>
              </div>
          </div>
           <Explore 
                title="Explore"
                description="A paragraph is a distinct unit of writing, typically composed of multiple sentences, that focuses on a single idea or topic.."
                buttonText="Findout"
            />
<Exco
  img={img1}
  title="Explore and Connect"
 paragraphs={[
    "Paragraphs break down larger texts into manageable chunks",
    "A typical paragraph includes a topic sentence that introduces the main idea",
    "While there's no strict rule for paragraph length, a good paragraph usually has between three and ten sentences"
  ]}
  reverse={false}
/>
 <Explore 
                title="Create"
                description="A paragraph is a distinct unit of writing, typically composed of multiple sentences, that focuses on a single idea or topic."
                buttonText="Findout"            />



<Exco
  img={img2}
  title="create your passion"
 paragraphs={[
    "Paragraphs break down larger texts into manageable chunks",
    "A typical paragraph includes a topic sentence that introduces the main idea",
    "While there's no strict rule for paragraph length, a good paragraph usually has between three and ten sentences"
  ]}
  reverse={true}
/>

    <Explore 
                title="Share"
                description="A paragraph is a distinct unit of writing, typically composed of multiple sentences, that focuses on a single idea or topic."
                buttonText="findout"
            />

<Exco
  img={img3}
  title="Share what you know"
  paragraphs={[
    "Paragraphs break down larger texts into manageable chunks",
    "A typical paragraph includes a topic sentence that introduces the main idea",
    "While there's no strict rule for paragraph length, a good paragraph usually has between three and ten sentences"
  ]}
/>

 <Explore 
                title="By Jeevanantham_S"
                description="Copy Rights Reserved"
                buttonText="Findout"
            />

        </div>
    );
}
export default Home;