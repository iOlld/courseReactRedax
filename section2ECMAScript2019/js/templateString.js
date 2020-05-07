// Шаблонные строки, интерполяция строк.
(() => {
    const user = 'Bob';
    const num = 17;
    const txt = `Hello ${user} you have ${num} letters in your inbox`;

    console.log(txt);
})();