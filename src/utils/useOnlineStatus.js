import { useState, useEffect } from "react";
const useOnlineStatus = () => {
  //   console.log("online status hook render");
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", updateOfflineStatus);

    window.addEventListener("online", updateOnlineStatus);

    return () => {
      // console.log("useOnlineStatus return");
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOfflineStatus);
    };
  }, []);

  const updateOfflineStatus = () => {
    setOnlineStatus(false);
  };

  const updateOnlineStatus = () => {
    setOnlineStatus(true);
  };

  // return boolean value
  return onlineStatus;
};

export default useOnlineStatus;
