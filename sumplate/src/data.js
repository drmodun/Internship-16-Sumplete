export const values = []
export const resultRows = []
export const resultColumns = []
export let statesToWin = []
Generate();

export function Generate() {
    const states = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];
    for (let i = 0; i <= 3 - 1; i++) {
        const row = [];
        for (let j = 0; j <= 3 - 1; j++) {
            if (Math.random() > 0.5)
                states[i][j] = 0;
            let randomNumber = Math.floor(Math.random() * 9) + 1;
            row.push(randomNumber);
        }
        values.push(row);
    }

    for (let i = 0; i <= 3 - 1; i++) {
        let sum = 0;
        for (let j = 0; j <= 3 - 1; j++) {
            if (states[i][j] === 1)
                sum += values[i][j];
        }
        resultRows.push(sum);
    }

    for (let j = 0; j <= 3 - 1; j++) {
        let sum = 0;
        for (let i = 0; i <= 3 - 1; i++) {
            if (states[i][j] === 1)
                sum += values[i][j];
        }
        resultColumns.push(sum);
    }
    statesToWin = [...states]
}