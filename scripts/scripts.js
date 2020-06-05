
//Функция проверки

function expect(value) {
	return {
		toBe: exp => {
			if(value === exp){
				console.log(`Test Success! Value is ${value}  expected ${exp}`)
			}
			else {
				console.error(`Test Fail. Value is ${value} but expected ${exp}`)
			}
		}
	}
}



const sum = (a, b) => a + b
const check_sum = (a, b) => a + b 


//ЧТО ДЕЛАЕТ Я хочу проверить любую функцию с любым числом
// аргументов сразу много раз. 

//КАК ДЕЛАЕТ Прогоняем функцию по циклу несколько раз, передавая функцию, функцию проверки,
//функцию для изменения аргументов, массив аргументов, количество повторов
const repeatCheck = (func, checkfunc, modfunc, argum, rep) => {
	
	for(let i = 0; i < rep; i++){
		const args = argum.map(modfunc)
		expect(func(...args)).toBe(checkfunc(...args))	
	}	
}

repeatCheck(sum, check_sum, x => Math.floor(Math.random() * 10),[2, 3], 5)
