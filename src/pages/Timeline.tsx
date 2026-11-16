{/* imports */}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../style.scss";

{/* initialization */}



{/* processing */}



{/* display */}

export function Timeline() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            setTimeout(() => {
                document.getElementById(location.state.scrollTo)
                    ?.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    }, [location.state]);

    return (
        <div id="timeline">
            <section id="page_one" className="page"> {/* initialization; pre-PDR */}
                <h1>work in progress...</h1>
            </section>
        </div>
    )
}