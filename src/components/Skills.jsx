import html from "../assets/skill/html.png"
import css from "../assets/skill/css.png"
import react from "../assets/skill/react.png"
import js from "../assets/skill/js.png"
import node from "../assets/skill/node.png"
import express from "../assets/skill/express.png"
import mongo from "../assets/skill/mongo.png"
import tailwind from "../assets/skill/tailwind.png"

const Skills = () => {

    return (
        <div className="min-h-screen space-y-5 mx-5">
            <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-red-600 to-pink-600">Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 bg-gray-100 p-5">
                {/* 1 */}
                <div className="border p-5 rounded-md shadow-md hover:shadow-2xl duration-500 space-y-4 bg-white">
                    <img src={html} alt="" className="h-32 w-32 mx-auto" />
                    <p className="text-center text-xl font-bold">Html</p>
                </div>

                {/* 2 */}
                <div className="border p-5 rounded-md shadow-md hover:shadow-2xl duration-500 space-y-4 bg-white">
                    <img src={css} alt="" className="h-32 w-32 mx-auto" />
                    <p className="text-center text-xl font-bold">CSS 3</p>
                </div>
                {/* 2 */}
                <div className="border p-5 rounded-md shadow-md hover:shadow-2xl duration-500 space-y-4 bg-white">
                    <img src={js} alt="" className="h-32 w-32 mx-auto" />
                    <p className="text-center text-xl font-bold">Javascript</p>
                </div>
                {/* 2 */}
                <div className="border p-5 rounded-md shadow-md hover:shadow-2xl duration-500 space-y-4 bg-white">
                    <img src={tailwind} alt="" className="h-32 w-32 mx-auto" />
                    <p className="text-center text-xl font-bold">Tailwind</p>
                </div>
                {/* 2 */}
                <div className="border p-5 rounded-md shadow-md hover:shadow-2xl duration-500 space-y-4 bg-white">
                    <img src={node} alt="" className="h-32 w-32 mx-auto" />
                    <p className="text-center text-xl font-bold">Node JS</p>
                </div>
                {/* 2 */}
                <div className="border p-5 rounded-md shadow-md hover:shadow-2xl duration-500 space-y-4 bg-white">
                    <img src={react} alt="" className="h-32 w-32 mx-auto" />
                    <p className="text-center text-xl font-bold">React Js</p>
                </div>
                {/* 2 */}
                <div className="border p-5 rounded-md shadow-md hover:shadow-2xl duration-500 space-y-4 bg-white">
                    <img src={express} alt="" className="h-32 w-32 mx-auto" />
                    <p className="text-center text-xl font-bold">Express JS</p>
                </div>
                <div className="border p-5 rounded-md shadow-md hover:shadow-2xl duration-500 space-y-4 bg-white">
                    <img src={mongo} alt="" className="h-32 w-32 mx-auto" />
                    <p className="text-center text-xl font-bold">MongoDb</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;