const validirajNaziv = (el) => {
    if (typeof el != "object" || !(el instanceof HTMLInputElement || el instanceof HTMLSelectElement))
        return;

    el.classList.remove("validno", "neValidno");

    if (/^[A-Z]{2,5}$/.test(el.value) || /^[A-Z]{1,4}[0-9]{1}$/.test(el.value))
        el.classList.add("validno");
    else
        el.classList.add("neValidno");
}

const validirajPocetak = (el) => {
    if (typeof el != "object" || !(el instanceof HTMLInputElement || el instanceof HTMLSelectElement))
        return;

    el.classList.remove("validno", "neValidno");

    if (/^([01][0-9]:[0-5][0-9])|(20:00)$/.test(el.value))
        el.classList.add("validno");
    else
        el.classList.add("neValidno");
}

const validirajKraj = (el, pocetak) => {
    if (typeof el != "object" || !(el instanceof HTMLInputElement || el instanceof HTMLSelectElement))
        return;
    if (typeof pocetak != "object" || !(pocetak instanceof HTMLInputElement || pocetak instanceof HTMLSelectElement))
        return;

    el.classList.remove("validno", "neValidno");
    
    if (/^([01][0-9]:[0-5][0-9])|(20:00)$/.test(pocetak.value) &&
    /^(([01][0-9])|(2[0-3])):[0-5][0-9]$/.test(el.value) &&
        el.value > pocetak.value
    )
        el.classList.add("validno")
    else
        el.classList.add("neValidno")
}
const validirajTip = (el, pocetak, kraj) => {
    if (typeof el != "object" || !(el instanceof HTMLInputElement || el instanceof HTMLSelectElement))
        return;
    if (typeof pocetak != "object" || !(pocetak instanceof HTMLInputElement || pocetak instanceof HTMLSelectElement))
        return;
    if (typeof kraj != "object" || !(kraj instanceof HTMLInputElement || kraj instanceof HTMLSelectElement))
        return;

    el.classList.remove("validno", "neValidno");

    if (!/^([01][0-9]:[0-5][0-9])|(20:00)$/.test(pocetak.value) ||
        !/^(([01][0-9])|(2[0-3])):[0-5][0-9]$/.test(kraj.value) ||
        kraj.value <= pocetak.value
    ) {
        el.classList.add("neValidno");
        return;
    }

    const dajMinute = (hhmm) => {
        const h = parseInt(hhmm.slice(0, 2));
        const m = parseInt(hhmm.slice(-2));
        return 60 * h + m;
    }

    const minute = dajMinute(kraj.value) - dajMinute(pocetak.value);

    switch (el.value) {
        case "Predavanja":
            if (minute >= 60 && minute <= 180)
                el.classList.add("validno");
            else
                el.classList.add("neValidno");
            break;

        case "Vjezbe":
            if (minute >= 45 && minute <= 180)
                el.classList.add("validno");
            else
                el.classList.add("neValidno");
            break;
    }
}