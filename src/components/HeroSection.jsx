import { ArrowDown } from "lucide-react"
import { useEffect } from "react"

export const HeroSection= () => {

    useEffect(() => {
    const handleScroll = () => {
        const indicator = document.getElementById("scroll-indicator");
        if(!indicator) return;
        if(window.scrollY > 10){
            indicator.classList.add("opacity-0");
            indicator.classList.remove("opacity-100");
            indicator.style.pointerEvents = "none";
        }else{
            indicator.classList.add("opacity-100");
            indicator.classList.remove("opacity-0");
            indicator.style.pointerEvents = "auto";
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return <section id="hero"
    className="relative min-h-screen flex flex-col item-center justify-center px-4"
    >
        <div className="container max-w-4l mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 
                className="text-4xl md:text-6l font-bold tracking-tight">
                    <span 
                    className="opacity-0 animate-fade-in"
                    > Hi, I'm </span>
                    <span
                    className="text-primary opacity-0 animate-fade-in-delay-1"
                    > Ayush </span>
                    <span
                    className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"
                    > Mishra </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Building scalable web apps and data systems with React, Django, Kafka, and PySpark. 
                    Passionate about solving real problems with clean, efficient solutions.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="fancy-button">
                        View My Work
                    </a>
                </div>

            </div>
        </div>

        <div 
        id = "scroll-indicator"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-300 opacity-100"
        >
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}