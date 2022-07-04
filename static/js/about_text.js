// Insert "about" section text from sample files

var client = new XMLHttpRequest();
    var client2 = new XMLHttpRequest();
    client.open('GET', "static/WS_Docs/sample.txt");
    client2.open('GET', "static/WS_Docs/sample2.txt");
    client.onreadystatechange = function() {
        document.getElementById("text1").innerHTML = client.responseText;
    }
    client2.onreadystatechange = function() {
        document.getElementById("text2").innerHTML = client2.responseText;
    }
    client.send();
    client2.send();