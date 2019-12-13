exports.internCardGen =function(resI) {
    return `
        <div class= "col-4">
        <div class="card-header">
        <h2>${resI.name}</h2>
        <br>
        <i class="fas fa-user-graduate"></i><h5>Intern</h5>
        </div>
        <div class="card-body">
        <p>id: ${resI.id}</p>
        <br>
        <p>Email: ${resI.email}</p>
        <br>
        <p>My School: ${resI.school}</p>
        </div>
        </div>`
}