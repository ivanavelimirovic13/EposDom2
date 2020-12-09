const form = document.getElementById('forma');
const ime = document.getElementById('Ime');
const prezime = document.getElementById('Prezime');
const password = document.getElementById('password');
const greska = document.getElementById('greska');

form.addEventListener('submit', (e) => {

    let messges = [];

    if (!(ime.value.includes(''))) {
        messges.push('Morate uneti ime\n');
    }

    if (!(prezime.value.includes(''))) {
        messges.push('Morate uneti prezime\n');
    }

    if (password.value.length < 6) {
        messges.push('Sifra mora imati bar 6 karaktera\n');
    }

    if (messges.length > 0) {
        e.preventDefault();
        greska.innerText = messges.join("");
    } else {
        var alert = window.alert('Uspesno ste se prijavili')
        var openedWindow = window;
        openedWindow.close();
    }


});

function zatvori() {
    var openedWindow = window;
    openedWindow.close();
}