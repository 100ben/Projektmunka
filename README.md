Kamrapp

Kamrapp (Kamra-app) egy háztartási készletnyilvántartó és utánpótlás-kezelő alkalmazás.
A program segítségével a felhasználó nyilvántarthatja az otthon található termékeket, azok mennyiségét és lejárati dátumát, valamint jelezheti, ha valamiből elfogyott vagy utánpótlásra van szükség.

Készítők

Kósa Patrik – frontend (HTML, CSS), dokumentáció

Száz Bence – backend (JavaScript, SQL)

Őri Milán – backend

A projekt célja

A Kamrapp célja, hogy egyszerűbbé tegye az otthoni élelmiszerek és egyéb háztartási termékek nyilvántartását.

A felhasználó egy saját fiókkal rendelkezik, amelyhez az otthoni készlet tartozik. A vásárlások és felhasználások rögzítésével az alkalmazás folyamatosan nyomon követi, hogy miből mennyi található otthon.

A program a termékek lejárati dátumát is figyeli. A lejáratokat mindig az aktuális dátumhoz viszonyítja, így jelezni tudja, ha egy termék hamarosan lejár vagy már lejárt.

Az alkalmazás másik fontos funkciója az utánpótlás kezelése. Ha egy termékből elfogy a felhasználó által meghatározott mennyiség, az alkalmazás az adott terméket utánpótlásra jelöli. Az így létrehozott ideiglenes lista a futár felhasználó számára lesz elérhető.

Fő funkciók
Felhasználói fiók

A felhasználó először bejelentkezik a saját fiókjába. A készletadatok minden felhasználó esetében a saját fiókjához kapcsolódnak.

Otthoni készlet kezelése

A felhasználó rögzítheti, hogy milyen termékeket vásárolt, és azokból mennyi található otthon.

Új termék hozzáadásakor a termék:

kiválasztható egy listából,

vagy név alapján megkereshető és begépelhető,

mennyisége megadható,

lejárati dátuma rögzíthető.

A rendszer az adatokat az otthoni leltár adatbázisában tárolja.

Termékek felhasználása

Ha a felhasználó valamiből elhasznál egy bizonyos mennyiséget, kiválaszthatja a terméket, majd megadhatja az elhasznált mennyiséget.

A rendszer ezután automatikusan csökkenti az adott termék otthoni készletét.

Lejárati dátum figyelése

Az alkalmazás automatikusan összehasonlítja a termékek lejárati dátumát az aktuális dátummal.

Ennek segítségével megállapítható, hogy egy termék:

még fogyasztható,

hamarosan lejár,

vagy már lejárt.

A lejárat ellenőrzése nem igényel manuális frissítést a felhasználótól.

Mértékegységek

A Kamrapp három fő mértékegység-típust használ:

Típus	Adatbázisban tárolt egység	Megjelenítés
Tömeg	gramm (g)	g, dkg vagy kg
Térfogat	deciliter (dl)	dl vagy l
Darabszám	darab (db)	db

Az adatbázisban a mennyiségek egységes formában kerülnek tárolásra:

tömeg esetén grammban,

folyadékok esetén deciliterben,

darabban mérhető termékek esetén darabban.

A felületen az alkalmazás lehetőség szerint felhasználóbarátabb formában jeleníti meg ezeket.

Például:

5000 g → 5 kg

250 g → 250 g

1500 g → 1,5 kg

15 dl → 1,5 l

5 db → 5 db

Ez azért előnyös, mert az adatbázisban egységesen kezelhetők a mennyiségek, miközben a felhasználó számára könnyebben értelmezhető formában jelennek meg.

Adatbázisok

A rendszer három fő adatbázist használ.

1. Otthoni leltár

Az első adatbázis a felhasználó otthon található termékeit tartja nyilván.

Tárolhat többek között:

felhasználóhoz tartozó termékeket,

termék nevét,

mennyiségét,

mértékegységét,

lejárati dátumát,

a készlethez kapcsolódó egyéb szükséges adatokat.

A felhasználó minden vásárláskor hozzáadhatja az új termékeket vagy növelheti egy már meglévő termék mennyiségét.

2. Bolti termékadatbázis

A második adatbázis tartalmazza, hogy milyen termékek vásárolhatók meg a boltban.

A projektben feltételezzük, hogy a boltban minden nyilvántartott termék mindig elérhető, ezért a készlet tényleges mennyiségét nem szükséges kezelni.

Ennek az adatbázisnak többek között az a szerepe, hogy a felhasználó innen választhasson terméket az otthoni készlethez.

A termékek kereshetők és kiválaszthatók a felhasználói felületen.

3. Ideiglenes utánpótlási adatbázis

A harmadik adatbázis ideiglenesen tárolja azokat a termékeket, amelyekből az adott felhasználónak utánpótlásra van szüksége.

A felhasználó megadhatja, hogy egy adott termékből milyen feltétel esetén tekinti azt elfogyottnak vagy utánpótlásra várónak.

Amikor a készlet eléri ezt a megadott szintet, a rendszer az adott terméket utánpótlásra jelöli.

Az így létrejött ideiglenes adatbázist a futár felhasználó kapja meg, aki ez alapján tudja összeállítani a szükséges szállítást.

Az alkalmazás működési folyamata

A rendszer működése leegyszerűsítve:

Bejelentkezés
     │
     ▼
Saját otthoni készlet
     │
     ├──► Termék vásárlása
     │        │
     │        ▼
     │   Termék hozzáadása
     │   a leltárhoz
     │
     └──► Termék felhasználása
              │
              ▼
        Készlet csökkentése
              │
              ▼
       Elérte a megadott
       utánpótlási szintet?
              │
          ┌───┴───┐
         Igen     Nem
          │
          ▼
   Utánpótlási adatbázis
          │
          ▼
    Futár felhasználó


A lejárati dátumok ellenőrzése ezzel párhuzamosan automatikusan történik az aktuális dátum alapján.

Felhasználói szerepkörök
Vásárló felhasználó

A vásárló feladata és lehetőségei:

bejelentkezés a saját fiókjába,

otthoni készlet megtekintése,

új vásárlások rögzítése,

termékek keresése és kiválasztása,

mennyiségek megadása,

termékek felhasználásának rögzítése,

lejárati dátumok megtekintése,

utánpótlási igények létrehozása.

Futár felhasználó

A futár az ideiglenesen létrehozott utánpótlási adatokat kapja meg.

A lista alapján láthatja, hogy mely termékekből és milyen mennyiségben van szükség utánpótlásra.

Technológiák
Frontend

HTML

CSS

Backend

JavaScript

SQL

Adatkezelés

A rendszerben a mennyiségek egységesen kerülnek tárolásra, így az eltérő felhasználói megjelenítési formák nem befolyásolják az adatbázis működését.

Például egy 1,5 kg mennyiség az adatbázisban:

1500 g


formában kerül tárolásra.

Hasonlóan:

1,5 l → 15 dl


Ez megkönnyíti a mennyiségek összeadását, kivonását és az utánpótlási határértékek ellenőrzését.

Összefoglalás

A Kamrapp egy olyan háztartási készletkezelő alkalmazás, amely egy helyen kezeli az otthon található termékeket, azok mennyiségét és lejárati idejét.

A rendszer automatikusan figyeli a lejáratokat, kezeli a felhasználó által rögzített vásárlásokat és fogyasztásokat, valamint az elfogyó termékek alapján ideiglenes utánpótlási listát készít a futár számára.

A projekt fő célja egy egyszerűen használható, automatizált rendszer létrehozása, amely csökkenti a háztartási készlet manuális nyilvántartásával járó munkát.
