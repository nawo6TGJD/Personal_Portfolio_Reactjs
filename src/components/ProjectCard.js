import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  // Styles
  const titleStyle = { color: "#000", transition: "color 0.3s" };
  const descStyle = { color: "#ffffffff", transition: "color 0.3s" };
  const hoverStyle = { color: "#fffefeff" }; // hover color

  return (
    <Col sm={6} md={4}>
      <div
        className="proj-imgbx"
        style={{ cursor: link ? "pointer" : "default" }}
        onMouseEnter={e => {
          e.currentTarget.querySelector("h4").style.color = hoverStyle.color;
          e.currentTarget.querySelector("span").style.color = "#ffffffff";
        }}
        onMouseLeave={e => {
          e.currentTarget.querySelector("h4").style.color = titleStyle.color;
          e.currentTarget.querySelector("span").style.color = descStyle.color;
        }}
      >
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4 style={titleStyle}>{title}</h4>
              <span style={descStyle}>{description}</span>
            </div>
          </a>
        ) : (
          <>
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4 style={titleStyle}>{title}</h4>
              <span style={descStyle}>{description}</span>
            </div>
          </>
        )}
      </div>
    </Col>
  );
};

export default ProjectCard;
