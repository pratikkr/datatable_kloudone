function change(){
    let url;
    var update;
    if(document.getElementById("select").value == "small"){
        url = "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json";
    }
    else if(document.getElementById("select").value == "medium"){
        url = "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json";
    }
    else if(document.getElementById("select").value == "large"){
        url = "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/large.json";
    }
    else{
        alert("select an option")
    }
    fetch(url)
        .then(
        res => {
            res.json().then(
                data =>{
                    console.log(data);
                    if(data.length > 0){
                        var temp ="";
                        data.forEach((u) => {
                            temp+= "<div class = row>";
                            temp+= "<div class = id>" + u.id+"</div>";
                            temp+= "<div class = name>" + u.firstName +" " + u.lastName+"</div>";
                            // temp+= "<td>" + u.lastName+"</td>";
                            temp+= "<div class = location >" + u.location+"</div>";
                            temp+= "<div class = date>" + u.date+"</div>";
                            temp+= "<div class = salary>" + u.salary+"</div></div>";
                        });
                        document.getElementById("table").innerHTML =temp;
                        var count = data.length();
                        console.log(count);
                    }
                })
        }
        )
}

