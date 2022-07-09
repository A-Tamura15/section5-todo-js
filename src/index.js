import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン生成
  const comp_btn = document.createElement("button");
  comp_btn.innerText = "完了";
  comp_btn.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(comp_btn.parentNode);

    // 完了リストに追加する要素
    const addTarget = comp_btn.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // 戻るボタン生成
    const return_btn = document.createElement("button");
    return_btn.innerText = "戻す";
    return_btn.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を未完了リストから削除
      const deleteTarget = return_btn.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // TODO内容テキストを取得
      const text = return_btn.parentNode.firstElementChild.innerText;
      console.log(text);
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(return_btn);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン生成
  const del_btn = document.createElement("button");
  del_btn.innerText = "削除";
  del_btn.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(del_btn.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(comp_btn);
  div.appendChild(del_btn);
  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
