// import AnimatedComponent from "./animation";
// import { Image } from "./image";
// import React from "react";

// export const Gallery = (props) => {
//   return (
//     <div id="portfolio" className="text-center">
//       <div className="container">
//         <div className="section-title">
//         <AnimatedComponent animationType="scaleUp" >
//           <h2>What Sets Us Apart? </h2>
//           </AnimatedComponent>
//           <p>
//             Enhancing Community Experience and Engagement
//           </p>
//         </div>
//         <div className="row">
//           <div className="portfolio-items">
//             {props.data
//               ? props.data.map((d, i) => (
//                 <div
//                   key={`${d.title}-${i}`}
//                   className="col-sm-6 col-md-4 col-lg-4"
//                 >
//                   <AnimatedComponent animationType="fadeIn">
//                     <Image
//                       title={d.title}
//                       paragraph={d.paragraph}
//                       // largeImage={d.largeImage}
//                       smallImage={d.smallImage}
//                     />
//                   </AnimatedComponent>
//                 </div>
//               ))
//               : "Loading..."}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import React from 'react';
import AnimatedComponent from './animation';

export const Gallery = () => {
  const companies = [
    { logo: '/img/certificates/ISO.png' },
    { logo: '/img/certificates/GDPR.png' },
    { logo: '/img/certificates/PCI.png' },
    { logo: '/img/certificates/soc-2.png' },
    { logo: '/img/certificates/cmmi.png' },
  ];

  return (
    <div className="gallery-section">
      <AnimatedComponent animationType="scaleUp" >
        <h2>Recognized Achievements</h2>
      </AnimatedComponent>
      <div className="company-display">
        {companies.map((company, index) => (
          <div className="company-item" key={index}>
            <img src={company.logo} alt={company.name} className="company-logo" />
            <p>{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

