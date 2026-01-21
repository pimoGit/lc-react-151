import { useState } from "react";
import Accordion from "./Accordion";

function AccordionList() {

    // dati delle faq
    const faqs = [
        {
            id: 1,
            title: "Accordion 1",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
        },
        {
            id: 2,
            title: "Accordion 2",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
        },
        {
            id: 3,
            title: "Accordion 3",
            content:
                "contenuto 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
        },
    ];

    // settiamo la var di stato del componente per gestire l'apertura
    const [activeAccordion, setActiveAccordion] = useState(null);

    return (
        <div className="accordion-list">
            {faqs.map((faq) => (
                <Accordion key={faq.id}
                    title={faq.title}
                    content={faq.content}
                    isOpen={activeAccordion === faq.id}
                    onAccToggle={() => setActiveAccordion(activeAccordion === faq.id ? null : faq.id)}
                />
            ))}



        </div>
    )
}

export default AccordionList
