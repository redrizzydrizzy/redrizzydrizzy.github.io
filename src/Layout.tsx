import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react";

export function Layout() {
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
        <div>
            <header>
                <h1><a href="#page_one">StemaSeer</a></h1>

                <nav id="header_links_container">
                    <h2><a href="#page_one">Introduction</a></h2>
                    <h2>Timeline</h2>
                    <h2>Page 3</h2>
                    <h2>Page 4</h2>
                    <h2><a href="https://nasahunch.com/projects/sft-2026-27-llaso-project-4-ai-predictive-maintenance-for-lunar-robots-n77o9n3o27fhozkq28jootsy" target="_blank">NASA HUNCH</a></h2>
                </nav>

                <div id="scroll_bar">
                    <div
                        id="scroll_progress"
                        style={{ width: `${scrollProgress}%` }}
                    ></div>
                </div>
            </header>

            <div id="container">
                <main>
                    <Outlet />
            
                    <section id="footer">
                        <div id="description">
                            <h2>StemaSeer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        </div>

                        <nav>
                            <div>
                                <h2><a href="#page_one">Introduction</a></h2>
                                <p><a href="#page_one">✦ Overview</a></p>
                                <p><a href="#caption">✦ Meet The Team</a></p>
                                <p><a href="#page_two">✦ Significance</a></p>
                            </div>

                            <div>
                                <h2>Timeline</h2>
                                <p><a>✦ Initialization</a></p> {/* pre-PDR */}
                                <p><a>✦ PDR Period</a></p> {/* PDR - CDR */}
                                <p><a>✦ CDR Period</a></p> {/* CDR - presentation */}
                                <p><a>✦ Presentation</a></p> {/* competition & post-presentation(?) */}
                            </div>

                            <div>
                                <h2>Category</h2>
                                <p><a>✦ Link</a></p>
                                <p><a>✦ Link</a></p>
                                <p><a>✦ Link</a></p>
                                <p><a>✦ Link</a></p>
                            </div>
                            
                            <div>
                                <h2>Category</h2>
                                <p><a>✦ Link</a></p>
                                <p><a>✦ Link</a></p>
                                <p><a>✦ Link</a></p>
                                <p><a>✦ Link</a></p>
                            </div>
                        </nav>

                        <div id="footnote"><h2>© 2026 StemaSeer — CIS students of Tri-County RVTHS</h2></div>
                    </section>
                </main>
            </div>
        </div>
    )
}