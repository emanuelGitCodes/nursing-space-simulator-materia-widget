import AFRAME from "aframe";
import { Entity } from "aframe-react";
import React from "react";

export default props => {
	// attibutes
	const {
		color,
		isSelected,
		metalness,
		mode,
		rotation,
		selectionColor,
		selectionOpacity,
		trimColor,
		x,
		y,
		z
	} = props;

	// functions
	const { onClick, processStickers } = props;

	/*
	Structure:
	Entity to set position
		top
		door
		side
		side
		trim
		trim
	*/

	return (
		<Entity
			events={{ click: onClick }}
			position={{ x, y: 0, z }}
			rotation={{ x: 0, y: rotation, z: 0 }}>
			<Entity
				geometry={{ depth: 1, height: 1, primitive: "box", width: 1 }}
				material={
					isSelected && mode != "editAsset"
						? { color: selectionColor, opacity: selectionOpacity }
						: { color, metalness, opacity: 1 }
				}
				position={{ x: 0, y: 2.5, z: 0 }}
			/>
			<Entity
				geometry={{ height: 0.75, primitive: "plane", width: 2 }}
				material={
					isSelected && mode != "editAsset"
						? {
								color: selectionColor,
								opacity: selectionOpacity,
								side: "double"
							}
						: { side: "double", color: "white", opacity: 1, metalness }
				}
				position={{ y: 1 }}
				rotation={{ y: -90, z: -90 }}
			/>
			<Entity
				geometry={{ primitive: "box", height: 3, width: 1, depth: 0.125 }}
				material={
					isSelected && mode != "editAsset"
						? { color: selectionColor, opacity: selectionOpacity }
						: { color, metalness, opacity: 1 }
				}
				position={{ y: 1.5, z: 0.4375 }}
			/>
			<Entity
				geometry={{ depth: 0.125, height: 3, primitive: "box", width: 1 }}
				material={
					isSelected && mode != "editAsset"
						? { color: selectionColor, opacity: selectionOpacity }
						: { color, opacity: 1, metalness }
				}
				position={{ y: 1.5, z: -0.4375 }}
			/>
			<Entity
				depth=".35"
				height="0.15"
				material={
					isSelected && mode != "editAsset"
						? { color: selectionColor, opacity: selectionOpacity }
						: { opacity: 1, color: trimColor }
				}
				position={{ y: 0.15, z: 0.4375 }}
				primitive="a-box"
				rotation={{ x: -90 }}
				width="1.025"
			/>
			<Entity
				depth=".35"
				height="0.15"
				material={
					isSelected
						? { color: selectionColor, opacity: selectionOpacity }
						: { color: trimColor, opacity: 1 }
				}
				position={{ y: 0.15, z: -0.4375 }}
				primitive="a-box"
				rotation={{ x: -90 }}
				width="1.025"
			/>
			{processStickers()}
		</Entity>
	);
};