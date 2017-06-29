export default function(ancestor, child) {

	while (child.parentNode) {
		if (child.parentNode === ancestor) {
			return true;
		}
		child = child.parentNode;
	}

	return false;
}