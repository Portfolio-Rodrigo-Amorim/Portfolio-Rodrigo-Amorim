// Helper to build portfolio image URLs (static files in /portfolio/)
function p(path: string) {
    // Replace .png/.jpg extension with .webp (images were converted for optimization)
    const webpPath = path.replace(/\.(png|jpg|jpeg)$/i, '.webp')
    // Important: Include the repository name (basePath) for GitHub Pages
    return `/Portfolio/portfolio/${webpPath}`
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
        description: 'Desenvolvimento de um ambiente imersivo que captura a essência poética e urbana do cantor Cazuza para a Coca-Cola. O projeto envolveu a criação de uma cenografia rica em texturas retrô e iluminação neon dinâmica, com modelagem completa de mobiliário customizado e elementos decorativos. O resultado é um render fotorrealista que equilibra a identidade vibrante da marca com uma atmosfera nostálgica e tecnicamente complexa.',
        images: ['Camera', ...Array.from({ length: 17 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`), 'Camera.019', 'Camera.020', 'Camera.021', 'Camera.022', 'Camera.023', 'Camera.024'].map(n => p(`1 coca cola/cazuza/${n}.png`)),
    },
    {
        id: 2, title: 'Show Bruno Mars — Coca-Cola', client: 'COCA-COLA', category: 'EVENT DESIGN',
        description: 'Visualização 3D de alta complexidade para uma ativação de grande porte voltada ao show do Bruno Mars. O desafio técnico consistiu na integração de estruturas cenográficas modulares com um projeto luminotécnico impactante, simulando fielmente a experiência de um festival. Cada material, do metal das estruturas aos acabamentos em acrílico, foi configurado para refletir com precisão a luz do palco, garantindo uma aprovação visual impecável.',
        images: ['Bar', ...Array.from({ length: 7 }, (_, i) => `Bar.${String(i + 1).padStart(3, '0')}`)].map(n => p(`1 coca cola/show bruno mars/${n}.png`)),
    },
    // === 2 Boticario ===
    {
        id: 3, title: 'Ativação Rio — Feira — O Boticário', client: 'O BOTICÁRIO', category: 'BRAND ACTIVATION',
        description: 'Projeto detalhado para ativação de feira no Rio de Janeiro, focado na criação de um ecossistema promocional acolhedor. O trabalho incluiu a modelagem de barracas, carrinhos e diversos elementos promocionais com foco em texturas de madeira e acabamentos naturais. A visualização foca no realismo dos props e na disposição estratégica das peças para otimizar o fluxo de público, mantendo a sofisticação da marca O Boticário.',
        images: [
            ...['Image19', 'Image20', 'Image21'].map(n => p(`2 Boticario/ativacao rio/Feira/1 barraca/${n}.png`)),
            ...['Image10', 'Image11', 'Image12', 'Image13', 'Image14', 'Image15', 'Image16', 'Image17', 'Image18'].map(n => p(`2 Boticario/ativacao rio/Feira/2 barracas/${n}.png`)),
            ...['Image8', 'Image9', 'Image10_000', 'Image17', 'Image18', 'Image19', 'Image20', 'Image21', 'Image22', 'Image23'].map(n => p(`2 Boticario/ativacao rio/Feira/3 barracas/${n}.png`)),
            ...['Image22', 'Image23', 'Image24'].map(n => p(`2 Boticario/ativacao rio/Feira/carrinho/${n}.png`)),
        ],
    },
    {
        id: 4, title: 'Ativação Rio — Corrida — O Boticário', client: 'O BOTICÁRIO', category: 'BRAND ACTIVATION',
        description: 'Concepção de espaços modulares utilizando containers para uma corrida patrocinada pelo Boticário no Rio de Janeiro. O projeto destaca-se pela aplicação inteligente do branding em grandes superfícies e pela modelagem de áreas externas funcionais. A renderização prioriza a luz natural para validar como os materiais e as cores da marca se comportariam sob a luz do sol, garantindo fidelidade visual para a execução física.',
        images: [
            ...['Image10', 'Image11', 'Image12', 'Image13', 'Image14', 'Image14_000', 'Image15', 'Image15_000', 'Image16', 'Image17'].map(n => p(`2 Boticario/ativacao rio/corrida/container duplo/${n}.png`)),
            ...['Image18', 'Image19', 'Image20', 'Image21', 'Image22'].map(n => p(`2 Boticario/ativacao rio/corrida/container simples/${n}.png`)),
        ],
    },
    {
        id: 5, title: 'Eudora Beauty Station', client: 'O BOTICÁRIO / EUDORA', category: 'RETAIL DESIGN',
        description: 'Projeto de arquitetura comercial focado na experiência premium da consumidora Eudora. A modelagem 3D abrange todo o layout da Beauty Station, com foco meticuloso em materiais nobres como veludo, metais dourados e iluminação difusa de camarim. A visualização permite uma compreensão clara da jornada do cliente dentro do espaço, unindo funcionalidade de varejo com um design de interiores sofisticado.',
        images: ['Camera', ...Array.from({ length: 8 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`2 Boticario/eudora/beauty station/${n}.png`)),
    },
    {
        id: 6, title: 'Eudora Festa 10 Anos', client: 'O BOTICÁRIO / EUDORA', category: 'EVENT DESIGN',
        description: 'Cenografia monumental para a celebração de uma década da marca Eudora. O projeto envolveu a criação de múltiplos ambientes, incluindo uma fachada imponente, corredores sensoriais, palco principal e espaços temáticos integrados. A complexidade técnica da cena exigiu um controle rigoroso de iluminação global e texturização high-poly para garantir que cada detalhe da festa fosse visualizado com máxima qualidade fotorrealista.',
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
        description: 'Visualização 3D estratégica para o lançamento de produtos em colaboração com Camila Queiroz. O projeto contemplou a criação de ambientes distintos como bazar, estúdio fotográfico e o design de press kits exclusivos. O foco principal foi a reprodução fiel das embalagens e a criação de uma atmosfera de estúdio profissional, utilizando técnicas avançadas de renderização para destacar o brilho e a qualidade dos cosméticos.',
        images: ['Image5', 'Image7', 'Image8', 'bazar', 'bazar2', 'estudio', 'estudio2', 'press kit'].map(n => p(`2 Boticario/eudora/lancamento camila queiroz/${n}.png`)),
    },
    {
        id: 8, title: 'Eudora Natal 2024', client: 'O BOTICÁRIO / EUDORA', category: 'SEASONAL CAMPAIGN',
        description: 'Desenvolvimento cenográfico para a campanha de Natal 2024 da Eudora, focada em uma estética luxuosa e festiva. O projeto exigiu a modelagem de elementos decorativos complexos e uma configuração de luz que remetesse ao brilho das festas de fim de ano. A visualização 3D foca na harmonia entre a identidade visual da marca e os símbolos natalinos, criando uma cena imersiva e visualmente rica.',
        images: ['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006'].map(n => p(`2 Boticario/eudora/natal 2024/${n}.png`)),
    },
    {
        id: 9, title: 'Eudora — Nosso Camarote 2025', client: 'O BOTICÁRIO / EUDORA', category: 'EVENT DESIGN',
        description: 'Projeto de design de experiência para o Camarote Eudora e Beleza na Web no carnaval 2025. A visualização engloba áreas complexas como o backstage, meeting point e o salão principal, integrando tecnologia de LED e cenografia vibrante. O trabalho técnico garantiu a correta visualização da circulação de pessoas e do impacto das luzes cênicas sobre os materiais reflexivos típicos da estética carnavalesca.',
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
        description: 'Cenografia desenvolvida para o prestigiado evento Vogue Lideranças Inovadoras em parceria com a Eudora. O projeto exigiu uma abordagem minimalista e elegante, condizente com o público de liderança. A modelagem focou em linhas limpas, mobiliário de design assinado e uma iluminação sóbria que valoriza os painéis informativos e a identidade visual das marcas envolvidas.',
        images: ['Image1', 'Image2', 'Image7', 'Image8', 'opcao2 - 1', 'opcao2 - 2', 'opcao2 - 3'].map(n => p(`2 Boticario/eudora/vogue liderancas inovadoras/${n}.png`)),
    },
    {
        id: 11, title: 'Eudora — Woman on Top 2024', client: 'O BOTICÁRIO / EUDORA', category: 'EVENT DESIGN',
        description: 'Concepção visual para o evento Woman on Top 2024 da Eudora, focado no empoderamento feminino. A visualização 3D apresenta uma cenografia moderna, com uso de formas geométricas e cores vibrantes que conversam com a temática do evento. Cada elemento do palco e das áreas comuns foi modelado para oferecer um fundo visualmente impactante para transmissões e fotos.',
        images: ['woman on top 2024Camera', 'woman on top 2024 1', 'woman on top 2024Camera.002', 'woman on top 2024Camera.003', 'woman on top 2024Camera.004', 'woman on top 2024Camera.005', 'woman on top 2024Camera.006', 'woman on top 2024Camera.007'].map(n => p(`2 Boticario/eudora/woman on top 2024/${n}.png`)),
    },
    {
        id: 12, title: 'Make B — Woman on Top 2023', client: 'O BOTICÁRIO / MAKE B', category: 'EVENT DESIGN',
        description: 'Visualização fotorrealista para o evento da linha Make B no Woman on Top 2023. O projeto foca no detalhamento técnico de balcões de experimentação e displays de produtos, utilizando materiais com alta reflexividade e transparência para simular a sofisticação da linha de maquiagem. A iluminação foi desenhada para destacar os pontos focais do palco e a clareza do branding.',
        images: ['Image9', 'Image10', 'Image11', 'Image12', 'Image13', 'Image14', 'Image15'].map(n => p(`2 Boticario/make b/woman on top 2023/${n}.png`)),
    },
    {
        id: 13, title: 'Boticário Natal 2024', client: 'O BOTICÁRIO', category: 'SEASONAL CAMPAIGN',
        description: 'Visualização completa da campanha natalina do Boticário para o ano de 2024. O projeto traz uma abordagem acolhedora e mágica, com modelagem detalhada de props decorativos e texturização de alta fidelidade para as embalagens de presente. O render final captura o equilíbrio entre a tradição do Natal e a modernidade da marca, servindo como guia essencial para a implementação física.',
        images: ['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006', 'Camera.008', 'Camera.009', 'Camera.010', 'Camera.011', 'Camera.012', 'planta baixa'].map(n => p(`2 Boticario/natal 2024/${n}.png`)),
    },
    {
        id: 14, title: 'Nina Secrets 30 Anos', client: 'O BOTICÁRIO / NINA SECRETS', category: 'BRAND ACTIVATION',
        description: 'Criação cenográfica para a celebração dos 30 anos da influenciadora Nina Secrets em parceria com O Boticário. O projeto envolveu a modelagem de corredores interativos, bandejas de produtos personalizadas e espaços para fotos com estética "instagramável". A visualização 3D foca na diversão e na cor, utilizando texturas suaves e iluminação vibrante que reflete a identidade da linha.',
        images: [
            ...['corredorCamera', 'corredorCamera.001', 'corredorCamera.002', 'corredorCamera.003', 'corredorCamera.004', 'corredorCamera.005', 'corredorCamera.006'].map(n => p(`2 Boticario/nina secrets/30 anos/${n}.png`)),
            ...['personalizacaoCamera', 'personalizacaoCamera.001', 'personalizacaoCamera.002', 'personalizacaoCamera.003'].map(n => p(`2 Boticario/nina secrets/30 anos/${n}.png`)),
            ...['bandejaCamera.022', 'bandejaCamera.023', 'bandejaCamera.024'].map(n => p(`2 Boticario/nina secrets/30 anos/${n}.png`)),
        ],
    },
    {
        id: 15, title: 'Nina Secrets — PK Meninas Malvadas', client: 'O BOTICÁRIO / NINA SECRETS', category: 'PRESS KIT',
        description: 'Design e visualização 3D do press kit temático inspirado no filme Meninas Malvadas para a linha Nina Secrets. O desafio técnico foi modelar a embalagem e os produtos com precisão milimétrica, garantindo que o fechamento e os materiais fossem visualmente fidedignos ao produto real. A renderização destaca os acabamentos gráficos e as cores icônicas da colaboração.',
        images: ['Camera', 'Camera.001'].map(n => p(`2 Boticario/nina secrets/pk meninas malvadas/${n}.png`)),
    },
    {
        id: 16, title: 'QDB — Camarote Lady Gaga RJ', client: 'O BOTICÁRIO / QDB', category: 'EVENT DESIGN',
        description: 'Cenografia audaciosa para o camarote da Quem Disse, Berenice? no show da Lady Gaga no Rio de Janeiro. O projeto traduz a estética pop e disruptiva da artista em um espaço físico, com uso intensivo de LEDs, superfícies espelhadas e mobiliário contemporâneo. A modelagem 3D permitiu antecipar o impacto visual da marca dentro de um ambiente escuro de festival.',
        images: ['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006', 'Camera.007', 'Camera.008', 'Camera.009', 'Camera.010', 'Camera.011', 'Camera.012'].map(n => p(`2 Boticario/quem disse berenice/camarote lady gaga rio de janeiro/${n}.png`)),
    },
    {
        id: 17, title: 'QDB & Faber Castel — Press Kit', client: 'O BOTICÁRIO / QDB', category: 'PRESS KIT',
        description: 'Visualização técnica de produto para o press kit colaborativo entre Quem Disse, Berenice? e Faber-Castell. O foco do projeto foi a reprodução exata das texturas de madeira e grafite em conjunto com as fórmulas de maquiagem, criando um visual tátil e nostálgico. A renderização macro permite apreciar cada detalhe da embalagem e da ergonomia dos produtos.',
        images: ['Camera.004', 'Camera.005'].map(n => p(`2 Boticario/quem disse berenice/pk qdb e faber castel/${n}.png`)),
    },
    // === 3 heineken ===
    {
        id: 18, title: 'Camarote Vivo Rio — Heineken', client: 'HEINEKEN', category: 'EVENT DESIGN',
        description: 'Design de interiores e cenografia para o camarote da Heineken no Vivo Rio. O projeto utiliza a linguagem industrial e tecnológica da marca, com modelagem de balcões retroiluminados e estruturas metálicas. A visualização 3D prioriza a cor verde característica e a iluminação pontual, criando um ambiente premium e imersivo para os convidados.',
        images: ['Camera.007', 'Camera.008', 'Camera.009', 'Camera.010', 'Camera.011', 'Camera.012', 'Camera.013'].map(n => p(`3 heineken/camarote vivo rio/${n}.png`)),
    },
    // === 4 Noite nos museus ===
    {
        id: 19, title: 'Noite nos Museus', client: 'CULTURAL', category: 'CULTURAL EVENT',
        description: 'Ambientação artística e cenográfica para o evento cultural noturno "Noite nos Museus". O trabalho consistiu na visualização de intervenções leves em espaços históricos, utilizando iluminação cênica para valorizar a arquitetura existente e as obras de arte. O projeto 3D foi fundamental para planejar o impacto das sombras e a atmosfera onírica do evento.',
        images: Array.from({ length: 15 }, (_, i) => p(`4 Noite nos museus/${i + 1}.png`)),
    },
    // === 5 Olimpikus ===
    {
        id: 20, title: 'Casa Summer Hunter — Olimpikus', client: 'OLIMPIKUS', category: 'BRAND ACTIVATION',
        description: 'Projeto de espaço imersivo para a ativação Casa Summer Hunter da Olimpikus. A cenografia foca na identidade esportiva e dinâmica, com modelagem de estruturas leves, áreas de exposição de calçados e espaços de convivência ao ar livre. O render captura a vibração do verão e a modernidade dos materiais tecnológicos utilizados pela marca.',
        images: ['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006', 'Camera.007'].map(n => p(`5 Olimpikus/casa summer hunter/${n}.png`)),
    },
    // === 6 Prada ===
    {
        id: 21, title: 'Paradoxe — Prada', client: 'PRADA', category: 'LUXURY BRAND',
        description: 'Ativação de luxo desenvolvida para o lançamento do perfume Paradoxe da Prada. O projeto 3D cria um espaço sensorial premium, onde a geometria do frasco inspira a arquitetura do ambiente. A modelagem foca no fotorrealismo de superfícies de vidro, reflexos complexos e acabamentos de alto padrão, transmitindo a exclusividade e a sofisticação da casa de moda italiana.',
        images: ['Image6', 'Image7', 'Image8', 'Image9', 'Image10', 'Image11', 'Image12', 'Image13'].map(n => p(`6 Prada/Paradoxe Prada/${n}.png`)),
    },
    // === 7 Vibra ===
    {
        id: 22, title: 'Estande Premmia — Vibra', client: 'VIBRA', category: 'EXHIBITION DESIGN',
        description: 'Design de estande para a rede Premmia (Vibra Energia), focado em fidelidade corporativa e visibilidade. O projeto inclui a modelagem de totens de atendimento, áreas de premiação e sinalização aérea de grande formato. A visualização 3D garante que o branding seja aplicado de forma consistente e que a iluminação geral destaque os pontos de interação com o cliente.',
        images: Array.from({ length: 21 }, (_, i) => p(`7 Vibra/Estande premmia vem de vibra/Camera.${String(i + 19).padStart(3, '0')}.png`)),
    },
    {
        id: 23, title: 'Investor Day — Vibra', client: 'VIBRA', category: 'CORPORATE EVENT',
        description: 'Cenografia corporativa de alto nível para o evento Investor Day da Vibra Energia. O projeto foca na clareza e no profissionalismo, com um palco limpo, telas de LED integradas e mobiliário sóbrio. A modelagem técnica assegura que todos os ângulos de visão da plateia sejam atendidos, proporcionando uma experiênia visual coesa para os investidores.',
        images: ['Camera.044', 'Camera.055', 'Camera.056', 'Camera.057', 'Camera.058', 'Camera.059', 'Camera.060', 'Camera.061', 'Camera.066', 'Camera.067'].map(n => p(`7 Vibra/investor day/${n}.png`)),
    },
    {
        id: 24, title: 'Reunião Museu do Amanhã — Vibra', client: 'VIBRA', category: 'CORPORATE EVENT',
        description: 'Visualização cenográfica para reunião executiva realizada no Museu do Amanhã, no Rio de Janeiro. O desafio foi criar uma estrutura que respeitasse a arquitetura futurista e orgânica do museu, utilizando materiais transparentes e linhas leves. O projeto 3D permitiu planejar a integração harmônica entre o mobiliário corporativo e o entorno monumental.',
        images: ['Image1', 'Image2', 'Image3', 'Image4', 'Image5'].map(n => p(`7 Vibra/reunião museu do amanha/${n}.png`)),
    },
    {
        id: 25, title: 'Show Premmia — Vibra', client: 'VIBRA', category: 'EVENT DESIGN',
        description: 'Cenografia completa para o evento musical Show Premmia. O projeto envolve o design de um palco dinâmico com elementos modulares iluminados e áreas vip integradas. A visualização técnica explora o comportamento dos materiais sob diferentes cores de iluminação de palco, garantindo um resultado vibrante e tecnicamente executável.',
        images: Array.from({ length: 10 }, (_, i) => p(`7 Vibra/show premmia/Camera.${String(i + 67).padStart(3, '0')}.png`)),
    },
    {
        id: 26, title: 'Websummit 2025 — Vibra', client: 'VIBRA', category: 'EXHIBITION DESIGN',
        description: 'Estande inovador desenvolvido para a participação da Vibra no Websummit 2025. O projeto traz uma linguagem futurista e tecnológica, com uso de telas interativas, iluminação linear de LED e espaços de networking integrados. A modelagem 3D foi essencial para validar o fluxo de visitantes e o impacto da marca em um evento global de tecnologia.',
        images: ['Camera', 'Camera.000', ...Array.from({ length: 27 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`7 Vibra/websummit 2025/${n}.png`)),
    },
    // === 8 Aguas prata ===
    {
        id: 27, title: 'Taste SP — Águas Prata', client: 'ÁGUAS PRATA', category: 'EXHIBITION DESIGN',
        description: 'Projeto de estande para a Águas Prata no festival gastronômico Taste SP. A visualização foca no frescor e na leveza, utilizando materiais naturais, transparências e vegetação integrada. A modelagem dos balcões e do display de produtos foi feita para destacar a pureza da água e a tradição da marca em um ambiente de alta gastronomia.',
        images: ['Image1', 'Image2', 'Image3', 'Image4', 'Image5', 'Image6', 'Image7', 'Image8', 'Image9', 'Image10', 'Image11'].map(n => p(`8 Aguas prata/taste sp/${n}.png`)),
    },
    // === 9 OUI ===
    {
        id: 28, title: 'Natal 2024 — OUI', client: 'OUI', category: 'SEASONAL CAMPAIGN',
        description: 'Cenografia elegante e festiva para a campanha de Natal 2024 da marca de perfumaria O.U.i.. O projeto traz um ar de celebração francesa, com foco em texturas de tecidos luxuosos, iluminação quente e modelagem detalhada de caixas de presente personalizadas. O render fotorrealista transmite a sofisticação e o charme característicos da marca.',
        images: ['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.005', 'Camera.006', 'Camera.007'].map(n => p(`9 OUI/natal 2024/${n}.png`)),
    },
    // === 10 MC saude ===
    {
        id: 29, title: 'Convenção Unimed 2025 — MC Saúde', client: 'MC SAÚDE / UNIMED', category: 'CORPORATE EVENT',
        description: 'Cenografia de grande escala para a Convenção Nacional da Unimed 2025. O projeto envolve a criação de plenárias, salas de reunião e áreas de convivência com uma linguagem visual unificada. A modelagem 3D permite visualizar a grandiosidade do evento e a correta aplicação do branding em todas as superfícies, garantindo uma experiência profissional e acolhedora.',
        images: ['Camera', ...Array.from({ length: 12 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`10 MC saude/convencao nacional unimed 2025/${n}.png`)),
    },
    {
        id: 30, title: 'Fisweek — MC Saúde', client: 'MC SAÚDE', category: 'EXHIBITION DESIGN',
        description: 'Design de estande tecnológico para o evento de saúde Fisweek. O foco do projeto foi criar um ambiente clínico porém moderno, com uso de superfícies brancas, luzes frias e displays digitais. A visualização técnica garante que o espaço de demonstração de equipamentos seja funcional e visualmente limpo, transmitindo confiança e inovação.',
        images: ['Camera.019', 'Camera.024', 'Camera.026', 'Camera.027', 'Camera.028', 'Camera.029', 'Camera.030', 'Camera.031', 'Camera.032', 'Camera.033', 'Camera.034'].map(n => p(`10 MC saude/fisweek/${n}.png`)),
    },
    // === Aventura ===
    {
        id: 31, title: 'Jovem Frankenstein — Aventura', client: 'AVENTURA', category: 'THEATRICAL PRODUCTION',
        description: 'Cenografia 3D detalhada para a grande produção teatral do musical "Jovem Frankenstein". O trabalho envolveu a modelagem de cenários complexos que remetem a laboratórios góticos e vilas europeias, com foco em texturas de pedra, madeira envelhecida e mecanismos cênicos. A visualização permitiu ao diretor e aos cenógrafos planejar as trocas de cenário e a iluminação dramática.',
        images: Array.from({ length: 8 }, (_, i) => p(`Aventura/jovem frankestein/Image${i + 1}.png`)),
    },
    {
        id: 32, title: 'Noviça Rebelde — Aventura', client: 'AVENTURA', category: 'THEATRICAL PRODUCTION',
        description: 'Projeto cenográfico para o clássico musical "A Noviça Rebelde". A visualização 3D contempla os icônicos cenários das montanhas austríacas e o interior da abadia, com foco na escala e na profundidade do palco. A modelagem priorizou a delicadeza dos detalhes arquitetônicos e a harmonia das cores, garantindo uma representação fiel da atmosfera lúdica da peça.',
        images: ['camarimCamera', 'camarimCamera.001', 'camarimCamera.002', 'camarimCamera.003'].map(n => p(`Aventura/novica rebelde/${n}.png`)),
    },
    // === Ifood ===
    {
        id: 33, title: 'Community Creators Academy — iFood', client: 'IFOOD', category: 'BRAND ACTIVATION',
        description: 'Ambiente criativo e modular desenvolvido para os criadores de conteúdo do iFood. O projeto foca na versatilidade, com micro-cenários modelados para diferentes tipos de gravações e transmissões ao vivo. A iluminação foi pensada para ser funcional para câmeras, enquanto o design de interiores utiliza as cores vibrantes da marca para gerar reconhecimento imediato.',
        images: ['Camera', 'Camera.001', 'Camera.002', 'Camera.003', 'Camera.004', 'Camera.005', 'Camera.006', 'Camera.007', 'Camera.008', 'Camera.012'].map(n => p(`Ifood/Community creators academy/${n}.png`)),
    },
    {
        id: 34, title: 'PK Influenciadores — iFood', client: 'IFOOD', category: 'PRESS KIT',
        description: 'Visualização de produto para press kits exclusivos destinados a influenciadores do iFood. O projeto envolve a modelagem detalhada das caixas, dos itens internos e da disposição gráfica dos elementos. A renderização foca na materialidade das embalagens, garantindo que o unboxing virtual seja tão impactante quanto a experiência física.',
        images: ['Camera.000', ...Array.from({ length: 27 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`Ifood/pk influenciadores/${n}.png`)),
    },
    // === Ipiranga ===
    {
        id: 35, title: 'Saúde na Estrada — Ipiranga', client: 'IPIRANGA', category: 'BRAND ACTIVATION',
        description: 'Projeto de arquitetura itinerante para a iniciativa "Saúde na Estrada" da Ipiranga. A visualização 3D foca na funcionalidade de unidades móveis de atendimento, com modelagem de balcões de recepção e áreas de triagem. O design mantém a identidade visual robusta da marca, utilizando materiais resistentes e de fácil manutenção visualizados sob luz externa realista.',
        images: ['Camera', ...Array.from({ length: 13 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`Ipiranga/saude na estrada/${n}.png`)),
    },
    // === Ponte Rio Niteroi ===
    {
        id: 36, title: 'Festa 50 Anos — Ponte Rio-Niterói', client: 'PONTE RIO-NITERÓI', category: 'CORPORATE EVENT',
        description: 'Cenografia comemorativa para a celebração dos 50 anos da Ponte Rio-Niterói. O projeto utiliza elementos gráficos que remetem à história da engenharia brasileira, integrados a um espaço de eventos elegante. A modelagem 3D destaca painéis cronológicos e uma iluminação que valoriza as conquistas da empresa ao longo das décadas.',
        images: Array.from({ length: 19 }, (_, i) => p(`Ponte Rio Niteroi/festa 50 anos/${i + 1}.png`)),
    },
    // === Prefeitura Rio de Janeiro ===
    {
        id: 37, title: 'Bienal da Arquitetura 2025 — Prefeitura RJ', client: 'PREFEITURA RJ', category: 'CULTURAL EVENT',
        description: 'Espaços expositivos modulares projetados para a Bienal da Arquitetura 2025 no Rio de Janeiro. O projeto 3D explora a flexibilidade das estruturas de exibição, permitindo diferentes configurações de painéis e maquetes. A visualização prioriza a circulação fluida e a iluminação natural, criando um ambiente propício para a contemplação das obras arquitetônicas.',
        images: Array.from({ length: 12 }, (_, i) => p(`Prefeitura Rio de Janeiro/Bienal da Arquitetura 2025/Camera.${String(i + 12).padStart(3, '0')}.png`)),
    },
    // === Premio sim a igualdade racial ===
    {
        id: 38, title: 'Prêmio Sim à Igualdade Racial — Foyer', client: 'IGUALDADE RACIAL', category: 'CORPORATE EVENT',
        description: 'Design do foyer de entrada para o Prêmio Sim à Igualdade Racial. O projeto foca em uma recepção calorosa e imersiva, com o uso de texturas orgânicas, padrões culturais e uma iluminação acolhedora. A modelagem 3D garante que o branding do prêmio seja o protagonista, criando um ambiente de celebração e respeito.',
        images: ['1entrada', '2entrada2', '3escultura', '4escultura2', '5backdrop', '6area buffet', '7painel de marcas', '8area festa', '9dj', '10dj2'].map(n => p(`Premio sim a igualdade racial/Foyer/${n}.png`)),
    },
    {
        id: 39, title: 'Prêmio Sim à Igualdade Racial — Palco', client: 'IGUALDADE RACIAL', category: 'CORPORATE EVENT',
        description: 'Cenografia de palco monumental para a cerimônia do Prêmio Sim à Igualdade Racial. O projeto integra tecnologia de telas de LED com elementos físicos simbólicos, criando uma composição dinâmica para transmissões televisivas. A modelagem técnica assegura a visibilidade de todos os elementos cenográficos sob as complexas luzes de um evento de premiação.',
        images: Array.from({ length: 19 }, (_, i) => p(`Premio sim a igualdade racial/palco/render${i + 1}.png`)),
    },
    // === Sallve ===
    {
        id: 40, title: 'Estande Itinerante — Sallve', client: 'SALLVE', category: 'EXHIBITION DESIGN',
        description: 'Desenvolvimento de duas opções de design para o estande itinerante da Sallve. A visualização 3D foca no minimalismo e na paleta de cores pastel da marca, com modelagem de mobiliário leve e displays de produtos de fácil acesso. O projeto prioriza o fotorrealismo dos materiais plásticos e acabamentos foscos característicos do branding da empresa.',
        images: [
            ...Array.from({ length: 13 }, (_, i) => p(`Sallve/estande itinerante/opcao 1/Camera.${String(i + 13).padStart(3, '0')}.png`)),
            ...['Camera', ...Array.from({ length: 12 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`Sallve/estande itinerante/opcao 2/${n}.png`)),
        ],
    },
    // === Tim ===
    {
        id: 41, title: 'Conferência — Tim', client: 'TIM', category: 'CORPORATE EVENT',
        description: 'Cenografia tecnológica para conferência corporativa da Tim. O projeto visual apresenta um palco com linhas futuristas, grandes telas de projeção e iluminação em azul vibrante. A modelagem 3D permitiu antecipar o impacto visual da marca no ambiente e a integração perfeita de elementos gráficos digitais com a estrutura física.',
        images: Array.from({ length: 19 }, (_, i) => p(`Tim/Conferencia/${i + 1}.png`)),
    },
    // === Unipar ===
    {
        id: 42, title: '60 Anos Fábrica Cubatão — Unipar', client: 'UNIPAR', category: 'CORPORATE EVENT',
        description: 'Projeto cenográfico para a celebração dos 60 anos da unidade industrial da Unipar em Cubatão. O desafio foi transformar um ambiente industrial em um espaço festivo e seguro, utilizando estruturas modulares e iluminação cênica. A visualização 3D destaca a história da fábrica através de painéis decorativos e áreas de convivência integradas ao pátio.',
        images: ['Camera.000', ...Array.from({ length: 11 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`Unipar/60 anos fabrica cubatao/${n}.png`)),
    },
    {
        id: 43, title: 'Dia da Família — Unipar', client: 'UNIPAR', category: 'CORPORATE EVENT',
        description: 'Planejamento espacial e visualização para o evento "Dia da Família" da Unipar. O projeto 3D engloba áreas recreativas, tendas de alimentação e espaços de lazer ao ar livre. A modelagem focou na organização do fluxo e na criação de um ambiente seguro e colorido, garantindo que a escala do evento fosse compreendida para a logística de montagem.',
        images: ['Image2', 'Image3', 'Image4', 'Image5', 'Image6', 'Image7'].map(n => p(`Unipar/dia da familia/${n}.png`)),
    },
    // === azify ===
    {
        id: 44, title: 'Blockchain Rio 2025 — Azify', client: 'AZIFY', category: 'EXHIBITION DESIGN',
        description: 'Estande futurista projetado para a Azify no evento Blockchain Rio 2025. O design foca na tecnologia financeira digital, com modelagem de balcões com iluminação embutida, telas de dados e um layout aberto para networking. A renderização prioriza materiais metálicos e reflexivos, reforçando a imagem de inovação e segurança da empresa.',
        images: ['Camera.006', 'Camera.007', 'Camera.008', 'Camera.009', 'Camera.010', 'Camera.011'].map(n => p(`azify/bockchain rio 2025/${n}.png`)),
    },
    // === deezer ===
    {
        id: 45, title: 'MITA 2023 — Deezer', client: 'DEEZER', category: 'EVENT DESIGN',
        description: 'Cenografia vibrante desenvolvida para a ativação da Deezer no festival MITA 2023. O projeto foca no engajamento do público, com espaços instagramáveis, iluminação de neon e modelagem de áreas de descanso e audição. A visualização 3D captura a energia do festival e a forte presença da marca no ambiente musical.',
        images: Array.from({ length: 15 }, (_, i) => p(`deezer/mita 2023/${i + 1}.png`)),
    },
    // === firjan ===
    {
        id: 46, title: 'RH Rio 2025 — Firjan', client: 'FIRJAN', category: 'CORPORATE EVENT',
        description: 'Projeto cenográfico para o congresso RH Rio 2025, organizado pela Firjan. A visualização contempla o design de auditórios e áreas de exposição com foco no conforto e na troca de informações. A modelagem 3D assegura que a identidade corporativa da Firjan seja aplicada de forma elegante em um ambiente de alto nível profissional.',
        images: ['Camera', 'Camera.000', ...Array.from({ length: 18 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`firjan/rh Rio 2025/${n}.png`)),
    },
    {
        id: 47, title: 'SESI FSWK 2024 — Firjan', client: 'FIRJAN', category: 'EXHIBITION DESIGN',
        description: 'Estande educacional do SESI para o evento FSWK 2024. O projeto traz uma abordagem lúdica e tecnológica, com modelagem de estações de aprendizagem interativas e áreas de demonstração de robótica. A visualização foca na clareza das informações e no design ergonômico para o público jovem.',
        images: ['Camera', ...Array.from({ length: 10 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`firjan/sesi fswk 2024/${n}.png`)),
    },
    // === glade ===
    {
        id: 48, title: 'Ative Seu Modo Verão — Glade', client: 'GLADE', category: 'BRAND ACTIVATION',
        description: 'Ativação sensorial "Ative Seu Modo Verão" desenvolvida para a Glade. O projeto 3D cria um ambiente refrescante e ensolarado, com modelagem de flores, elementos de praia e displays de produtos que enfatizam o frescor das fragrâncias. A renderização prioriza a luz solar difusa para transmitir uma sensação de leveza e bem-estar.',
        images: ['Image7', 'Image8', 'Image9', 'Image10', 'Image11', 'Image12', 'Image13', 'Image14'].map(n => p(`glade/ative seu modo verao/${n}.png`)),
    },
    // === grupo eureka ===
    {
        id: 49, title: 'Saraus 2025 — Grupo Eureka', client: 'GRUPO EUREKA', category: 'EVENT DESIGN',
        description: 'Cenografia artística para a série de Saraus 2025 do Grupo Eureka. O projeto foca na intimidade e na criatividade, com a modelagem de palcos baixos, iluminação de filamento e mobiliário vintage. A visualização 3D permite planejar uma atmosfera acolhedora que favoreça a expressão artística e o convívio social.',
        images: ['Camera', ...Array.from({ length: 20 }, (_, i) => `Camera.${String(i + 1).padStart(3, '0')}`)].map(n => p(`grupo eureka/saraus 2025/${n}.png`)),
    },
    // === hotmart ===
    {
        id: 50, title: 'Hotmart Stars — Light Show', client: 'HOTMART', category: 'EVENT DESIGN',
        description: 'Projeto cenográfico de alta complexidade para o evento Hotmart Stars, integrando um show de luzes sincronizado. O trabalho envolveu a modelagem de um palco central dinâmico, elementos suspensos e o design de press kits de luxo. A visualização 3D foi crucial para simular o comportamento das luzes volumétricas e o impacto visual da cenografia durante o espetáculo.',
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
