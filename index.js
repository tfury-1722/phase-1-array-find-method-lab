// code your solution here

function superbowlWin(array) {
    const winnersCirle = [];
    for (const item of array) {
        if (item.result === "W") {
            winnersCirle.push(item.year);
        }
    }

    return winnersCirle[0];
}
