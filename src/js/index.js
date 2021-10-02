let mockMouseAutoClick = true
let root = undefined
let rootStyles = undefined
let activeColor = undefined
let inactiveColor = undefined

const StopMockMouseAutoClick = () => {
    mockMouseAutoClick = false
}
const StartMockMouseAutoClick = () => {
    if (!mockMouseAutoClick) {
        return
    }
    setTimeout(() => {
        StartMockMouseAutoClick()
    }, 1000);
}
const SetCheckBox = (target, bool) => {
    target.prop('checked', bool)
}
const GetCheckedCheckBoxArray = () => {
    let checkBoxCheckeds = []
    if ($('#topCheckBox').prop('checked')) {
        checkBoxCheckeds.push($('#topCheckBox'))
    }
    if ($('#leftCheckBox').prop('checked')) {
        checkBoxCheckeds.push($('#leftCheckBox'))
    }
    if ($('#rightCheckBox').prop('checked')) {
        checkBoxCheckeds.push($('#rightCheckBox'))
    }
    return checkBoxCheckeds
}
const SetCheckBoxListener = () => {
    const input = document.querySelectorAll('.checkBox')
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('change', e => {
            SetSubTitle()
            if (e.target.checked) {
                SetCheckedCheckBoxLessThanTwo(e.target.getAttribute('data-number'))
                SetSubTitle()
            }
        })
    }
}
const Init = () => {
    setTimeout(() => {
        $('body').mousedown(StopMockMouseAutoClick)
        SetCheckBoxListener()
        GetCssStyle()
    }, 100)
}
const SetCheckedCheckBoxLessThanTwo = (number) => {
    let checkedCheckBoxArray = GetCheckedCheckBoxArray().filter(e => e[0].getAttribute('data-number') != number)
    if (checkedCheckBoxArray.length <= 1) {
        return
    }
    let randomInt = Math.floor(Math.random() * 2)
    SetCheckBox(checkedCheckBoxArray[randomInt], false)
}
const SetSubTitle = () => {
    if ($('#topCheckBox').prop('checked')) {
        $(".switchSubTitleBotttom").hide()
        ;[($(".switchTitleTop")), ($(".switchSubTitleLeft")), ($(".switchSubTitleRight"))]
            .forEach(e => SetTitleActiveColor(e, true))
    } else {
        $(".switchSubTitleBotttom").show()
        ;[($(".switchTitleTop")), ($(".switchSubTitleLeft")), ($(".switchSubTitleRight"))]
            .forEach(e => SetTitleActiveColor(e, false))
    }
    if ($('#leftCheckBox').prop('checked')) {
        $(".switchSubTitleRight").hide()
    } else {
        $(".switchSubTitleRight").show()
    }
    if ($('#rightCheckBox').prop('checked')) {
        $(".switchSubTitleLeft").hide()
    } else {
        $(".switchSubTitleLeft").show()
    }
}
const SetTitleActiveColor = (target, active) => {
    let color = active ? activeColor : inactiveColor
    target.css('color', color)
}
const GetCssStyle = () => {
    root = document.querySelector(':root')
    rootStyles = getComputedStyle(root)
    activeColor = rootStyles.getPropertyValue('--color-title-active')
    inactiveColor = rootStyles.getPropertyValue('--color-title-imactive')
}

Init()
