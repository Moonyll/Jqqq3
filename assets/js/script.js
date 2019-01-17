$(document).ready(function () {
    var nombre = 0;
    var aleatoire = Math.round(Math.random() * 100); // Nombre aléatoire entre 0 & 100
    $('#sub').click(function () {
        var choix = $('#nombre').val();
        var reg = /^\d*$/;
        if (reg.test(choix) && (choix<=100))
        {
            if (choix < aleatoire) {
                $('#text').html('Le nombre est plus grand, essayez encore...' + ' (' + aleatoire + ')');
                nombre++;
            }
            else if (choix > aleatoire) {
                $('#text').html('Le nombre est plus petit, essayez encore...' + ' (' + aleatoire + ')');
                nombre++;
            }
            else {
                $('#text').html('Bravo vous avez trouvé le nombre en : ' + (nombre + 1) + ' essais. ' + ' (' + aleatoire + ')');
            }
        }
        else
        {
        $('#text').html('Votre saisie est incorrecte, veuillez saisir un nombre correct.');
        }
    });
});