const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the Number Classification API</h1>
        <p>Use the <code>/api/classify-number?number=XXX</code> endpoint to classify a number.</p>
        <p>Example: <a href="/api/classify-number?number=371">/api/classify-number?number=371</a></p>
    `);
});

// Helper functions
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function isPerfect(n) {
    if (n < 2) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) sum += n / i;
        }
    }
    return sum === n;
}

function isArmstrong(n) {
    const digits = String(n).split('');
    const length = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), length), 0);
    return sum === n;
}

function getDigitSum(n) {
    return String(n).split('').reduce((acc, digit) => acc + Number(digit), 0);
}

function getFunFact(n) {
    if (isArmstrong(n)) {
        return `${n} is an Armstrong number because ${String(n).split('').map(d => `${d}^${String(n).length}`).join(' + ')} = ${n}`;
    }
    return `No fun fact available for ${n}.`;
}

// API endpoint
app.get('/api/classify-number', (req, res) => {
    const number = Number(req.query.number);

    // Input validation
    if (isNaN(number)) {
        return res.status(400).json({
            number: req.query.number,
            error: true
        });
    }

    // Analyze number properties
    const properties = [];
    if (isPrime(number)) properties.push('prime');
    if (isPerfect(number)) properties.push('perfect');
    if (isArmstrong(number)) properties.push('armstrong');
    if (number % 2 !== 0) properties.push('odd');

    // Return response
    res.status(200).json({
        number: number,
        is_prime: isPrime(number),
        is_perfect: isPerfect(number),
        properties: properties,
        digit_sum: getDigitSum(number),
        fun_fact: getFunFact(number)
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
