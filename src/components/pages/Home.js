import React, { useState, useEffect } from "react";
import "./Home.css";
import Cloud from './cloud.jpg';
import project from './project.jpg';
import Big from './big.jpg';
import tech from "./tech.jpeg";
import tech2 from "./tech2.jpeg";
import tech3 from "./tech3.jpeg";
import ds from './ds.jpeg'
import wd from './wd.jpeg'
// import sales from './sales.jpeg';
const Home = () => {
  return (
    <div className="box">
    <React.Fragment>
      <h1 className="text-center  text-capitalize my-4 head">Carrier in Tech Campanies</h1>
      <h2 className="text-center text-capitalize my-4 top" >Top 8 IT courses</h2>
    <div className="container ">
    <div className="row my-1">
  <div className="col-sm">
    <div className="card" >
  <img src={Cloud} alt="..." height="250px" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Cloud Computing</h5>
    <p className="card-text">Simply put, cloud computing is computing based on the Internet. Previously, companies had to use software downloaded into a physical computer or server. </p>
    <a href="implilearn.com/tutorials/cloud-computing-tutorial/what-is-cloud-computing" target="blank" className="btn btn-success">Open</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
      <img src={project} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Project Management</h5>
    <p className="card-text">Project management is critical because it ensures that the right kind of projects are taken up and that they are delivered on  set budget.  </p>
    <a href="https://www.simplilearn.com/project-management/prince2-foundation-and-practitioner-certification-training" target="blank" className="btn btn-success">Open</a>
  </div>
</div></div>
<div className="col-sm"><div className="card">
      <img src={tech2} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Artificial Intelligence</h5>
    <p className="card-text">Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals and humans.</p>
    <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="blank" className="btn btn-success">Open</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
  <img src={tech3} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Machine Learning</h5>
    <p className="card-text">Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms.</p>
    <a href="https://en.wikipedia.org/wiki/Machine_learning" target="blank" className="btn btn-success">Open</a>
  </div>
</div></div>
</div><br/>
<div className="row">
<div className="col-sm"><div className="card">
  <img src={ds} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Data Science</h5>
    <p className="card-text">Data science is an interdisciplinary field uses scientific methods,processes,algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data</p>
    <a href="https://en.wikipedia.org/wiki/Data_science" target="blank" className="btn btn-success">Open</a>
  </div>
</div></div>
{/* </div> */}
{/* <div className="row"> */}
<div className="col-sm"><div className="card">
  <img src={wd} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Full Stack Developement</h5>
    <p className="card-text">Full Stack Development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[</p>
    <a href="https://en.wikipedia.org/wiki/Web_development" target="blank" className="btn btn-success">Open</a>
  </div>
</div></div>
<div className="col-sm"><div className="card">
  <img src={tech} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Cyber Security</h5>
    <p className="card-text">With the ever-increasing number of cyber-attacks, cyber security is needed for every organization, because every company information shouldn't compromised. 
</p>
    <a href="https://en.wikipedia.org/wiki/Sales" target="blank" className="btn btn-success">Open</a>
  </div>
</div></div>
<br></br>
<div className="col-sm"><div className="card">
  <img src={Big} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Big Data</h5>
    <p className="card-text">Big Data is not a technology, but a practice that helps in analyzing massive amounts of data to gain insights and improve decision making. lorum ipsum etc etc bla  </p>
    <a href="https://www.simplilearn.com/tutorials/big-data-tutorial/what-is-big-data" target="blank" className="btn btn-success">Open</a>
  </div>
  </div></div>
  
</div>
</div>
</React.Fragment>
</div>
  );
};

export default Home;
