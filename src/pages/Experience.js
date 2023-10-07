import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ProjIcon from "@material-ui/icons/Gamepad"
import "../styles/Experience.css";
import { cyan } from '@material-ui/core/colors';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className="vertical-timeline-element"
          contentStyle={{ background: '#28375e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #28375e' }}
          date="2012-2018"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon/>}
        >
          <h2 className="vertical-timeline-element-title" style={{color: '#dbdbdb'}}> 
            <u>Education: Tuen Mun Chathotic Secondary School</u>
          </h2>
          <h3>Hong Kong Diploma of Secondary Education Examination</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element"
          contentStyle={{ background: '#28375e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #28375e' }}
          date="2018-2023"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon/>}
        >
          <h2 className="vertical-timeline-element-title" style={{color: '#dbdbdb'}}> 
            <u>Education: The Chinese University of Hong Kong</u>
          </h2>
          <h3>
            Bacholar of Art in Philosophy
          </h3>
          <ul>
            <li>Major: Philosophy</li>
            <li>Minor: Computor Science, History, French</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element"
          contentStyle={{ background: '#28375e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #28375e' }}
          date="2018-2021"
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon/>}
        >
          <h2 className="vertical-timeline-element-title" style={{color: '#f3f7d0'}}> 
            <u>Works: Part-time school tutor and facilitator</u>
          </h2>
          <h3>
          Tuen Mun Chathotic Secondary School &#40;Mother school&#41;
          </h3>
          <ul>
            <li>&#40;2018 & 19&#41; Annual school English musical production facilitator &#40;2 productions&#41;</li>
            <li>&#40;2018 - 19&#41; F6 HKDSE Chinese history tutor </li>
            <li>&#40;2018 - 20&#41; F6 HKDSE history tutor </li>
            <li>&#40;2020 - 21&#41; F2 History language tutor </li>
          </ul>
          <h3>
          Buddhist Wong Wan Tin College 
          </h3>
          <ul>
            <li>&#40;2021 - 22&#41; F1 Mathematics tutor </li>
          </ul>  
        </VerticalTimelineElement>
        
        <VerticalTimelineElement 
          className="vertical-timeline-element"
          contentStyle={{ background: '#28375e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #28375e' }}
          date="2018-2021"
          iconStyle={{background: "rgb(179, 218, 233)", color: "#fff"}}
          icon={<ProjIcon/>}
        >
          <h2 className="vertical-timeline-element-title" style={{color: 'rgb(179, 218, 233)'}}> 
            <u>Personal projects</u>
          </h2>
          <h3>
            Part-time tutor and facilitator
          </h3>
          <ul>
            <li> &#40;2020&#41; Theater play writing - 「擂台上的畫面」</li>
            <li> &#40;2020 - 22&#41; 3D modeling - Blender practices</li>
            <li> &#40;2023&#41; Game dev - Roothless &#40;Unity 2D&#41;</li>
            <li> &#40;2023 - &#41; Conlang - RhiuBu, and artificial language construction project</li>
            <li> &#40;2023 - &#41; Game dev - Art of Aether</li>
            <li> &#40;2023 - &#41; Web dev - My personal website</li>
          </ul>  
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element"
          contentStyle={{ background: '#28375e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #28375e' }}
          date="2023 - "
          iconStyle={{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon/>}
        >
          <h2 className="vertical-timeline-element-title" style={{color: '#f3f7d0'}}> 
            <u>Future</u>
          </h2>
          <p>The unknown awaits...</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience