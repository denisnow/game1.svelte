export default function tabIndexSetter(tileElement, tabIndex) {

	function setTabIndex(tabIndex) {
		if (tabIndex !== -1) tileElement.tabIndex = tabIndex;
		else tileElement.removeAttribute('tabindex');
	}

	setTabIndex(tabIndex);

	return {
		update(tabIndex) {
			setTabIndex(tabIndex);
		}
	}
}