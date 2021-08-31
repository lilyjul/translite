// Назначения активной кнопки
let activeButton = document.getElementById("activeButton");
// Мап для транслита
let obj = {
    'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'j',    'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'J',    'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
};
//

function foo(){
    let text = document.getElementById("textInput").value;
    if (text.length>=1){
    let p = document.createElement('p');
    p.textContent =  text;
    let areaRu = document.getElementById('area1');
    areaRu.prepend(p)

function trnslt() {
        let result = '';
        for (let i = 0; i<text.length; i++){
          if (obj.hasOwnProperty(text[i])){ 
        result += obj[text[i]];
        } else{
          result +=text[i];
        }
        }
        return result;
        }
        let pEn = document.createElement('p')
        pEn.textContent = trnslt()
        let areaEn = document.getElementById('area2')
        areaEn.prepend(pEn)

if (text.length>27){
            p.title = text
            pEn.title = trnslt()
        }
    
document.getElementById("textInput").value = '' ;
} else {
  alert('Чуть больше букв =)')
}
};

activeButton.onclick = foo

