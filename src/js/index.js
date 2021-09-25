let mockMouseAutoClick = true
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
            if (e.target.checked) {
                SetCheckedCheckBoxLessThanTwo(e.target.getAttribute('data-number'))
            }
        })
    }
}
const Init = () => {
    setTimeout(() => {
        $('body').mousedown(StopMockMouseAutoClick)
        SetCheckBoxListener()
    }, 1000)
}
const SetCheckedCheckBoxLessThanTwo = (number) => {
    let checkedCheckBoxArray = GetCheckedCheckBoxArray().filter(e => e[0].getAttribute('data-number') != number)
    if (checkedCheckBoxArray.length <= 1) {
        return
    }
    let randomInt = Math.floor(Math.random() * 2)
    SetCheckBox(checkedCheckBoxArray[randomInt], false)
}
Init()
