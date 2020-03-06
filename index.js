/*
ULOHA:

- sledovanie klikov na vsetky elementy v dokumente
- ak podrzim SHIFT a kliknem, do konzoly vypisat kolko krat som klikol na dany element
- ak slacim medzernik, do konzoly vypisat celkovy pocet kliknuti do dokumentu

 */


function handleClick (event) {
  let element = event.target
  while (element && (element.tagName !== 'A')) {
    element = element.parentNode
  }

  if (element) {
    console.log('Oklikal si ma.', element.textContent)
  }

}

document.querySelector('#links')
  .addEventListener('click', handleClick)



function handleSubmit (event) {
  if (document.querySelector('#textInput').value === '') {
    console.log('invalid')
    event.preventDefault()
  }
}

document.querySelector('#myForm')
  .addEventListener('submit', handleSubmit)


const generalElement = document.querySelector('#myElement')

generalElement.addEventListener('click', function (event) {
  console.log('click', event)
})

generalElement.addEventListener('dblclick', function () {
  // console.log('doubleclick')
})


const textInput = document.querySelector('#textInput')

// textInput.addEventListener('keydown', function () {
//   console.log('key down')
// })
//
// textInput.addEventListener('keyup', function (event) {
//   console.log('key up', event)
// })
//
// textInput.addEventListener('keypress', function () {
//   console.log('key press')
// })

textInput.addEventListener('input', function () {
  console.log('input')
})
textInput.addEventListener('change', function () {
  console.log('change')
})


const hierarchy = document.querySelector('#hierarchy')

hierarchy.addEventListener('mouseenter', function () {
  console.log('mouse enter')
})

hierarchy.addEventListener('mouseleave', function () {
  console.log('mouse leave')
})
