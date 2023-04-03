// 設定模擬滑鼠自動點擊為 true
let mockMouseAutoClick = true
let root = undefined
let rootStyles = undefined
let activeColor = undefined
let inactiveColor = undefined

// 停止模擬滑鼠自動點擊
const StopMockMouseAutoClick = () => {
    mockMouseAutoClick = false
}

// 開始模擬滑鼠自動點擊
const StartMockMouseAutoClick = () => {
    if (!mockMouseAutoClick) {
        return
    }
    setTimeout(() => {
        StartMockMouseAutoClick()
    }, 1000);
}

// 設定 checkbox 狀態
const SetCheckBox = (target, bool) => {
    target.prop('checked', bool)
}

// 取得已勾選的 checkbox 陣列
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

// 設定 checkbox 監聽事件
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

// 初始化
const Init = () => {
    setTimeout(() => {
        $('body').mousedown(StopMockMouseAutoClick)
        SetCheckBoxListener()
        GetCssStyle()
        $('#topCheckBox').prop('checked', false)
        $('#leftCheckBox').prop('checked', false)
        $('#rightCheckBox').prop('checked', false)
    }, 100)
}
const SetCheckedCheckBoxLessThanTwo = (number) => {

// 設定勾選的 checkbox 小於等於 2
const SetCheckedCheckBoxLessThanTwo= (number) => {
    let checkedCheckBoxArray = GetCheckedCheckBoxArray().filter(e => e[0].getAttribute('data-number') != number)
    if (checkedCheckBoxArray.length <= 1) {
        return
    }
    let randomInt = Math.floor(Math.random() * 2)
    SetCheckBox(checkedCheckBoxArray[randomInt], false)
}

// 設定子標題
const SetSubTitle = () => {
    if ($('#topCheckBox').prop('checked')) {
        $(".switchSubTitleBotttom").hide()
        SetTitleActiveColor($(".switchTitleTop"), true)
    } else {
        $(".switchSubTitleBotttom").show()
        SetTitleActiveColor($(".switchTitleTop"), false)
    }
    if ($('#leftCheckBox').prop('checked')) {
        $(".switchSubTitleRight").hide()
        SetTitleActiveColor($(".switchTitleLeft"), true)
    } else {
        $(".switchSubTitleRight").show()
        SetTitleActiveColor($(".switchTitleLeft"), false)
    }
    if ($('#rightCheckBox').prop('checked')) {
        $(".switchSubTitleLeft").hide()
        SetTitleActiveColor($(".switchTitleRigth"), true)
    } else {
        $(".switchSubTitleLeft").show()
        SetTitleActiveColor($(".switchTitleRigth"), false)
    }
}

// 設定標題顏色
const SetTitleActiveColor = (target, active) => {
    let color = active ? activeColor : inactiveColor
    target.css('color', color)
}

// 取得 CSS 樣式
const GetCssStyle = () => {
    root = document.querySelector(':root')
    rootStyles = getComputedStyle(root)
    activeColor = rootStyles.getPropertyValue('--color-title-active')
    inactiveColor = rootStyles.getPropertyValue('--color-title-imactive')
}

// 執行初始化
Init()

// 說明介紹：
// 這份程式碼是一個簡單的網頁互動效果，當使用者勾選不同的 checkbox 時，會顯示不同的子標題，並改變標題的顏色。
// 程式碼中還有一些其他的功能，例如模擬滑鼠自動點擊、設定 checkbox 狀態等等。
