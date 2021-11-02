function add() {
    event.preventDefault();
    let first = parseFloat(document.getElementById("first").value);
    let second = parseFloat(document.getElementById("second").value);
    document.getElementById("answer").value = first + second;
    document.getElementById("ans").style.display = "block";
    document.getElementById("box").style.display = "block";
}