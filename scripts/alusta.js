"use strict";

    /* Taulukot per kala. Jokaisen taulukon ensimmäinen indeksio on varattu alkiolle,
       jota käyetään tulostuksessa. *

    /* Asetetaan 8 eri taulukkoa sessionstorageen*/
    function alusta(){
        const lohikohteet = ["Lohen suurimmalla suojeluarvosummalla, 7510 euroa, saa ", "Volvo V70:n, D5 AWD, vm. 2009, ajettu 356tkm.", "1100 kg Oltermannia.", "45060 kananmunaa.",
        "14 kappaletta Stihl MS 231 -moottorisahoja.", "16 kappaletta Aalto Artek 69 -tuolia.",
        "521 litraa LV-käsihuuhdetta."];

        const taimenkohteet = ["Taimenen suurimmalla suojeluarvosummalla, 3260 euroa, saa ", "Kultaisennoutajan pentu ja 1200 eurolla koiran ylläpitoon tarvittavia artikkeleita.",
        "Saab 9-3:n, 1.9TIDS PF Sedan A Vector Sport, vm. 2008, ajettu 238tkm.", "MacBook Pro:n, 16'' M2 Pro 16 GT.",
        "729 kg tuorehiivaa.", "SJK:n kausikortin pääkatsomoon 13 vuodeksi.", 
        "17 kappaletta Moccamaster Manual kahvinkeittimiä."];

        const nieriakohteet = ["Nieriän suurimmalla suojeluarvosummalla, 5100 euroa, saa ", "Fiat 500:n, 1.2, vm. 2013, ajettu 165tkm.", "850 pakettia Juhla Mokka -kahvia.", 
        "7 kappaletta PS5-pelikonsoleita ja kolme peliä.", "24 kappaletta 3pv Provinssi-lippuja.",
        "85 pulloa Kyrö Malt Rye -viskiä.", "816 kappaletta Whopper-hampurilaisia."];

        const harjuskohteet = ["Harjuksen suurimmalla suojeluarvosummalla, 1360 euroa,  saa ", "54 kuukauden mobiililiittymämaksut.", "45 kuukauden jätehuoltomaksut.",
        "7520 kappaletta Vaasan ruispaloja.", "Ford Mondeon 1.8 vm. 2000, ajettu 369tkm.",
        "Cannondale Trail 5 -polkupyörän.", "680 litraa dieselia."];

        const nahkiainenkohteet = ["Nahkiaisen suojeluarvosummalla, 100 euroa, saa ", "50 kappaletta McDonaldsin juustohampurilaisia.", "35 pakettia Wilhelm-grillimakkaraa.",
        "LEGO City Police 60372 - Poliisien koulutuskeskus -legopaketin.", "Halti Neva miesten kerraston.",
        "4kg naudan ulkofilettä.", "kaksi Stiga Snowracer -rattikelkkaa."];

        const siikakohteet = ["Siian suojeluarvosummalla, 460 euroa, saa ", "Peugeot Speedfight 3 -skootterin, vm. 2014, ajettu 15tkm.", "Maskun Gardolo 2,5 istuttava sohvan.",
        "41 litraa oliiviöljyä.", "30kg haukifilettä.", "Kekkilä 225l tehokompostorin.", "15 parturikäyntiä."];
 
        const ankeriaskohteet = ["Ankeriaan suojeluarvosummalla, 3510 euroa, saa ", "BMW 318i Touring 5d A:n, vm. 2003, ajettu 260tkm.", "Trondheim 14,4m² pihamökin.",
        "2949 tölkkiä Megaforce-energiajuomaa.", "Giant Fathom E+2 -sähköpyörän.", "20 paria Copa Mundial -jalkapallokenkiä.",
        "351 kuukautta WWF-kuukausilahjoitusta."];
 
        const jokirapukohteet = ["Jokiravun suojeluarvosummalla, 50 euroa, saa ", "18 0,33l tölkkiä Hartwall Original Long Drink 5,5 -lonkeroa.", "104 kappaletta Duracell Plus Power AAA -alkaliparistoja.",
        "Neljä Alokas-hampurilaista Mantan Grilliltä Kajaanista.", "50 euron arvoisen lahjakortin Tokmannille.",
        "kaksi kappaletta 6-11 vuotiaan päivälippuja Joupiskalle.", "1,5kg Aqualan L -perusvoidetta."];

        sessionStorage.setItem('taimen', JSON.stringify(taimenkohteet));
        sessionStorage.setItem('lohi', JSON.stringify(lohikohteet));
        sessionStorage.setItem('nieria', JSON.stringify(nieriakohteet));
        sessionStorage.setItem('harjus', JSON.stringify(harjuskohteet));
        sessionStorage.setItem('nahkiainen', JSON.stringify(nahkiainenkohteet));
        sessionStorage.setItem('siika', JSON.stringify(siikakohteet));
        sessionStorage.setItem('ankerias', JSON.stringify(ankeriaskohteet));
        sessionStorage.setItem('jokirapu', JSON.stringify(jokirapukohteet));
    }
