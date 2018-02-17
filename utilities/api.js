var api = {
    getData(){
         
        //https://api.nasa.gov/planetary/apod?api_key=qKNJCT89COe6AMwmlQF6cVsPyrYX6y0hiAHMIfAL
        var url= `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=DEMO_KEY`;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = api;