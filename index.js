// Função para calcular o saldo de pontos
function rankedPointsCalculator(victories, defeats){
    let pointsCalculator = victories - defeats
    return pointsCalculator
}

let rankedPoints = rankedPointsCalculator(50, 10)

// Função para calcular o nível da ranqueada
let rankedLevel = ""
rankedLevelCalculator(rankedPoints)

function rankedLevelCalculator(rankedPoints){
    if (rankedPoints <= 10) {
        rankedLevel = "FERRO"
            
    } else if (rankedPoints > 10 && rankedPoints < 21) {
        rankedLevel = "BRONZE"

    } else if (rankedPoints > 20 && rankedPoints < 51) {
        rankedLevel = "PRATA"

    } else if (rankedPoints > 50 && rankedPoints < 81) {
        rankedLevel = "OURO"

    } else if (rankedPoints > 80 && rankedPoints < 91) {
        rankedLevel = "DIAMANTE"

    } else if (rankedPoints > 90 && rankedPoints < 101) {
        rankedLevel = "LENDÁRIO"

    } else if (rankedPoints >= 101) {
        rankedLevel = "IMORTAL"

    }
}

// Exibindo o resultado
console.log("O herói tem " + rankedPoints + " pontos de saldo. Ele está no nível " + rankedLevel);
