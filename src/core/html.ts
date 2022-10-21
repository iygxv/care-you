export default function getWebviewContent(): string {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    body {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: left;
      align-items: center;
      background: rgb(243, 243, 243);
    }
    .care-you-container {
      display: flex;
      justify-content: left;
      margin-top: 20px;
      /* align-items: center; */
    }
    .care-you-container img {
      width: 40px;
      height: 40px;
      display: block;
      margin-right: 15px;
    }
    .care-you-text {
      background-color: #fff;
      border-radius: 4px;
      font-size: 16px;
      line-height: 24px;
      padding: 8px 10px;
      color: #333;
      box-sizing: border-box;
      position: relative;
    }
   .care-you-text::before{
    color: #fff;
		content: '';
		width: 0;
		height: 0;
		border: 6px solid;
		position: absolute;
    top: 12px;
    left: -12px;
		border-color: transparent #fff  transparent transparent;
	}
   .care-you-text::after{
    color: #fff;
		content: '';
		width: 0;
		height: 0;
		border: 6px solid;
		position: absolute;
    top: 12px;
    left: -12px;
    border-color: transparent #fff transparent transparent;
    }
  </style>
  <body>
    <!-- <h1>测试</h1> -->
    <div class="care-you-page">
    </div>
  </body>
  <script>
     const text = [
      '是不是又没休息,哼',
      '要休息了, 多喝点水, 不要总是在座位上',
      '动一动, 缓解一下疲劳'
    ];
    function createCareYouContainer(str) {
      const container = document.createElement('div')
      const img = document.createElement('img')
      const text = document.createElement('div')
      container.className = 'care-you-container'
      text.className = 'care-you-text'
      text.innerHTML = str
      img.src = 'https://codevity.top/avatar.jpg'
      container.appendChild(img)
      container.appendChild(text)
      return container
    }
    const page = document.querySelector('.care-you-page')
    const careYouContainer = document.createDocumentFragment()
    for (let i = 0; i < text.length; i++) {
      const careYouContainerItem = createCareYouContainer(text[i])
      careYouContainer.appendChild(careYouContainerItem)
    }
    page.appendChild(careYouContainer)
    const careYouTextAll = document.querySelectorAll('.care-you-text')
    for (let i = 0; i < careYouTextAll.length; i++) {
      const item = careYouTextAll[i]
      item.offsetWidth = 100
      if(item.offsetWidth >= 256) {
        item.style.width = 232 + 'px'
      }
      console.log(item.offsetWidth);
    }
  </script>
</html>
  `;
}