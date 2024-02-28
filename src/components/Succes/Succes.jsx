import React, { useState } from 'react';
import "../Succes/Succes.scss"
import Icon from "../../assets/Icons/Icon.svg";




const Succes = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); 

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
          <img className=" Icon" src={Icon} alt="" />
            <h2 className='title'>Suceess!</h2> 
          <h3 className='have-account'>account create successfully!</h3>
            <h4 className='have-account2'>Awesome!</h4>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Succes;