// // import React from "react";
// import { useSelector } from "react-redux";
// import Header from "../Header/Header";
// import Routers from "../../routers/Routers";
// import BackAnimated from "../BackAnimated/BackAnimated";
// // import Background from "../../components/Background/Background";
// import Container from "../Container/Container";
// import authSelector from "../../redux/auth/selectors";

// const Layout = () => {
//   const userIsLoggedIn = useSelector(authSelector.getIsLoggedIn);

//   return (
//     <>
//       <Header />
//       {userIsLoggedIn ? (
//         <div
//           className="Layout"
//           // style={{ display: "flex", alignItems: "center" }}
//         >
//           <Container>
//           <div className="bg_blur2"></div>

//             {userIsLoggedIn ? null : <BackAnimated />}
//             <div
//               style={{
//                 position: "relative",
//                 zIndex: "10",
//                 width: "auto",
//               }}
//             >
//               <Routers />
//             </div>
//           </Container>
//         </div>
//       ) : (
//         <div
//           className="Layout"
//           // style={{ display: "flex", alignItems: "center", margin: "0auto" }}
//         >
//           <div className="bg_blur"></div>
//           <Container>
//             {userIsLoggedIn ? null : <BackAnimated />}
//             <Routers />
//           </Container>
//         </div>
//       )}
//     </>
//   );
// };

// export default Layout;
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { useSelector } from "react-redux";
import authSelector from "../../redux/auth/selectors";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import BackAnimated from "../../components/BackAnimated/BackAnimated";
import Routers from "../../routers/Routers";

export default function Layout() {
  const userIsLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return (
    <>
      <Header />
      {userIsLoggedIn ? (
        <div className="Layout">
          <Container>
            <div className="bg_blur2"></div>
            {userIsLoggedIn ? null : <BackAnimated />}
            <div style={{ position: "relative", zIndex: "10", width: "auto" }}>
              <Suspense fallback={null}>
              <Routers />
              </Suspense>
            </div>
          </Container>
        </div>
      ) : (
        <div className="Layout">
          <div className="bg_blur"></div>
          <Container>
            {userIsLoggedIn ? null : <BackAnimated />}
            <Suspense fallback={null}>
              <Routers />
            </Suspense>
          </Container>
        </div>
       )}
    </>
  );
}
