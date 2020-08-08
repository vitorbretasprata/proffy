let x, i, j, l, ll, selectElement, a, b, c;

x = document.querySelectorAll(".select-block");
l = x.length;

for(i = 0; i < l; i++) {
    selectElement = x[i].querySelector("select");
    ll = selectElement.length;

    a = document.createElement("div");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
    x[i].appendChild(a);

    b = document.createElement("div");
    b.setAttribute("class", "select-items select-hide");

    for(j = 0; j < ll; j++) {
        c = document.createElement("div");
        c.innerHTML = selectElement.options[j].innerHTML;
        c.addEventListener("click", (e) => {
            let y, i, k, s, h, sl, yl;

            s = this.parentNode.parentNode.getElementByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;

            for(i = 0; i < sl; i++) {
                if(s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;

                    h.innerHTML = this.innerHTML;

                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                    y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }

            h.click();

        });
        b.appendChild(c);

    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
}

document.addEventListener("click", closeAllSelect);
