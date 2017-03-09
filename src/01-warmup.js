var timeoutID;

function delayedAlert() {
  timeoutID = setTimeout(slowAlert, 300);
}

function slowAlert() {
  console.log("TIMED OUT!");
}

delayedAlert()
