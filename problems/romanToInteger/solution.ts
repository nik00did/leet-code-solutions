const dict: { [key: string]: number } = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
} 

export function romanToInt(s: string): number {
    let convertedValue = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const charValue = dict[char];
        const nextChar = s[i + 1];
        const nextCharValue = dict[nextChar];

        if (!nextCharValue || charValue >= nextCharValue) {
            convertedValue += charValue;
        } else {
            convertedValue += (nextCharValue - charValue);
            i++;
        }
    }

    return convertedValue;
};