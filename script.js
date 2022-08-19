const messageContainer = document.querySelector(".messages");
const input = document.querySelector(".send-input");
const sendButton = document.querySelector(".send-button");

sendButton.addEventListener("click", addMessage);
input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addMessage();
    }
});

function addMessage() {
    let messageItem = document.createElement("div");
    messageItem.classList.add("message");
    messageItem.textContent = input.value;
    let cross = document.createElement("i");
    addClass(cross, "cross");
    addClass(cross, "fa-solid");
    addClass(cross, "fa-xmark");
    cross.title = "Удалить сообщение";
    let correction = document.createElement("i");
    addClass(correction, "correction");
    addClass(correction, "fa-solid");
    addClass(correction, "fa-pencil");
    correction.title = "Редактировать сообщение";
    function addOpportunity() {
        messageItem.append(cross);
        messageItem.append(correction);
    }

    if (input.value != "") {
        messageContainer.append(messageItem);
        addOpportunity();
    }
    
    input.value = "";

    cross.addEventListener("click", function () {
        messageItem.remove();
    })

    correction.addEventListener("click", function () {
        let newMessage = prompt("Введите новое сообщение");
        if ((newMessage != "") && (newMessage != null)) {
            messageItem.textContent = newMessage;
            addOpportunity();
        }
    })
}

function addClass(element, className) {
    return element.classList.add(className);
}

