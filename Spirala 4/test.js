let assert = chai.assert;
describe("Trenutni cas", function () {
    describe("trenutniCas", function () {
        it("testiranje dana 2021-01-05T12:30 => Dan treba biti Utorak", function () {
            trenutniCas(document.querySelector("#tabl"), "2021-01-05T12:30");
            let trenutnaCelija = document.querySelector(".trenutnaHorizontalno");
            let parent = trenutnaCelija.parentElement;
            let danCelija = parent.children[0];
            assert(danCelija.textContent, "Srijeda");
        });

        it("testiranje aktivnosti na pocetku 2021-01-05T12:30 => RMA vježbe", function () {
            trenutniCas(document.querySelector("#tabl"), "2021-01-05T12:30");
            let trenutnaCelija = document.querySelector(".trenutnaHorizontalno");
            assert(trenutnaCelija.textContent, "RMA vježbe");
        });

        it("testiranje aktivnosti na na kraju 2021-01-05T15:00 => DM  tutorijal", function () {
            trenutniCas(document.querySelector("#tabl"), "2021-01-05T15:00");
            let trenutnaCelija = document.querySelector(".trenutnaHorizontalno");
            assert(trenutnaCelija.textContent, "DM tutorijal");
        });

        it("testiranje aktivnosti u nekom intervalu izmedju pocetka i kraja, 2021-01-04T16:33  => RMA predavanje", function () {
            trenutniCas(document.querySelector("#tabl"), "2021-01-04T16:33");
            let trenutnaCelija = document.querySelector(".trenutnaHorizontalno");
            assert(trenutnaCelija.textContent, "RMA predavanje");
        });

        it("testiranje za datum u kojem nema aktivnosti 2021-01-04T13:45", function () {
            trenutniCas(document.querySelector("#tabl"), "2021-01-04T13:45");
            let trenutnaCelija = document.querySelector(".trenutnaHorizontalno");
            if (!trenutnaCelija) {
                assert.isNull(trenutnaCelija);
            }
        });
    });
});



