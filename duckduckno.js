var intervalId = setInterval(duckduckno, 100)
function duckduckno () {
  var elements

  //Chat and ai assist top bar buttons
  var topbar = document.getElementById('react-duckbar')
  elements = topbar.getElementsByTagName('li')
  for (let i = 0; i < elements.length; ++i) {
    let text = elements[i].textContent.trim()
    if (text == 'Assist' || text == 'Chat') elements[i].remove()
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
        elements[i].remove()
      let subelements = elements[i].getElementsByClassName('react-module')
      for (let j = 0; j < subelements.length; ++j) {
        if (subelements[j].getAttribute('data-react-module-id') == 'wikinlp')
          subelements[j].remove()
      }
    }
  }
  if (sidebar != null) {
    elements = sidebar.getElementsByTagName('button')
    for (let i = 0; i < elements.length; ++i) {
      if (elements[i].getAttribute('title')) {
        sidebar.remove()
        break
      }
    }
  }

  // ai chat form at bottom of non-ai assist sidebar
  elements = document.getElementsByClassName('js-ask-ai-chat-wrapper')
  for (let i = 0; i < elements.length; ++i) {
    elements[i].remove()
  }
}
