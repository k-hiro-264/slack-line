function doPost(e) {
  //Slackトークンが一致しているか
  if(e.parameter.token != "Slackトークン") {
    return;
  }

  var msg = "Slackにメッセージが届きました。\nチャンネル : "+e.parameter.channel_name+"\n発言者 : "
    +e.parameter.user_name+ "\n内容 : "+e.parameter.text;

  send(msg); //送信
}

function send(message) {
  var lineToken = "LINEトークン"; //lineトークン
  var op = {
    "method" : "post",
    "payload": "message=" + message,
    "headers":{"Authorization" : "Bearer " + lineToken}
  };
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify",op);
}
