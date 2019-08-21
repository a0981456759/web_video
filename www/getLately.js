var wsUri = "ws://localhost:8081/api/connect";
websocket = new WebSocket(wsUri);
websocket.onopen = function(evt) {
  console.log(evt);
};
websocket.onmessage = function(evt) {};
window.onload = function() {
  setInterval(function() {
    $.ajax({
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ channel: "0" }),
      dataType: "json",
      type: "POST",
      url: "http://localhost:8080/api/getLatest",
      success: function(response) {
        var obj_frame_0 = Object.values(response)[1];
        var str_frame_0 = JSON.stringify(obj_frame_0);
        var frame_0 = str_frame_0.substring(22, 36);
        console.log("frame_0 :" + frame_0);
        console.log(frame_0.length);
        if (frame_0.length > 0) {
          $("#main_0").attr("src", "./ch0/" + frame_0 + ".jpg");
        }
      },
      error: function(xhr, textStatus, errorThrown) {
        console.error();
      }
    });
  }, 1000);
  setInterval(function() {
    $.ajax({
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ channel: "1" }),
      dataType: "json",
      type: "POST",
      url: "http://localhost:8080/api/getLatest",
      success: function(response) {
        var obj_frame_1 = Object.values(response)[1];
        var str_frame_1 = JSON.stringify(obj_frame_1);
        var frame_1 = str_frame_1.substring(22, 36);
        console.log("frame_1 :" + frame_1);
        console.log(frame_1.length);
        if (frame_1.length > 0) {
          $("#main_1").attr("src", "./ch1/" + frame_1 + ".jpg");
        }
      },
      error: function(xhr, textStatus, errorThrown) {
        console.error();
      }
    });
  }, 1000);
  setInterval(function() {
    $.ajax({
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ channel: "2" }),
      dataType: "json",
      type: "POST",
      url: "http://localhost:8080/api/getLatest",
      success: function(response) {
        var obj_frame_2 = Object.values(response)[1];
        var str_frame_2 = JSON.stringify(obj_frame_2);
        var frame_2 = str_frame_2.substring(22, 36);
        console.log("frame_2 :" + frame_2);
        console.log(frame_2.length);
        if (frame_2.length > 0) {
          $("#main_2").attr("src", "./ch2/" + frame_2 + ".jpg");
        }
      },
      error: function(xhr, textStatus, errorThrown) {
        console.error();
      }
    });
  }, 1000);
  setInterval(function() {
    $.ajax({
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ channel: "3" }),
      dataType: "json",
      type: "POST",
      url: "http://localhost:8080/api/getLatest",
      success: function(response) {
        var obj_frame_3 = Object.values(response)[1];
        var str_frame_3 = JSON.stringify(obj_frame_3);
        var frame_3 = str_frame_3.substring(22, 36);
        console.log("frame_3 :" + frame_3);
        console.log(frame_3.length);
        if (frame_3.length > 0) {
          $("#main_3").attr("src", "./ch3/" + frame_3 + ".jpg");
        }
      },
      error: function(xhr, textStatus, errorThrown) {
        console.error();
      }
    });
  }, 1000);
};
