fetch("parkeaseData.json")
.then(function(response) {
    return response.json();
})
.then(data => {
    //Process the fetched data
    console.log(data);
})
.catch(function(error) {
    console.error("Error fetching data:", error);
});