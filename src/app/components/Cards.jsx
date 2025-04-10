"use client";

import Image from "next/image";
import QuizPage from "../quiz/page";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function MarketingCards() {

    const cardsData = [
        { 
            text: 'Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.',
            link: '/quiz',
        },
        {
            text: 'Build modern web apps faster with easy deployment and scalability.',
            link: '/quiz',
        },
        {
            text: 'Easily integrate backend APIs and enhance app performance.',
            link: '/quiz',
        },
        {
            text: 'Create responsive layouts using Tailwind and Next.js.',
            link: '/quiz',
        },
        {
            text: 'Use this template to speed up your next project.',
            link: '/quiz',
        },
        {
            text: 'Great for portfolios, dashboards, and landing pages.',
            link: '/quiz',
        },
    ];



    return (
        <>
            <div className="min-h-screen bg-[#0537E7] flex flex-col items-center justify-start px-4 py-20 rounded-tr-[150px] rounded-bl-[150px]">
                {/* Centered animated heading */}
                <h1 className="text-center text-5xl font-semibold text-white mb-11">
                    {"Quizzes Selection".split("").map((char, index) => (
                        <span
                            key={index}
                            className="inline-block opacity-0 transition-opacity duration-700"
                            style={{
                                animation: `fadeIn 0.3s ease forwards`,
                                animationDelay: `${index * 0.03}s`,
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>

                {/* Cards Section */}
                <div className="w-full max-w-6xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cardsData.map((card, index) => (
                            <div
                                key={index}
                                className="group relative cursor-pointer overflow-hidden px-6 pt-10 bg-white pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg"
                            >
                                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-[10]"></span>
                                <div className="relative z-10 mx-auto max-w-md">
                                    <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                       <Image src="/Adobe Express - file.png" width={60} height={60} />
                                    </span>
                                    <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                        <p>{card.text}</p>
                                    </div>
                                    <div className="pt-5 text-base font-semibold leading-7">
                                        <p>
                                            <a href={card.link} className="text-sky-500 transition-all duration-300 group-hover:text-white">
                                                Start Test &rarr;
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> 

                {/* Animation CSS */}
                <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        } 
      `}</style>
            </div>
        </>
    );
}