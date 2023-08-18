import React from "react";
import { Link } from "react-router-dom";
import "./work.css";
function WorkCard(props) {
  return (
    <div className="work-child-container">
      <div className="img-container">
        <img className="image" alt="project1" src={props.src} />
      </div>
      <div className="work-detail-container">
        <p className="detail">{props.detail}</p>
        <div className="buttons">
          <div>
            <a href={props.viewLink} target="blank" className="button">
              View
            </a>
          </div>
          <div>
            <a href={props.sourceLink} target="blank" className="button">
              source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  // <div className="col card-Container">
  //   <div className="card shadow-sm h-100 ">
  //     <img className="img-fluid" alt="project1" src={props.src} />
  //     <div className="card-body">
  //       <p className="card-text">{props.detail}</p>
  //       {/* <h1 className="fs-3">Technology Used</h1>
  //       <ul class=" fs-3 list-group work-list list-group-horizontal">
  //         <li class="list-group-item">Node.js</li>
  //         <li class="list-group-item">Express.js</li>
  //         <li class="list-group-item">MySQL</li>
  //       </ul>
  //       <ul class=" fs-3 list-group  work-list list-group-horizontal-sm">
  //         <li class="list-group-item">JavaScript</li>
  //         <li class="list-group-item">Bootstrap</li>
  //         <li class="list-group-item">HTML CSS</li>
  //       </ul> */}
  //       <div className="d-flex justify-content-between align-items-center">
  //         <div className=" d-flex g-2">
  //           <Link
  //             to={props.viewLink}
  //             target="blank"
  //             className={
  //               " px-2  card-button btn btn-sm btn-outline-secondary"
  //             }
  //           >
  //             View
  //           </Link>

  //           <Link
  //             to={props.sourceLink}
  //             target="blank"
  //             className={
  //               " px- 2  card-button btn btn-sm btn-outline-secondary"
  //             }
  //           >
  //             Source
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
}

export default WorkCard;
