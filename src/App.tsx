import { useState, useEffect } from "react";
import { Shader, FlowingGradient } from "shaders/react";

import "./style.scss";

export function App() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        function onScroll() {
            const winScrolled = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScrolled / height) * 100;

            setScrollProgress(scrolled);
        }

        window.addEventListener("scroll", onScroll);
        
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <div id="container">
            <Shader id="background">
                <FlowingGradient
                    colorA="#000"
                    colorB="#111111ff"
                    colorC="#303030ff"
                    colorD="#111111ff"
                />
            </Shader>
            <header>
                <h1>StemaSeer</h1>

                <div id="header_links_container">
                    <h2>Page 1</h2>
                    <h2>Page 2</h2>
                    <h2>Page 3</h2>
                    <h2>Page 4</h2>
                    <h2><a href="https://nasahunch.com/projects/sft-2026-27-llaso-project-4-ai-predictive-maintenance-for-lunar-robots-n77o9n3o27fhozkq28jootsy" target="_blank">About HUNCH</a></h2>
                </div>

                <div id="scroll_bar">
                    <div
                        id="scroll_progress"
                        style={{
                            width: `${scrollProgress}%`
                        }}
                    ></div>
                </div>
            </header>

            <main>
                <section id="page_one" className="page">
                    <div id="description">
                        <h1 className="subtitle">OVERVIEW</h1>

                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                        <p className="paragraph">In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                    </div>

                    <div id="image_container">
                        <img src="/images/lunar_rover.webp" alt="Lunar Rover"/> <br></br>
                        <p id="caption">caption...</p>
                    </div>
                </section>

                <section id="section_one" className="section"> {/* meet the team section */}

                </section>

                <section id="page_two" className="page">
                    <aside id="sidebar"></aside>

                    <div id="content">

                    </div>
                </section>
            </main>
        </div>
    )
}