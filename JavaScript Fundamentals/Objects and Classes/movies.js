function solve(arr)
{
    let movies=[];
    arr.forEach((el)=>
        {
            if(el.includes('addMovie '))
            {
                let movie=el.replace('addMovie ', '');
                movies.push({name:movie});
            }
            else if(el.includes('directedBy'))
            {
                let movieInfo=el.split(' directedBy ');
                let name=movieInfo[0];
                let director=movieInfo[1];
                movies.forEach(movie => {
                    if(movie.name === name)
                    {
                        movie.director=director;
                    }
                })
            }
            else if(el.includes('onDate'))
            {
                let[name,date]=el.split(' onDate ');
                movies.forEach(movie=>
                    {
                        if(movie.name===name)
                        {
                            movie.date=date;
                        }
                    })
            }
        })
        movies.forEach(movie=>{
            if(movie.name && movie.director && movie.date)
            {
                console.log(JSON.stringify(movie));
            }
        })
}
solve(['addMovie F&F','addMovie G','Inception directedBy CN','G directedBy FFC','G onDate 29.07.2018','F&F on Date 30.07.2018','B onDate 01.08.2018','F&F directedBy RC'])