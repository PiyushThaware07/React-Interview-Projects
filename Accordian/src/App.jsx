import './App.css'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { PiFlowArrowFill } from "react-icons/pi";

const data = [
  {
    "question": "What is your favorite book?",
    "answer": "My favorite book is 'Sapiens: A Brief History of Humankind' by Yuval Noah Harari. The way it explores the history of humanity from the evolution of archaic human species to the present is both fascinating and enlightening. It provides a deep understanding of how Homo sapiens came to dominate the Earth and how our behavior and societies have evolved."
  },
  {
    "question": "What programming frameworks are you proficient in?",
    "answer": "I am proficient in several programming frameworks, including Angular, Flask, and Ruby on Rails. I have used Angular for developing dynamic, single-page applications with a focus on modularity and performance. Flask has been my go-to for lightweight web applications and REST APIs due to its simplicity and flexibility. Ruby on Rails, with its convention over configuration philosophy, has allowed me to build robust and scalable applications efficiently."
  },
  {
    "question": "How do you keep up with industry trends?",
    "answer": "I keep up with industry trends by regularly reading technology news on platforms like TechCrunch, Wired, and Hacker News. Additionally, I participate in online courses and certifications on platforms like Coursera and Udemy to stay updated with the latest technologies and best practices. I also attend industry conferences such as Google I/O and AWS re:Invent, which provide insights into the future of technology and networking opportunities with professionals in the field."
  },
  {
    "question": "What is your preferred development environment?",
    "answer": "My preferred development environment includes Visual Studio Code as the IDE, with a set of carefully selected extensions like Prettier, ESLint, and GitLens for code formatting, linting, and version control integration. I use Docker for containerization to ensure consistent development environments across different machines. I prefer working on a Unix-based system like macOS or Ubuntu due to their powerful command-line tools and support for open-source software."
  },
  {
    "question": "Can you describe a challenging project you worked on?",
    "answer": "One of the most challenging projects I worked on was the development of a microservices architecture for a large e-commerce platform. The project involved breaking down a monolithic application into multiple, independent services that could scale and deploy independently. This required extensive work in designing RESTful APIs, implementing service discovery, and ensuring data consistency across services using event-driven architecture. The most difficult aspect was managing the transition from the monolith to microservices without disrupting the existing user base. This project taught me the importance of thorough planning, continuous integration, and robust monitoring systems."
  },
  {
    "question": "What are your goals for the next five years?",
    "answer": "In the next five years, I aim to become a leading expert in cloud-native technologies, specializing in Kubernetes and serverless architectures. I plan to contribute to open-source projects that focus on improving cloud infrastructure and developer tooling. Additionally, I want to mentor junior developers and help them grow their skills, contributing to the broader tech community. Ultimately, I aspire to take on a technical leadership role where I can influence the architectural decisions of large-scale systems and drive innovation within my organization."
  }
]


export default function App() {
  const [active, setActive] = useState(Math.floor(Math.random() * 6));

  function handleClick(index) {
    if (active === index) {
      setActive(null);
    }
    else {
      setActive(index)
    }
  }

  return (
    <main className='h-screen w-screen flex flex-nowrap items-center justify-center overflow-x-hidden pt-10'>
      <div className="">
        <h1 className='text-xl font-semibold capitalize text-center my-5'>accordion</h1>
        <ul className='flex flex-col flex-nowrap gap-5'>
          {
            data.map((item, index) => (
              <li key={index} className='max-w-lg'>
                <div className="flex flex-nowrap items-center justify-between bg-emerald-100 border-[1.5px] border-emerald-400 text-emerald-500 px-5 py-3 rounded cursor-pointer" onClick={() => handleClick(index)}>
                  <h1 className='text-xs font-medium'>{item.question}</h1>
                  <IoIosArrowDown className={`text-lg ${active === index && "rotate-180 transition-transform duration-300"}`} />
                </div>

                {/* Accordian */}
                {
                  active === index
                  &&
                  <div className={`text-xs font-medium px-5 py-5 text-slate-600 ${active === index ? "opacity-100" : "opacity-0"} transition-opacity delay-1000 duration-1000 ease-in-out`}><PiFlowArrowFill className='text-2xl inline me-3' /> {item.answer}</div>
                }
              </li>
            ))
          }
        </ul>
      </div>

    </main>
  )
}
