fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json")
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
                        temp+= "<td>" + u.firstName+"</td>";
                        temp+= "<td>" + u.lastName+"</td>";
                        temp+= "<td>" + u.location+"</td>";
                        temp+= "<td>" + u.date+"</td>";
                        temp+= "<td>" + u.salary+"</td></tr>";
                    });
                    document.getElementById("table").innerHTML =temp;
                }
            })

    }
)

// const searchFn =()=>{
//     let filter = document.getElementById('search').nodeValue;
//     let myTable = document.getElementById('table');
//     let tr =table.getElementsByTagName('tr');

//     for(var i =0 ; i< tr.length ; i++){
//         let td = tr[i].getElementsByTagName('td')[1];

//         if(td){
//             let textvalue =td.textcontent || td.innerHTML;
//             if(textvalue.indexOf())
//         }

//     }


// }