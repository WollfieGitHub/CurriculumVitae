import {useCallback, useMemo, useRef, useState} from "react";

export function useRefDimensions<T extends HTMLElement>() {
	const element = useRef<T>();

	const [dimensions, setDimensions] = useState({width: 0, height: 0});

	const observer = useMemo(
		() =>
			new ResizeObserver((entries) => {
				const target = entries[0].target;
				if (!target) {
					return;
				}

				const {width, height} = target.getBoundingClientRect();
				setDimensions({width: Math.round(width), height: Math.round(height)});
			}),
		[],
	);

	const sizeRef = useCallback((node: T) => {
		if (node !== null) {
			element.current = node;
			observer.observe(node);
		} else if (element.current !== undefined) {
			observer.unobserve(element.current);
			element.current = undefined;
		}
	}, [observer]);

	return {
		ref: sizeRef,
		width: dimensions.width,
		height: dimensions.height,
	};
}