import * as stack from './stack.js';

window.onload = function () {
    console.log("done");

    var pop = document.getElementById('pop');
    var push = document.getElementById('push');
    var peek = document.getElementById('peek');
    var display = document.getElementById('top_of_stack');
    let stackSize = document.getElementById('stack_size');

    pop.addEventListener("click", function() {
        var text = "Tog bort " + stack.pop();
        alert(text);
        stackSize.innerHTML = stack.size();
    });

    push.addEventListener("click", function() {
        var x = prompt("Vad ska vi lägga på stacken?");
        stack.push(x);
        display.innerHTML = x;
        stackSize.innerHTML = stack.size();
    });

    peek.addEventListener("click", function() {
        display.innerHTML = stack.peek();
    });
};