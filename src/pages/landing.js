import react, { useEffect, useState, useRef } from "react";
import Nav from "../components/nav";
import "../styleSheet/Landing.css";
import img1 from "../images/resume.png";
import img2 from "../images/Img - resume charts on color.png";
import img3 from "../images/6.png";
import img4 from "../images/7.png";
import img5 from "../images/8.png";
import img6 from "../images/12.png";
import img7 from "../images/13.png";
import img8 from "../images/14.png";
import img9 from "../images/15.png";
import img10 from "../images/16.png";
import img11 from "../images/17.png";
import img12 from "../images/18.png";
import img13 from "../images/19.png";
import img14 from "../images/21.png";
import img15 from "../images/22.png";
import img16 from "../images/23.png";
import img17 from "../images/24.png";
import FeaturesImg1 from "../images/feature-img1.png";
import FeaturesImg2 from "../images/feature-img2.png";
import FeaturesImg3 from "../images/feature-img3.png";
import FeaturesImg4 from "../images/feature-img4.png";
import FeaturesImg5 from "../images/feature-img5.png";
import FeaturesImg6 from "../images/feature-img6.png";
import vid from "../images/video1.mp4";
import ReactPlayer from "react-player";
import Footer from "../components/footer";
import LoginPopup from "./loginPopup";
import {
  Check2Circle,
  BookmarkStarFill,
  DatabaseFill,
} from "react-bootstrap-icons";
import { onAuthStateChanged } from "firebase/auth";
import { auth, getUserFromDatabase } from "../fireabse";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

