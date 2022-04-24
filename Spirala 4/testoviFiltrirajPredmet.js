let assert = chai.assert;
describe("Testovi Rasporeda", function () {
    describe("filtrirajPredmet", function () {
        it("filtriranje predmeta po nazivu predmeta za WT => Broj praznih celija je 94 ", function () {
            filtrirajPredmet("WT");
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
        assert.equal(brojac, 94);
        });

        it("filtriranje predmeta po nazivu predmeta za WT => Broj celija je 2", function () {
            filtrirajPredmet("WT");
            let tabele = document.getElementById("tabl");
            let redovi = tabele.getElementsByTagName("tr");
            var brojac=0;
            for (var i = 0; i < redovi.length; i++) {
                let celije=redovi[i].getElementsByTagName("td");
                for(var j=0;j<celije.length;j++){
                    if((celije[j].textContent.includes('WT'))){
                        brojac++;
                    }
            }
        }
        assert.equal(brojac,2);
        });
        
        it("filtriranje predmeta po nazivu predmeta za WT => Nalazi li se DM u tabeli nakon poziva metode", function () {
            filtrirajPredmet("WT");
            let tabele = document.getElementById("tabl");
            let redovi = tabele.getElementsByTagName("tr");
            var brojac=0;
            for (var i = 0; i < redovi.length; i++) {
                let celije=redovi[i].getElementsByTagName("td");
                for(var j=0;j<celije.length;j++){
                    if((celije[j].textContent.includes('DM'))){
                        brojac++;
                    }
            }
        }
        assert.equal(brojac,0);
        });
    });
});
