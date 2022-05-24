// Add some mediaQueries

const container = document.querySelector('.container')
const gallery = document.querySelector('.gallery')
const popup = document.querySelector('.popup')
const imgSelected = document.querySelector('.imgSelected')
const imgIndex = [1,2,3,4,5,6,7,8]
const selectedIndex = null

imgIndex.forEach(imgNumber => {
  const image = document.createElement('img')
  image.classList.add('imgGallery')
  image.src = `/images/char-img-${imgNumber}.jpg`
  image.alt = `Character Avatar ${imgNumber}`

  image.addEventListener('click', () => {
    popup.style.transform = `translateY(0)`
    imgSelected.src = `/images/char-img-${imgNumber}.jpg`
  })

  image.addEventListener('click', () => {
    gallery.id = 'freezeGallery'
  })

  gallery.appendChild(image)
})  

popup.addEventListener('click', () => {
  popup.style.transform = `translateY(-150%)`
  gallery.removeAttribute('id')
})



