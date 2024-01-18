function getData(){
    const options = {
        method : 'GET',
        headers: {
            'X-RapidAPI-Key': '',
		    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
          }
    }

    let userInput = document.querySelector("input").value ; 

    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${userInput}`, options)
    .then(response => response.json())
    .then(data=> {
       
        console.log(data)
        let errorValue = ``
        if (data.errors.length <1 && data.response.length <1) {
            errorValue = `Country: ${userInput} not found!`
            document.getElementById('notif-error').innerHTML = errorValue

            document.getElementById('activeCases').innerHTML = 'N/A'
            document.getElementById('newCases').innerHTML ='N/A'
            document.getElementById('recoveredCases').innerHTML = 'N/A'
            document.getElementById('totalCases').innerHTML = 'N/A'
            document.getElementById('totalDeaths').innerHTML = 'N/A'
            document.getElementById('totalTests').innerHTML = 'N/A'
        }else{
            const activeCases = data.response[0]?.cases.active || 'N/A'
            const newCases = data.response[0]?.cases.new || 'N/A'
            const recoveredCases = data.response[0]?.cases.recovered || 'N/A'
            const totalCases = data.response[0]?.tests.total || 'N/A'
            const totalDeaths = data.response[0]?.deaths.total || 'N/A'
            const totalTests = data.response[0]?.tests.total || 'N/A'
    
    
            document.getElementById('activeCases').innerHTML = activeCases
            document.getElementById('newCases').innerHTML = newCases
            document.getElementById('recoveredCases').innerHTML = recoveredCases
            document.getElementById('totalCases').innerHTML = totalCases
            document.getElementById('totalDeaths').innerHTML = totalDeaths
            document.getElementById('totalTests').innerHTML = totalTests

            errorValue = ``
            document.getElementById('notif-error').innerHTML = errorValue
        }

    })
    .catch( err=>{
        console.error(err)
    })

    document.querySelector("input").value = '';

}
