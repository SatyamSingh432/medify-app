import "./About.css";
import img1 from "../Img/AboutUs/doc.png";
import img2 from "../Img/AboutUs/hosp.png";
import img3 from "../Img/AboutUs/lab.png";
import img4 from "../Img/AboutUs/pat.png";
const About = () => {
  return (
    <div className="about-cont">
      <div className="about-content-cont">
        <div className="about-tag">
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </div>
        <div className="about-head">Our Families</div>
        <div className="about-info">
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </div>
      </div>
      <div className="about-content-cont1">
        <img src={img1} alt="" height={"300px"} />
        <img src={img2} alt="" height={"300px"} />
      </div>
      <div className="about-content-cont2">
        <img src={img3} alt="" height={"300px"} />
        <img src={img4} alt="" height={"300px"} />
      </div>
    </div>
  );
};
export default About;
