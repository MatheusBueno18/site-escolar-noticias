const CURRENT_PAGE = document.body.dataset.page || '';

function renderHeader() {
  const nav = [
    { href: 'index.html',    id: 'home',     label: 'Início',   icon: 'fa-house' },
    { href: 'noticias.html', id: 'noticias', label: 'Notícias', icon: 'fa-newspaper' },
    { href: 'aulas.html',    id: 'aulas',    label: 'Aulas',    icon: 'fa-graduation-cap' },
    { href: 'contatos.html', id: 'contatos', label: 'Contatos', icon: 'fa-envelope' },
  ];

  const navLinks = nav.map(n => `
    <a href="${n.href}" class="${CURRENT_PAGE === n.id ? 'active' : ''}">
      <i class="fa-solid ${n.icon}"></i> ${n.label}
    </a>`).join('');

  document.getElementById('site-header').innerHTML = `
    <div class="top-bar">
      <div class="top-bar-inner">
        <div class="top-bar-links">
          <a href="https://www.fiesp.com.br/">FIESP</a><span>|</span>
          <a href="https://www.ciesp.com.br/">CIESP</a><span>|</span>
          <a href="https://www.sesisp.org.br/">SESI</a><span>|</span>
          <a href="https://www.sp.senai.br/">SENAI</a>
        </div>
        <div class="social-icons">
          <a href="https://www.facebook.com/sesisp/?locale=pt_BR" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://x.com/SesiSaoPaulo" aria-label="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.youtube.com/SesiSaoPauloOficial" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://www.instagram.com/sesisp/?hl=pt-br" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://br.linkedin.com/company/sesisp" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <header>
      <div class="header-inner">
        <div class="header-main">
          <a href="index.html" class="logo" aria-label="SESI SENAI - Início">
            <img style="width: 250px; height: 40px;" src="img/logoCorporativo.png" alt="Logo sesi-senai">
          </a>
          <div class="search-bar">
            <input type="search" placeholder="O que está buscando?" aria-label="Buscar">
            <button aria-label="Pesquisar"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
        <nav class="header-nav" aria-label="Navegação principal">
          ${navLinks}
          <a href="https://portaleduca.sesisp.org.br/Account/Login?ReturnUrl=%2F" style="margin-left:auto">
            <i class="fa-solid fa-graduation-cap"></i> Portal Educa
          </a>
          <a href="https://sesib2c.b2clogin.com/sesib2c.onmicrosoft.com/b2c_1a_signup_signin_migrate/oauth2/v2.0/authorize?client_id=1c274325-6dcc-4bb4-8de3-dc1e145f9557&redirect_uri=https%3A%2F%2Fwww.sesisp.org.br%2Fsignin-oidc&response_type=id_token&scope=openid%20profile&response_mode=form_post&nonce=639126378689611985.MDc2YzVjNTgtNWZmYi00YWU2LTgzYTktZGI1ZWQ3NjczOGVkYjEwMjdjMGQtOGE3YS00ZjQ2LWFjYTQtMjU1MzczODg5ZTQ4&client_info=1&x-client-brkrver=IDWeb.1.21.0.0&state=CfDJ8PfbT9w9YD5Og5RuBdWyDYVs_Uw_Gkx05smw0tqNcJsZNDvq2LlbKAj-oULieeVOFXc2xwfrWYbm8fPkdxxAesr3sb44yMzhcsvG2cwQvKDbzHik2Og7I33WjqQfq1XFU4vL5c7jq88ETjCMM3wRdsu0RlKvxrYkp_t2-TUB3KWc7VoDVaphwT9Nq3WBprJOYdGnmaousYcPRQVgkqz1eDOKaAyIMx_vR-1E9_7x3z6OaBRmgzF522iyNmEsdR8Yz_jWoyecS8CMixSOzUNbezoFX7TdJSKKCBZi0DAZP0rlhQRHfNKq2A6N874jyZm7dk0kwN-4PZ3nVAe6jy8_Gcc&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.14.1.0">
            <i class="fa-regular fa-circle-user"></i> Meu SESI · Entrar
          </a>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <footer>
      <div class="footer-info">
        <div class="footer-info-inner">
          <div class="footer-col">
            <h4>Edifício Rede SESI 399</h4>
            <p>Avenida Kazumi Yoshimura, 430</p>
            <p>Distrito Industria</p>
            <p>CEP: 18410-480</p>
          </div>
          <div class="footer-col">
            <h4>Contate-nos</h4>
            <a href="tel:1133220050">Grande São Paulo: (11) 3322-0050</a>
            <p style="font-size:12px;margin-top:3px">Telefone e WhatsApp</p>
            <a href="tel:08000551000" style="margin-top:8px">Outras localidades: 0800 055 1000</a>
            <p style="font-size:12px;margin-top:3px">Interior de SP, somente telefone fixo</p>
            <div style="display:flex;gap:16px;margin-top:12px">
              <a href="https://sesisenaisp.empregare.com/pt-br/vagas" class="footer-icon-link"><i class="fa-solid fa-briefcase"></i> Trabalhe Conosco</a>
              <a href="https://www.sesisp.org.br/ouvidoria" class="footer-icon-link"><i class="fa-solid fa-microphone-lines"></i> Ouvidoria</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>E-mail</h4>
            <a href="mailto:sesisenai8967@gmail.com">seseisenai8967@gmail.com</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-bg"></div>
        <div class="footer-bottom-inner">
          <nav class="footer-nav" aria-label="Rodapé">
            <a href="#">Institucional</a>
            <a href="#">Editais</a>
            <a href="#">Perguntas Frequentes</a>
            <a href="#">Consulta ao Acervo</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Editoria</a>
          </nav>
          <div class="footer-social-right">
            <a href="https://www.facebook.com/sesisp/?locale=pt_BR" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://x.com/SesiSaoPaulo" aria-label="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.youtube.com/SesiSaoPauloOficial" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://www.instagram.com/sesisp/?hl=pt-br" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://br.linkedin.com/company/sesisp" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('fade-in'); observer.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.news-card, .news-list-item, .aula-item, .sidebar-card').forEach(el => observer.observe(el));
});
