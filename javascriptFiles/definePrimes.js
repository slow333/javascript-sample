function isPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

const out = document.getElementById('test');
function showPrimes(n) {
    let testText = '';
    for (let i = 2; i < n; i++) {
        if (!isPrimes(i)) continue;
        else {
            testText = i + ', ';
            const pEl = document.createElement('p');
            pEl.innerText = testText;
            document.body.appendChild(pEl);
        }
    }
}

showPrimes(5);