var currentChatBtn = null;
var AllBtns;
var minLeft = 50;
var minWidth = 360;
var maxWidth = 1400;
var minHeight = 80;
var maxHeight = 900;
var universalTop = 0;
var slideComplete = false;
var close = false;
var _left;
var sidePanel = null;
var sidePanelVisibility = false;
var sidePanel_marginLeft = -100;

function sideBarClick(t) {
    sidePanelVisibility = t;
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

function ChatsScroll(event) {
    // if (checkScrollDirectionIsUp(event)) {
    //     console.log('UP');
    //     universalTop -= 30;
    //     if (universalTop < 0)
    //         universalTop = 0;
    // } else {
    //     console.log('Down');
    //     universalTop += 30;
    // }
}

function closeCurrent() {
    currentChatBtn = null;
    close = true;
}

function ClickedChat(btn) {
    if (currentChatBtn == btn || close)
        return;
    _top = parseInt(btn.style.top.replace("px", ""));
    _left = minLeft;
    _height = 80;
    _width = minWidth;
    slideComplete = false;
    currentChatBtn = btn;
    btn.alpha = 0;
}

function INIT() {
    AllBtns = document.getElementById("_container").children;
    _top = 0;
    for (let index = 0; index < AllBtns.length; index++) {
        const element = AllBtns[index];
        element.addEventListener("wheel", event => {
            ChatsScroll(event);
        })
        element.alpha = 1;
        _top = (index * 90) + 15;
        element.style.top = _top + "px";
    }

    document.getElementById("chatScroller").addEventListener("wheel", event => {
        ChatsScroll(event);
    })
    sidePanel = document.getElementById("sidePanel");
}
setInterval(AnimateChat, 20);

function AnimateChat() {
    close = false;
    maxHeight = window.innerHeight - 30;
    maxWidth = window.innerWidth - 445;
    __width = 0;
    __height = 0;
    __top = 0;
    __f_top = 0;
    __left = 0;
    for (let index = 0; index < AllBtns.length; index++) {
        const element = AllBtns[index];
        if (currentChatBtn != element) {
            element.alpha += 0.05;
            if (element.alpha > 1)
                element.alpha = 1;
            __width = parseInt(element.style.width.replace("px", ""));
            __width -= 80;
            if (__width < minWidth)
                __width = minWidth;

            __height = parseInt(element.style.height.replace("px", ""));
            __height -= 80;
            if (__height < minHeight)
                __height = minHeight;

            __top = parseInt(element.style.top.replace("px", ""));
            __top += 20;
            __f_top = (index * 90) + 15;
            if (__top > __f_top)
                __top = __f_top;

            element.style.top = element.alpha * (__top + universalTop) + "px";
            element.style.width = __width + "px";
            element.style.height = __height + "px";

            if (__top == __f_top && __width == minWidth && __height == 80) {
                __left = parseInt(element.style.left.replace("px", ""));
                __left -= 40;
                if (__left < minLeft)
                    __left = minLeft;
                element.style.left = __left + "px";
            }
        }
    }
    if (currentChatBtn != null) {
        if (slideComplete) {
            _top -= 20;
            _height += 40;
            _width += 40;
            if (_height > maxHeight)
                _height = maxHeight;
            if (_width > maxWidth)
                _width = maxWidth;
            if (_top < 15)
                _top = 15;

            currentChatBtn.style.height = _height + "px";
            currentChatBtn.style.width = _width + "px";
            currentChatBtn.style.top = (_top) + "px";
        }
        else {
            _left += 40;
            if (_left > 430) {
                _left = 430
                slideComplete = true;
            }
            currentChatBtn.style.left = _left + "px";
        }
    }

    if (sidePanelVisibility) {
        sidePanel_marginLeft += 5;
        if (sidePanel_marginLeft > 0)
            sidePanel_marginLeft = 0;
    }
    else {
        sidePanel_marginLeft -= 5;
        if (sidePanel_marginLeft < -100)
            sidePanel_marginLeft = -100;
    }

    sidePanel.style.marginLeft = sidePanel_marginLeft + "%";
}