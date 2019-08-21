var wsUri = "ws://localhost:8080/api/connect";
main0 = document.getElementById("main_0");
websocket = new WebSocket(wsUri);
websocket.onopen = function(evt) {
  console.log("123");
};
websocket.onmessage = function(evt) {
  console.log(evt);
  // var json = JSON.parse(evt);
  for (i = 10; i < 24; i++) {
    console.log(evt["data"].substring(10, 24));
  }

  // console.log(evt.data[1].image);
};

// webSocket.onerror = function(event) {
//   makeDataOnWeb("error");
// };
// webSocket.onopen = function(event) {
//   console.log(eve);
// };
// webSocket.onmessage = function(event) {
//   makeDataOnWeb(event.data);
// };

// webSocket.onclose = function(event) {
//   makeDataOnWeb("conn close");
// };
