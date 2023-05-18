import { createContext, useState } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider({ children }) {
  const [activeNotification, setActivenotification] = useState();

  function showNotificationHandler({ title, message, status }) {
    setActivenotification({ title, message, status });
  }

  function hideNotificationHandler() {
    setActivenotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
