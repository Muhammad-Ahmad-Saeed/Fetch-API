$(function(){
    var but=document.getElementById("Get");
    var but2=document.getElementById("add");
    but.addEventListener("click",fetchData)
    but2.addEventListener("click",Postdata)
})

function fetchData() {
    var table=document.getElementById("mtable2");
    fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wJXC8s4hBvz28k1t8XVW/scores/", {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    .then((response)=> {
        if(!response.ok) {
            throw new Error("From GET: Network response was not ok");
        }
        //console.log(response.json());
        return response.json();
    })

    .then((data)=> {
        console.log(data);
        table.innerHTML=" "
        for(let i=0;i<data.result.length;i++) {
            var res=data.result[i];
            const tr=document.createElement("tr");
            const td=document.createElement("td");
            const td2=document.createElement("td");
            td.classList.add("data1");
            td2.classList.add("data2");
            

            td.textContent=res.user;
            tr.appendChild(td);
            table.appendChild(tr);

            td2.textContent=res.score;
            tr.appendChild(td2);
            table.appendChild(tr);
        }
    })

    .catch((error)=> {
        console.error("Error:", error);
    })
}

function Postdata() {
    var user=document.getElementById("user").value;
    var score=document.getElementById("score").value;   
    fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wJXC8s4hBvz28k1t8XVW/scores/", {
        method: 'POST',
        body:JSON.stringify( {
            user:user,
            score:score,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    .then((response)=> {
        if(!response.ok) {
            throw new Error("From GET: Network response was not ok");
        }
        //console.log(response.json());
        return response.json();
    })

    .then((data)=> {
        console.log(data);})

    fetchData();    

}