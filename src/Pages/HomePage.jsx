// import React, { useEffect, useState } from 'react'
// import '../Styles/HomePage.css'
// import Header from '../Components/Header'
// import Modal from '../Components/Modal'
// const HomePage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//     if (!isModalOpen) {
//       document.body.style.overflow = 'hidden'; 
//     } else {
//       document.body.style.overflow = ''; 
//     }
//   };

//   useEffect(()=>{
//     toggleModal()
//   },[toggleModal()])
//   return (
//     <div>
//       <Header />
//       <div className="banner-img">
//         jdfjdf
//       </div>
//       <div className="announcement">
//         WE'RE GETTING MARRIED!
//       </div>
//       <div className="hash-tag">
//         #CantDanceDontCare
//       </div>
//       <div className="invite-board">
//         <p className="announcement-01">
//           WE'RE GETTING MARRIED!
//         </p>
//         <p className="invite-note">
//           The Love Of My Life (LOML) and I, invites you to our Wedding. 
//           Join us as we celebrate our love and commitment to each other. 
//           Your presence will make our special day even more memorable.
//         </p>
//         <p className="hash-tag-one">
//         #CantDanceDontCare
//         </p>
//         <p className="color-of-the-day">
//           Colors of the day
//         </p>
//       </div>
//       {isModalOpen && <Modal closeModal={toggleModal} />}
//     </div>
//   )
// }

// export default HomePage

import React, { useEffect, useState } from 'react';
import '../Styles/HomePage.css';
import Header from '../Components/Header';
import Modal from '../Components/Modal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
    if (!isModalOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }
  };

  useEffect(() => {
    setIsModalOpen(true); // Open modal on component mount
    document.body.style.overflow = 'hidden'; // Prevent body scroll when modal is open
    return () => {
      document.body.style.overflow = ''; // Reset body scroll when component unmounts
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="banner-img">
        jdfjdf
      </div>
      <div className="announcement">
        WE'RE GETTING MARRIED!
      </div>
      <div className="hash-tag">
        #CantDanceDontCare
      </div>
      <div className="invite-board">
        <p className="announcement-01">
          WE'RE GETTING MARRIED!
        </p>
        <p className="invite-note">
          The Love Of My Life (LOML) and I, invites you to our Wedding. 
          Join us as we celebrate our love and commitment to each other. 
          Your presence will make our special day even more memorable.
        </p>
        <p className="hash-tag-one">
        #CantDanceDontCare
        </p>
        <p className="color-of-the-day">
          Colors of the day
        </p>
      </div>
      {isModalOpen && <Modal closeModal={toggleModal} />}
    </div>
  );
}

export default HomePage;
