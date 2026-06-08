import './style.css'

const params = new URLSearchParams(window.location.search)

const shopName = params.get('name')

document.querySelector('#app').innerHTML = `
<div class="container">

  <h1>${shopName}</h1>

  <img
    src="https://picsum.photos/600/300"
    alt="店舗画像"
    class="shop-image"
  >

  <div class="shop-detail">

    <p>⭐ 店名：""</p

    <p>📍住所：""</p>

    <p>🕒営業時間：""</p>

    <p>☎ 定休日：""</p>

    <p>店舗説明：""</p>

  </div>

  <a
    href=""
    target="_blank"
    class="detail-button"
  >
    地図を見る
  </a>

  <br><br>

  <a
    href="/result.html"
    class="back-button"
  >
    ← 検索結果へ戻る
  </a>

</div>
`