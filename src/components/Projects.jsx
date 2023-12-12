import education from "../assets/project/education.png"
import food from "../assets/project/food.png"
import tech from "../assets/project/tech.png"

const Projects = () => {

    return (
        <div className="my-10">
            <h2 className="mb-5 text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-red-600 to-pink-600">Projects</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="space-y-5 border p-5 hover:shadow-2xl duration-500">
                <img src={education} alt="" className="w-full h-52"/>
                <div className="flex justify-around">
                    <a href="https://github.com/rafi00000/student-management-client" className="btn btn-sm">Github Link</a>
                    <a href="https://orange-goldfish.surge.sh"><button className="btn btn-sm">Live Link</button></a>
                </div>
            </div>
            <div className="space-y-5 border p-5 hover:shadow-2xl duration-500">
                <img src={food} alt="" className="w-full h-52"/>
                <div className="flex justify-around">
                    <a href="https://github.com/rafi00000/food-community-client" className="btn btn-sm">Github Link</a>
                    <a href="https://labored-class.surge.sh"><button className="btn btn-sm">Live Link</button></a>
                </div>
            </div>
            <div className="space-y-5 border p-5 hover:shadow-2xl duration-500">
                <img src={tech} alt="" className="w-full h-52"/>
                <div className="flex justify-around">
                    <a href="https://github.com/rafi00000/tech-park-client" className="btn btn-sm">Github Link</a>
                    <a href="https://squalid-river.surge.sh"><button className="btn btn-sm">Live Link</button></a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Projects;