export default function Landing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [gettingUser, SetGettingUser] = useState(false);
  const playerRefSampleVid = useRef(null);

  const handleSampleVidEnded = () => {
    // Restart the video when it ends
    // playerRefSampleVid.current.seekTo(0);
    playerRefSampleVid.current?.seekTo(0);
  };

  const togglePopup = () => {
    if (userData?.profile === true) {
      return navigate("/dashboard");
    }
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSignup = () => {
    togglePopup();
  };
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, async (user) => {
      if (user) {
        SetGettingUser(true);
        setIsLoggedIn(true);
        const userFirebase = await getUserFromDatabase(user.email);
        setUserData(userFirebase);
        SetGettingUser(false);
      }
    });
  }, []);
  const user = useSelector((state) => state.user.user);

  return (
    <>
      {gettingUser ? (
        <img
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          width="240"
          height="240"
          alt="loading..."
          src="https://media2.giphy.com/media/MDrmyLuEV8XFOe7lU6/200w.webp?cid=ecf05e47k6onrtqddz8d98s4j5lhtutlnnegeus1pwcdwkxt&ep=v1_gifs_search&rid=200w.webp&ct=g"
        />
      ) : (
        <div>
          <Nav />
          {isLoggedIn == true ? (
            <button
              class=" continueToDahboardBtn signoutBtn zoom"
              onClick={() =>
                userData?.profile === true
                  ? navigate("/dashboard")
                  : navigate("/auth")
              }
            >
              Dashboard
            </button>
          ) : (
            <button class="loginBtn signoutBtn" onClick={togglePopup}>
              Login
            </button>
          )}

          {isPopupOpen && (
            <LoginPopup onClose={togglePopup} onSignup={handleSignup} />
          )}

          <div className="topDivLanding">
            <div class="jumbotron ">
              <div className="jumboText ">
                <h1 class="jumboMainText">
                  Welcome to Your Personalized Resume Solution!
                </h1>
                <p></p>
                <h5>
                  Elevate Your Resume for Every Job Application. Tailored Resume
                  for Your Dream Job - Get Noticed, Get Hired!!{" "}
                </h5>
              </div>

              <div className="jumboImgDiv ">
                {/* <img src={img17} className='jumboImg' /> */}
                <img src={img15} className="jumboImg" />
                {/* <img src={img16} className='jumboImg' /> */}
              </div>
            </div>
            <button
              type="button"
              class="btn  ctaBtn zoom "
              onClick={togglePopup}
            >
              Start Now
            </button>

            <Link to="section3" type="button" class="btn ctaBtn-2 zoom ">
              See demo video
            </Link>
          </div>
          <div className=" smallScreenDiv ">
            {/* <img src={img17} className='jumboImg' /> */}
            <img src={img15} className="jumboImg" />
            {/* <img src={img16} className='jumboImg' /> */}
          </div>

          <div className="introText">
            <p>
              " In the competitive world of Job Hunting, a one-size-fits-all
              resume dosen't cut it anymore.Your dream job deserves a tailored
              resume that speaks directly to the Hiring Manager. Welcome to
              Resume Shaper, where we craft resumes as unique as your career
              aspirations. "
            </p>
          </div>

          <div className="section1 ">
            <h3 className="section1Heading "> How Can We Help You?</h3>

            <div className="sec1Left  ">
              <img src={img2} className="sec1Img"></img>
            </div>
            <div className="sec1Right ">
              <div className="sec1Text">
                <h5 className="sec1RightText ">
                  <Check2Circle color="#027AC0" size={36} /> &nbsp; Resume
                  Customization
                </h5>
                <p className="sec1PText">
                  Craft tailored resumes for each job,showcasing your unique
                  skills and qualifications to stand out.
                </p>
                <h5 className="sec1RightText">
                  <Check2Circle color="#027AC0" size={36} /> &nbsp; ATS
                  Compatibility
                </h5>
                <p className="sec1PText">
                  Ensure your resume seamlessly navigates through applicant
                  tracking systems,increasing your chance of getting noticed by
                  employers.{" "}
                </p>
                <h5 className="sec1RightText">
                  <Check2Circle color="#027AC0" size={36} /> &nbsp; Professional
                  Presentation
                </h5>
                <p className="sec1PText">
                  Elevate your resumes visual appeal with our expert
                  formatting,making a lasting impression on recruiters and
                  hiring managers.{" "}
                </p>
                <h5 className="sec1RightText">
                  <Check2Circle color="#027AC0" size={36} /> &nbsp; Saves Time
                </h5>
                <p className="sec1PText">
                  Streamline the resume customization process,saving you
                  valuable time compared to manaul adjustments so you can foucs
                  on your job search.
                </p>
              </div>
            </div>
          </div>

          {/* section -2 */}

          <div className="section2 custom-background p-5">
            <h3 className="section1Heading ">How it Works</h3>
            <div className="container">
              <div className="row d-flex justify-content-center ">
                <div
                  className="d-flex flex-column flex-wrap p-4 card gap-4 m-2 justify-content-around"
                  style={{ width: "26rem" }}
                >
                  <div className="  card-number ">1</div>
                  <h3>Upload your Resume</h3>
                  <p>
                    Start by uploading your current resume, the foundation for
                    your tailored application.
                  </p>
                </div>

                <div
                  className="d-flex flex-column flex-wrap p-4 card gap-4 m-2 justify-content-around"
                  style={{ width: "26rem" }}
                >
                  <div className=" card card-number ">2</div>
                  <h3>Specify Job Title & Company</h3>
                  <p>
                    Tell us the job title and company you're targeting. Critical
                    for effective customization.
                  </p>
                </div>

                <div
                  className="d-flex flex-column flex-wrap p-4 card gap-4 m-2 justify-content-around"
                  style={{ width: "26rem" }}
                >
                  <div className=" card card-number ">3</div>
                  <h3>Tailored for Success</h3>
                  <p>
                    Watch as we transform your resume to align with your desired
                    position and instantly download it for applications.
                  </p>
                </div>

                <div
                  className="d-flex flex-column flex-wrap p-4 card gap-4 m-2 justify-content-around"
                  style={{ width: "26rem" }}
                >
                  <div className=" card card-number ">4</div>
                  <h3>Title</h3>
                  <p>Description</p>
                </div>

                <div
                  className="d-flex flex-column flex-wrap p-4 card gap-4 m-2 justify-content-around"
                  style={{ width: "26rem" }}
                >
                  <div className=" card card-number ">5</div>
                  <h3>Title</h3>
                  <p>Description</p>
                </div>
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div className="section3 text-center">
            <h3 className="section1Heading reviewHeading">Demo Video</h3>
            <div className="col-md-6 mx-auto sec4MidDiv1 p-4 h-100">
              <ReactPlayer
                className="player p-2"
                url="https://www.youtube.com/watch?v=Kn5M2Cg_DFM&t=8s"
                width="100%"
                playing={true}
                muted={true} // Set to false for not muted by default
                autoplay={true}
                repeat={true}
                controls={true} // Add controls for user interaction
                onEnded={handleSampleVidEnded}
                ref={playerRefSampleVid}
              />
              <button
                type="button"
                onClick={togglePopup}
                class="btn  ctaBtnSec2 zoom"
              >
                Start Now
              </button>
            </div>
          </div>

          {/* section - 4  */}
          <div className="section4">
            <h3 className="section1Heading ">Our Features</h3>
            <div className="container">
              <div className="row">
                <div className="cpl-sm-12 d-flex flex-wrap justify-content-center gap-4">
                  <div
                    className="card p-4  custom-background mb-5 mt-5"
                    style={{ width: "26rem" }}
                  >
                    <div className="card-body">
                      <h4 className="card-text mb-5">
                        Create{" "}
                        <span className="text-background">
                          Tailored resumes
                        </span>{" "}
                        for specific job applications.
                      </h4>
                    </div>
                    <img
                      src={FeaturesImg1}
                      className="card-img-top rounded-3"
                      alt="..."
                    />
                  </div>

                  <div
                    className="card p-4  custom-background mb-5 mt-5"
                    style={{ width: "26rem" }}
                  >
                    <div className="card-body">
                      <h4 className="card-text mb-5">
                        Ensure resume pass through{" "}
                        <span className="text-background">
                          Tailored resumes
                        </span>{" "}
                        ATS
                      </h4>
                    </div>
                    <img
                      src={FeaturesImg2}
                      className="card-img-top rounded-3"
                      alt="..."
                    />
                  </div>

                  <div
                    className="card p-4  custom-background mb-5 mt-5"
                    style={{ width: "26rem" }}
                  >
                    <div className="card-body">
                      <h4 className="card-text mb-5">
                        Enhance resumes with{" "}
                        <span className="text-background">
                          professional formatting.
                        </span>{" "}
                      </h4>
                    </div>
                    <img
                      src={FeaturesImg3}
                      className="card-img-top rounded-3"
                      alt="..."
                    />
                  </div>

                  <div
                    className="card p-4  custom-background mb-5 mt-5"
                    style={{ width: "26rem" }}
                  >
                    <div className="card-body">
                      <h4 className="card-text mb-5">
                        Receive{" "}
                        <span className="text-background">
                          keyword suggestions
                        </span>{" "}
                        for better targeting.
                      </h4>
                    </div>
                    <img
                      src={FeaturesImg4}
                      className="card-img-top rounded-3"
                      alt="..."
                    />
                  </div>

                  <div
                    className="card p-4  custom-background mb-5 mt-5"
                    style={{ width: "26rem" }}
                  >
                    <div className="card-body">
                      <h4 className="card-text mb-5">
                        Download{" "}
                        <span className="text-background">
                          customized resumes
                        </span>{" "}
                        instanly for multiple job applications.
                      </h4>
                    </div>
                    <img
                      src={FeaturesImg5}
                      className="card-img-top rounded-3"
                      alt="..."
                    />
                  </div>

                  <div
                    className="card p-4  custom-background mb-5 mt-5"
                    style={{ width: "26rem" }}
                  >
                    <div className="card-body">
                      <h4 className="card-text mb-5">
                        Get help from our{" "}
                        <span className="text-background">
                          dedicated support team
                        </span>{" "}
                        when you need it.
                      </h4>
                    </div>
                    <img
                      src={FeaturesImg6}
                      className="card-img-top rounded-3"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* section - 5 */}
          <div className="section5">
            <h3 className="section1Heading reviewHeading">
              Rave Reviews Form Our Users
            </h3>
            <div
              id="carouselExampleRide"
              class="carousel slide"
              data-bs-ride="true"
            >
              <div class="carousel-inner">
                <div class="carousel-item landingCaraousel active">
                  <div className="row testimonialSlider">
                    <div className="col-md-6">
                      <div class="card myCard ">
                        <img
                          src={img7}
                          class="card-img-top testimonialImg  "
                          alt="..."
                        />
                        <div class="card-body ">
                          <BookmarkStarFill size={46} className="star" />
                          <h5 class="card-title ">Michal R.</h5>
                          <p class="card-text text-black-50">
                            <i>
                              "The ATS optimization was a game changer. I
                              received more interview calls in a month than I
                              had in a year. This service is a life saver."
                            </i>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="card myCard">
                        <img
                          src={img12}
                          class="card-img-top testimonialImg"
                          alt="..."
                        />
                        <div class="card-body">
                          <BookmarkStarFill size={46} className="star" />
                          <h5 class="card-title">David S.</h5>
                          <p class="card-text">
                            <i>
                              "I used to spend hours tweaking my resume for
                              different jobs.Now, I just upload and apply. Trust
                              me, it's a huge time-saver."
                            </i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item landingCaraousel">
                  <div className="row testimonialSlider">
                    <div className="col-md-6">
                      <div class="card myCard">
                        <img
                          src={img9}
                          class="card-img-top testimonialImg"
                          alt="..."
                        />
                        <div class="card-body">
                          <BookmarkStarFill size={46} className="star" />
                          <h5 class="card-title">Laura B.</h5>
                          <p class="card-text">
                            <i>
                              "I was skeptical at first, but Resume Shaper
                              transformed my resume beautifully. Well, I am a
                              busy professional and don't edit my resume often.I
                              can't believeon how much time it saved me. "
                            </i>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="card myCard">
                        <img
                          src={img10}
                          class="card-img-top testimonialImg"
                          alt="..."
                        />
                        <div class="card-body">
                          <BookmarkStarFill size={46} className="star" />
                          <h5 class="card-title">Jessica R.</h5>
                          <p class="card-text">
                            <i>
                              "Just in awe of how easy this website has made the
                              job application process.The time and effort it
                              saved me are priceless.I'm now applying to jobs I
                              would'nt have considered before."
                            </i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item landingCaraousel">
                  <div className="row testimonialSlider">
                    <div className="col-md-6">
                      <div class="card myCard">
                        <img
                          src={img8}
                          class="card-img-top testimonialImg"
                          alt="..."
                        />
                        <div class="card-body">
                          <BookmarkStarFill size={46} className="star" />
                          <h5 class="card-title">Logan Robert M.</h5>
                          <p class="card-text">
                            <i>
                              "I used to procrastinate applying for jobs because
                              my resume editing.Now,it's a breeze.The team of
                              Resume Shaper really did a good job on this one. "
                            </i>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="card myCard">
                        <img
                          src={img11}
                          class="card-img-top testimonialImg"
                          alt="..."
                        />
                        <div class="card-body">
                          <BookmarkStarFill size={46} className="star" />
                          <h5 class="card-title">Olivia C.</h5>
                          <p class="card-text">
                            <i>
                              "As a recent grad, job hunting was really getting
                              me overwhelmed. I came across this tool and it
                              reduced most of my work.Plus,the results are
                              incredeble. Highly Recommended!!"
                            </i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                style={{ backgroundColor: "#2aacea" }}
                class="carousel-control-prev landing-carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                style={{ backgroundColor: "#2aacea" }}
                class="carousel-control-next landing-carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <Footer />
        </div>
      )}
          
    </>
  );
}
