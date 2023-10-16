import react, { useState } from 'react'
import Nav from '../components/nav'
import '../styleSheet/Landing.css'
import img1 from '../images/resume.png'
import img2 from '../images/sec2.jpg'
import img3 from '../images/6.png'
import img4 from '../images/7.png'
import img5 from '../images/8.png'
import img6 from '../images/12.png'
import img7 from '../images/13.png'
import img8 from '../images/14.png'
import img9 from '../images/15.png'
import img10 from '../images/16.png'
import img11 from '../images/17.png'
import img12 from '../images/18.png'
import img13 from '../images/19.png'
import img14 from '../images/21.png'
import img15 from '../images/22.png'
import img16 from '../images/23.png'
import img17 from '../images/24.png'
import vid from '../images/video1.mp4'
import ReactPlayer from 'react-player'
import Footer from '../components/footer'
import LoginPopup from './loginPopup'
import { Check2Circle, BookmarkStarFill } from "react-bootstrap-icons";


export default function Landing() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleSignup = () => {
        togglePopup();
    };

    return (
        <div>
            <Nav />
            <button class="loginBtn signoutBtn" onClick={togglePopup}>Login</button>
            {isPopupOpen && <LoginPopup onClose={togglePopup} onSignup={handleSignup} />}

            <div className='topDivLanding'>
            <div class='jumbotron'>
                <div className='jumboText'>
                    <h1 class='jumboMainText'>Welcome to Your Personalized Resume Solution!</h1>
                    <p></p>
                    <h5>Elevate Your Resume for Every Job Application. Tailored Resume for Your Dream Job - Get Noticed, Get Hired!! </h5>
                </div>

                <div className='jumboImgDiv'>
                    {/* <img src={img17} className='jumboImg' /> */}
                    <img src={img15} className='jumboImg' />
                    {/* <img src={img16} className='jumboImg' /> */}
                </div>
            </div>
            <button type="button" class="btn btn-success signoutBtn ctaBtn zoom " onClick={togglePopup} >Start Now</button>
            </div>
            

            <div className='introText'>
                <p>" In the competitive world of Job Hunting, a one-size-fits-all resume dosen't cut it anymore.Your dream job deserves a tailored resume that speaks directly to the Hiring Manager.
                    Welcome to Resume Shaper, where we craft resumes as unique as your career aspirations. "</p>
            </div>


            <div className='section1'>
                <h3 className='section1Heading'> How Can We Help You?</h3>
                <div className='sec1Left'>
                    <img src={img2} className='sec1Img'></img>
                </div>
                <div className='sec1Right'>
                    <div className='sec1Text'>
                        <h5 className='sec1RightText '><Check2Circle color="#35b276" size={36} /> &nbsp; Resume Customization</h5>
                        <p className='sec1PText'>Craft tailored resumes for each job,showcasing your unique skills and qualifications to stand out.</p>
                        <h5 className='sec1RightText'><Check2Circle color="#35b276" size={36} /> &nbsp; ATS Compatibility</h5>
                        <p className='sec1PText'>Ensure your resume seamlessly navigates through applicant tracking systems,increasing your chance of getting noticed by employers. </p>
                        <h5 className='sec1RightText'><Check2Circle color="#35b276" size={36} /> &nbsp; Professional Presentation</h5>
                        <p className='sec1PText'>Elevate your resumes visual appeal with our expert formatting,making a lasting impression on recruiters and hiring managers. </p>
                        <h5 className='sec1RightText'><Check2Circle color="#35b276" size={36} /> &nbsp; Saves Time</h5>
                        <p className='sec1PText'>Streamline the resume customization process,saving you valuable time compared to manaul adjustments so you can foucs on your job search.</p>
                    </div>
                </div>
            </div>



            <div className='section2'>
                <h3 className='section1Heading'>How it Works</h3>
                <div className='row'>
                    <div className='col-md-4  sec2Col sec2Col1'>
                        <img src={img3} className='sec2Img zoom' />
                        <h5>Upload your Resume</h5>
                        <p>Start by uploading your current resume,the foundation for your tailored application.</p>
                    </div>
                    <div className='col-md-4  sec2Col sec2Col2 '>
                        <img src={img4} className='sec2Img zoom' />
                        <h5>Specify Job Title & Company</h5>
                        <p>Tell us the job title and company you're targeting. Critical for effective customization.</p>
                    </div>
                    <div className='col-md-4  sec2Col sec2Col3 '>
                        <img src={img5} className='sec2Img zoom' />
                        <h5>Tailored for Success</h5>
                        <p>Watch as we transform your resume to align with your desired position and instantly download it for applications.</p>
                    </div>
                </div>
            </div>



            <button type="button" onClick={togglePopup} class="btn btn-success ctaBtnSec2 zoom">Customize your Resume Now</button>



            <div className='section4'>
                <div className='videoSection row'>
                    <div className='col-md-6 sec4MidDiv1 '>
                        <ReactPlayer
                            className="player"
                            url={vid}
                            width="90%"
                            height="100%"
                            playing={true}
                            muted={true}
                            autoplay={true}
                            repeat={true}
                        />
                    </div>
                    <div className='col-md-6 sec4MidDiv2'>
                        <h4>Our Features</h4>
                        <p><Check2Circle color="#35b276" size={20} /> &nbsp;Create Tailored resumes for specific job applications.</p>
                        <p><Check2Circle color="#35b276" size={19} /> &nbsp;Ensure resume pass through ATS for better visibility. </p>
                        <p><Check2Circle color="#35b276" size={19} /> &nbsp;Enhance resumes with professional formatting.</p>
                        <p><Check2Circle color="#35b276" size={19} /> &nbsp;Receive keyword suggestions for better targeting.</p>
                        <p><Check2Circle color="#35b276" size={19} /> &nbsp;Download customized resumes instanly for multiple job applications.</p>
                        <p><Check2Circle color="#35b276" size={19} /> &nbsp;Get help from our dedicated support team when you need it.</p>
                    </div>
                </div>
            </div>



            <div className='section3'>
                <h3 className='section1Heading'>Rave Reviews Form Our Users</h3>
                <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className='row testimonialSlider' >
                                <div className='col-md-6'>
                                    <div class="card myCard " >
                                        <img src={img7} class="card-img-top testimonialImg  " alt="..." />
                                        <div class="card-body ">
                                            <BookmarkStarFill size={46} className="star" />
                                            <h5 class="card-title">Michal R.</h5>
                                            <p class="card-text"><i>"The ATS optimization was a game changer. I received more interview calls in a month than I had in a year. This service is a life saver."</i></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="card myCard" >
                                        <img src={img12} class="card-img-top testimonialImg" alt="..." />
                                        <div class="card-body">
                                            <BookmarkStarFill size={46} className="star" />
                                            <h5 class="card-title">David S.</h5>
                                            <p class="card-text"><i>"I used to spend hours tweaking my resume for different jobs.Now, I just upload and apply. Trust me, it's a huge time-saver."</i></p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row testimonialSlider' >
                                <div className='col-md-6'>
                                    <div class="card myCard" >
                                        <img src={img9} class="card-img-top testimonialImg" alt="..." />
                                        <div class="card-body">
                                            <BookmarkStarFill size={46} className="star" />
                                            <h5 class="card-title">Laura B.</h5>
                                            <p class="card-text"><i>"I was skeptical at first, but Resume Shaper transformed my resume beautifully. Well, I am a busy professional and don't edit my resume often.I can't believeon how much time it saved me. "</i></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="card myCard" >
                                        <img src={img10} class="card-img-top testimonialImg" alt="..." />
                                        <div class="card-body">
                                            <BookmarkStarFill size={46} className="star" />
                                            <h5 class="card-title">Jessica R.</h5>
                                            <p class="card-text"><i>"Just in awe of how easy this website has made the job application process.The time and effort it saved me are priceless.I'm now applying to jobs I would'nt have considered before."</i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row testimonialSlider' >
                                <div className='col-md-6'>
                                    <div class="card myCard" >
                                        <img src={img8} class="card-img-top testimonialImg" alt="..." />
                                        <div class="card-body">
                                            <BookmarkStarFill size={46} className="star" />
                                            <h5 class="card-title">Logan Robert M.</h5>
                                            <p class="card-text"><i>"I used to procrastinate applying for jobs because my resume editing.Now,it's a breeze.The team of Resume Shaper really did a good job on this one. "</i></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div class="card myCard" >
                                        <img src={img11} class="card-img-top testimonialImg" alt="..." />
                                        <div class="card-body">
                                            <BookmarkStarFill size={46} className="star" />
                                            <h5 class="card-title">Olivia C.</h5>
                                            <p class="card-text"><i>"As a recent grad, job hunting was really getting me overwhelmed. I came across this tool and it reduced most of my work.Plus,the results are incredeble. Highly Recommended!!"</i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>



            <div className='section5'>
                <img src={img13} className="sec5Img" />
                <h1>Expertise, commitment, and value. It's our mission to consistently provide these to our clients.</h1>
            </div>
            <Footer />
        </div>
    )
}
