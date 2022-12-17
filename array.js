// スクレイピングにより配列を一定間隔開けて生成して、追加、削除があった場合その要素を通知したい
let url2DA = ["a","b","c","d","e","h"]
console.log(url2DA);

// utilities.sleep(staySecond * 1000);

let url2DB = ["b","c","d","f","g"]
console.log(url2DB);

// 削除された要素を返す a,e,h
const arraydel = url2DA.filter(i => url2DB.indexOf(i) == -1)
console.log(arraydel);

// 追加された要素を返す f,g
const arrayadd = url2DA.filter(i => url2DB.indexOf(i) == 1)
console.log(arrayadd);