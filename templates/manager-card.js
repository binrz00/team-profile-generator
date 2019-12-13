exports.managerCardGen =function(resM) {
    return `
        <div class= "col-4">
        <div class="card-header">
        <h2>${resM.name}</h2>
        <br>
        <i class="fas fa-coffee"></i><h5>Manager</h5>
        </div>
        <div class="card-body">
        <p>id: ${resM.id}</p>
        <br>
        <p>Email: ${resM.email}</p>
        <br>
        <p>office Number: ${resM.officeNumber}</p>
        </div>
        </div>
        `
}