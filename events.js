AFRAME.registerComponent('clickhandler', {
    init: function() {
        this.el.addEventListener('click', () => {
            alert('Clicked!')
        });
}});

// Modal Text

