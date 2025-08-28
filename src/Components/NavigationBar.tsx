import { Link } from "react-router-dom"

function NavigationBar() {

    return (

        <div className="flex gap-32 px-60 py-11 bg-gray-100">

            <div className="text-blue-700 text-5xl font-bold">
                <h1>Mimitha</h1>
            </div>

            <div className="flex gap-8 text-2xl">

                <div>
                    <Link to="/">Home</Link>
                </div>

                <div>
                    <Link to="/about">About</Link>
                </div>

                <div>
                    <Link to="/projects">Projects</Link>
                </div>

                <div>
                    <Link to="/qualifications">Qualifications</Link>
                </div>

                <div>
                    <Link to="/experiences">Experiences</Link>
                </div>

                <div>
                    <Link to="/contact">Contact</Link>
                </div>

            </div>

        </div>

    )

}

export default NavigationBar
