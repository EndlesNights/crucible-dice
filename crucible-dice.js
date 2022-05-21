Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "crucible-dice", name: "Crucible Dice"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/crucible-dice/crucible_d2.glb",
		system: "crucible-dice"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/crucible-dice/crucible_d4.glb",
		system: "crucible-dice"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/crucible-dice/crucible_d6.glb",
		system: "crucible-dice"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/crucible-dice/crucible_d8.glb",
		system: "crucible-dice"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/crucible-dice/crucible_d10.glb",
		system: "crucible-dice"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/crucible-dice/crucible_d100.glb",
		system: "crucible-dice"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/crucible-dice/crucible_d12.glb",
		system: "crucible-dice"
	});	
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/crucible-dice/crucible_d20.glb",
		system: "crucible-dice"
	});
});