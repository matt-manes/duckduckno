console.log('Starting duckduckno.')

// Hides HTML `element`
function yeet (element) {
  element.style.display = 'none'
}

var intervalID = setInterval(duckduckno, 10)

/* When value is `0`, `duckduckno()` gets executed at every interval.
When the `window.onload` callback gets fired, value is set to `1`.
At the end of `duckduckno()`, if the value is currently `1`, it'll be incremented.
The function will execute one more time then clear the interval.
This allows elements to be hidden more or less as soon as they appear
without the interval triggering as long as the page is open.
Also ensures that the extension will fire even if `window.onload` is overwritten 
at the expense of executing indefinitely (as opposed to clearing the interval in `window.onload`).
*/
var sentinel = 0

function duckduckno () {
  var elements = []

  //Chat and ai assist top bar buttons
  var topbar = document.getElementById('react-duckbar')
  elements = topbar.getElementsByTagName('li')
  for (let i = 0; i < elements.length; ++i) {
    let text = elements[i].textContent.trim()
    if (text == 'Assist' || text == 'Chat') yeet(elements[i])
  }

  // Mainline and Sidebar ai
  elements = document.getElementsByTagName('section')
  var sidebar, mainline
  for (let i = 0; i < elements.length; ++i) {
    let id = elements[i].getAttribute('data-testid')
    if (id == 'sidebar') {
      sidebar = elements[i]
    } else if (id == 'mainline') {
      mainline = elements[i]
    }
  }
  if (mainline != null) {
    elements = mainline.getElementsByTagName('li')
    for (let i = 0; i < elements.length; ++i) {
      if (elements[i].getAttribute('data-layout') == 'wikinlp')
        yeet(elements[i])
      let subelements = elements[i].getElementsByClassName('react-module')
      for (let j = 0; j < subelements.length; ++j) {
        if (subelements[j].getAttribute('data-react-module-id') == 'wikinlp')
          yeet(subelements[j])
      }
    }
  }
  if (sidebar != null) {
    elements = sidebar.getElementsByTagName('button')
    for (let i = 0; i < elements.length; ++i) {
      if (elements[i].getAttribute('title')) {
        yeet(sidebar)
        break
      }
    }
  }

  // ai chat form at bottom of non-ai assist sidebar
  elements = document.getElementsByClassName('js-ask-ai-chat-wrapper')
  for (let i = 0; i < elements.length; ++i) {
    yeet(elements[i])
  }

  if (sentinel == 1) ++sentinel
  else if (sentinel >= 2) {
    clearInterval(intervalID)
    console.log('Stopping duckduckno.')
  }
}

window.addEventListener('load', function () {
  sentinel = 1
})
