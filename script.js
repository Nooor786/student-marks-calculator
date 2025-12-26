function calculate() {
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    if (!m1 || !m2 || !m3) return;

    let total = m1 + m2 + m3;
    let average = total / 3;
    let grade = "";

    if (average >= 90) grade = "A";
    else if (average >= 75) grade = "B";
    else if (average >= 60) grade = "C";
    else grade = "D";

    document.getElementById("total").innerText = total;
    document.getElementById("average").innerText = average.toFixed(2);
    document.getElementById("grade").innerText = grade;
}