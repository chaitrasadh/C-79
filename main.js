var student=[]
function submit() {
    var n1= document.getElementById("n1").value;
    var n2= document.getElementById("n2").value;
    var n3= document.getElementById("n3").value;
    var n4= document.getElementById("n4").value;
    student.push(n1)
    student.push(n2)
    student.push(n3)
    student.push(n4)
    console.log(student)
    document.getElementById("displayname").innerHTML=student
    document.getElementById("submit").style.display="none"
    document.getElementById("sort").style.display="inline-block"

    
}

function sort() {
    student.sort()
    console.log(student)
    document.getElementById("displayname").innerHTML=student
}
