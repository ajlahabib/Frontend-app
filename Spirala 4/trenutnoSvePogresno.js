const trenutniCas = (divRaspored, trenutnoVrijeme) => {
    const d = new Date(Date.parse(trenutnoVrijeme));
    const dan = ["Nedjelja","Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"][d.getDay()];
    if (dan === "Nedjelja" || dan === "Subota")
        return;
    
    const time = (""+d.getHours()-2).padStart(2,"0") + ":" + (""+d.getMinutes()+30).padStart(2,"0");     
    const row = Array.from(divRaspored.querySelectorAll("th")).find(th => th.textContent.includes(dan)).parentElement;
    const trenutna = Array.from(row.querySelectorAll(".boja, .boja1, .boja2, .boja3")).find(td => {
        const poc = td.getAttribute("poc");
        const kr = td.getAttribute("kr");
        if (poc && kr)
            return poc < time && time < kr;
        return false;
    });
    if (trenutna) {

        trenutna.classList.add("trenutnaHorizontalno");
        
        const pocMinute = trenutna.getAttribute("poc").slice(-2);
        const krMinute = trenutna.getAttribute("kr").slice(-2);
        const lijevaLinija = +(pocMinute == "00");
        const desnaLinija = +(krMinute == "00");
        
        trenutna.classList.add(`trenutna${lijevaLinija}${desnaLinija}`);
    }
}