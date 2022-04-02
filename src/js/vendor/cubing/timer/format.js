function timeToParts(time) {
  // Each entry is [minimum number of digits if not first, separator before, value]
  var hours = Math.floor(time / (60 * 60 * 1000));
  var minutes = Math.floor(time / (60 * 1000)) % 60;
  var seconds = Math.floor(time / 1000) % 60;

  function pad(number, numDigitsAfterPadding) {
    var output = "" + number;
    while (output.length < numDigitsAfterPadding) {
      output = "0" + output;
    }
    return output;
  }

  var secFirstString = "";
  var secRestString;
  if (hours > 0) {
    secRestString =
      "" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);
  } else if (minutes > 0) {
    secRestString = "" + minutes + ":" + pad(seconds, 2);
  } else {
    secRestString = "" + seconds;
    if (secRestString[0] === "1") {
      secFirstString = "1";
      secRestString = secRestString.substr(1);
    }
  }

  var centiseconds = Math.floor((time % 1000) / 10);

  return {
    secFirst: secFirstString,
    secRest: secRestString,
    decimals: "" + pad(centiseconds, 2),
  };
}

globalThis.formatTime = function (time) {
  if (time === null) {
    return "---";
  }

  var parts = timeToParts(time);
  return parts.secFirst + parts.secRest + "." + parts.decimals;
};
