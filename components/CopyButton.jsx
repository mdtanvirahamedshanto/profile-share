"use client"
import { useState } from 'react';
import { FaCheckSquare, FaClipboardCheck, FaClipboardList, FaCopy, FaRegCalendarCheck, FaRegCheckCircle, FaUserCheck } from 'react-icons/fa';

const CopyButton = ({ textToCopy }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  return (
    <div>
      <button onClick={copyToClipboard}>
        {
            copySuccess ?  <FaClipboardCheck /> : <FaCopy />
        }
       
        
        </button>
     
    </div>
  );
};

export default CopyButton;
