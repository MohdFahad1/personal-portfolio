import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

export default function Experience() {
  return (
    <>
      <div id="experience">
        <VerticalTimeline lineColor="#3e497a">
          <h1 style={{ textAlign: "center" }} className="heading">
            Education
          </h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--educaton"
              contentStyle={{ background: "#858585", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #858585" }}
              date="2020 - 2024"
              iconStyle={{ background: "#858585", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Computer Science Engineering
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachleor Degree
              </h4>
              <p>JAMIA HUMDARD UNIVERSITY</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--educaton"
              contentStyle={{ background: "#858585", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #858585" }}
              date="2016 - 2020"
              iconStyle={{ background: "#858585", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Senior Secondary School
              </h3>
              <p>JAMIA MILLIA ISLAMIA</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </VerticalTimeline>
      </div>
    </>
  );
}
