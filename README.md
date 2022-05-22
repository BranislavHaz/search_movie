# VYHĽADÁVAČ FILMOV

![Vyhľadávač filmov](https://i.ibb.co/PmLwjFt/vyhladavac.jpg "Vyhľadávač filmov")

# ZADANIE

<details>
  <summary>Zobraziť zadanie</summary>
  <p>Vytvorte stranku na vyhladavanie filmov. Stranka bude pozostavat z hlavnej stranky, tzv HOMEPAGE, kde bude prehliadna tabulka filmov, ktore sa budu fetchovat z externej API, detail tychto filmov a zoznam Vasich oblubenych filmov.</p>
  
<p>Design stranky spravte priblizne rovnaky ako je na obrazkoch</p>
  
#### Aplikacia teda bude obsahovat 3x route
- '/' pre homepage
- '/movie/:id' pre detail
- '/my-favorites'
  
#### Aplikacia bude obsahovat NAVIGATION:
- HOMEPAGE
- MY FAVORITES

## HOMEPAGE

#### Homepage bude obsahovat 2 sekcie:

- Input search
- tabulka

#### V tabulke zobrazte zakladne udaje, ako je:

- Obrazok
- Nazov filmu
- Rok vydania
- Zaner
- Hodnotenie
- Oblubeny

<p>Nad tabulkou sa bude nachadzat input, ktorym sa budeme dotazovat na externe API. Cely proces bude fungovat cez REDUX a ako side-effect kniznicu pouzite REDUX-SAGA. Vsetok fetchnuty obsah ukladajte do REDUX store, ktory nasledne budete renderovat v tabulke.</p>

<p>Ak ziskate viac dat, idealne pouzit pagination (limit 10 filmov na stranku)</p>

<p>Pri kliknuti na dany film prejdem na jeho detail</p>

## MOVIE DETAIL

<p>Tu budu rozne informacie vypisane. Je na Vas, kolko zobrazite. Idealne je mat aj obrazok
daneho filmu</p>

<p>V hornom rohu detailu filmu sa bude nachadzat tlacidlo pre pridanie do OBLUBENYCH, ktore
sa budu ukladat do localStoragu. To znamena, ze ak dojde k refresh stranky, tak sa data o
oblubenych filmov nacitaju z localStoragu a uzivatel uvidi, ci ma alebo nema rad dany film.
(Vyhodnotenie tohto udaju necham na Vas, moze to byt text MAM RAD | NEMAM RAD
alebo ikonka)</p>

## MY FAVORITES

#### Tu bude jednoducha tabulka, ktora bude zobrazovat udaje ako:

- Obr filmu
- Nazov
- Oblubeny

<p>Po kliknuti na dany film prejdem na jeho detail</p>

## VYPRACOVANIE

<p>Na vypracovanie idealne nepouzivajte ziadnu UI kniznicu (ako je Material-UI, Antd, Bulma
atd). Taktiez idealne nepouzivajte ziadne framewory ako NEXTJS, GATSBY a pod. Aplikaciu je
idealne napisat bud “from scratch” alebo pouzite CRA.</p>

<p>Samozrejmost je pouzitie best practices.</p>

## TECHNICKE UDAJE

Technologie: React, Redux, Saga, Typescript
Detail ako fetchovat z externej API: [omdbapi.com](https://omdbapi.com/)

#### Bonus:

- Ziadna UI kniznica
- Ziaden framework
- Pouzitie SASS
- Cypress - testy
- SSR – vlastnorucne napisany
</details>

# ODKAZ NA DEMO

[ZOBRAZIŤ DEMO] (https://search-movie-theta.vercel.app/)

# SPUSTENIE

<p>Pre nainštalovanie všetkých použitých balíčkov je potrebné v koreňovom adresári spustiť príkaz <code>npm install</code>.</p>

<p>Následne pre zobrazenie v prehliadači zadajte príkaz <code>npm start</code>.</p>

<p><em>Author: Branislav Ház</em></p>
