function myFunction() {
    const URL = "https://**";
    var response = UrlFetchApp.fetch(URL);
    var content = response.getContentText("UTF-8");
    var staySecond = 5;
  
  // Parserライブラリ発動*from~toでスクリプトの抽出範囲を指定する
  let url = Parser.data(content).from('mouseout-&gt;product#resetHeader" href="').to('">').iterate();
  
  let beforeUrl = url
  
  Utilities.sleep(staySecond * 1000);
  
  let afterUrl = url
  
  // 追加された要素を返す
  let added = afterUrl.filter(x => !beforeUrl.includes(x));
  let addedUrls = added.map(added => 'https://**' + added);
  
  // 削除された要素を返す
  let removed = beforeUrl.filter(i => afterUrl.indexOf(i) == -1)
  let removedUrls = removed.map(removed => 'https://**' + removed);
  
  if(added.length!== 0 || removed.length !== 0){
  //slack通知
    let postUrl  = "https://**"
    let userName = " update"   // Slackに通知する時の名前になります
    let addedMessage  = addedUrls.join("\n") // 送信するメッセージ
    let removedMessage  = removedUrls.join("\n") // 送信するメッセージ
  
  // ここで以下をオプションに設定できます
  // username(通知者の名前)
  // icon_emoji(アイコン)
  // text (送信するメッセージ)
      let jsonData = {
        "username" : userName,
        "text" : 
            '追加されたデータ\n'+ addedMessage + '\n' + '削除されたデータ\n'+ removedMessage
      }  
  
   // 上の送信内容を設定  
    let payload = JSON.stringify(jsonData)
  
   // オプションを設定
    let options =
    {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : payload
    };
  
   // Slackに通知する
     UrlFetchApp.fetch(postUrl, options);
  }
  }
  