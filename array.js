// スクレイピングにより配列を一定間隔開けて生成して、追加、削除があった場合その要素を通知する
let url2DA = ["a","b","c","d","e","h"]
console.log(url2DA);

// utilities.sleep(staySecond * 1000);

let url2DB = ["b","c","d","f","g"]
console.log(url2DB);

// 削除された要素を返す a,e,h
  // indexOf()：指定された値が最初に現れたインデックスを返す。値が見つからない場合は -1 を返す
  // 上記は-1が返ってくる=前の配列に存在しない値のため、削除された要素が返ってくる
const arraydel = url2DA.filter(i => url2DB.indexOf(i) == -1)
console.log(arraydel);

// アロー関数使わない場合
const arraydel02 = url2DA.filter(
    function(i){
        return url2DB.indexOf(i) == -1
    }
)
console.log(arraydel02);


// 追加された要素を返す f,g
  // 
const arrayadd = 
console.log(arrayadd);