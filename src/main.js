import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>検索システム</h1>

    <input
      type="text"
      id="searchInput"
      placeholder="キーワードを入力"
      class="search-input"
    />

    <div class="buttons">
      <button id="matchBtn">ぜんぶ該当する</button>
      <button id="notMatchBtn">ぜんぶ該当しない</button>
    </div>

    <p id="result"></p>
  </div>
`