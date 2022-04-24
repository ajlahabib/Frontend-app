let assert = chai.assert;
describe("Testovi Rasporeda", function () {
    describe("filtrirajTip", function () {
         it("filtriranje tipa => Broj tutorijala je 1", function () {
             let tabele = document.getElementById("tabl");
             let redovi = tabele.getElementsByTagName("tr");
             var brojac=0;
             for (var i = 0; i < redovi.length; i++) {
                 let celije=redovi[i].getElementsByTagName("td");
                 for(var j=0;j<celije.length;j++){
                     if((celije[j].textContent.includes('tutorijal'))){
                         brojac++;
                     }
             }
         }
         assert.equal(brojac,1);
         });
        it("filtriranje tipa => Broj praznih celija je 91 ", function () {
            filtrirajTip("predavanje");
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
        assert.equal(brojac, 91);
        });

        it("filtriranje tipa => Broj predavanja je 5", function () {
           filtrirajTip("predavanje");
            let tabele = document.getElementById("tabl");
            let redovi = tabele.getElementsByTagName("tr");
            var brojac=0;
            for (var i = 0; i < redovi.length; i++) {
                let celije=redovi[i].getElementsByTagName("td");
                for(var j=0;j<celije.length;j++){
                    if((celije[j].textContent.includes('predavanje'))){
                        brojac++;
                    }
            }
        }
        assert.equal(brojac,5);
        });
    });
});
