import React from 'react'


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="noni6.jpg"
                            alt="image"
                        />
                    </div>
                    <div className=" w-3/4 h-auto">
                        <h2 className="text-2xl text-purple-800 font-bold md:text-4xl">
                            Who is Ananya?
                        </h2>
                        <p className="mt-6 text-pink-900">
                            Hello everyone, my name is Ananya Awasthy. I am currently pursuing my Bachelor of Technology in Computer Science and Engineering. I am passionate about technology, software development, and learning new skills that can help me grow both personally and professionally.
                        </p>
                        <p className="mt-4 text-pink-900">
                           During my academic journey, I have developed an interest in web development and have worked with technologies such as HTML, CSS, JavaScript, React, Python, FastAPI, SQL, PostgreSQL, and MongoDB. I enjoy building projects because they allow me to apply what I learn in a practical way. I am also exploring AI/ML
                        </p>
                        <p className="mt-4 text-pink-900">
                             Apart from academics, I enjoy reading books, drawing, painting, and listening
  to music. I also like exploring new technologies and experimenting with
  different ideas.

                        </p>
                        <p className="mt-4 text-pink-900">
                           My short-term goal is to strengthen my technical and problem-solving skills and secure a good opportunity in the software industry. In the long term, I want to become a skilled software developer and continue learning as technology evolves. I believe consistency, curiosity, and willingness to learn are the keys to achieving my goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}