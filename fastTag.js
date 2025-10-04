const data = [{
    vehicleNumber: "TSA1263",
    balance: 1000
},
{
    vehicleNumber: "TSA1264",
    balance: 1500
},
{
    vehicleNumber: "TSA1265",
    balance: 3000
},
{
    vehicleNumber: "TSA1266",
    balance: 500
},
{
    vehicleNumber: "TSA1267",
    balance: 1000
},
{
    vehicleNumber: "TSA1268",
    balance: 1200
},
{
    vehicleNumber: "TSA1269",
    balance: 3300
},
{
    vehicleNumber: "TSA1270",
    balance: 100
}];

const lanes = [{
    name: "Exit1",
    fee: 100,
    id: 1
},
{
    name: "Exit2",
    fee: 200,
    id: 2
},
{
    name: "Exit3",
    fee: 220,
    id: 3
},
{
    name: "Exit4",
    fee: 150,
    id: 4
},
{
    name: "Exit5",
    fee: 240,
    id: 5
}];

function getVehicleNumber(vnumber) {
    let matchingVehicle;

    data.forEach((thatvehicle) => {
        if(thatvehicle.vehicleNumber === vnumber){
            matchingVehicle = thatvehicle;
        }
    });
    return matchingVehicle;
}

function chooseLane(lane){
 let matchingLane;

 lanes.forEach((thatlane) => {
  if(thatlane.id === lane){
    matchingLane = thatlane;
  }
 });
 return matchingLane;
}

function welcomeVehicle(vnumber) {
    //HERE mathingVehicle is declared globally it can be accessed in the whole file
    matchingVehicle = getVehicleNumber(vnumber);
    const details = document.querySelector('.js-details');

    if(matchingVehicle){
        details.innerHTML = `<p>Welcome ${matchingVehicle.vehicleNumber}, please choose the exit lane</p>`; 

        const exitLanes = document.querySelector('.exit-lanes');
        exitLanes.classList.add('show');
    }else{
        details.innerHTML = `<p>Vehicle Number: ${vnumber} not found, please enter a valid vehicle number</p>`;
    }
}

document.querySelectorAll('.lane').forEach((button) => {
    button.addEventListener('click', () => {
        const lanesId = button.dataset.lanesId;
        const matchingLane = chooseLane(parseInt(lanesId, 10));

        if (matchingLane) {
            document.title = `${matchingLane.name}`;

            document.body.innerHTML = `
                <h1 class="heading">Welcome To ${matchingLane.name} Toll Plaza</h1>
                <h2 class="subheading">The Toll Fee Is ${matchingLane.fee}</h2>
                <h3 class="subheading">Please Pay The Fee To Exit</h3>
                <div class="theexitvehicle"> <p>Vehicle Number: ${matchingVehicle.vehicleNumber}</p>
                <p>FASTag Balance: ₹${matchingVehicle.balance}</p></div>
            `;

        }
    });
});


document.querySelector('.submit').addEventListener('click', () => {
    const input = document.querySelector('.vhinput').value.trim();
    welcomeVehicle(input);
    const clear = document.querySelector('.vhinput');
    clear.value = '';
}); 

document.querySelector('.vhinput').addEventListener('keydown', (event) => {
    const input = document.querySelector('.vhinput').value.trim();
    if (event.key === 'Enter') {
        welcomeVehicle(input);
        const clear = document.querySelector('.vhinput');
        clear.value = '';
    }
});

    
/*
function theVehicleDetails(vnumber){
    matchingVehicle = getVehicleNumber(vnumber);

    const details = document.querySelector('.theexitvehicle');
    
    if(matchingVehicle){
        return details.innerHTML = <p>Vehicle Number: ${matchingVehicle.vehicleNumber}</p>
                             <p>FASTag Balance: ${matchingVehicle.balance}</p>;
    }
}*/