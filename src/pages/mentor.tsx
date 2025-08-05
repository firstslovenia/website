import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function HookRedirectExample() {
  const history = useHistory();

  useEffect(() => {
    history.replace("/start-a-team");
  }, [history]);

  return null;
}

//! Keep legacy, cuz we printed this link to 100s of flyers /facepalm/
