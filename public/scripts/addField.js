document.querySelector("#add-time")

.addEventListener('click', cloneField)


function cloneField(){
    const newfieldsContainer = document.querySelector('.shedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')


    fields.forEach(function(field)){
        field.value =""
    }


    document.querySelector('#schedule-item').appendChild(fields)
}