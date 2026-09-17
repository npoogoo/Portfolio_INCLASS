console.log("custom elements are connected");

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML= ` 
            <header>
        <h1> Nico's Portfolio</h1>
        <div id="navigationButtons">
            <button onclick="window.location.href = 'index.html' "> HOME</button>
            <button onclick="window.location.href = 'HTMLGames.html' ">HTML GAMES</button>
            <button onclick="window.location.href = 'Game1.html' ">Game 1</button>
            <button onclick="window.location.href = 'Game2.html' ">Game 2</button>
        </div>
    </header>
        
        `
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML= ` 
            <footer>
            <p> This is the footer</p>
            </footer>
        
        `
    }
}

class MyOpener extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id ="opener">
            <form action="https://api.web3forms.com/submit" method="POST" id="visitorForm">
            <input type="hidden" name="access_key" value="024d31bb-a0f6-441b-838f-4d0e9fbb72cf">
                <label for=""> Name <input type="text" id="visitorName" name="visitor name></label>
                <label for=""> Company <input type="text" id="visitorCompany" name="company name"></label>
                <input type="submit" id="submitVisitor" value="submit Details">
                <input type="submit" id="submitAnon" value="Abstain for now">
            </form>
        </div>
        `
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
customElements.define('my-opener', MyOpener);