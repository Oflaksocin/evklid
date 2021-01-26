window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#burger').addEventListener('click', function(){
        document.querySelector('#menu').classList.toggle('is-active')
    })
})
window.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.steps_item_link').forEach(function(tabsbtn){
        tabsbtn.addEventListener('click',function(event){
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.how_we_working_down').forEach(function(tabContent) {
                tabContent.classList.remove('steps-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('steps-active')
        })
    })
})