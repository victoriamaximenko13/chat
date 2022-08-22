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
   
   
    const cross = make({
        tagName: "i",
        classes: ["cross", "fa-solid", "fa-xmark"],
        attributes: { title: "Удалить" },
      });

      const correction = make({
        tagName: "i",
        classes: [ 'correction', 'fa-solid', 'fa-pencil'],
        attributes: { title: "Редактировать" },
      });

   
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
        const newMessage = prompt("Введите новое сообщение");
        if (newMessage != "" && newMessage != null) {
            messageItem.textContent = newMessage;
            addOpportunity();
        }
    })
}


const make = ({tagName, classes = [], attributes = {}}) => {
    const el = document.createElement(tagName);
    
    if (Array.isArray(classes)) {
        el.classList.add(...classes);
    } else {
        el.classList.add(classes)
    }

    for (let attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }
    return el;
};

