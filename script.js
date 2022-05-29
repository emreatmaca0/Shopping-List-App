document.addEventListener('keypress', logKey);


function logKey(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        if (document.activeElement == document.getElementById("alan")) {
            ekle();
        }
        else if (document.activeElement.tagName == "SPAN") {
            if (document.activeElement.parentElement.nextSibling.firstChild.classList.contains("is-success")) {
                document.activeElement.parentElement.nextSibling.firstChild.innerHTML = "Düzenle";
                document.activeElement.parentElement.nextSibling.firstChild.classList.add("is-warning");
                document.activeElement.parentElement.nextSibling.firstChild.classList.remove("is-success");
                document.activeElement.contentEditable = "false";
            }
        }
    }
}



function ekle() {
    if (document.getElementById("alan").value.length != 0) {
        document.getElementById("alan").classList.remove("is-danger");
        var ekleme = document.createElement("div");
        ekleme.classList.add("is-flex", "is-justify-content-space-between", "bolum");
        var buttonalan = document.createElement("button");
        buttonalan.classList.add("button", "is-white", "is-size-5");
        ekleme.appendChild(buttonalan);
        var buttons = document.createElement("div");
        buttons.classList.add("buttons");
        ekleme.appendChild(buttons);
        for (let index = 1; index < 1000; index++) {
            if (document.getElementById("yazialan" + index) == null) {
                var yazialan = document.createElement("span");
                yazialan.innerHTML = document.getElementById("alan").value;
                yazialan.setAttribute("id", "yazialan" + index);
                buttonalan.appendChild(yazialan);
                var duzenlebutton = document.createElement("button");
                duzenlebutton.classList.add("button", "is-warning", "duzenleuyari");
                duzenlebutton.setAttribute("id", "duzenle" + index);
                duzenlebutton.innerHTML = "Düzenle";
                buttons.appendChild(duzenlebutton);
                var silbutton = document.createElement("button");
                silbutton.classList.add("button", "is-danger");
                silbutton.setAttribute("id", "sil" + index);
                silbutton.innerHTML = "Sil";
                buttons.appendChild(silbutton);
                duzenlebutton.addEventListener("click", function () {
                    if (duzenlebutton.innerHTML == "Düzenle") {
                        duzenlebutton.innerHTML = "Kaydet";
                        duzenlebutton.classList.add("is-success");
                        duzenlebutton.classList.remove("is-warning")
                        yazialan.contentEditable = "true";
                        yazialan.focus();
                    }
                    else {
                        duzenlebutton.innerHTML = "Düzenle";
                        duzenlebutton.classList.add("is-warning");
                        duzenlebutton.classList.remove("is-success");
                        yazialan.contentEditable = "false";
                    }
                });
                silbutton.addEventListener("click", function () {
                    ekleme.remove();
                });
                ekleme.setAttribute("id", "bolum" + index);
                document.getElementById("bolumler").appendChild(ekleme);
                document.getElementById("alan").value = "";
                break;
            }
        }
    }
    else document.getElementById("alan").classList.add("is-danger");
}
