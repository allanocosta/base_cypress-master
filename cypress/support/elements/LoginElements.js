class LoginElements {
    botaoAccount = () => {return '[href="/account"]'};

    setEmail = () => {return 'div[class*="vtex-login-2"] input[type="text"]'};

    setSenha = () => {return 'div[class*="vtex-login-2"] input[type="password"]'};

    botaoEntrar = () => {return 'button[type="submit"] span[class="t-small"]'};
}

export default LoginElements;