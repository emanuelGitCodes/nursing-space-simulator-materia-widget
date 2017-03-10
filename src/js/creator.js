document.addEventListener("DOMContentLoaded", function(event) {
	console.log("woo!");

	var qset = {
		items: [],
		options: {}
	};

	var widget =
	{
		engineName: '',
		title: ''
	};

	var materiaInterface = {}

	// Note: We're populating the qset assets and gridloader properties with default assets
	// This is currently copy/pasted from the demo.json
	qset.options.assets = {
		"bed": {
			"assetRotationState": 0,
			"buttonSource":"assets/icons/icon_bed.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#376AD3",
			"horizontal": 1,
			"id": "bed-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/bed/mesh_bed.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/bed/mesh_bed.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": -90, "z": 0},
			"scale": {"x": 0.35, "y": 0.35, "z": 0.35},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category": "beds"
		},
		"bedside-table": {
			"assetRotationState": 0,
			"buttonSource":"assets/icons/icon_bedsidetable.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#376AD3",
			"horizontal": 0,
			"id": "bedside-table",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/bedsidetable/mesh_bedsidetable.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/bedsidetable/mesh_bedsidetable.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": -90, "z": 0},
			"scale": {"x": 0.35, "y": 0.35, "z": 0.35},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 1,
			"category": "beds"
		},
		"chair": {
			"assetRotationState": 0,
			"buttonSource":"assets/icons/icon_chair.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#376AD3",
			"horizontal": 0,
			"id": "chair",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/chair/mesh_chair.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/chair/mesh_chair.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": -90, "z": 0},
			"scale": {"x": 0.35, "y": 0.35, "z": 0.35},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category": "equipment"
		},
		"crashcart": {
			"assetRotationState": 0,
			"buttonSource":"assets/icons/icon_crashcart.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "crashcart",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/crashcart/mesh_crashcart2.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/crashcart/mesh_crashcart2.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x": 0.35, "y": 0.35, "z": 0.35},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category": "equipment"
		},
		"computer": {
			"assetRotationState": 0,
			"buttonSource":"assets/icons/icon_computer.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "computer-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/computer-stand/mesh_computerstand.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/computer-stand/mesh_computerstand.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x": 0.35, "y": 0.35, "z": 0.35},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category": "equipment"
		},
		"door-1": {
			"assetRotationState": 0,
			"buttonSource":"assets/DOOR_1_2D.png",
			"canReplace": ["door"],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "door-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialType": "textured",
			"movable": "false",
			"objectSource": "assets/DOOR_1.png",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"repeat": "1 1",
			"scale": {"x":1, "y":3, "z":1},
			"tag": "a-box",
			"type": "door",
			"vertical": 0,
			"category": "walls"
		},
		"door-2": {
			"assetRotationState": 0,
			"buttonSource":"assets/DOOR_2_2D.png",
			"canReplace": ["door"],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "door-2",
			"isCloned": "false",
			"isPermanent": "false",
			"materialType": "textured",
			"movable": "false",
			"objectSource": "assets/DOOR_2.png",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"repeat": "1 1",
			"scale": {"x":1, "y":3, "z":1},
			"tag": "a-box",
			"type": "door",
			"vertical": 0,
			"category": "walls"
		},
		"iv": {
			"assetRotationState": 0,
			"buttonSource":"assets/icons/icon_iv.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "iv-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/iv/mesh_iv.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/iv/mesh_iv.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x": 0.35, "y": 0.35, "z": 0.35},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category": "equipment"
		},
		"table": {
			"assetRotationState": 0,
			"buttonSource":"assets/icons/icon_table.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#376AD3",
			"horizontal": 1,
			"id": "table",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/table/mesh_table.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/table/mesh_table.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": -90, "z": 0},
			"scale": {"x": 0.35, "y": 0.35, "z": 0.35},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 1,
			"category": "equipment"
		},
		"trashcan": {
			"assetRotationState": 0,
			"buttonSource":"assets/icons/icon_trashcan.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "trashcan-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/trashcan/mesh_trashcan.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/trashcan/mesh_trashcan.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x": 0.35, "y": 0.35, "z": 0.35},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category": "equipment"
		},
		"trashcan-bio": {
			"assetRotationState": 0,
			"buttonSource":"assets/icons/icon_trashcan_bio.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "trashcan-bio",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/trashcan/trashcan_bio.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/trashcan/mesh_trashcan.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x": 0.35, "y": 0.35, "z": 0.35},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category": "equipment"
		},
		"viewer": {
			"assetRotationState": 0,
			"buttonSource":"assets/VIEWER_1_2D.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "pov-camera",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/body-armour/BodyArmour02.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/body-armour/BodyArmour02.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 180, "z": 0},
			"scale": {"x":0.0008, "y":0.0008, "z":0.0008},
			"tag": "a-obj-model",
			"type": "view",
			"vertical": 0,
			"category": "equipment"
		},
		"wall-1": {
			"assetRotationState": 0,
			"buttonSource":"assets/WALL_2D_1.png",
			"canReplace": ["wall"],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#9FCDB1",
			"horizontal": 0,
			"id": "wall-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialType": "primitive",
			"movable": "false",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x":1, "y":3, "z":1},
			"tag": "a-box",
			"type": "wall",
			"vertical": 0,
			"category": "walls"
		},
		"wall-2": {
			"assetRotationState": 0,
			"buttonSource":"assets/WALL_2D_2.png",
			"canReplace": ["wall"],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#CBC99D",
			"horizontal": 0,
			"id": "wall-2",
			"isCloned": "false",
			"isPermanent": "false",
			"materialType": "primitive",
			"movable": "false",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x":1, "y":3, "z":1},
			"tag": "a-box",
			"type": "wall",
			"vertical": 0,
			"category": "walls"
		},
		"wall-3": {
			"assetRotationState": 0,
			"buttonSource":"assets/wall_fireextinguisher.jpg",
			"canReplace": ["wall"],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "#86867C",
			"horizontal": 0,
			"id": "wall-3",
			"isCloned": "false",
			"isPermanent": "false",
			"materialType": "primitive",
			"materialSource": "assets/wall_fireextinguisher.jpg",
			"movable": "false",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x":1, "y":3, "z":1},
			"tag": "a-box",
			"type": "wall",
			"vertical": 0,
			"category": "walls"
		},
		"wheelchair": {
			"assetRotationState": 0,
			"buttonSource":"assets/wheelchair/WHEELCHAIR_1_2D.png",
			"canReplace": [],
			"cellsOwned": "",
			"clonable": "false",
			"defaultColor": "",
			"horizontal": 0,
			"id": "wheelchair-1",
			"isCloned": "false",
			"isPermanent": "false",
			"materialSource": "assets/wheelchair/wheelchair.mtl",
			"materialType": "complex",
			"movable": "true",
			"objectSource": "assets/wheelchair/wheelchair.obj",
			"position": {"x": -100, "y": 0, "z": -100},
			"rotation": {"x": 0, "y": 0, "z": 0},
			"scale": {"x": 0.035, "y": 0.035, "z": 0.035},
			"tag": "a-obj-model",
			"type": "object",
			"vertical": 0,
			"category": "equipment"
		}
	}

	qset.options.categories = [ "beds", "equipment", "walls" ];

	qset.options.gridLoader = {
		"columns": 30,
		"content": "x-x-x-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-d1-d2-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-0-0-0-0-0-0-0-0-0-0-w1-w1-0-0-0-0-0-0-0-0-0-0-w1-x-x-x-x-x-x-w1-w1-w1-w1-w1-d1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-w1-d1-w1-w1-w1-w1-w1-w1-x-x-x",
		"rows": 12
	}

	materiaInterface.initNewWidget = function(w) {
		console.log("new");
	};

	materiaInterface.initExistingWidget = function(title, widget, qset, version, baseUrl) {
		console.log("Existing!");
	}

	materiaInterface.onSaveClicked = function() {
		title = document.getElementById("title").value;
		Materia.CreatorCore.save(title, qset, 1);

	}

	materiaInterface.onSaveComplete = function() {
		console.log("save complete!");
		return true;
	}

	return Materia.CreatorCore.start(materiaInterface);

});