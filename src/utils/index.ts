export const shuffle = (array: unknown[]): unknown[] => {
    const test = [...array];
    for (let i = test.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = test[i];
        test[i] = test[j];
        test[j] = temp;
    }
    return test;
};