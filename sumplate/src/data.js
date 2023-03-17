export const values = []
export const resultRows = []
export const resultColumns = []
function generateValues() {
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(Math.floor(Math.random() * 9)+1);
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
generate();

function generate() {
    for (let i = 0; i <= 3  - 1; i++) {
        const row = [];
        for (let j = 0; j <= 3 - 1; j++) {
            let r;
            r = Math.floor(Math.random() * 9) + 1;
            row.push(r);
        }
        values.push(row);
    }

    for (let i = 0; i <= 3 - 1; i++) {
        let sum = 0;
        for (let j = 0; j <= 3 - 1; j++) {
            sum += values[i][j];
        }
        resultRows.push(sum);
    }

    for (let j = 0; j <= 3 - 1; j++) {
        let sum = 0;
        for (let i = 0; i <= 3 - 1; i++) {
            sum += values[j][i];
        }
        resultColumns.push(sum);
    }
}