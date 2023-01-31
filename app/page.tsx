"use client";
import { FC } from "react";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Courses from "@/Components/Courses";

const Home: FC = () => {
    return (
        <main style={{ marginTop: "80px" }}>
            <Hero />
            <About />
            <Courses />
        </main>
    )
};

export default Home;