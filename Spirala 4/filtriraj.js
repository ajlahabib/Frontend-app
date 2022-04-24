function filtrirajPredmet(el){
    let tabele = document.getElementById("tabl");
    let redovi = tabele.getElementsByTagName("tr");
    for (var i = 0; i < redovi.length; i++) {
        let celije=redovi[i].getElementsByTagName("td");
        for(var j=0;j<celije.length;j++){
            if(!(celije[j].textContent.includes(el))){
            celije[j].innerHTML = '';
            }
    }
}
}
function filtrirajTip(el){
    let tabele = document.getElementById("tabl");
    let redovi = tabele.getElementsByTagName("tr");
    for (var i = 0; i < redovi.length; i++) {
        let celije=redovi[i].getElementsByTagName("td");
        for(var j=0;j<celije.length;j++){
            if(!(celije[j].textContent.includes(el))){
            celije[j].innerHTML = '';
            }
    }
}
}
function filtrirajTrajanje(el){
    let pr="predavanje";
    let vj="vježbe";
    let tut="tutorijal";
    let tabele = document.getElementById("tabl");
    let redovi = tabele.getElementsByTagName("tr");
    for (var i = 0; i < redovi.length; i++) {
        let celije=redovi[i].getElementsByTagName("td");
        for(var j=0;j<celije.length;j++){
            //ako je 0 sve se briše
            if(el===0){
                    celije[j].innerHTML = '';
            }
            //ako je manje od 90 sve je veće
           else if(el<90){
            celije[j].innerHTML = '';
            }
            //ako je veće od 180 sve je manje
            else if(el>180){
                return;
                }
                //veća su samo predavanja
            else if(el>120 && el<=180){
                if((celije[j].textContent.includes(pr))){
                    celije[j].innerHTML = '';
                    }
        }
        //veći su tutorijali i predavanja
            else if(el>=90 && el<=180){
            if((celije[j].textContent.includes(pr))){
                celije[j].innerHTML = '';
                }
            if((celije[j].textContent.includes(tut))){
                    celije[j].innerHTML = '';
              }
        }
}
}
}
function filtrirajProslo(el){
    let pon="Ponedjeljak";
    let uto="Utorak";
    let sri="Srijeda";
    let čet="Četvrtak";
    let pet="Petak";
    let tabele = document.getElementById("tabl");
    let redovi = tabele.getElementsByTagName("tr");
    for (var i = 0; i < redovi.length; i++) {
        let celije=redovi[i].getElementsByTagName("td");
        for(var j=0;j<celije.length;j++){
            if(el===pon || (el!==uto && el!==sri && el!==čet && el!==pet)){
                return;
            }
            else if(el==uto){
                if(celije[j].textContent.includes('WT') && !(celije[j].textContent.includes('BWT'))){
                    celije[j].innerHTML = '';
                    }
                    if(celije[j].textContent.includes('RMApredavanje')){
                        celije[j].innerHTML = '';
                        }
            }
            else if(el==sri){
                     if(celije[j].textContent.includes('WT') && !(celije[j].textContent.includes('BWT'))){
                      celije[j].innerHTML = '';
                     }
                      if(celije[j].textContent.includes('RMA')){
                     celije[j].innerHTML = '';
                     }
                    if(celije[j].textContent.includes('DM')){
                    celije[j].innerHTML = '';
                    }
                }
            else if(el==čet){
                  if((celije[j].textContent.includes('WT') && !(celije[j].textContent.includes('BWT')))){
                   celije[j].innerHTML = '';
                 }
                if(celije[j].textContent.includes('RMA')){
                    celije[j].innerHTML = '';
                 }
                 if(celije[j].textContent.includes('DM')){
                  celije[j].innerHTML = '';
                 }
                 if(celije[j].textContent.includes('OI')){
                celije[j].innerHTML = '';
                 }
                if(celije[j].textContent.includes('NOVO')){
                celije[j].innerHTML = '';
                }
            }
            else if(el==pet){
                 if((celije[j].textContent.includes('WT'))){
                         celije[j].innerHTML = '';
                }
                   if(celije[j].textContent.includes('RMA')){
                         celije[j].innerHTML = '';
                }
               if(celije[j].textContent.includes('DM')){
                          celije[j].innerHTML = '';
                }
                 if(celije[j].textContent.includes('OI')){
                         celije[j].innerHTML = '';
                  }
                 if(celije[j].textContent.includes('NOVO')){
                 celije[j].innerHTML = '';
                   }
                   if((celije[j].textContent.includes('BWT'))){
                    celije[j].innerHTML = '';
                 }
            }
        }
    }
}
function filtrirajBuduce(el){
    let pon="Ponedjeljak";
    let uto="Utorak";
    let sri="Srijeda";
    let čet="Četvrtak";
    let pet="Petak";
    let tabele = document.getElementById("tabl");
    let redovi = tabele.getElementsByTagName("tr");
    for (var i = 0; i < redovi.length; i++) {
        let celije=redovi[i].getElementsByTagName("td");
        for(var j=0;j<celije.length;j++){
            if(el===pet || (el!==uto && el!==sri && el!==čet && el!==pon)){
                return;
            }
            else if(el==pon){
                  if(celije[j].textContent.includes('RMA vježbe')){
                        celije[j].innerHTML = '';
               }
              if(celije[j].textContent.includes('DM')){
                         celije[j].innerHTML = '';
               }
                if(celije[j].textContent.includes('OI')){
                        celije[j].innerHTML = '';
                 }
                if(celije[j].textContent.includes('NOVO')){
                celije[j].innerHTML = '';
                  }
                  if((celije[j].textContent.includes('BWT'))){
                   celije[j].innerHTML = '';
                }
                if((celije[j].textContent.includes('MUR'))){
                    celije[j].innerHTML = '';
                 }
           }
            else if(el==uto){
                if(celije[j].textContent.includes('OI')){
                    celije[j].innerHTML = '';
                  }
                  if(celije[j].textContent.includes('NOVO')){
                  celije[j].innerHTML = '';
                   }
                  if((celije[j].textContent.includes('BWT'))){
               celije[j].innerHTML = '';
                 }
                 if((celije[j].textContent.includes('MUR'))){
                        celije[j].innerHTML = '';
                 }
            }
            else if(el==sri){
                if((celije[j].textContent.includes('BWT'))){
                    celije[j].innerHTML = '';
                      }
                      if((celije[j].textContent.includes('MUR'))){
                             celije[j].innerHTML = '';
                      }
                }
            else if(el==čet){
                if((celije[j].textContent.includes('MUR'))){
                    celije[j].innerHTML = '';
             }
            }
        }
    }
}