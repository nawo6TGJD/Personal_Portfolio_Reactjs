import { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const skills = [
    { title: "Web Development", value: 90 },
    { title: "Brand Identity", value: 75 },
    { title: "Logo Design", value: 80 },
    { title: "UI/UX Design", value: 85 },
  ];

  const [progressValues, setProgressValues] = useState(skills.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // only trigger once
          let currentValues = skills.map(() => 0);
          const interval = setInterval(() => {
            let done = true;
            currentValues = currentValues.map((val, idx) => {
              if (val < skills[idx].value) {
                done = false;
                return val + 1;
              }
              return val;
            });
            setProgressValues([...currentValues]);
            if (done) clearInterval(interval);
          }, 20);
        }
      },
      { threshold: 0.3 } // trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated, skills]);

  return (
    <section className="skill" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br />
                It has been the industry's standard dummy text.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <div className="skill-circle">
                      <CircularProgressbar
                        value={progressValues[index]}
                        text={`${progressValues[index]}%`}
                        styles={buildStyles({
                          textSize: "16px",
                          pathColor: "rgba(255, 0, 0, 1)",
                          trailColor: "rgba(255, 0, 0, 0.2)",
                          textColor: "#ff4d4d",
                        })}
                      />
                    </div>
                    <h5 style={{ marginTop: "20px" }}>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="Image" />

      <style jsx>{`
        .skill-circle {
          width: 100px;
          height: 100px;
          margin: 0 auto;
          padding: 10px;
          border-radius: 50%;
          background: rgba(255, 0, 0, 0.1);
          box-shadow: 0 0 2px 1px rgba(216, 177, 177, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.1s ease, box-shadow 0.1s ease;

          /* Continuous gentle pulsing */
          animation: pulse 3s infinite ease-in-out;
        }

        .item:hover .skill-circle {
          transform: scale(1.15); /* zoom in on hover */
          box-shadow: 0 0 10px 5px rgba(255, 0, 0, 0.7);
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 5px 1px rgba(216, 177, 177, 0.6);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 15px 5px rgba(255, 0, 0, 0.5);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 5px 1px rgba(216, 177, 177, 0.6);
          }
        }
      `}</style>
    </section>
  );
};
