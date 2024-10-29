// Heron's Formula
function calculateHeron() {
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);
    
    // Calculate semi-perimeter
    const s = (a + b + c) / 2;
    // Heron's formula for area
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    document.getElementById('heronResult').value = area.toFixed(2);
}

// Ambiguous Case
function calculateAmbiguous() {
    const angleA = parseFloat(document.getElementById('angleA').value);
    const a = parseFloat(document.getElementById('sideA2').value);
    const b = parseFloat(document.getElementById('sideB2').value);
    
    const angleARad = angleA * (Math.PI / 180); // Convert angle to radians
    const h = b * Math.sin(angleARad);

    let result;
    if (angleA < 90) { // Acute angle
        if (a < h) {
            result = "No triangle";
        } else if (a === h) {
            result = "Right triangle";
        } else if (a > b) {
            result = "One triangle";
        } else if (h < a && a < b) {
            result = "Two triangles (ambiguous case)";
        }
    } else { // Obtuse angle
        if (a <= b) {
            result = "No triangle";
        } else {
            result = "One triangle";
        }
    }

    document.getElementById('ambiguousResult').value = result;
}

// Newton's Method
function calculateNewton() {
    let guess = parseFloat(document.getElementById('guess').value);
    const maxIterations = 10;
    const tolerance = 0.0001;
    
    for (let i = 0; i < maxIterations; i++) {
        const f_x = (6 * Math.pow(guess, 4)) - (13 * Math.pow(guess, 3)) - (18 * Math.pow(guess, 2)) + (7 * guess) + 6;
        const f_prime_x = (24 * Math.pow(guess, 3)) - (39 * Math.pow(guess, 2)) - (36 * guess) + 7;

        if (Math.abs(f_prime_x) < tolerance) {
            break; // Avoid division by zero
        }

        const nextGuess = guess - (f_x / f_prime_x);

        if (Math.abs(nextGuess - guess) < tolerance) {
            guess = nextGuess;
            break;
        }

        guess = nextGuess;
    }

    document.getElementById('newtonResult').value = guess.toFixed(4);
}

// Polynomial Function
function calculatePolynomial() {
    const coefficients = document.getElementById('coefficients').value.split(' ').map(Number);
    const exponents = document.getElementById('exponents').value.split(' ').map(Number);
    const x = parseFloat(document.getElementById('xValue').value);

    let polynomialString = "";
    let evaluationResult = 0;

    for (let i = 0; i < coefficients.length; i++) {
        const term = coefficients[i] * Math.pow(x, exponents[i]);
        polynomialString += `${coefficients[i]} * x^${exponents[i]} `;
        if (i < coefficients.length - 1) polynomialString += "+ ";
        evaluationResult += term;
    }

    document.getElementById('polynomialFunction').value = polynomialString;
    document.getElementById('polynomialResult').value = evaluationResult.toFixed(2);
}

// Add event listeners
document.querySelector('button[onclick="calculateHeron()"]').addEventListener('click', calculateHeron);
document.querySelector('button[onclick="calculateAmbiguous()"]').addEventListener('click', calculateAmbiguous);
document.querySelector('button[onclick="calculateNewton()"]').addEventListener('click', calculateNewton);
document.querySelector('button[onclick="calculatePolynomial()"]').addEventListener('click', calculatePolynomial);
