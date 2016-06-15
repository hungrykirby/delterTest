//requestをrequire
var request = require('request');

module.exports.is_login = function(){
  //ヘッダーを定義
  var headers = {
      'Content-Type': 'application/json'
  }

  //オプションを定義
  var options = {
      url: 'https://delter.herokuapp.com/api/is_authenticated',
      method: 'GET',
      headers: headers,
      json: true,
  }

  //リクエスト送信
  request(options, function (error, response, body) {
      //コールバックで色々な処理
      if (!error && response.statusCode == 200) {
          //console.log(body.is_authenticated);
      } else {
          console.log('error: ' + response.statusCode);
      }
  })
  return {
    is_authenticated:body.is_authenticated,
    user: body.user
  }
};
