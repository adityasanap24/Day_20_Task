async function getMyIP() {
  try {
    let response = await fetch("https://ipapi.co/json/");
    let ipInfo = await response.json();
    console.log(ipInfo);
    document.getElementById("ip").innerHTML =
      "Your IP Address" + "&nbsp; : " + ipInfo.ip;
    document.getElementById("network").innerHTML =
      "Your Network" + "&nbsp; : " + ipInfo.network;
    document.getElementById("city").innerHTML =
      "Your city" + "&nbsp; : " + ipInfo.city;
    document.getElementById("region").innerHTML =
      "Your Region" + "&nbsp; : " + ipInfo.region;
    document.getElementById("latitude").innerHTML =
      "Your Latitude" + "&nbsp; : " + ipInfo.latitude;
    document.getElementById("longitude").innerHTML =
      "Your Longitude" + "&nbsp; : " + ipInfo.longitude;
    document.getElementById("region_code").innerHTML =
      "Your Region Code" + "&nbsp; : " + ipInfo.region_code;
  } catch (error) {
    console.log(error);
  }
}
