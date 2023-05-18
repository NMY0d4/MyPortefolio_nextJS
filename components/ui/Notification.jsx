import { useContext } from 'react';
import NotificationContext from '../../store/notification-context';

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = 'bg-green-500 text-white';
  }

  if (status === 'error') {
    statusClasses = 'bg-red-500 text-white';
  }

  if (status === 'pending') {
    statusClasses = 'bg-yellow-500 text-black';
  }

  const activeClasses = `notification ${statusClasses} flex justify-around rounded-xl py-2`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2 className='text-xl'>{title}</h2>
      <p className='font-medium'>{message}</p>
    </div>
  );
}

export default Notification;
