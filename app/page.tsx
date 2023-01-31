"use client";
import { FC } from "react";
import Hero from "@/Components/Hero";
import About from "@/Components/About";

const Home: FC = () => {
    return (
        <main style={{ marginTop: "80px" }}>
            <Hero />
            <About />
        </main>
    )
};

export default Home;