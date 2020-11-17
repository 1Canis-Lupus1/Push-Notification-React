import React, { useState } from 'react';
import NotificationForm from './NotificationForm';
import ProgressIndicator from './ProgressIndicator';

const App = props => {
  //For Notifications
  const [notificationState, setNotificationState] = useState({
    title: '',
    subtitle: ''
  });

  //For Loading Indicator
  const [loadingState, setLoadingState] = useState({
    isLoading: false
  });

  const handleReset = () => {
    setNotificationState({
      title: '',
      subtitle: ''
    });
  }

  const handleTitleChange = (e) => {
    setNotificationState({
      title: e.target.value,
      subtitle: notificationState.subtitle
    });
  }

  const handleSubTitleChange = (e) => {
    setNotificationState({
      title: notificationState.title,
      subtitle: e.target.value
    });
  }

  const handleSend = () => {
     setLoadingState({
      isLoading: true
    });
    
    var data = {
      app_id: "3891abb8-0bae-4c32-8050-08810425b902",
      headings: { "en": notificationState.title },
      contents: { "en": notificationState.subtitle },
      included_segments: ["All"]
    };

    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Basic MzJmMWM2M2QtYjRlNS00MGNjLTgwMTgtYTMxNTZjM2YwYjFi"
    };

    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };

    var https = require('https');
    var req = https.request(options, function (res) {
      res.on('data', function (data) {
        handleReset();
        setLoadingState({
          isLoading: false
        });
      });
    });

    req.on('error', function (e) {
      setLoadingState({
        isLoading: false
      });
    });

    req.write(JSON.stringify(data));
    req.end();
  }

  //Ternary return for Final Notification and Loading screen based on condition isLoading
  return loadingState.isLoading
    ? <ProgressIndicator/>
    : <NotificationForm
      titleChange={handleTitleChange}
      subtitleChange={handleSubTitleChange}
      click={handleSend}
    />
  // return <NotificationForm titleChange={handleTitleChange} subtitleChange={handleSubTitleChange} click={handleSend} />
}

export default App;