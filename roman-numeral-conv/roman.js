function toRoman(num) {
    if (!Number.isInteger(num) || num < 1 || num > 3999) return null;
    const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const syms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let res = '';
    for (let i = 0; i < vals.length; i++) {
        while (num >= vals[i]) { res += syms[i]; num -= vals[i]; }
    }
    return res;
}

function fromRoman(str) {
    if (!str || typeof str !== 'string') return null;
    str = str.toUpperCase().trim();
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        const curr = map[str[i]];
        const next = map[str[i + 1]] || 0;
        if (!curr) return null;
        if (curr < next) { total -= curr; } else { total += curr; }
    }
    const check = toRoman(total);
    return check === str ? total : null;
}

const numberInput = document.getElementById('numberInput');
const romanInput = document.getElementById('romanInput');
const toRomanBtn = document.getElementById('toRomanBtn');
const toNumberBtn = document.getElementById('toNumberBtn');
const resultEl = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');

toRomanBtn.addEventListener('click', () => {
    const n = Number(numberInput.value);
    const r = toRoman(n);
    resultEl.textContent = r || 'Invalid number (1–3999)';
});

toNumberBtn.addEventListener('click', () => {
    const s = romanInput.value;
    const n = fromRoman(s);
    resultEl.textContent = (n === null) ? 'Invalid Roman numeral' : n;
});

copyBtn.addEventListener('click', () => {
    const text = resultEl.textContent;
    if (!text || text === '—') return;
    navigator.clipboard?.writeText(text).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = 'Copy', 1000);
    });
});

clearBtn.addEventListener('click', () => {
    numberInput.value = '';
    romanInput.value = '';
    resultEl.textContent = '—';
});

window.addEventListener('load', () => { resultEl.textContent = '—'; });