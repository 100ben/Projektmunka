// [tipus, nev, szuletes, cim, jelszo]  (tipus: 'v' = vevő, 'f' = futár)
const adatok = [
  ['f', 'Kelemen Járó', '2001-09-11', 'Kiskunfélegyháza, Köztársaság út 67.', 'envagyokjarjar123'],
  ['f', 'Lukács Bicskey', '1961-03-11', 'Kiskunfélegyháza, Köztársaság út 67.', 'actuallyenvagyokjarjar123'],
  ['v', 'Tóth Emília', '1879-02-28', 'Kisujjbánya, Bánya utca 69.', '!#jajjidemitirjak#!'],
  ['v', 'Kovács János', '1988-04-12', 'Budapest, Váci út 14.', 'titkosjelszo2024'],
  ['f', 'Szabó Péter', '1995-11-23', 'Szeged, Tisza Lajos körút 45.', 'speedy_delivery95'],
  ['v', 'Nagy Anita', '1992-07-02', 'Debrecen, Piac utca 8.', 'anita_pass_92'],
  ['v', 'Kiss Gábor', '2003-01-15', 'Győr, Baross Gábor út 12.', 'jelszavam123'],
  ['f', 'Molnár Dávid', '1999-09-09', 'Pécs, Király utca 31.', 'futarkod_99'],
  ['v', 'Farkas Eszter', '1985-05-20', 'Miskolc, Széchenyi István utca 54.', 'eszti_miskolc'],
  ['v', 'Horváth Balázs', '1990-12-30', 'Székesfehérvár, Fő utca 3.', 'balazs_szfv_90'],
  ['f', 'Németh Zoltán', '1994-03-17', 'Kecskemét, Petőfi Sándor utca 22.', 'zolika_bringan'],
];

const form = document.querySelector('form');

// Message line under the button (created here, so index.html needs no changes)
const uzenet = document.createElement('p');
uzenet.style.cssText = 'margin-top:15px;text-align:center;font-weight:bold;';
form.appendChild(uzenet);

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop the POST to login.php; we check here instead

  const nev = document.getElementById('nev').value.trim();
  const jelszo = document.getElementById('jelszo').value;
  const tipus = document.querySelector('input[name="felhasznalo_tipus"]:checked').value;

  // r[0] = type, r[1] = name, r[4] = password
  const talalat = adatok.find(r => r[0] === tipus && r[1] === nev && r[4] === jelszo);

  if (talalat) {
    uzenet.style.color = 'green';
    uzenet.textContent = 'Sikeres bejelentkezés! Üdv, ' + talalat[1] + '!';

    // Remember who logged in (works across pages of the same site)
    sessionStorage.setItem('user', JSON.stringify({ tipus: talalat[0], nev: talalat[1] }));

    // Open the page that belongs to the user type
    window.location.href = talalat[0] === 'v' ? 'vevo.html' : 'futar.html';
  } else {
    uzenet.style.color = '#c62828';
    uzenet.textContent = 'Hibás felhasználónév, jelszó vagy felhasználó típus.';
  }
});
