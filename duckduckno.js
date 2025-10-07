console.log('Starting duckduckno.')

// Hides HTML `element`
function yeet (element) {
  element.style.display = 'none'
}

var duckducknoIntervalID = setInterval(duckduckno, 10)

function yeetDuckBar () {
  let elements = []

  //Chat and ai assist top bar buttons
  let topbar = document.getElementById('react-duckbar')
  elements = topbar.getElementsByTagName('li')
  for (let i = 0; i < elements.length; ++i) {
    let text = elements[i].textContent.trim()
    if (
      text == 'Assist' ||
      text == 'Chat' ||
      text == 'Duck.ai' ||
      text == 'Search Assist'
    )
      yeet(elements[i])
  }
}

function duckduckno () {
  let elements = []

  yeetDuckBar()

  // Mainline and Sidebar ai
  elements = document.getElementsByTagName('section')
  let sidebar, mainline
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

  // mobile chat button
  let aiButton = document.getElementById('react-ai-button-slot')
  if (aiButton != null) yeet(aiButton)

  // Ads
  elements = document.getElementsByTagName('li')
  for (let i = 0; i < elements.length; ++i) {
    if (elements[i].getAttribute('data-layout') == 'tours_ads')
      yeet(elements[i])
  }

  // Ask Duck.ai search drop
  elements = document.getElementById('search_form').getElementsByTagName('li')
  for (let i = 0; i < elements.length; ++i) {
    if (elements[i].innerHTML.includes('Duck.ai')) yeet(elements[i])
  }
}
