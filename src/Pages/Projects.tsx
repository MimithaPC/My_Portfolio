function Projects() {

	
  const handleClick = () => {
    window.open("https://github.com/MimithaPC/ERP_Resource_Module", "_blank"); 
  };

  	return (

		<div className="pb-14">

			<h1 className="text-center text-4xl font-bold py-14">My Projects</h1>

			<div className="pl-72">
				<div className="flex gap-44">
					<h1 className="text-2xl py-3 font-bold">Project 01 - ERP Construction Website [Resource Module] </h1>
					<button onClick={handleClick} className="cursor-pointer hover:scale-110 rounded-full bg-blue-700 p-4 text-white not-visited'">View Code</button>
				</div>
				<div className="pl-36">
					<h1 className="text-2xl py-3 "><span className="text-blue-500 font-bold">Frontend : </span>ReactJS and TypeScript</h1>
					<h1 className="text-2xl py-3"><span className="text-blue-500 font-bold">Backend : </span>Node.js</h1>
					<h1 className="text-2xl py-3"><span className="text-blue-500 font-bold">Database : </span>PostgreSQL</h1>
					<h1 className="text-2xl py-3"><span className="text-blue-500 font-bold">Package Manager : </span>Vite</h1>
					<h1 className="text-2xl py-3"><span className="text-blue-500 font-bold">API Testing Tool : </span>Thunder Client.</h1>
				</div>
			</div>
			
			</div>

	)

}

export default Projects
