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

//expect(sum(3, 2)).toBe(5)


// for(let i = 0; i< 10;i++){
// 	let a = Math.floor(Math.random() * i)
// 	let b = Math.floor(Math.random() * i)
// 	console.log(a, b)
// 	expect(sum(a, b)).toBe(a + b)	
// }

const check_sum = (a, b) => a + b 

// Прогоняем функцию по циклу несколько раз, передавая функцию, функцию проверки,
//функцию для изменения аргументов, массив аргументов, количество повторов
const repeatCheck = (func, checkfunc, modfunc, arguments, rep) => {
	
	for(let i = 0; i < rep; i++){
		const args = arguments.map(modfunc)
		expect(func(...args)).toBe(checkfunc(...args))	
	}	
}

repeatCheck(sum, check_sum, x => Math.floor(Math.random() * 10),[2, 3], 5)