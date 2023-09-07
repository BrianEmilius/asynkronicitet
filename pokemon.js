fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
	.then(res => res.json())
	.then(function(result) {
		console.log(result)
		document.body.innerHTML += `<h1>${result.name}</h1>
		<p>Species: ${result.species.name}</p>
		<img src="${result.sprites.other.dream_world.front_default}" alt="">`
	})
