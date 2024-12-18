import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h4>
          <span dangerouslySetInnerHTML={{ __html: description }}></span>
        </div>
      </div>
    </Col>
  );
};










// import { Col } from 'react-bootstrap';
// export const ProjectCard = ({ title, description, imgUrl, link }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} alt={title} />
//         <div className="proj-txtx">
//           <h4>
//             <a href={link} target="_blank" rel="noopener noreferrer">
//               {title}
//             </a>
//           </h4>
//           <span dangerouslySetInnerHTML={{ __html: description }}></span>
//           <br />
//           <a href={link} target="_blank" rel="noopener noreferrer" className="see-more-link">
//             See More
//           </a>
//         </div>
//       </div>
//     </Col>
//   );
// };
