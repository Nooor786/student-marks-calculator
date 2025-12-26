function calculate() {
    let marks = [
        Number(document.getElementById("m1").value),
        Number(document.getElementById("m2").value),
        Number(document.getElementById("m3").value),
        Number(document.getElementById("m4").value),
        Number(document.getElementById("m5").value)
    ];

    if (marks.includes(0)) return;

    let total = marks.reduce((a, b) => a + b, 0);
    let average = total / marks.length;

    let grade = "";
    let status = "Fail";

    if (average >= 90) grade = "A";
    else if (average >= 75) grade = "B";
    else if (average >= 60) grade = "C";
    else grade = "D";

    if (average >= 40) status = "Pass";

    document.getElementById("total").innerText = total;
    document.getElementById("average").innerText = average.toFixed(2);
    document.getElementById("grade").innerText = grade;
    document.getElementById("status").innerText = status;
}

/* 🌙 DARK MODE */
function toggleTheme() {
    document.body.classList.toggle("dark");
}
