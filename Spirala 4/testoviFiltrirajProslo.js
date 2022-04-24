let assert = chai.assert;
describe("Testovi Rasporeda", function () {
    describe("filtrirajProslo", function () {
       it("filtriranje svih dana koji se nalaze prije proslijeđenog => WT se nalazi u redu Ponedjeljak", function () {
            filtrirajProslo("Ponedjeljak");
            let tabele = document.getElementById("tabl");
            let redovi = tabele.getElementsByTagName("tr");
            var brojac=0;
            for (var i = 0; i < redovi.length; i++) {
                let celije=redovi[i].getElementsByTagName("td");
                for(var j=0;j<celije.length;j++){
                    if(celije[j].textContent.includes('WT') && !(celije[j].textContent.includes('BWT'))){
                        brojac++;
                    }
            }
        }
        assert.equal(brojac, 2);
        });
        it("filtriranje dana kad se dan ne nalazi u tabeli => 10 predmeta", function () {
            filtrirajProslo("Subota");
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
        assert.equal(brojac,10);
        });

        it("filtriranje dana kad je Utorak => ima li BWT u tabeli ", function () {
           filtrirajProslo("Utorak");
            let tabele = document.getElementById("tabl");
            let redovi = tabele.getElementsByTagName("tr");
            var brojac=0;
            for (var i = 0; i < redovi.length; i++) {
                let celije=redovi[i].getElementsByTagName("td");
                for(var j=0;j<celije.length;j++){
                    if((celije[j].textContent.includes('BWT'))){
                        brojac++;
                    }
            }
        }
        assert.equal(brojac,1);
        });
    })
});
