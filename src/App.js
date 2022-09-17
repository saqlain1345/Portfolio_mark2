import React, { useState, useEffect } from "react";
import "./App.css";
// import RingLoader from "react-spinners/RingLoader";
import CircleLoader from "react-spinners/CircleLoader";
import Home from "./components/Headers/Home";
import NavBar from "./components/NavBar";
// import About from "./components/About";

function App() {
  const [loading, setLoading] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);

  return (
    <>
      {!loading ? (
        <div className="loader">
          <CircleLoader loading={true} color={"#36d7b7"} size={100}/>
        </div>
      ) : (
        <>
          <Home />
          <NavBar />
          {/* <About /> */}
        </>
      )}
    </>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import "./App.css";
// import Home from "./components/Headers/Home";
// import NavBar from "./components/NavBar";
// import About from './components/About';
// import Lottie from "react-lottie";
// import * as location from "./utilities/preLoading/79794-world-locations.json";
// import * as success from "./utilities/preLoading/97987-success.json";
// const defaultOptions1 = {
//   loop: true,
//   autoplay: true,
//   animationData: location.default,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };
// const defaultOptions2 = {
//   loop: true,
//   autoplay: true,
//   animationData: success.default,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };
// function App() {
//   const [loading, setLoading] = useState();
//   const [success, setSuccess] = useState();

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(true);
//       setTimeout(() => {
//         setSuccess(true);
//       }, 4000);
//     }, 4000);
//   }, []);

//   return (
//     <>
//       {!success ? (
//         <>
//           {!loading ? (
//             <Lottie
//               options={defaultOptions1}
//               height={400}
//               width={400}
//               style={{
//                 top: "10%",
//                 // right: "5%",
//                 left: "30%",
//                 zIndex: -1,
//                 overflow: "hidden",
//                 // position: "fixed",
//               }}
//             />
//           ) : (
//             <Lottie
//               options={defaultOptions2}
//               height={400}
//               width={400}
//               style={{
//                 top: "10%",
//                 // right: "5%",
//                 left: "30%",
//                 zIndex: -1,
//                 overflow: "hidden",
//                 // position: "fixed",
//               }}
//             />
//           )}
//         </>
//       ) : (
//         <>
//           <Home />
//           <NavBar />
//           <About/>
//         </>
//       )}
//     </>
//   );
// }

// export default App;
