let x, i, j, selectElement, a, b, c;

x = document.querySelectorAll(".select-block");

for(i = 0; i < x.length; i++) {
    selectElement = x[i].querySelector("select");

    a = document.createElement("div");
    a.setAttribute("class", "select-element-selected");
    a.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
    x[i].appendChild(a);

    b = document.createElement("div");
    b.setAttribute("class", "select-items select-hidden");

    for(j = 0; j < selectElement.length; j++) {
        c = document.createElement("div");

        c.innerHTML = selectElement.options[j].innerHTML;
        c.addEventListener("click", (e) => {
            let y, i, k, s, h, yl;

            s = e.target.parentNode.parentNode.querySelector("select");

            h = e.target.parentNode.previousSibling;

            for(i = 0; i < s.length; i++) {
                if(s.options[i].innerHTML == e.target.innerHTML) {
                    s.selectedIndex = i;

                    h.innerHTML = e.target.innerHTML;

                    y = e.target.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                      y[k].removeAttribute("class");
                    }
                    e.target.setAttribute("class", "same-as-selected");
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
        this.nextSibling.classList.toggle("select-hidden");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-element-selected");
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
        x[i].classList.add("select-hidden");
      }
    }
}

document.addEventListener("click", closeAllSelect);
