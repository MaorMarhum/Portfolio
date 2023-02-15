import { Col } from "react-bootstrap";
import {BsArrowRightCircle} from 'react-icons/bs'

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt='' />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <span><a className="totheproject" href={url}>To the Project <BsArrowRightCircle /></a></span>
        </div>
      </div>
    </Col>
  )
}