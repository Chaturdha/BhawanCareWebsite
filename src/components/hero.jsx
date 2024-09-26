// import React from "react";
// import Plx from "react-plx";

// export const Hero = () => {
//   return (
//     <div className="main"> 
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 700,
//             easing: "ease-in",
//             properties: [
//               {
//                 startValue: 1,
//                 endValue: 1.6,
//                 property: "scale"
//               }
//             ]
//           }
//         ]}
//         style={{
//           position: "fixed",
//           left: 0,
//           top: 0,
//           width: "100%",
//           zIndex: 100
//         }}
//       >
//         <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
//       </Plx>
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 800,
//             properties: [
//               {
//                 startValue: 1,
//                 endValue: 1.18,
//                 property: "scale"
//               }
//             ]
//           }
//         ]}
//         style={{  
//           position: "fixed",
//           left: 0,
//           top: 0,
//           width: "100%"
//         }}
//       >
//         <img style={{ width: "100%" }} src="background.jpg" alt="background" />
//       </Plx>
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 400,
//             properties: [
//               {
//                 startValue: 1,
//                 endValue: 0,
//                 property: "opacity"
//               }
//             ]
//           }
//         ]}
//         style={{
//           position: "fixed",
//           left: 0,
//           top: "26vw",
//           width: "100%",
//           textAlign: "center"
//         }}
//       >
//         {/* <img
//           style={{
//             width: "30vw"
//           }}
//           src="/text-img.webp"
//           alt="Goonies"
//         /> */}
//          <h1
//         style={{
//           fontSize: "4vw",
//           color: "#000"
//         }}
//       >
//         Bhawan Care
//       </h1>
//       </Plx>
//       <div
//         style={{
//           position: "fixed",
//           lefft: 0,
//           top: 0,
//           zIndex: 200,
//           paddingTop: "56%",
//           height: "400vh",
//           width: "100%"
//         }}
//       >
//         <div
//           style={{
//             background: "#000",
//             height: "100%"
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Plx from "react-plx";

export const Hero = () => {
  return (
    <div
      className="hero-section"
      style={{
        overflow: "hidden",
        height: "100vh",
        position: "relative",
        width: "100%",   // Ensure the container takes the full width
      }}
    >
      {/* Background Image */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.3,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100vh",  // Maintain viewport height
          zIndex: 1,
        }}
      >
        <img
          style={{
            width: "100%",           // Image takes full width of the container
            height: "100%",          // Image takes full height of the container
            objectFit: "cover",       // Avoids stretching, maintains aspect ratio
            maxWidth: "100vw",        // Prevents overflow beyond viewport width
            maxHeight: "100vh",       // Prevents overflow beyond viewport height
          }}
          src="background.jpg"
          alt="Background"
        />
      </Plx>

      {/* Foreground Image */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.2,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100vh",           // Ensure foreground image fits the screen height
          zIndex: 2,
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",       // Prevents distortion
            maxWidth: "100vw",        // Ensures it doesn’t overflow horizontally
            maxHeight: "100vh",       // Ensures it doesn’t overflow vertically
          }}
          src="bg.png"
          alt="Foreground"
        />
      </Plx>

      {/* Text */}
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "absolute",
          width: "100%",
          top: "40vh",
          textAlign: "center",
          zIndex: 3
        }}
      >
        <h1
          style={{
            fontSize: "5vw",
            color: "#fff",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)"
          }}
        >
          Bhawan Care
        </h1>
      </Plx>

      {/* Placeholder to maintain height */}
      <div
        style={{
          position: "relative",
          height: "100vh",
        }}
      ></div>
    </div>
  );
};
