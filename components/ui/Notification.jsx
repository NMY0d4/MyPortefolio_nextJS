import { useContext, useEffect, useState } from 'react';
import NotificationContext from '../../store/notification-context';

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;
  const [exitAnimation, setExitAnimation] = useState('');

  let statusClasses = '';
  let enterAnimation = '';

  if (status === 'success') {
    statusClasses = 'bg-green-500 text-white';
  }

  if (status === 'error') {
    statusClasses = 'bg-red-500 text-white';
  }

  if (status === 'pending') {
    statusClasses = 'bg-yellow-500 text-black';
  }

  if (notificationCtx) {
    enterAnimation = 'animate-slide-right';
  }

  const onClickHandler = () => {
    setExitAnimation('animate-slide-left');
  };

  useEffect(() => {
    if (exitAnimation) {
      const timeout = setTimeout(() => {
        notificationCtx.hideNotification();
      }, 280);

      return () => clearTimeout(timeout);
    }
  }, [exitAnimation, notificationCtx]);

  const activeClasses = `notification ${statusClasses} ${enterAnimation} ${exitAnimation} flex justify-around rounded-xl py-2`;

  return (
    <div className={activeClasses} onClick={onClickHandler}>
      <h2 className='text-xl'>{title}</h2>
      <p className='font-medium'>{message}</p>
    </div>
  );
}

export default Notification;
