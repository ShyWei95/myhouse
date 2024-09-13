const myImage = document.querySelector('img')
myImage.onclick = () => {
  const src = myImage.getAttribute('src')
  if (src.includes('paopao')) {
    myImage.setAttribute('src', 'images/1.jpeg')
  } else {
    myImage.setAttribute('src', 'images/paopao.jpg')
  }
}
