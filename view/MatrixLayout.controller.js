sap.ui.controller("sap.training.view.MatrixLayout", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf sap.training.view.MatrixLayout
	 */
	onInit: function() {

		var oMatrixLayout = this.getView().byId("myMatrixLayout");
		oMatrixLayout.setWidths(["70px", "230px"]);

	}

});