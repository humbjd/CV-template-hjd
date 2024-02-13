// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
const puppeteer = require('puppeteer');

document.getElementById('btnDownload').addEventListener('click', function() {
  // Chamar a função salvarPaginaComoPDF quando o botão for clicado
  salvarPaginaComoPDF('URL_DA_PAGINA', 'Humberto_Dantas.pdf');
});

async function salvarPaginaComoPDF(url, nomeArquivo) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navegar para a página desejada
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Esperar um curto período para garantir que todos os recursos estejam carregados
  await page.waitForTimeout(2000);

  // Gerar o arquivo PDF
  await page.pdf({ path: nomeArquivo, format: 'A4' });

  // Fechar o navegador
  await browser.close();

  console.log(`PDF salvo como ${nomeArquivo}`);
}