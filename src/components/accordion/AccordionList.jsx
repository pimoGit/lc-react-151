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
    ];

    return (
        <div className="accordion-list">
            <Accordion />
            <Accordion />

        </div>
    )
}

export default AccordionList
