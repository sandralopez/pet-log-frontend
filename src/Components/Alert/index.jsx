import { useState, useEffect } from 'react';

function Alert({alert, setAlert}) {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(false);

			setAlert(() => ({
				type: "",
				message: ""
			}));
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	let alertClass = "fixed top-20 p-4 border rounded-xl m-4 w-2/6";

	switch (alert.type) {
		case "success":
			alertClass+= " bg-green-100 border-l-4 border-green-500 text-green-700 p-4";
			break;
		case "info":
			alertClass+= " bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4";
			break;
		case "error":
			alertClass+= " bg-red-100 border-l-4 border-red-500 text-red-700 p-4";
			break;
		case "warning":
			alertClass+= " bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4";
			break;
	}

	if (!show) {
		return null;
	}

	return (
		<div className={alertClass}>
			<p>{alert.message}</p>
		</div>
	);
}

export { Alert };