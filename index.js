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
    fetch(url)
        .then(
        res => {
            res.json().then(
                data =>{
                    console.log(data);
                    if(data.length > 0){
                        var temp ="";
    
                        data.forEach((u) => {
                            temp+= "<tr>";
                            temp+= "<td>" + u.id+"</td>";
                            temp+= "<td>" + u.firstName +" " + u.lastName+"</td>";
                            // temp+= "<td>" + u.lastName+"</td>";
                            temp+= "<td>" + u.location+"</td>";
                            temp+= "<td>" + u.date+"</td>";
                            temp+= "<td>" + u.salary+"</td></tr>";
                        });
                        document.getElementById("table").innerHTML =temp;
    
                        var count = data.length();
                        console.log(count);
                    }
                })
    
        }
        )
}

