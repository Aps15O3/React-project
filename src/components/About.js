import React from "react";
import './carousel.css';
import Ansh from './Ansh.jpeg';
import Aniket from './Aniket.jpeg';
import Raghav from './Raghav.jpeg';
import Aksh from './Aksh.jpeg';
import Rs from './Rs.jpeg';

class About extends React.Component{
    render(){
        return(
            <div>
            <div className="row">
            <div className="col-12 mb-2 text-center">
              <h1 id="hcolor">OUR TEAM</h1>
            </div>
          </div>
          <section className="reviews" id="Reviews">
          <div className="container">
              
              <p className="text-center"></p>
              <div className="row">
                 <div className="col-md-4 text-center">
                   <div className="profile">
                   <img src={Ansh} className="user" />
                     <blockquote>
                         Team Lead <br></br>Worked on React.js
                      </blockquote>
                      <h3>{this.props.names.map(function names(value,j){
                        if (j == 0){
                            return value
                        }
                        else return ""
                    }
                      )} </h3>
                      <h3><span>{this.props.roll.map(function names(value,j){
                        if (j == 0){
                            return value
                        }
                        else return ""
                    }
                      )}</span></h3>
                    </div>
                 </div>
                    
                 <div className="col-md-4 text-center">
                  <div className="profile">
                  <img src={Aniket} className="user" />
                    <blockquote>
                     <br></br>Worked on React.js
                    </blockquote>
                    <h3>{this.props.names.map(function names(value,j){
                        if (j == 1){
                            return value
                        }
                        else return ""
                    }
                      )}</h3>
                    <h3><span>{this.props.roll.map(function names(value,j){
                        if (j == 1){
                            return value
                        }
                        else return ""
                    }
                      )}</span></h3>
                  </div>
               </div>
  
               <div className="col-md-4 text-center">
                  <div className="profile">
                  <img src={Raghav} className="user" />
                    <blockquote>
                     <br></br> Worked on Bootstrap
                
                    </blockquote>
                    <h3>{this.props.names.map(function names(value,j){
                        if (j == 2){
                            return value
                        }
                        else return ""
                    }
                      )}</h3>
                    <h3><span>{this.props.roll.map(function names(value,j){
                        if (j == 2){
                            return value
                        }
                        else return ""
                    }
                      )}</span></h3>
                  </div>
               </div>
               
               <div className="col-md-4 text-center">
                  <div className="profile">
                  <img src={Aksh} className="user" />
                    <blockquote>
                   <br></br> Worked on Bootstrap
                    </blockquote>
                    <h3>{this.props.names.map(function names(value,j){
                        if (j == 3){
                            return value
                        }
                        else return ""
                    }
                      )}</h3>
                    <h3><span>{this.props.roll.map(function names(value,j){
                        if (j == 3){
                            return value
                        }
                        else return ""
                    }
                      )}</span></h3>
                  </div>
               </div>
  
               <div className="col-md-4 text-center">
                  <div className="profile">
                  <img src={Rs} className="user" />
                    <blockquote>
                   <br></br> Worked on Bootstrap
                    </blockquote>
                    <h3>{this.props.names.map(function names(value,j){
                        if (j == 4){
                            return value
                        }
                        else return ""
                    }
                      )}</h3>
                    <h3><span>{this.props.roll.map(function names(value,j){
                        if (j == 4){
                            return value
                        }
                        else return ""
                    }
                      )}</span></h3>
                  </div>
               </div>
          </div>
          </div>
          </section>
          </div>
        )
    }
    
}
About.defaultProps = {
    names : ['Ansh Pratap Singh','Aniket Thakur','Raghav Arora','Akshjeet Singh','Raghav Sharma'],
    roll : ['1910990847','1910990836','1910990833','1910990838','1910990832']
}
export default About