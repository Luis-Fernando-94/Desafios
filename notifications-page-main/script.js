const data = [
    {
        perfil: {
            id: 0,
            image: "avatar-mark-webber.webp",
            name: "Mark Webber"
        },
        action: "reacted to your recent post a",
        linkName: "My first tournament today!",
        time: "1m ago",
        readed: false,
        hasContent: "",
        typeContent: "",
        content: null
    },
    {
        perfil: {
            id: 1,
            image: "avatar-angela-gray.webp",
            name: "Angela Gray"
        },
        action: "followed you",
        linkName: null,
        time: "5m ago",
        readed: false,
        hasContent: "",
        typeContent: "",
        content: null
    },
    {
        perfil: {
            id: 2,
            image: "avatar-jacob-thompson.webp",
            name: "Jacob Thompson"
        },
        action: "has joined your group",
        linkName: "Chess Club",
        time: "1 day ago",
        readed: false,
        hasContent: "",
        typeContent: "",
        content: null
    },
    {
        perfil: {
            id: 3,
            image: "avatar-rizky-hasanuddin.webp",
            name: "Rizky Hasanuddin"
        },
        action: "sent you a private message",
        linkName: null,
        time: "5 days ago",
        readed: true,
        hasContent: "",
        typeContent: "msg",
        content: {
            msg: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
        }
    },
    {
        perfil: {
            id: 4,
            image: "avatar-kimberly-smith.webp",
            name: "Kimberly Smith"
        },
        action: "commented on your picture",
        linkName: null,
        time: "1 week ago",
        readed: true,
        hasContent: "",
        typeContent: "img",
        content: {
            img: "image-chess.webp"
        }
    },
    {
        perfil: {
            id: 5,
            image: "avatar-nathan-peterson.webp",
            name: "Nathan Peterson"
        },
        action: "reacted to your recent post",
        linkName: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
        readed: true,
        hasContent: "",
        typeContent: "",
        content: null
    },
    {
        perfil: {
            id: 6,
            image: "avatar-anna-kim.webp",
            name: "Anna Kim"
        },
        action: "left the group",
        linkName: "Chess Club",
        time: "2 weeks ago",
        readed: true,
        hasContent: "",
        typeContent: "",
        content: null
    }
]

const title = document.getElementsByClassName("title-notification")[0];
const qtd = document.getElementById("qtd");
const card = document.getElementsByClassName("card");
const imageAvatar = document.getElementsByClassName("avatar");


const btnMark = title.parentElement.children[1];

const hC = document.getElementsByClassName("header-card");

document.addEventListener("DOMContentLoaded", () => {

    data.map(res => {

        btnMark.addEventListener("click", () => {
            if (hC[res.perfil.id].lastChild.getAttribute("class") == "unread") {
                hC[res.perfil.id].lastElementChild.remove();
                qtd.style.display = "none";
            } else {
                return qtd.style.display = "none";
            }
        })

    card[res.perfil.id].addEventListener("click", () => {
        let spamUnread = card[res.perfil.id].children[1].children[0].lastChild;

        if (spamUnread.getAttribute("class") == "unread") {

            return spamUnread.remove();
            
        }
    })

    imageAvatar[res.perfil.id].setAttribute("src", imageAvatar[res.perfil.id].getAttribute("src") + data[res.perfil.id].perfil.image);

    const headerCard = card[res.perfil.id].children[1].firstElementChild;

    let aTitle = document.createElement("a");
    aTitle.setAttribute("class", "title-card");
    aTitle.setAttribute("href", "#");
    aTitle.innerText = res.perfil.name;

    headerCard.appendChild(aTitle);

    headerCard.innerHTML += res.action;

    let aLink = document.createElement("a");
    aLink.setAttribute("class", "");
    aLink.setAttribute("href", "#");
    aLink.innerText = res.linkName;

    if (res.linkName == "Chess Club") {
        aLink.setAttribute("class", "link-card link");
    } else {
        aLink.setAttribute("class", "link-card");
    }

    headerCard.appendChild(aLink);

    let pTime = document.createElement("p");
    pTime.setAttribute("class", "time");
    pTime.innerText = res.time;

    headerCard.parentElement.appendChild(pTime);

    let pMsg = document.createElement("p");
    pMsg.setAttribute("class", "msg");
    pMsg.innerText = res.typeContent == "msg" ? res.content.msg : "";

    let aPicture = document.createElement("a");
    aPicture.setAttribute("class", "p-img");
    aPicture.setAttribute("href", "#");

    let postImg = "";

    if (res.typeContent == "img") {
        postImg = res.content.img;
    }

    let imgPicture = document.createElement("img");
    imgPicture.setAttribute("class", "picture");
    imgPicture.setAttribute("src", `./assets/images/${postImg}`);
    imgPicture.setAttribute("alt", "picture");

    aPicture.appendChild(imgPicture);

    let spamUnread = document.createElement("spam");
    spamUnread.setAttribute("class", "unread");

    if (res.readed == false) {
        headerCard.appendChild(spamUnread);
        const unread = document.querySelectorAll(".unread");
        qtd.innerText = unread.length;
    }

    if (res.content == null) {
        res.hasContent = false;
    } else {
        res.hasContent = true;
    }

    if (res.typeContent == "msg") {
        card[res.perfil.id].children[1].appendChild(pMsg);
    } else if (res.typeContent == "img") {
        aboutImg(headerCard, "46px");
        return card[res.perfil.id].children[1].appendChild(aPicture);
    }

})

})

function aboutImg(props, size) {
    props.style.marginRight = size;
}