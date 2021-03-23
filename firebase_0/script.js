// Vår kode som hentar og skriv til DB hjå Firebase
let database = firebase.database();
let meldinger = database.ref("meldinger");
let skjema = document.getElementById("skjema");
let inpAvsender = document.getElementById("inpAvsender");
let inpMening = document.getElementById("inpMening");
let txtMeldinger = document.getElementById("txtMeldinger");

function visMelding(snapshot) {
    let melding = snapshot.val();
    let meldingTekst = `
        <p>
            <b>${melding.avsender}:</b>
            <i>${melding.tekst}</i><br>
            <sub>${melding.tid}</sub>
        </p>`;
    txtMeldinger.innerHTML += meldingTekst; // Legg til det me har henta ut.
}

function regNyMelding(evt) {
    evt.preventDefault();
    let tid = new Date();
    let tidspunkt = tid.getHours() + ":" + tid.getMinutes() + ":" + tid.getSeconds();
    let nyMelding = {
        avsender: inpAvsender.value,
        tekst: inpMening.value,
        tid: tidspunkt
    };

    meldinger.push(nyMelding);
    inpMening.value = "";
}

meldinger.on("child_added",visMelding);

skjema.onsubmit = regNyMelding;