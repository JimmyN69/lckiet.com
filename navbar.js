const navbar = `
    <nav class="navbar">
        <a class="logo" href="/">LCK</a>

        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/randompage/">Random Page</a>
            <a href="/games/">Games</a>
        </div>
    </nav>
`;

document.body.insertAdjacentHTML("afterbegin", navbar);