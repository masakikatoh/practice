// 配列を定義
let array1 = ["a","b","c","d","e","h"]
console.log(array1);

// utilities.sleep(staySecond * 1000);

let array2 = ["b","c","d","f","g"]
console.log(array2);

// 削除された要素を返す 期待する値：a,e,h
/*
  indexOf()：指定された値が最初に現れたインデックスを返す。値が見つからない場合は -1 を返す
  url2DBの1番目から順に、、？

  iは何を示す？
  -1が返ってくる=取得した配列が前の配列に存在しないため、削除された要素が返ってくる
*/
const arraydel = array1.filter(i => array2.indexOf(i) == -1)
console.log(arraydel);

// アロー関数使わない場合
const arraydel02 = array1.filter(
    function(i){
        return array2.indexOf(i) == -1
    }
)
console.log(arraydel02);


// 追加された要素を返す 期待する値：f,g
  // 
const arrayadd = 
console.log(arrayadd);