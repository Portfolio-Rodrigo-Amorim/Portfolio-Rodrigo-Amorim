// Helper to build portfolio image URLs (static files in /portfolio/)
function p(path: string) {
    // Replace .png/.jpg extension with .webp (images were converted for optimization)
    const webpPath = path.replace(/\.(png|jpg|jpeg)$/i, '.webp')
    return `/portfolio/${webpPath}`
}

export interface Project {
    id: number
    title: string
    client: string
    category: string
    description: string
    images: string[]
}

// Order follows the portfolio folder structure exactly
export const projects: Project[] = [
    // === 1 coca cola ===
    {
        id: 1, title: 'Cazuza — Coca-Cola', client: 'COCA-COLA', category: 'BRAND ACTIVATION',
        description: 'Projeto de ativação de marca para a Coca-Cola com temática do cantor Cazuza. Desenvolvimento completo de modelagem, texturização e renderização 3D.',
        images: ['Camera', ...Array.from({ length: 17 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`), 'Camera.019', 'Camera.020', 'Camera.021', 'Camera.022', 'Camera.023', 'Camera.024'].map(n => p(`1 coca cola/cazuza/${n}.png`)),
    },
    {
        id: 2, title: 'Show Bruno Mars — Coca-Cola', client: 'COCA-COLA', category: 'EVENT DESIGN',
        description: 'Visualização 3D do projeto de ativação para o show do Bruno Mars patrocinado pela Coca-Cola.',
        images: ['Bar', ...Array.from({ length: 7 }, (_, i) => `Bar.${String(i + 1).padStart(3, '0')}`)].map(n => p(`1 coca cola/show bruno mars/${n}.png`)),
    },
    // === 2 Boticario ===
    {
        id: 3, title: 'Ativação Rio — Feira — O Boticário', client: 'O BOTICÁRIO', category: 'BRAND ACTIVATION',
        description: 'Projeto de ativação para feira no Rio de Janeiro. Barracas, carrinhos e elementos promocionais.',
        images: [
            ...['Image19', 'Image20', 'Image21'].map(n => p(`2 Boticario/ativacao rio/Feira/1 barraca/${n}.png`)),
            ...['Image10', 'Image11', 'Image12', 'Image13', 'Image14', 'Image15', 'Image16', 'Image17', 'Image18'].map(n => p(`2 Boticario/ativacao rio/Feira/2 barracas/${n}.png`)),
            ...['Image8', 'Image9', 'Image10_000', 'Image17', 'Image18', 'Image19', 'Image20', 'Image21', 'Image22', 'Image23'].map(n => p(`2 Boticario/ativacao rio/Feira/3 barracas/${n}.png`)),
            ...['Image22', 'Image23', 'Image24'].map(n => p(`2 Boticario/ativacao rio/Feira/carrinho/${n}.png`)),
        ],
    },
    {
        id: 4, title: 'Ativação Rio — Corrida — O Boticário', client: 'O BOTICÁRIO', category: 'BRAND ACTIVATION',
        description: 'Containers para corrida patrocinada pelo Boticário no Rio de Janeiro.',
        images: [
            ...['Image10', 'Image11', 'Image12', 'Image13', 'Image14', 'Image14_000', 'Image15', 'Image15_000', 'Image16', 'Image17'].map(n => p(`2 Boticario/ativacao rio/corrida/container duplo/${n}.png`)),
            ...['Image18', 'Image19', 'Image20', 'Image21', 'Image22'].map(n => p(`2 Boticario/ativacao rio/corrida/container simples/${n}.png`)),
        ],
    },
    {
        id: 5, title: 'Eudora Beauty Station', client: 'O BOTICÁRIO / EUDORA', category: 'RETAIL DESIGN',
        description: 'Design de espaço para a Eudora Beauty Station com foco em experiência do consumidor.',
        images: ['Camera', ...Array.from({ length: 8 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`2 Boticario/eudora/beauty station/${n}.png`)),
    },
    {
        id: 6, title: 'Eudora Festa 10 Anos', client: 'O BOTICÁRIO / EUDORA', category: 'EVENT DESIGN',
        description: 'Cenografia para a celebração de 10 anos da Eudora. Fachada, corredor, loja, palco e espaços temáticos.',
        images: [
            ...['0001', '0002'].map(n => p(`2 Boticario/eudora/festa 10 anos/ESPAÇO_DIAGNÓSTICO/v1/${n}.png`)),
            ...['0001', '0002', '0003', '0004', '0005'].map(n => p(`2 Boticario/eudora/festa 10 anos/corredor/v1/${n}.png`)),
            ...['0001', '0002', '0003'].map(n => p(`2 Boticario/eudora/festa 10 anos/exposicao/${n}.png`)),
            ...['fachada', '0001', '0002', '0003'].map(n => p(`2 Boticario/eudora/festa 10 anos/fachada/${n}.png`)),
            ...['0001', '0002', '0003'].map(n => p(`2 Boticario/eudora/festa 10 anos/linha do tempo/${n}.png`)),
            ...['000001', '0002', '0003', '000004', '000005', '000006'].map(n => p(`2 Boticario/eudora/festa 10 anos/loja/v1/${n}.png`)),
            ...['Camera', 'Camera.001', 'Camera.002'].map(n => p(`2 Boticario/eudora/festa 10 anos/palco/v1/${n}.png`)),
            ...['0001', '0002', '0003', '0004'].map(n => p(`2 Boticario/eudora/festa 10 anos/passarela/${n}.png`)),
            ...['0001', '0002', '0003', '0004'].map(n => p(`2 Boticario/eudora/festa 10 anos/sala de tratamento/${n}.png`)),
        ],
    },
    {
        id: 7, title: 'Eudora — Lançamento Camila Queiroz', client: 'O BOTICÁRIO / EUDORA', category: 'PRODUCT LAUNCH',
        description: 'Visualização 3D para lançamento de produto com Camila Queiroz. Bazar, estúdio e press kit.',
        images: ['Image5', 'Image7', 'Image8', 'bazar', 'bazar2', 'estudio', 'estudio2', 'press kit'].map(n => p(`2 Boticario/eudora/lancamento camila queiroz/${n}.png`)),
    },
    {
        id: 8, title: 'Eudora Natal 2024', client: 'O BOTICÁRIO / EUDORA', category: 'SEASONAL CAMPAIGN',
        description: 'Campanha de Natal 2024 da Eudora com cenografia festiva.',
        images: ['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006'].map(n => p(`2 Boticario/eudora/natal 2024/${n}.png`)),
    },
    {
        id: 9, title: 'Eudora — Nosso Camarote 2025', client: 'O BOTICÁRIO / EUDORA', category: 'EVENT DESIGN',
        description: 'Camarote Eudora e Beleza na Web para o carnaval 2025. Backstage, meeting point e espaço principal.',
        images: [
            ...['Camera', 'Camera.001', 'Camera.002', 'Camera.005'].map(n => p(`2 Boticario/eudora/nosso camarote 2025/beleza na web/${n}.png`)),
            ...['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006', 'Camera.007', 'Camera.008', 'Camera.009', 'Camera.010'].map(n => p(`2 Boticario/eudora/nosso camarote 2025/beleza na web/backstage/${n}.png`)),
            ...['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006', 'Camera.008', 'Camera.0102'].map(n => p(`2 Boticario/eudora/nosso camarote 2025/beleza na web/meeting point/${n}.png`)),
            ...['nosso camarote', 'nosso camarote.001', 'nosso camarote.003', 'nosso camarote.004'].map(n => p(`2 Boticario/eudora/nosso camarote 2025/beleza na web/${n}.png`)),
            ...['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006', 'Camera.007', 'Camera.008', 'Camera.009'].map(n => p(`2 Boticario/eudora/nosso camarote 2025/eudora/${n}.png`)),
        ],
    },
    {
        id: 10, title: 'Eudora — Vogue Lideranças Inovadoras', client: 'O BOTICÁRIO / EUDORA', category: 'EVENT DESIGN',
        description: 'Evento Vogue Lideranças Inovadoras com a Eudora.',
        images: ['Image1', 'Image2', 'Image7', 'Image8', 'opcao2 - 1', 'opcao2 - 2', 'opcao2 - 3'].map(n => p(`2 Boticario/eudora/vogue liderancas inovadoras/${n}.png`)),
    },
    {
        id: 11, title: 'Eudora — Woman on Top 2024', client: 'O BOTICÁRIO / EUDORA', category: 'EVENT DESIGN',
        description: 'Cenografia para o evento Woman on Top 2024 da Eudora.',
        images: ['woman on top 2024Camera', 'woman on top 2024 1', 'woman on top 2024Camera.002', 'woman on top 2024Camera.003', 'woman on top 2024Camera.004', 'woman on top 2024Camera.005', 'woman on top 2024Camera.006', 'woman on top 2024Camera.007'].map(n => p(`2 Boticario/eudora/woman on top 2024/${n}.png`)),
    },
    {
        id: 12, title: 'Make B — Woman on Top 2023', client: 'O BOTICÁRIO / MAKE B', category: 'EVENT DESIGN',
        description: 'Cenografia 3D para o evento Woman on Top 2023 da Make B.',
        images: ['Image9', 'Image10', 'Image11', 'Image12', 'Image13', 'Image14', 'Image15'].map(n => p(`2 Boticario/make b/woman on top 2023/${n}.png`)),
    },
    {
        id: 13, title: 'Boticário Natal 2024', client: 'O BOTICÁRIO', category: 'SEASONAL CAMPAIGN',
        description: 'Visualização 3D para a campanha de Natal 2024 do Boticário.',
        images: ['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006', 'Camera.008', 'Camera.009', 'Camera.010', 'Camera.011', 'Camera.012', 'planta baixa'].map(n => p(`2 Boticario/natal 2024/${n}.png`)),
    },
    {
        id: 14, title: 'Nina Secrets 30 Anos', client: 'O BOTICÁRIO / NINA SECRETS', category: 'BRAND ACTIVATION',
        description: 'Celebração de 30 anos Nina Secrets. Corredor, personalização e bandeja.',
        images: [
            ...['corredorCamera', 'corredorCamera.001', 'corredorCamera.002', 'corredorCamera.003', 'corredorCamera.004', 'corredorCamera.005', 'corredorCamera.006'].map(n => p(`2 Boticario/nina secrets/30 anos/${n}.png`)),
            ...['personalizacaoCamera', 'personalizacaoCamera.001', 'personalizacaoCamera.002', 'personalizacaoCamera.003'].map(n => p(`2 Boticario/nina secrets/30 anos/${n}.png`)),
            ...['bandejaCamera.022', 'bandejaCamera.023', 'bandejaCamera.024'].map(n => p(`2 Boticario/nina secrets/30 anos/${n}.png`)),
        ],
    },
    {
        id: 15, title: 'Nina Secrets — PK Meninas Malvadas', client: 'O BOTICÁRIO / NINA SECRETS', category: 'PRESS KIT',
        description: 'Press kit temático Meninas Malvadas para Nina Secrets.',
        images: ['Camera', 'Camera.001'].map(n => p(`2 Boticario/nina secrets/pk meninas malvadas/${n}.png`)),
    },
    {
        id: 16, title: 'QDB — Camarote Lady Gaga RJ', client: 'O BOTICÁRIO / QDB', category: 'EVENT DESIGN',
        description: 'Camarote da Quem Disse Berenice para o show da Lady Gaga no Rio.',
        images: ['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006', 'Camera.007', 'Camera.008', 'Camera.009', 'Camera.010', 'Camera.011', 'Camera.012'].map(n => p(`2 Boticario/quem disse berenice/camarote lady gaga rio de janeiro/${n}.png`)),
    },
    {
        id: 17, title: 'QDB & Faber Castel — Press Kit', client: 'O BOTICÁRIO / QDB', category: 'PRESS KIT',
        description: 'Press kit colaborativo Quem Disse Berenice e Faber Castel.',
        images: ['Camera.004', 'Camera.005'].map(n => p(`2 Boticario/quem disse berenice/pk qdb e faber castel/${n}.png`)),
    },
    // === 3 heineken ===
    {
        id: 18, title: 'Camarote Vivo Rio — Heineken', client: 'HEINEKEN', category: 'EVENT DESIGN',
        description: 'Camarote Heineken no Vivo Rio com cenografia e identidade visual da marca.',
        images: ['Camera.007', 'Camera.008', 'Camera.009', 'Camera.010', 'Camera.011', 'Camera.012', 'Camera.013'].map(n => p(`3 heineken/camarote vivo rio/${n}.png`)),
    },
    // === 4 Noite nos museus ===
    {
        id: 19, title: 'Noite nos Museus', client: 'CULTURAL', category: 'CULTURAL EVENT',
        description: 'Cenografia e ambientação artística para experiência cultural noturna.',
        images: Array.from({ length: 15 }, (_, i) => p(`4 Noite nos museus/${i + 1}.png`)),
    },
    // === 5 Olimpikus ===
    {
        id: 20, title: 'Casa Summer Hunter — Olimpikus', client: 'OLIMPIKUS', category: 'BRAND ACTIVATION',
        description: 'Espaço imersivo Casa Summer Hunter com identidade esportiva.',
        images: ['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006', 'Camera.007'].map(n => p(`5 Olimpikus/casa summer hunter/${n}.png`)),
    },
    // === 6 Prada ===
    {
        id: 21, title: 'Paradoxe — Prada', client: 'PRADA', category: 'LUXURY BRAND',
        description: 'Ativação do perfume Paradoxe da Prada. Espaço sensorial premium.',
        images: ['Image6', 'Image7', 'Image8', 'Image9', 'Image10', 'Image11', 'Image12', 'Image13'].map(n => p(`6 Prada/Paradoxe Prada/${n}.png`)),
    },
    // === 7 Vibra ===
    {
        id: 22, title: 'Estande Premmia — Vibra', client: 'VIBRA', category: 'EXHIBITION DESIGN',
        description: 'Estande Premmia Vem de Vibra com identidade corporativa.',
        images: Array.from({ length: 21 }, (_, i) => p(`7 Vibra/Estande premmia vem de vibra/Camera.${String(i + 19).padStart(3, '0')}.png`)),
    },
    {
        id: 23, title: 'Investor Day — Vibra', client: 'VIBRA', category: 'CORPORATE EVENT',
        description: 'Cenografia corporativa para o Investor Day da Vibra.',
        images: ['Camera.044', 'Camera.055', 'Camera.056', 'Camera.057', 'Camera.058', 'Camera.059', 'Camera.060', 'Camera.061', 'Camera.066', 'Camera.067'].map(n => p(`7 Vibra/investor day/${n}.png`)),
    },
    {
        id: 24, title: 'Reunião Museu do Amanhã — Vibra', client: 'VIBRA', category: 'CORPORATE EVENT',
        description: 'Visualização para reunião no Museu do Amanhã.',
        images: ['Image1', 'Image2', 'Image3', 'Image4', 'Image5'].map(n => p(`7 Vibra/reunião museu do amanha/${n}.png`)),
    },
    {
        id: 25, title: 'Show Premmia — Vibra', client: 'VIBRA', category: 'EVENT DESIGN',
        description: 'Cenografia para o Show Premmia da Vibra.',
        images: Array.from({ length: 10 }, (_, i) => p(`7 Vibra/show premmia/Camera.${String(i + 67).padStart(3, '0')}.png`)),
    },
    {
        id: 26, title: 'Websummit 2025 — Vibra', client: 'VIBRA', category: 'EXHIBITION DESIGN',
        description: 'Estande da Vibra para o Websummit 2025.',
        images: ['Camera', 'Camera.000', ...Array.from({ length: 27 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`7 Vibra/websummit 2025/${n}.png`)),
    },
    // === 8 Aguas prata ===
    {
        id: 27, title: 'Taste SP — Águas Prata', client: 'ÁGUAS PRATA', category: 'EXHIBITION DESIGN',
        description: 'Estande para a Águas Prata no evento Taste SP.',
        images: ['Image1', 'Image2', 'Image3', 'Image4', 'Image5', 'Image6', 'Image7', 'Image8', 'Image9', 'Image10', 'Image11'].map(n => p(`8 Aguas prata/taste sp/${n}.png`)),
    },
    // === 9 OUI ===
    {
        id: 28, title: 'Natal 2024 — OUI', client: 'OUI', category: 'SEASONAL CAMPAIGN',
        description: 'Cenografia festiva para a campanha de Natal 2024 da OUI.',
        images: ['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.005', 'Camera.006', 'Camera.007'].map(n => p(`9 OUI/natal 2024/${n}.png`)),
    },
    // === 10 MC saude ===
    {
        id: 29, title: 'Convenção Unimed 2025 — MC Saúde', client: 'MC SAÚDE / UNIMED', category: 'CORPORATE EVENT',
        description: 'Cenografia para a Convenção Nacional da Unimed 2025.',
        images: ['Camera', ...Array.from({ length: 12 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`10 MC saude/convencao nacional unimed 2025/${n}.png`)),
    },
    {
        id: 30, title: 'Fisweek — MC Saúde', client: 'MC SAÚDE', category: 'EXHIBITION DESIGN',
        description: 'Estande para o evento Fisweek.',
        images: ['Camera.019', 'Camera.024', 'Camera.026', 'Camera.027', 'Camera.028', 'Camera.029', 'Camera.030', 'Camera.031', 'Camera.032', 'Camera.033', 'Camera.034'].map(n => p(`10 MC saude/fisweek/${n}.png`)),
    },
    // === Aventura ===
    {
        id: 31, title: 'Jovem Frankenstein — Aventura', client: 'AVENTURA', category: 'THEATRICAL PRODUCTION',
        description: 'Cenografia 3D para a produção teatral Jovem Frankenstein.',
        images: Array.from({ length: 8 }, (_, i) => p(`Aventura/jovem frankestein/Image${i + 1}.png`)),
    },
    {
        id: 32, title: 'Noviça Rebelde — Aventura', client: 'AVENTURA', category: 'THEATRICAL PRODUCTION',
        description: 'Cenografia para o musical Noviça Rebelde.',
        images: ['camarimCamera', 'camarimCamera.001', 'camarimCamera.002', 'camarimCamera.003'].map(n => p(`Aventura/novica rebelde/${n}.png`)),
    },
    // === Ifood ===
    {
        id: 33, title: 'Community Creators Academy — iFood', client: 'IFOOD', category: 'BRAND ACTIVATION',
        description: 'Ambiente criativo para criadores de conteúdo do iFood.',
        images: ['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006', 'Camera.007', 'Camera.008', 'Camera.012'].map(n => p(`Ifood/Community creators academy/${n}.png`)),
    },
    {
        id: 34, title: 'PK Influenciadores — iFood', client: 'IFOOD', category: 'PRESS KIT',
        description: 'Press kit para influenciadores do iFood.',
        images: ['Camera.000', ...Array.from({ length: 27 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`Ifood/pk influenciadores/${n}.png`)),
    },
    // === Ipiranga ===
    {
        id: 35, title: 'Saúde na Estrada — Ipiranga', client: 'IPIRANGA', category: 'BRAND ACTIVATION',
        description: 'Projeto Saúde na Estrada da Ipiranga.',
        images: ['Camera', ...Array.from({ length: 13 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`Ipiranga/saude na estrada/${n}.png`)),
    },
    // === Ponte Rio Niteroi ===
    {
        id: 36, title: 'Festa 50 Anos — Ponte Rio-Niterói', client: 'PONTE RIO-NITERÓI', category: 'CORPORATE EVENT',
        description: 'Celebração dos 50 anos da Ponte Rio-Niterói.',
        images: Array.from({ length: 19 }, (_, i) => p(`Ponte Rio Niteroi/festa 50 anos/${i + 1}.png`)),
    },
    // === Prefeitura Rio de Janeiro ===
    {
        id: 37, title: 'Bienal da Arquitetura 2025 — Prefeitura RJ', client: 'PREFEITURA RJ', category: 'CULTURAL EVENT',
        description: 'Espaços expositivos para a Bienal da Arquitetura 2025.',
        images: Array.from({ length: 12 }, (_, i) => p(`Prefeitura Rio de Janeiro/Bienal da Arquitetura 2025/Camera.${String(i + 12).padStart(3, '0')}.png`)),
    },
    // === Premio sim a igualdade racial ===
    {
        id: 38, title: 'Prêmio Sim à Igualdade Racial — Foyer', client: 'IGUALDADE RACIAL', category: 'CORPORATE EVENT',
        description: 'Foyer do Prêmio Sim à Igualdade Racial.',
        images: ['1entrada', '2entrada2', '3escultura', '4escultura2', '5backdrop', '6area buffet', '7painel de marcas', '8area festa', '9dj', '10dj2'].map(n => p(`Premio sim a igualdade racial/Foyer/${n}.png`)),
    },
    {
        id: 39, title: 'Prêmio Sim à Igualdade Racial — Palco', client: 'IGUALDADE RACIAL', category: 'CORPORATE EVENT',
        description: 'Cenografia de palco para o Prêmio Sim à Igualdade Racial.',
        images: Array.from({ length: 19 }, (_, i) => p(`Premio sim a igualdade racial/palco/render${i + 1}.png`)),
    },
    // === Sallve ===
    {
        id: 40, title: 'Estande Itinerante — Sallve', client: 'SALLVE', category: 'EXHIBITION DESIGN',
        description: 'Estande itinerante da Sallve em duas opções de design.',
        images: [
            ...Array.from({ length: 13 }, (_, i) => p(`Sallve/estande itinerante/opcao 1/Camera.${String(i + 13).padStart(3, '0')}.png`)),
            ...['Camera', ...Array.from({ length: 12 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`Sallve/estande itinerante/opcao 2/${n}.png`)),
        ],
    },
    // === Tim ===
    {
        id: 41, title: 'Conferência — Tim', client: 'TIM', category: 'CORPORATE EVENT',
        description: 'Cenografia para conferência corporativa da Tim.',
        images: Array.from({ length: 19 }, (_, i) => p(`Tim/Conferencia/${i + 1}.png`)),
    },
    // === Unipar ===
    {
        id: 42, title: '60 Anos Fábrica Cubatão — Unipar', client: 'UNIPAR', category: 'CORPORATE EVENT',
        description: 'Celebração dos 60 anos da fábrica Unipar em Cubatão.',
        images: ['Camera.000', ...Array.from({ length: 11 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`Unipar/60 anos fabrica cubatao/${n}.png`)),
    },
    {
        id: 43, title: 'Dia da Família — Unipar', client: 'UNIPAR', category: 'CORPORATE EVENT',
        description: 'Evento Dia da Família da Unipar.',
        images: ['Image2', 'Image3', 'Image4', 'Image5', 'Image6', 'Image7'].map(n => p(`Unipar/dia da familia/${n}.png`)),
    },
    // === azify ===
    {
        id: 44, title: 'Blockchain Rio 2025 — Azify', client: 'AZIFY', category: 'EXHIBITION DESIGN',
        description: 'Estande da Azify para o evento Blockchain Rio 2025.',
        images: ['Camera.006', 'Camera.007', 'Camera.008', 'Camera.009', 'Camera.010', 'Camera.011'].map(n => p(`azify/bockchain rio 2025/${n}.png`)),
    },
    // === deezer ===
    {
        id: 45, title: 'MITA 2023 — Deezer', client: 'DEEZER', category: 'EVENT DESIGN',
        description: 'Cenografia para o evento MITA 2023 da Deezer.',
        images: Array.from({ length: 15 }, (_, i) => p(`deezer/mita 2023/${i + 1}.png`)),
    },
    // === firjan ===
    {
        id: 46, title: 'RH Rio 2025 — Firjan', client: 'FIRJAN', category: 'CORPORATE EVENT',
        description: 'Cenografia para o evento RH Rio 2025 da Firjan.',
        images: ['Camera', 'Camera.000', ...Array.from({ length: 18 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`firjan/rh Rio 2025/${n}.png`)),
    },
    {
        id: 47, title: 'SESI FSWK 2024 — Firjan', client: 'FIRJAN', category: 'EXHIBITION DESIGN',
        description: 'Estande SESI para o FSWK 2024.',
        images: ['Camera', ...Array.from({ length: 10 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`firjan/sesi fswk 2024/${n}.png`)),
    },
    // === glade ===
    {
        id: 48, title: 'Ative Seu Modo Verão — Glade', client: 'GLADE', category: 'BRAND ACTIVATION',
        description: 'Ativação Ative Seu Modo Verão da Glade.',
        images: ['Image7', 'Image8', 'Image9', 'Image10', 'Image11', 'Image12', 'Image13', 'Image14'].map(n => p(`glade/ative seu modo verao/${n}.png`)),
    },
    // === grupo eureka ===
    {
        id: 49, title: 'Saraus 2025 — Grupo Eureka', client: 'GRUPO EUREKA', category: 'EVENT DESIGN',
        description: 'Cenografia para o evento Saraus 2025 do Grupo Eureka.',
        images: ['Camera', ...Array.from({ length: 20 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`grupo eureka/saraus 2025/${n}.png`)),
    },
    // === hotmart ===
    {
        id: 50, title: 'Hotmart Stars — Light Show', client: 'HOTMART', category: 'EVENT DESIGN',
        description: 'Cenografia para o evento Hotmart Stars com light show, cubo e press kit.',
        images: [
            ...Array.from({ length: 12 }, (_, i) => p(`hotmart/Stars/em ordem de light show/${i + 1}.png`)),
            ...Array.from({ length: 9 }, (_, i) => p(`hotmart/Stars/Tudo aceso/${i + 1}.png`)),
            ...['Image10', 'Image11', 'Image12', 'Image13', 'Image15'].map(n => p(`hotmart/Stars/cubo/${n}.png`)),
            ...['Camera', 'Camera.001', 'Camera.002'].map(n => p(`hotmart/Stars/presskit/${n}.png`)),
        ],
    },
]

// Hero carousel: first image of projects 1-10 (numbered folders)
export const heroImages = [
    p('1 coca cola/cazuza/Camera.png'),
    p('1 coca cola/show bruno mars/Bar.png'),
    p('2 Boticario/ativacao rio/Feira/1 barraca/Image19.png'),
    p('2 Boticario/eudora/beauty station/Camera.png'),
    p('3 heineken/camarote vivo rio/Camera.007.png'),
    p('4 Noite nos museus/1.png'),
    p('5 Olimpikus/casa summer hunter/Camera.png'),
    p('6 Prada/Paradoxe Prada/Image6.png'),
    p('7 Vibra/Estande premmia vem de vibra/Camera.019.png'),
    p('8 Aguas prata/taste sp/Image1.png'),
]
