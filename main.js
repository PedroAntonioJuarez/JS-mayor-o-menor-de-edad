//Mayor o menor de edad

function mayoromenoredad(nro){
    let texto1 = 'sos mayor de edad';
    let texto2 = 'y estas en la 3ra edad';

    if(nro < 18) {
        return ('sos menor de edad');
    }else {
        if(Boolean (nro < 60)){
            return(texto1);
        }
        else{
            return(texto1.contac(' ',texto2));
        }
    }
}
const persona = (object) =>{
    return console.log(`${object.name} ${object.lastname}`,mayoromenoredad(object.age));
  }


const usuario = {name:'pedro', lastname:'juarez', age: 33};

persona(usuario);
