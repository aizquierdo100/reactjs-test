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

export const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const renderPrice = (price: number, quantity = 1) => {
    return `${numberWithCommas(price * quantity)} VND`;
}