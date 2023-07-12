function Pet({ avatar, name, species}) {
	return (
		<div className="w-72 rounded shadow-lg flex justify-center cursor-pointer">
		    <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-300 text-xl text-white">
		      {/* <img src={avatar} className="rounded-full" /> */}
		      <p className="font-semibold">{name[0].toUpperCase()}</p>
		    </div>
			<div className="px-6 py-4">
				<div className="text-xl mb-2">{name}</div>
				<p className="text-gray-700 text-base">
					{species}
				</p>
			</div>
		</div>
	)
}

export { Pet };