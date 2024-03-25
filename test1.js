function solve(input) {
    let movieArr = []
    for (let line of input) {
        line = line.split(` `)
        if (line.includes(`addMovie`)) {
            line.shift()
            
            line=line.join(` `)
            let movieObj = {}
            movieObj.name = line;
            movieArr.push(movieObj)
        }else if(line.includes(`directedBy`)){
            line = line.join(` `).split(` directedBy `);
            let movieName = line[0];
            let director=line[1]

            for (let movie of movieArr) {
                if(movie.name === movieName){
                    movie.director=director
                }
            }
        }else if (line.includes(`onDate`)){
            line = line.join(` `).split(` onDate `);
            let movieName = line[0];
            let date = line[1]

                for(let movie of movieArr){
                    if(movie.name===movieName){
                    movie.date = date;
                    }
                }
        }

    }
for (let object of movieArr){
    if (object.hasOwnProperty(`name`)&& object.hasOwnProperty(`date`)&& object.hasOwnProperty(`director`)){
let converted = JSON.stringify(object);
console.log(converted);
    }
}
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])