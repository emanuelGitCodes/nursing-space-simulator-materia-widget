import React, { Component } from "react";
import { connect } from "react-redux";

// Custom React Components
import AssetControls from "./ui/asset_controls";
import AssetTray from "./ui/asset_tray";
import CategoryButton from "./ui/category_button";
import MovementControls from "./ui/movement_controls";

// Redux Actions and Custom Libraries
import {
	updateCameraPosition,
	toggleThirdPerson
} from "../actions/camera_actions.js";
import { toggleMenuVisibility, setCategory } from "../actions/menu_actions";
import { checkPropsExist } from "../utils";

import {
	deselectAsset,
	editAsset
	extendWall,
	removeAsset,
	rotateAsset,
	selectAssetType,
	updateAssetPosition,
} from "../actions/grid_actions";

export class HUD extends Component {
	renderHUD() {
		const { mode, selectedAsset, thirdPerson } = this.props;
		const { updateAssetPosition, updateCameraPosition } = this.props;

		const update =
			mode === "manipulation" ? updateAssetPosition : updateCameraPosition;

		return (
			<div>
				{mode !== "editAsset" ? (
					<MovementControls
						thirdPerson={thirdPerson}
						update={update}
						updateCameraPosition={updateCameraPosition}
					/>
				) : null}
				{thirdPerson ? (
					<div>
						{selectedAsset ? (
							<AssetControls
								currentX={this.props.currentX}
								currentZ={this.props.currentZ}
								deselectAsset={this.props.deselectAsset}
								editAsset={this.props.editAsset}
								extendWall={this.props.extendWall}
								grid={this.props.grid}
								isMenuVisible={this.props.visible}
								mode={this.props.mode}
								removeAsset={this.props.removeAsset}
								rotateAsset={this.props.rotateAsset}
								selectedAsset={this.props.selectedAsset}
								toggleMenu={this.props.toggleMenuVisibility.bind(this)
								}
							/>
						) : null}
						<AssetTray
							assets={this.props.assets}
							categories={this.props.categories}
							currentCategory={this.props.currentCategory}
							selectAssetType={this.props.selectAssetType}
							selectedAsset={this.props.selectedAsset}
							setCategory={this.props.setCategory}
							showMenu={this.props.visible}
							toggleMenu={this.props.toggleMenuVisibility.bind(this)}
						/>
					</div>
				) : (
					<div id="ground-top-panel">
						<button id="back" onClick={() => this.props.toggleThirdPerson()}>
							Back
						</button>
					</div>
				)}
			</div>
		);
	}
	render() {
		if (checkPropsExist(this.props)) return this.renderHUD();
		else return null;
	}
}

function mapStateToProps({ data, menu, grid, position }) {
	return {
		assets: data.assets,
		categories: data.categories,
		currentCategory: menu.currentCategory,
		currentX: grid.currentX,
		currentZ: grid.currentZ,
		grid: grid.grid,
		mode: grid.mode,
		selectedAsset: grid.selectedAsset,
		thirdPerson: position.thirdPerson
		visible: menu.visible,
	};
}

export default connect(mapStateToProps, {
	deselectAsset,
	editAsset
	extendWall,
	removeAsset,
	rotateAsset,
	selectAssetType,
	setCategory,
	toggleMenuVisibility,
	toggleThirdPerson,
	updateAssetPosition,
	updateCameraPosition,
})(HUD);
