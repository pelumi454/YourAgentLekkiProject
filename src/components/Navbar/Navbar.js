import { Link } from "react-router-dom";
import { RouteLinks } from "../../routes/RouteLinks";

const Navbar = () =>{
    const NavData = [
        {
            title: "View Property",
            path: RouteLinks.home,
        },
        {
            title: "Add Property",
            path: RouteLinks.login,
        },
    ];


    return (
      <header className="default-layout">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="navbar-brand">YourAgent</div>
            <i
              className="navbar-toggler bi bi-list"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
                    ></i>
                     <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav d-flex justify-content-end mt-2 mb-lg-0">
                            {NavData.map( ( item, index ) =>
                            {
                                return (
                                    <li className="navigation__list-item m-2 " key={index}>
                                        <div className="navigation__link  m-2">
                                            {item.title}
                                        </div>
                                    </li>
                                );
                            } )}
                        </ul>
                    </div>
                </div>
        </nav>
      </header>
    );
};

export default Navbar;












// import React from 'react'

// const Navbar = () => {
//     return (
//         <div>
//       <div>Navbar</div>
//        <div>AddProperty</div>
//       <nav class="navbar navbar-expand-lg default-layout__inner">
//     <div class="container py-1" id="nav-container">
//       <a href="./index.html" to="{RouteLinks.home}" class="navbar-brand">YourAgent
//       </a>
//       <i class="navbar-toggler bi bi-list" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></i>
//       <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
//         <ul class="navbar-nav d-flex justify-content-end mt-2 mb-lg-0">
//           <li class="navigation__list-item py-1" key="{index}">
//             <a href="./viewproperty.html" class="navigation-link py-1">
//               View Property
//             </a>
//           </li>
//           <a href="./addproperty.html">
//             <button class="btn btn-primary">Add Property</button>
//           </a>
//         </ul>
//       </div>
//     </div>
//   </nav >
//       </div>

//   )
// }

// export default Navbar