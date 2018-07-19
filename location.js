document.querySelector('#places').classList.add('js-enabled')

const placesInputs = document.querySelectorAll('#places input')
const placeName = document.querySelector('#placeName');
const placeAddress = document.querySelector('#placeAddress');

placeName.addEventListener('keyup', function (e) {
  const key = e.which || e.keyCode;
  if (key === 13 ) {
    e.preventDefault()// 13 is enter
    if (document.querySelectorAll('#places input.js-active').length !== 1) return
    const str = placeName.value.toLowerCase();
    const result = document.querySelector('#places input.js-active')
    result.checked = true
    placeName.value = result.dataset.name
    placeAddress.value = result.dataset.address
    placeAddress.disabled = true
    placesInputs.forEach((el) => el.classList.remove('js-active'))
    return
  }

  const str = placeName.value.toLowerCase();
  placesInputs.forEach(function (place) {
    const placeText = place.dataset.name.toLowerCase() + '|' + place.dataset.address.toLowerCase()
    if (str.length > 2 && placeText.indexOf(str)>-1) {
      place.classList.add('js-active')
    } else {
      place.classList.remove('js-active')
      place.checked = false
      placeAddress.disabled = false
      placeAddress.value = ''
    }
  })
})

const handleClick = (e) => {
  if (e.target.checked) {
    placeName.value = e.target.dataset.name
    placeAddress.value = e.target.dataset.address
    placeAddress.disabled = true
    placesInputs.forEach(el => el.classList.remove('js-active'))
    document.querySelector('#places').classList.remove('js-active')
  }
}

placesInputs.forEach(el => el.addEventListener('click', handleClick))

document.querySelector('#showPlaces').addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e);
  document.querySelector('#places').classList.toggle('js-active')
})
