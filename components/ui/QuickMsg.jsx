import { useState, useEffect } from 'react';

function QuickMsg({ message, duration, onRemove, handleIsVisible }) {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    setIsVisible(handleIsVisible);
    const timeout = setTimeout(() => {
      onRemove();
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, onRemove, isVisible]);


  return (
    <>
      {isVisible && (
        <div className='bg-secondary mt-2 text-white py-2 px-4 rounded-md shadow-md'>
          {message}
        </div>
      )}
    </>
  );
}

export default QuickMsg;
