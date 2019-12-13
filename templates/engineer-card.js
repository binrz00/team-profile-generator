exports.engineerCardGen =function(resE) {
    return `
        <div class= "col-4">
        <div class="card-header">
        <h2>${resE.name}</h2>
        <br>
        <i class="fas fa-glasses"></i><h5>Engineer</h5>
        </div>
        <div class="card-body">
        <p>id: ${resE.id}</p>
        <br>
        <p>Email: ${resE.email}</p>
        <br>
        <p>My Github profile: <a href="https://github.com/${resE.github}">${resE.github}</a></p>
        </div>
        </div>
        `
}