
// import { Shader, FlowingGradient } from "shaders/react";

import "../style.scss";

export function Home() {
    return (
        <div id="home">
            <section id="page_one" className="page"> {/* introduction page */}
                <div id="description">
                    <h1 className="subtitle">PROJECT OVERVIEW</h1>

                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                    <p className="paragraph">In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                </div>

                <div id="image_container">
                    <img src="/images/apollo_eleven.webp" alt="Lunar Rover"/> <br></br>
                    <p id="caption"><em>Astronaut Buzz Aldrin standing on the Moon, facing a U.S. flag during the Apollo 11 mission.</em></p>
                </div>
            </section>

            <section id="section_one" className="section"> {/* meet the team section */}
                <h1>StemaSeer Staff <span>| Tri-County RVTHS · CIS</span></h1>

                <div id="cards_container">
                    <div className="card">
                        <img src="/images/meet_the_members_placeholder.webp"/>

                        <div id="description">
                            <h1>Lucas Patel</h1>
                            <h2>AI Research Engineer</h2> <br></br>

                            <p>
                                <span>Contributions:</span> <br></br>
                                ✦ Contribution one
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src="/images/meet_the_members_placeholder.webp"/>

                        <div id="description">
                            <h1>Alex Lopez</h1>
                            <h2>Lead Developer</h2> <br></br>

                            <p>
                                <span>Contributions:</span> <br></br>
                                ✦ Contribution one
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src="/images/meet_the_members_placeholder.webp"/>

                        <div id="description">
                            <h1>Levi Harter</h1>
                            <h2>Project Manager</h2> <br></br>

                            <p>
                                <span>Contributions:</span> <br></br>
                                ✦ Introduced NASA HUNCH to the CIS shop. <br></br>
                                ✦ Brought the team together.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src="/images/meet_the_members_placeholder.webp"/>

                        <div id="description">
                            <h1>Matthew Desrosiers</h1>
                            <h2>Web Designer / Developer</h2> <br></br>

                            <p>
                                <span>Contributions:</span> <br></br>
                                ✦ Built, designed and developed the <em>beautiful</em> website you see now.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src="/images/meet_the_members_placeholder.webp"/>

                        <div id="description">
                            <h1>Jonathan Gagne</h1>
                            <h2>Dashboard Designer / Developer</h2> <br></br>

                            <p>
                                <span>Contributions:</span> <br></br>
                                ✦ Contribution one
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="page_two" className="page">
                <div id="content">
                    <h1>PROJECT SIGNIFICANCE</h1>

                    <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
                
                    <hr></hr>
                
                    <div><img src="/images/rover_placeholder.webp"/></div>
                    <div><img src="/images/lunar_rover.webp"/></div>
                    <div><img src="images/moon.webp"/></div>
                </div>
                
                <aside id="sidebar">
                    <h1>OBJECTIVE</h1>

                    <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
                    <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in</p>
                    <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differes</p>
                    <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
                    <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differes</p>
                </aside>
            </section>
        </div>
    )
}