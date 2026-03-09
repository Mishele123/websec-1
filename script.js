
let history = []

document.getElementById("btn").addEventListener("click", () => 
{
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value); 

    if (isNaN(num1))
    {
        input1.classList.add("input-error");
        alert("Missing 1 number")
        return;
    }
    else if (isNaN(num2))
    {
        input2.classList.add("input-error");
        alert("Missing 2 number")
        return;
    }
    else
    {
        input1.classList.remove("input-error");
        input2.classList.remove("input-error");
    }

    const operator = document.getElementById("operation").value
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) { alert("Can not divide 0"); return }
            result = num1 / num2;
            break;
    }

    let calculationString = `${num1} ${operator} ${num2} = ${result}`;

    history.push(calculationString);
    
    document.querySelector('.current-result').textContent = calculationString;
    
    const historyDiv = document.querySelector('.history');
    historyDiv.innerHTML = '';
    
    for (let i = 0; i < history.length - 1; i++) {
        const historyItem = document.createElement('div');
        historyItem.textContent = history[i];
        historyDiv.appendChild(historyItem);
    }

})