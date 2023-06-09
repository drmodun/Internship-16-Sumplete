export let values = []
export let resultRows = []
export let resultColumns = []
export let statesToWin = []
Generate();

export function Generate(mode) {
    values = []
    resultRows = []
    resultColumns = []
    statesToWin = []
    const states = [
    ];
    for (let i = 0; i <= mode - 1; i++) {
        const row = [];
        for (let j = 0; j <= mode - 1; j++) {
            row.push(1);
        }
        states.push(row);
    }
    for (let i = 0; i <= mode - 1; i++) {
        const row = [];
        for (let j = 0; j <= mode - 1; j++) {
            if (Math.random() > 0.5)
                states[i][j] = 0;
            let randomNumber = Math.floor(Math.random() * 9) + 1;
            row.push(randomNumber);
        }
        values.push(row);
    }

    for (let i = 0; i <= mode - 1; i++) {
        let sum = 0;
        for (let j = 0; j <= mode - 1; j++) {
            if (states[i][j] === 1)
                sum += values[i][j];
        }
        resultRows.push(sum);
    }

    for (let j = 0; j <= mode - 1; j++) {
        let sum = 0;
        for (let i = 0; i <= mode - 1; i++) {
            if (states[i][j] === 1)
                sum += values[i][j];
        }
        resultColumns.push(sum);
    }
    statesToWin = [...states]
    return {
        states,
        values,
        resultRows,
        resultColumns
    };
}