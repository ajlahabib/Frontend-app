window.onload = function (e) {
    const forma = document.forms.item(0);

    forma.NazivPredmeta.onblur = function (e) {
        validirajNaziv(this);
    }
     
    forma.VrijemePocetka.onblur = function (e) {
        validirajPocetak(this);
    }

    forma.VrijemeKraja.onblur = function (e) {
        validirajKraj(this, forma.VrijemePocetka);
    }

    forma.Tip.onblur = function (e) {
        validirajTip(this, forma.VrijemePocetka, forma.VrijemeKraja);
    }
};