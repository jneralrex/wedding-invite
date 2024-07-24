import React, { useEffect, useState } from "react";
import "../Assets/Styles/HomePage.css";
import Header from "../Components/Header";
import Modal from "../Components/Modal";
import { TfiCalendar, TfiMusicAlt } from "react-icons/tfi";
import  { FaChurch} from "react-icons/fa6";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
    if (!isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="homePage">
      <div className="header">
      <Header/>
      </div>
      <div className="banner-img">
      <div className="announcement-holder-outter">
      <div className="announcement-holder">
        <div className="announcement">WE'RE GETTING MARRIED!</div>
        <div className="hash-tag">#CantDanceDontCare</div>
      </div>
      </div>
      </div>
     

      <div className="invite-board">
       <div className="invite-board-inner">
       <p className="announcement-01">WE'RE GETTING MARRIED!</p>
        <p className="invite-note">
          The Love Of My Life (LOML) and I, invites you to our Wedding. Join us
          as we celebrate our love and commitment to each other. Your presence
          will make our special day even more memorable.
        </p>
        <p className="hash-tag-one">#CantDanceDontCare</p>
        <p className="color-of-the-day">Colors of the day</p>
        <p className="colors">Aqua Green / Olive Green</p>
       </div>
      </div>

      <div className="form-area">
        <div className="question">WILL YOU ATTEND?</div>
        <div className="form-block">
          <form action="">
            <div className="form-input-group">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-input-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-input-group">
              <div className="radio-area">
                <input type="radio" name="" id="" />
                <label htmlFor="">
                  <p>Yes I will be there</p>
                </label>
              </div>
              <div className="radio-area">
                <input type="radio" name="" id="" />
                <label htmlFor="">
                  <p>Sorry I can't come</p>
                </label>
              </div>
            </div>
            <div className="chosen-event">What will you be attending</div>
            <div className="check-area">
              <div className="check-input">
                <input type="checkbox" name="" id="" />
                <p> Church Ceremony</p>
              </div>
              <div className="check-input">
                <input type="checkbox" name="" id="" />
                <p> Reception/Engagement</p>
              </div>
              <div className="check-input">
                <input type="checkbox" name="" id="" />
                <p>The Afterparty</p>
              </div>
            </div>
            <div className="form-input-group">
              <input
                type="text"
                placeholder="Will you be coming with a +1 (Yes or No)"
              />
            </div>
            <div className="form-input-group">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="How did you know the couple"
              />
            </div>
            <div className="form-input-btn">
              <input type="submit" value="RSVP" />
            </div>
          </form>
        </div>
      </div>
      <div className="schedule">
        <div className="schedule-inner">
          <div className="leaf"></div>
          <p>WHEN & WHERE</p>
          <span>Wedding</span>
          <div className='icons'><TfiCalendar size={50} style={{ color: "goldenrod" }} /></div>
          <div className="event-holder">
            <div className="event-inner">
              <div className="event">THE CHURCH CEREMONY</div>
              <div className="location">
                Chapel Of Christ The Light. <br /> Alausa Secretariat, M.K.O Abiola Gardens Rd, Ikeja <br /> Saturday, 30 December 2023 @10:00AM
              </div>
            </div>
            <div className='icons'><FaChurch size={50} style={{ color: "goldenrod" }} /></div>
            <div className="event-inner">
              <div className="event">THE RECEPTION/ ENGAGEMENT</div>
              <div className="location">
                Anchor Events Place. <br /> 1 Registeration Close, beside FRC, off <br /> LateefJakande Road. Agidingbi, Lagos. <br /> Saturday, 30 December 2023 <br /> @ 1:00 PM
              </div>
            </div>
            <div className='icons'><TfiMusicAlt size={50} style={{ color: "goldenrod" }} /></div>
            <div className="event-inner">
              <div className="event">THE AFTER PARTY</div>
              <div className="location">
                Anchor Events Place. <br /> 1 Registeration Close, beside FRC, off <br /> LateefJakande Road. Agidingbi, Lagos. <br /> Saturday, 30 December 2023 <br /> @ 8:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal closeModal={toggleModal} />}
    </div>
  );
};

export default HomePage;
