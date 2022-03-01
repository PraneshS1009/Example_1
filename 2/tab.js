var tabs = document.querySelector('.tabs');
var tabbuttons = tabs.querySelectorAll('[role="tab"]');
var tabpanel = tabs.querySelectorAll('[role="tabpanel"]');

function handleFunction(event){
    console.log(event.currentTarget);
    tabpanel.forEach(function(panel){
        panel.hidden = true
    });

    tabbuttons.forEach(function(tab){
        tab.setAttribute('aria-selected', false);
    });

    event.currentTarget.setAttribute('aria-selected', true);
    var id = event.currentTarget.id;
    var panel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    panel.hidden = false
}

tabbuttons.forEach(function(panel) {
    panel.addEventListener('click', handleFunction);
});