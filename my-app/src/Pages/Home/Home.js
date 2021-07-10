import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="landing-page">

           <div className="container">
              
              <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="content">
                            <h1 className="name">tanvir</h1>
                            <h1 className="name">ahmed</h1>
                            <h3 className="text-muted">WEB DEVELOPER</h3>
                            <p className="intro text-white">
                                A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. 
                            </p> 

                            <button className="btn btn-outline-secondary hire">Hire Me</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <img className="image rounded-circle" src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/139870705_1788207774686485_7733929510608480251_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=fHM1cxNJeXAAX9TTCg2&_nc_ht=scontent.fdac5-1.fna&oh=36f4aa411f445613cedad81e7c0c9e3f&oe=60D15AA4" alt="Tanvir" />
                    </div>
                  </div>
              </div>


              {/* know */}



              <div className="know">
               
               <div className="container">
                   <h1 className="text-center text-white">What I Know</h1>
                   <div className="row">
                       <div className="col-lg-4 col-md-4 p-5">
                           <h4>Item-1</h4>
                           <p className="know-para"> A paragraph consists of one or more sentences. A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.  </p>


                       </div>

                       <div className="col-lg-4 col-md-4 p-5">
                           <h4>Item-1</h4>
                           <p className="know-para"> A paragraph consists of one or more sentences. A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. </p>


                       </div>

                       <div className="col-lg-4 col-md-4 p-5">
                           <h4>Item-1</h4>
                           <p className="know-para"> A paragraph consists of one or more sentences. A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. </p>


                       </div>

                       
                   </div>
               </div>
            
            </div>


            {/* about */}

            <div className="about">
                <div className="container">
                    <h1 className="text-center text-white">About ME</h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            
                            <img className="about-image rounded-circle" src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/139870705_1788207774686485_7733929510608480251_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=fHM1cxNJeXAAX9TTCg2&_nc_ht=scontent.fdac5-1.fna&oh=36f4aa411f445613cedad81e7c0c9e3f&oe=60D15AA4" alt="About Me" />


                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="content2">
                            <h1 className="about-intro">Let me</h1>
                            <h1 className="about-intro">Introduce</h1>
                            <h1 className="about-intro">Myself</h1>

                            <p className="about-para">
                            A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.
                            </p>

                            <button className="download-cv btn btn-outline-secondary">Download my cv</button>
                            <button className="download-cv btn btn-outline-secondary d-block" href="#demo" data-toggle="collapse">Know More</button>
                            {/* <a class="d-block mb-3" href="#demo" data-toggle="collapse">Read More..</a> */}
                            </div>
                            
                        </div>
                    </div>
                    

                            <div className="read-more">
                                <div className="row">
                                    <div className="col-lg-12">
                                    <div id="demo" class="collapse">
                                <p className="read-more-para text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi debitis aut ipsam sint voluptatum officiis asperiores molestiae aspernatur aperiam cum, doloremque qui dolore nemo ab, eos autem odit! Quibusdam, architecto.</p>

                            </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>

            


        <br />
            
        </div>

        

        
    );
}

export default Home;
