let assert = chai.assert;
describe("Testovi Rasporeda", function () {
    describe("filtrirajBuduce", function () {
        it("filtriranje dana kad se posalje Subota  => 10 predmeta ", function () {
            filtrirajBuduce("Subota");
               let tabele = document.getElementById("tabl");
               let redovi = tabele.getElementsByTagName("tr");
               var brojac=0;
               for (var i = 0; i < redovi.length; i++) {
                   let celije=redovi[i].getElementsByTagName("td");
                   for(var j=0;j<celije.length;j++){
                       if(!(celije[j].innerHTML=='')){
                           brojac++;
                       }
               }
           }
           assert.notEqual(brojac,20);
           });
       it("filtriranje svih dana koji se nalaze poslije proslijeđenog => Broj prikazanih 9", function () {
            filtrirajBuduce("Četvrtak");
            let tabele = document.getElementById("tabl");
            let redovi = tabele.getElementsByTagName("tr");
            var brojac=0;
            for (var i = 0; i < redovi.length; i++) {
                let celije=redovi[i].getElementsByTagName("td");
                for(var j=0;j<celije.length;j++){
                    if(!(celije[j].innerHTML=='')){
                        brojac++;
                    }
            }
        }
        assert.equal(brojac, 9);
        });
        it("filtriranje dana poslije ponedjeljka => prikazuju se WT i RMA predavanje", function () {
            filtrirajBuduce("Ponedjeljak");
            let tabele = document.getElementById("tabl");
            let redovi = tabele.getElementsByTagName("tr");
            var brojac=0;
            for (var i = 0; i < redovi.length; i++) {
                let celije=redovi[i].getElementsByTagName("td");
                for(var j=0;j<celije.length;j++){
                    if(celije[j].textContent.includes('WT') || celije[j].textContent.includes('RMApredavanje')){
                        brojac++;
            }
        }
    }
        assert.equal(brojac,3);
        });
    })
});
