/*   -----------Calculatrice-----------  */


var nombre1;
var nombre2;
var choix;

/*-----------Vérification de choix */
do{
    do {
    
        choix = prompt('Que-souhaitez-vous faire ?\n '
            + '1- Addition.\n'
            + '2- Soustraction.\n'
            + '3- Multipilication\n'
            + '4- Soustraction.\n' 
            + '5- Division.\n\n');
        

            if(choix != 1 && choix != 2 && choix != 3 && (choix != 4) ){

            alert("Erreur de saisi dans le choix de l\'opération");}

    }while ( (choix != 1) && (choix != 2) && (choix != 3)&& (choix != 4)  );

    /*--------------------------------------- */ 


    /* ------- Controler la division par 0 --------*/
    nombre1 =Number(prompt('Entrez le premier nombre ;'));


    do{
        nombre2 = Number(prompt('Entrez le deuxième nombre :'));
        if(nombre2==0){

            alert('On n epeut pas diviser par 0.')
        }

    }while(choix==4 && nombre2==0);




    switch (choix){
        case '1': {
            alert('La somme de ' +nombre1+' et ' +nombre2+' est égale à '+(nombre1+nombre2)+'.');
            break;
        }
        case '2' :{
            alert('La différence entre ' +nombre1+' et ' +nombre2+' est égale à '+(nombre1-nombre2)+'.');
            break;
        }
        case '3' :{
            alert('Le produit de ' +nombre1+' par ' +nombre2+' est égale à '+(nombre1*nombre2))+'.';
            break;
        }
        case '4': {

            alert('Le quotient de' +nombre1+' par ' +nombre2+' est égale à '+(nombre1/nombre2)+'.');
            break;
        }   



    }           
}while(confirm('Veulez-vous continuer'));
