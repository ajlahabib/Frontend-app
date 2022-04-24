let assert = chai.assert;
describe("Testovi Rasporeda", function () {
    describe("filtrirajTrajanje", function () {
        it("filtriranje trajanja => Tabela se ne mijenja", function () {
            filtrirajTrajanje(200);
            let tabele = document.getElementById("tabl");
            let redovi = tabele.getElementsByTagName("tr");
            var brojac=0;
            for (var i = 0; i < redovi.length; i++) {
                let celije=redovi[i].getElementsByTagName("td");
                for(var j=0;j<celije.length;j++){
                    if((celije[j].textContent.includes('tutorijal'))){
                        brojac++;
                    }
                    if((celije[j].textContent.includes('vježbe'))){
                        brojac++;
                    }
                    if((celije[j].textContent.includes('predavanje'))){
                        brojac++;
                    }
            }
        }
        assert.equal(brojac,10);
        });
        it("filtriranje trajanja => Samo predavanja su veća od 130 ", function () {
            filtrirajTrajanje(130);
             let tabele = document.getElementById("tabl");
             let redovi = tabele.getElementsByTagName("tr");
             var brojac=0;
             for (var i = 0; i < redovi.length; i++) {
                 let celije=redovi[i].getElementsByTagName("td");
                 for(var j=0;j<celije.length;j++){
                     if((celije[j].textContent.includes('vježbe'))){
                         brojac++;
                     }
                     if((celije[j].textContent.includes('tutorijal'))){
                         brojac++;
                     }
             }
         }
         assert.equal(brojac,5);
         });
        it("filtriranje trajanja casova => Tabela je prazna ", function () {
            filtrirajTrajanje(0);
            let tabele = document.getElementById("tabl");
            let redovi = tabele.getElementsByTagName("tr");
            var brojac=0;
            for (var i = 0; i < redovi.length; i++) {
                let celije=redovi[i].getElementsByTagName("td");
                for(var j=0;j<celije.length;j++){
                    if(celije[j].innerHTML==''){
                        brojac++;
                    }
            }
        }
        assert.equal(brojac, 93);
        });
    });
});
