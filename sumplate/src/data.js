export const values = []
export const resultRows = []
export const resultColumns = []
function generateValues() {
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(Math.floor(Math.random() * 10));
        }
        values.push(row);
    }
}

function generateResults() {
   
    for (let i = 0; i < 3; i++) {
        let sum = 0;
        for (let j = 0; j < 3; j++) {
            sum += values[i][j];
        }
        resultRows.push(sum);
    }
    for (let i = 0; i < 3; i++) {
        let sum = 0;
        for (let j = 0; j < 3; j++) {
            sum += values[j][i];
        }
        resultColumns.push(sum);
    }
}
generateValues();
generateResults();