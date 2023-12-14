function calcNivel(vitoria, derrota) {
    const saldoVit = vitoria - derrota;
    let nivel;

    
    calcNivel(25, 5);

    if (vitorias < 10) nivel = "Ferro";
    else if (vitorias <= 20) nivel = "Bronze";
    else if (vitorias <= 50) nivel = "Prata";
    else if (vitorias <= 80) nivel = "Ouro";
    else if (vitorias <= 90) nivel = "Diamante";
    else if (vitorias <= 100) nivel = "Lendário";
    else nivel = "Imortal";

    console.log ("o Héroi tem um saldo de " + saldoVit + "e está no nível " + calcNivel);
    
}
