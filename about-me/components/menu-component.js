class MenuComponent extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("ul");
        componentRoot.setAttribute("class", "menu");       
        let section = this.getAttribute("section").split(",");

        for (const s of section){
            const l = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = s.trim();
            if (a.textContent === this.getAttribute("atual-section")){
                a.setAttribute("id", "selected");
            }
            l.appendChild(a)
            componentRoot.appendChild(l)
        }

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .menu {
            display: flex;
            justify-content: center;
            align-content: center;
            margin: 0;
        }

        .menu > li {
            list-style: none;
            font-size: 22px;
            padding: 80px 100px; 
            font-weight: 700;
        }

        .menu a {
            text-decoration: none;
            color: rgb(35, 30, 29)
        }

        .menu a:hover {
            color: rgb(210, 90, 90);
            cursor: pointer;
        }

        #selected {
            color: rgb(210, 90, 90);
        }
        `;

        return style;
    }
}

customElements.define("menu-component", MenuComponent);