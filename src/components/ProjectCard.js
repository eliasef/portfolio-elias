import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col className="cards" size={12} sm={6} md={4}>
      <a href={url} target="_blank">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 className="fonte">{title}</h4>
          <span className="fonte">{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
