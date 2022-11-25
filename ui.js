function handlNav(e) {
    if (e.target.tagName === 'BUTTON') {
        //     if (nav.firstElementChild === e.target) {
        //         console.log(e.target)
        //     } else {
        //         console.log(e.target)  
        //     }
        for (const btn of nav.children) {
            btn.style.backgroundColor = ''
        }
        for (const tab of tabs) {
            tab.style.display = 'none'
        }
        if (e.target.className === 'training-keyboard') {
            e.target.style.backgroundColor = 'red'
            tabs[0].style.display = ''
        } else if (e.target.className === 'settings') {
            e.target.style.backgroundColor = 'red'
            tabs[1].style.display = ''
        } else {
            e.target.style.backgroundColor = 'red'
            tabs[2].style.display = ''
            renderData(precisionData, precisionContainer)
        }
    }
}

function handlReset() {
    const container = concreteErrors.firstElementChild
    clearContainer(container)
    concreteErrors.style.display = 'none'
    errorCount.innerText = '0'
}

function handleDropdown(event) {
    // exerciseText = trainingText.innerText = 'Default text'
    if (event.target.textContent === 'JAVASCRIPT') {
        textarea.value = shuffleArr(javascript)
        addText.disabled = false
    } else if (event.target.textContent === 'HTML') {
        textarea.value = shuffleArr(html)
        addText.disabled = false
    } else if (event.target.textContent === 'CSS') {
        textarea.value = shuffleArr(css)
        addText.disabled = false
    }
}

function handleRepeat(e) {
    trainingText.innerText = exerciseText
}

function handlInput() {
    const text = textarea.value.trim()
    if (text.length > 0) {
        textarea.value = text
        addText.disabled = false
    } else {
        addText.disabled = true
    }
}

function handleAddText() {
    exerciseText = trainingText.innerText = textarea.value
    textarea.value = ''
    addText.disabled = true
    totalCount.innerText = trainingText.innerText.length
    initPrecisionData(trainingText.innerText)
    drawPictures(exerciseText[0])    
}

function closeModal() {
    modal.parentElement.style.display = 'none'
}
