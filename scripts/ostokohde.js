"use strict";
    
    /* viedään parametrina napin.id -tieto, joka merkkijonona
    vastaa sessionstoragessa olevaa taulukon nimeä.
    Kutsutaan toista funktiota, josta saadaan satunnainen kokonaisluku
    väliltä 1-6. Asetetaan saatu taulukon alkio elementtiin.
    */
    function kerroOstokohde(kala){
        const taulu = JSON.parse(sessionStorage.getItem(kala));
        document.getElementById('ostokohde').innerHTML = taulu[0] + taulu[arvoIndeksi()];
    }