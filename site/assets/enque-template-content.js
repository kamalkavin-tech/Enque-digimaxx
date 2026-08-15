(() => {
  const exactText = new Map([
    ['VITE+', 'ENQUE'],
    ['are correctly formatted', 'are connected to shared context'],
    ['Found no warnings, lint errors, or type errors in', 'Verified permissions, approvals, and auditability across'],
    ['tsdown', 'Learning'],
    ['src/index.ts', 'client/acme/project/outcome'],
    ['tsdown.config.ts', 'memory-and-learning-policy'],
    ['CLI tsdown', 'MEMORY update'],
    ['A reusable foundation to deliver every service on', 'A reusable foundation for every agency service'],
    ['A reusable foundation to build every service on', 'A reusable foundation for every agency service'],
    ['Always instant', 'Always connected'],
    ['Hot Module Replacement (HMR)', 'Context synchronization'],
    ['Expandable services without platform redelivers', 'Expandable services without platform disruption'],
    ['delivering for production', 'orchestrating agency delivery'],
    ['building for production', 'orchestrating agency delivery'],
    ['Transformed', 'Connected'],
    ['128 modules', 'work, context, intelligence & control'],
    ['context/client-history', 'PROSPECT qualified'],
    ['0.42 kB', 'PROPOSAL approved'],
    ['context/project-history', 'PROJECT workflow active'],
    ['5.1 kB', 'CONTEXT connected'],
    ['intelligence/workflow', 'OUTCOME recorded'],
    ['46.2 kB', 'LEARNING queued'],
    ['work, context, intelligence & control transformed', 'Shared context and outputs connected'],
    ['LEARNING queued  gzip: 14.9 kB', 'deliverable approved and ready'],
    ['CONTEXT connected  gzip: 1.6 kB', 'approved learning returned to memory'],
    ['Outcome completed in', 'Outcome recorded in shared memory'],
    ['421ms', 'ready for the next workflow'],
    ['42 files', 'conversations · files · histories'],
    ['(88ms, 16 threads)', 'available to every work module'],
    ['(184ms, 16 threads)', 'verified before execution'],
    ['CLI Building entry:', 'OUTCOME'],
    ['client/acme/project/outcome', 'Client deliverable approved'],
    ['CLI Using config:', 'CONTEXT'],
    ['memory-and-learning-policy', 'Decisions and files captured'],
    ['MEMORY update', 'MEMORY'],
    ['0.14.1', 'Updated'],
    ['powered by Rolldown', 'with evaluated learning'],
    ['powered by Projects', 'with evaluated learning'],
    ['ESM', 'CLIENT HISTORY'],
    ['memory/client-project-history', 'Updated with outcome'],
    ['4.8 kB', 'Available agency-wide'],
    ['DTS', 'EVALUATION'],
    ['evaluation/outcome-score', 'Outcome scored and reviewed'],
    ['1.2 kB', 'Learning approved'],
    ['Pack completed in', 'Next workflow improved'],
    ['128ms', 'Continuously'],
    ['node', 'Work'],
    ['automatically, with the right package manager selected for every project.', 'across prospects, proposals, projects, and delivery on one shared work layer.'],
    ['Keep every repo consistent with one command powered by Oxlint, Oxfmt, and', 'Give every module access to the same conversations, knowledge, histories, files, and insights through'],
    ['Prettier', 'Approvals'],
    ['ESLint', 'Governance'],
    ['tsgo', 'Shared Memory'],
    ['compatible formatting', 'and delivery standards'],
    ['compatible rules', 'policies applied'],
    ['Type-aware linting and fast type contexts with', 'Client and project context retained in'],
    ['Project History --fix', 'Search & Insights'],
    ['auto-fixes where possible', 'turns shared knowledge into action'],
    ['Guide', 'Platform'],
    ['Config', 'Modules'],
    ['Resources', 'Company'],
    ['Team', 'About'],
    ['Releases', 'Roadmap'],
    ['Announcement', 'Vision'],
    ['Contributing', 'Contact'],
    ['The Unified', 'The Digital Workforce'],
    ['Toolchain for the Web', 'for Agency that Never Sleeps'],
    ['Manage your runtime, package manager, and frontend stack with one tool.', 'Connect work, shared context, reusable intelligence, and governance in one expandable platform.'],
    ['Free and open source under the MIT license.', 'Built to keep agency work moving around the clock.'],
    ['Get started', 'Request a Demo'],
    ['Read the Beta Announcement', 'Explore the Platform'],
    ['Copy Prompt', 'View Orchestration'],
    ['Getting started', 'The agency problem'],
    ['Install vp globally', 'Digital marketing has grown. Digital employees have not.'],
    ['Install Vite+ once, open a new terminal session, then run vp help.', 'Critical expertise stays in individuals while conversations, files, and tools fragment client context.'],
    ['macOS / Linux', 'Agency challenge'],
    ['curl -fsSL https://vite.plus | bash', 'expertise stays inside individuals'],
    ['Windows (PowerShell)', 'Enque response'],
    ['irm https://vite.plus/ps1 | iex', 'knowledge becomes reusable action'],
    ['Manages your runtime and package manager', 'Unifies agency work from demand to delivery'],
    ['Simplifies everyday development', 'Shares context across every module'],
    ['Powering your favorite frameworks', 'Coordinates a reusable digital workforce'],
    ['A trusted stack to standardize on', 'A reusable foundation to build every service on'],
    ['Stay fast at scale', 'Agency expertise that compounds at scale'],
    ['Focus on shipping, not tooling', 'Focus on outcomes, not handoffs'],
    ['Supply chain security', 'Govern every action'],
    ['Everything you need in one tool', 'Everything your agency needs in one connected workforce'],
    ['dev & build', 'work'],
    ['check', 'context'],
    ['test', 'intelligence'],
    ['run', 'control'],
    ['pack', 'learning'],
    ['Vite+ dev & build', 'Enque Work'],
    ['Blazingly fast builds', 'Demand to delivery in one connected queue'],
    ['Powered by', 'Core modules'],
    ['Vite', 'Prospects'],
    ['Rolldown', 'Projects'],
    ['Vite+ check', 'Enque Context'],
    ['Format, lint, and type-check in one pass', 'Shared context across every module'],
    ['Oxc / Oxlint', 'Communication Hub'],
    ['Oxc / Oxfmt', 'Second Brain'],
    ['Vite+ test', 'Enque Intelligence'],
    ['Testing made simple', 'Reusable intelligence made practical'],
    ['Vitest', 'Evaluation & Learning'],
    ['Vite+ run', 'Enque Control'],
    ['Vite Task for monorepos and scripts', 'Governance across every tier and action'],
    ['Vite+ pack', 'Enque Learning'],
    ['Library packaging with best practices baked in', 'Every outcome makes the next run better'],
    ['Fullstack? No problem.', 'Expandable by design.'],
    ['Meta Frameworks', 'Expandable work modules'],
    ['Platform Agnostic', 'External systems'],
    ['Deploy anywhere by pairing with Nitro', 'Connect anywhere through APIs & Integrations'],
    ['Free & open source', 'The shared foundation is built'],
    ['Contribute', 'View the Roadmap'],
    ["Take your team's productivity to the next level with Vite+", 'Your agency can keep moving, even when your team is not online'],
    ['Company', 'Platform'],
    ['VoidZero', 'enque.ai'],
    ['Oxc', 'Control'],
    ['Social', 'Connect'],
    ['X.com', 'Roadmap'],
    ['Discord', 'Contact'],
    ['Bluesky', 'About'],
    ['© 2026 VoidZero Inc. and Vite+ contributors.', '© 2026 enque.ai. All rights reserved.'],
    ['pnpm', 'Prospects'],
    ['npm', 'Proposals'],
    ['yarn', 'Projects'],
    ['bun', 'Production'],
    ['vp env', 'Knowledge'],
    ['vp install', 'Communication'],
    ['vp dev', 'Client History'],
    ['vp check', 'Project History'],
    ['vp build', 'Files & Data'],
    ['vp run', 'Search & Insights'],
    ['Stop wasting time on tooling maintenance', 'Reuse expertise across every service'],
    ['Improve cross-team developer mobility', 'Keep context available across every team'],
    ['Standardize best practices for humans and AI-assisted workflows', 'Standardize governed work for people and agents'],
    ['Always instant Hot Module Replacement (HMR)', 'Prospects, proposals, and projects stay connected'],
    ['40× faster production build than webpack', 'Shared context travels with every activity'],
    ['Opt-in full-bundle dev mode for large apps', 'Specialist modules plug into one foundation'],
    ['Huge ecosystem of plugins', 'Expandable services without platform rebuilds'],
    ['Prettier compatible formatting', 'Communication and knowledge stay connected'],
    ['750+ ESLint compatible rules', 'Client and project history stays available'],
    ['Type-aware linting and fast type checks with tsgo', 'Files, data, search, and insights remain governed'],
    ['vp check --fix auto-fixes where possible', 'Every module reads and writes shared context'],
    ['Jest compatible API', 'Skills select reusable expertise'],
    ['Test isolation by default', 'Workflows execute governed steps'],
    ['Browser Mode: run unit tests in actual browsers', 'Memory preserves operational context'],
    ['Coverage reports, snapshot tests, type tests, visual regression tests...', 'Routing, reasoning, evaluation, and learning improve outcomes'],
    ['Automated input tracking for cacheable tasks', 'Role-based access applies across all tiers'],
    ['Dependency-aware execution across workspace packages', 'Human approvals remain part of critical actions'],
    ['Familiar script execution via vp run', 'Every run stays traceable and reviewable'],
    ['DTS generation & bundling', 'Capture decisions, files, and outcomes'],
    ['Automatic package exports generation', 'Measure results and return them to memory'],
    ['Standalone app binaries and transform-only unbundled mode', 'Improve the next plan, workflow, and execution'],
    ['Always instant Hot Module Replacement (HMR)', 'Prospects, proposals, and projects stay connected'],
    ['$ vp build', '$ enque execute'],
    ['$ vp check', '$ enque context'],
    ['$ vp pack', '$ enque learn'],
    ['VITE+ building for production', 'ENQUE orchestrating agency work'],
    ['VITE+ delivering for production', 'ENQUE orchestrating agency work'],
    ['enque.ai building for production', 'ENQUE orchestrating agency work'],
    ['✓ Transformed 128 modules', '✓ Shared context connected'],
    ['dist/index.html 0.42 kB', 'context/client-history ready'],
    ['dist/index.html', 'context/client-history'],
    ['dist/assets/index.css 5.1 kB', 'context/project-history ready'],
    ['dist/assets/index.css', 'context/project-history'],
    ['dist/assets/index.js 46.2 kB', 'intelligence/workflow ready'],
    ['dist/assets/index.js', 'intelligence/workflow'],
    ['✓ Built in 421ms', '✓ Outcome recorded and measured'],
    ['pass: All 42 files are correctly formatted (88ms, 16 threads)', 'context: conversations, files, and histories connected'],
    ['All 42 files are correctly formatted', 'conversations, files, and histories are connected'],
    ['pass: Found no warnings, lint errors, or type errors in 42 files (184ms, 16 threads)', 'governance: permissions, approvals, and audit trail verified'],
    ['Found no warnings, lint errors, or type errors in 42 files', 'permissions, approvals, and audit trail verified'],
    ['Cold Cache', 'New Request'],
    ['Full Replay', 'Full Workflow'],
    ['Partial Replay', 'Human Approval'],
    ['Full Rebuild', 'Learning Update'],
    ['Projects / tsdown', 'Memory / Learning'],
    ['/ tsdown', '/ Learning'],
    ['CLI Building entry: src/index.ts', 'RUN Capturing outcome and decisions'],
    ['Building entry: src/index.ts', 'Capturing outcome and decisions'],
    ['CLI Using config: tsdown.config.ts', 'RUN Connecting files, metrics, and approvals'],
    ['Using config: tsdown.config.ts', 'Connecting files, metrics, and approvals'],
    ['CLI tsdown 0.14.1 powered by Rolldown', 'RUN Returning approved knowledge to memory'],
    ['tsdown 0.14.1 powered by Rolldown', 'Returning approved knowledge to memory'],
    ['tsdown 0.14.1 powered by Projects', 'Returning approved knowledge to memory'],
    ['ESM dist/index.js 4.8 kB', 'MEMORY client and project history updated'],
    ['dist/index.js', 'memory/client-project-history'],
    ['DTS dist/index.d.ts 1.2 kB', 'EVALUATION outcome scored and reviewed'],
    ['dist/index.d.ts', 'evaluation/outcome-score'],
    ['✓ Pack completed in 128ms', '✓ The next execution is now better'],
  ]);

  const fallback = [
    [/Vite\+/g, 'enque.ai'],
    [/vite\.plus/gi, 'enque.ai'],
    [/VoidZero/g, 'enque.ai'],
    [/Vitest/g, 'Evaluation'],
    [/Rolldown/g, 'Workflows'],
    [/Nitro/g, 'Integrations'],
    [/\bOxc\b/g, 'Skills'],
  ];

  const patchText = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const clean = node.nodeValue.trim();
      if (!clean) continue;
      if (exactText.has(clean)) {
        const leading = node.nodeValue.match(/^\s*/)?.[0] ?? '';
        const trailing = node.nodeValue.match(/\s*$/)?.[0] ?? '';
        node.nodeValue = leading + exactText.get(clean) + trailing;
        continue;
      }
      let value = node.nodeValue;
      for (const [pattern, replacement] of fallback) value = value.replace(pattern, replacement);
      node.nodeValue = value;
    }
  };

  const patchLinks = (root) => {
    root.querySelectorAll?.('a[href]').forEach((link) => {
      const href = link.getAttribute('href') || '';
      const label = link.textContent.trim();
      if (label === 'Request a Demo') link.href = 'contact/';
      else if (label === 'Contact') link.href = 'contact/';
      else if (label === 'Roadmap' || label === 'View the Roadmap') link.href = 'https://github.com/kamalkavin-tech/Enque-digimaxx';
      else if (label === 'Vision') link.href = '#platform';
      else if (href === '/' || href === '/bluecolorsite/') link.href = '#top';
      else if (href.startsWith('/guide')) link.href = '#platform';
      else if (href.startsWith('/config')) link.href = '#modules';
      else if (href === '/team') link.href = '#about';
      else if (href.includes('github.com/voidzero-dev/vite-plus')) link.href = 'https://github.com/kamalkavin-tech/Enque-digimaxx';
      else if (href.includes('github.com/voidzero-dev/setup-vp')) link.href = '#intelligence';
      else if (href.includes('github.com/voidzero-plan/setup-vp')) link.href = '#intelligence';
      else if (href.includes('nodejs.org')) link.href = '#work';
      else if (href.includes('tsdown')) link.href = '#intelligence';
      else if (href.includes('voidzero.dev/posts')) link.href = '#platform';
      else if (href.includes('voidzero.dev')) link.href = '#about';
      else if (href.includes('vite.dev')) link.href = '#work';
      else if (href.includes('vitest.dev')) link.href = '#context';
      else if (href.includes('rolldown.rs')) link.href = '#intelligence';
      else if (href.includes('oxc.rs')) link.href = '#control';
      else if (href.includes('x.com/voidzerodev')) link.href = '#roadmap';
      else if (href.includes('discord.gg')) link.href = 'mailto:hello@enque.ai';
      else if (href.includes('bsky.app')) link.href = '#about';
      if (link.getAttribute('href')?.startsWith('#')) {
        link.removeAttribute('target');
        link.removeAttribute('rel');
      }
      if (link.getAttribute('href')?.startsWith('/bluecolorsite/')) {
        link.removeAttribute('target');
        link.removeAttribute('rel');
      }
    });
  };

  const patchImages = (root) => {
    root.querySelectorAll?.('img[alt]').forEach((image) => {
      const originalAlt = image.alt;
      image.alt = image.alt
        .replace(/Vite\+/g, 'enque.ai')
        .replace(/Vite|Vitest|Rolldown|Oxc|Nitro|VoidZero/g, 'Enque');
      const originalSource = image.getAttribute('src') || '';
      if (/Vite\+|Vite|Vitest|Rolldown|Oxc|Nitro|VoidZero|^node$/i.test(originalAlt) || /viteplus|vite(?:\.|-by)|vitest|rolldown|oxc|nitro|voidzero|\/node\./i.test(originalSource)) {
        image.src = '/bluecolorsite/icon.svg';
        image.removeAttribute('srcset');
      }
    });
  };

  const patchAnchors = () => {
    document.body.id = 'top';
    const targets = new Map([
      ['Everything your agency needs in one connected workforce', 'modules'],
      ['Enque Work', 'work'],
      ['Enque Context', 'context'],
      ['Enque Intelligence', 'intelligence'],
      ['Enque Control', 'control'],
      ['The shared foundation is built', 'roadmap'],
    ]);
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading) => {
      const id = targets.get(heading.textContent.trim());
      if (id) heading.id = id;
    });
    const firstShowcase = document.querySelector('main section, #app section');
    if (firstShowcase && !document.getElementById('platform')) firstShowcase.id = 'platform';
    const footer = document.querySelector('footer');
    if (footer && !document.getElementById('about')) footer.id = 'about';
  };

  const patchControls = () => {
    const demo = [...document.querySelectorAll('a.button')].find((link) => link.textContent.trim() === 'Request a Demo');
    demo?.parentElement?.classList.add('enque-hero-actions');
    document.querySelectorAll('button[aria-label*="install command"]').forEach((button) => {
      const card = button.closest('.rounded-xl');
      const label = card?.querySelector('.uppercase')?.textContent.trim() || 'Enque information';
      button.setAttribute('aria-label', `Copy ${label}`);
    });
    const orchestration = [...document.querySelectorAll('button')].find((button) => button.textContent.trim() === 'View Orchestration');
    if (orchestration && !orchestration.dataset.enqueAction) {
      orchestration.dataset.enqueAction = 'orchestration';
      orchestration.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, true);
    }
  };

  const pillarMarkup = `
    <article class="enque-pillar" style="--pillar-accent:#7045e8">
      <div class="enque-pillar__top"><div class="enque-pillar__label"><span class="enque-pillar__mark">01</span>Enque Work</div><h3>One queue from demand to delivery.</h3><p>Prospects become proposals, projects, production, and measurable outcomes without losing ownership or momentum.</p></div>
      <div class="enque-pillar__flow"><span>Prospects</span><span>Proposals</span><span>Projects</span><span>Production</span></div>
      <div class="enque-pillar__outcome">Expandable work modules</div>
    </article>
    <article class="enque-pillar" style="--pillar-accent:#2385d8">
      <div class="enque-pillar__top"><div class="enque-pillar__label"><span class="enque-pillar__mark">02</span>Enque Context</div><h3>Shared context travels with the work.</h3><p>Conversations, knowledge, histories, files, and insights remain connected to every client, project, person, and agent.</p></div>
      <div class="enque-pillar__flow"><span>Knowledge</span><span>Communication</span><span>Histories</span><span>Files &amp; Data</span></div>
      <div class="enque-pillar__outcome">One durable agency memory</div>
    </article>
    <article class="enque-pillar" style="--pillar-accent:#ef7130">
      <div class="enque-pillar__top"><div class="enque-pillar__label"><span class="enque-pillar__mark">03</span>Enque Intelligence</div><h3>A reusable digital workforce that learns.</h3><p>Skills, workflows, memory, routing, reasoning, and evaluation coordinate execution while Enque Control governs every action.</p></div>
      <div class="enque-pillar__flow"><span>Skills</span><span>Workflows</span><span>Memory</span><span>Learning</span></div>
      <div class="enque-pillar__outcome">Governed by Enque Control</div>
    </article>`;

  const patchPlatformPillars = () => {
    const heading = [...document.querySelectorAll('h5')].find((node) => node.textContent.trim() === 'Unifies agency work from demand to delivery');
    const section = heading?.closest('section');
    if (!section || section.classList.contains('enque-pillars')) return;
    section.className = 'wrapper enque-pillars';
    section.setAttribute('aria-label', 'The Enque platform');
    section.innerHTML = pillarMarkup;
  };

  const patchLegacyTestGraphic = () => {
    const legacy = document.querySelector('img[src*="test.DqwICtpI.svg"]');
    const panel = legacy?.closest('.bg-slate');
    if (!panel || panel.querySelector('.enque-evaluation-visual')) return;
    panel.innerHTML = `<div class="enque-evaluation-visual"><div class="enque-evaluation-visual__head"><strong>Outcome evaluation</strong><span>LEARNING APPROVED</span></div><div class="enque-evaluation-grid"><div><small>Context</small><b>Client history connected</b></div><div><small>Quality</small><b>Standards verified</b></div><div><small>Governance</small><b>Approval recorded</b></div><div><small>Memory</small><b>Next run updated</b></div></div><div class="enque-evaluation-result">Measured outcomes return to shared agency intelligence</div></div>`;
  };

  const footerMarkup = `
    <section class="enque-roadmap" id="roadmap">
      <div class="enque-roadmap__copy">
        <span class="enque-footer-kicker">Built foundation / expanding workforce</span>
        <h2>The foundation is live. The workforce keeps expanding.</h2>
        <p>Enque already connects governed agents, reusable intelligence, shared context, and delivered use cases. The roadmap turns that foundation into a complete digital workforce for every agency service.</p>
        <div class="enque-footer-actions"><a class="enque-footer-button enque-footer-button--primary" href="https://github.com/kamalkavin-tech/Enque-digimaxx" target="_blank" rel="noopener noreferrer">View the roadmap <span aria-hidden="true">↗</span></a><a class="enque-footer-button" href="#modules">Explore modules <span aria-hidden="true">↓</span></a></div>
      </div>
      <div class="enque-roadmap__status" aria-label="Enque platform status">
        <div class="enque-status-head"><div><span class="enque-live-dot"></span>Platform foundation online</div><small>ENQUE / 2026</small></div>
        <div class="enque-status-stack">
          <div style="--status-color:#8a52ff"><span>01</span><strong>Work</strong><small>Demand to delivery</small><b>LIVE</b></div>
          <div style="--status-color:#2687e8"><span>02</span><strong>Context</strong><small>Shared agency memory</small><b>LIVE</b></div>
          <div style="--status-color:#ff8238"><span>03</span><strong>Intelligence</strong><small>Skills and workflows</small><b>EXPANDING</b></div>
          <div style="--status-color:#19a774"><span>04</span><strong>Control</strong><small>Governance and security</small><b>LIVE</b></div>
        </div>
        <div class="enque-status-foot"><span>One platform</span><i></i><span>Expandable by design</span></div>
      </div>
    </section>
    <section class="enque-final-cta">
      <div class="enque-final-cta__brand"><img src="/bluecolorsite/icon.svg" alt=""><span>THE AGENCY THAT NEVER SLEEPS</span></div>
      <h2>Your agency keeps moving—even when your team is offline.</h2>
      <p>Start with one repeated process. Connect its context, govern its execution, and build a digital workforce that improves with every outcome.</p>
      <div class="enque-footer-actions enque-footer-actions--center"><a class="enque-footer-button enque-footer-button--light" href="contact/">Request a demo <span aria-hidden="true">→</span></a><a class="enque-footer-text-link" href="mailto:hello@enque.ai">hello@enque.ai</a></div>
      <div class="enque-proof-row"><div><strong>24/7</strong><span>Workforce availability</span></div><div><strong>One</strong><span>Shared context layer</span></div><div><strong>Every run</strong><span>Governed and traceable</span></div></div>
    </section>
    <section class="enque-footer-nav">
      <div class="enque-footer-brand"><img src="/bluecolorsite/assets/enque-logo-light.svg" alt="enque.ai"><p>The digital workforce for agency that never sleeps.</p><a href="mailto:hello@enque.ai">hello@enque.ai</a></div>
      <nav aria-label="Platform footer navigation"><span>Platform</span><a href="#work">Work</a><a href="#context">Context</a><a href="#intelligence">Intelligence</a><a href="#control">Control</a></nav>
      <nav aria-label="Company footer navigation"><span>Company</span><a href="#platform">About Enque</a><a href="#roadmap">Roadmap</a><a href="contact/">Contact</a><a href="https://github.com/kamalkavin-tech/Enque-digimaxx" target="_blank" rel="noopener noreferrer">GitHub ↗</a></nav>
      <div class="enque-footer-note"><span>System status</span><strong><i></i>Digital workforce online</strong><p>Work → Context → Intelligence → Control → Better execution</p></div>
    </section>
    <div class="enque-footer-bottom"><span>© 2026 enque.ai. All rights reserved.</span><a href="#top">Back to top ↑</a></div>`;

  const patchSiteFooter = () => {
    const footer = document.querySelector('footer.bg-primary[data-theme="dark"], footer.enque-site-footer');
    if (!footer || footer.classList.contains('enque-site-footer')) return;
    footer.id = 'about';
    footer.className = 'wrapper enque-site-footer';
    footer.removeAttribute('data-theme');
    footer.innerHTML = footerMarkup;
  };

  const patchStats = () => {
    const stats = new Map([
      ['111', ['2', 'Built work modules']],
      ['47', ['3', 'Built intelligence modules']],
      ['78', ['3', 'Built control modules']],
      ['51', ['6', 'Context modules in development']],
      ['4', ['1', 'Routing module in development']],
      ['24/7', ['24/7', 'Digital workforce']],
    ]);
    document.querySelectorAll('p.text-primary').forEach((number) => {
      const update = stats.get(number.textContent.trim());
      const label = number.nextElementSibling;
      if (!update || !label?.matches('p')) return;
      number.textContent = update[0];
      label.textContent = update[1];
    });
  };

  const consoleMarkup = `
    <div class="enque-console-head">
      <span class="enque-console-kicker">The start of the queue</span>
      <span class="enque-console-status">Digital workforce online</span>
    </div>
    <h2 class="enque-console-title">Agency expertise enters once. Enque keeps it moving.</h2>
    <p class="enque-console-copy">The PDF describes one continuous agency loop: discover the need, plan the work, execute with governed agents, measure the result, improve the next run, and learn.</p>
    <div class="enque-flow-row" aria-label="Enque continuous agency loop">
      ${['Discover', 'Plan', 'Execute', 'Measure', 'Improve', 'Learn'].map((step, index) => `<span class="enque-flow-step">${step}</span>${index < 5 ? '<span class="enque-flow-arrow">→</span>' : ''}`).join('')}
    </div>
    <div class="enque-tier-row">
      <div class="enque-tier-pill" style="--tier-color:#8a52ff"><strong>Work</strong><span>Where agency value is created</span></div>
      <div class="enque-tier-pill" style="--tier-color:#2687e8"><strong>Context</strong><span>What the system knows</span></div>
      <div class="enque-tier-pill" style="--tier-color:#ff8238"><strong>Intelligence</strong><span>How work is planned and improved</span></div>
      <div class="enque-tier-pill" style="--tier-color:#19a774"><strong>Control</strong><span>How every action is governed</span></div>
    </div>`;

  const patchHeroConsole = () => {
    const heroSection = document.querySelector('section.terminal-background');
    const consolePanel = heroSection?.firstElementChild;
    if (!heroSection || !consolePanel) return;
    heroSection.classList.remove('h-[40rem]', 'pt-28');
    heroSection.style.minHeight = '34rem';
    heroSection.style.padding = '4rem clamp(1rem, 5vw, 5rem)';
    consolePanel.classList.add('enque-queue-console');
    if (!consolePanel.querySelector('.enque-console-head')) consolePanel.innerHTML = consoleMarkup;
  };

  const integrationMarkup = `
    <div class="enque-data-panel">
      <span class="enque-visual-kicker">The blue data that enters Enque</span>
      <h3>Live agency data becomes durable context.</h3>
      <p>Marketplace changes, campaign signals, conversations, files, client history, project history, decisions, and outcomes are captured as Datablue, then made reusable by every governed agent.</p>
      <div class="enque-data-flow" aria-label="Live web to Datablue to Enque">
        <div class="enque-data-node">Live agency systems</div><span class="enque-data-arrow">→</span>
        <div class="enque-data-node">Datablue</div><span class="enque-data-arrow">→</span>
        <div class="enque-data-node enque-data-node--brand">Enque</div>
      </div>
      <div class="enque-source-grid">
        <div class="enque-source-card"><strong>Work</strong><span>Prospects, proposals, projects and delivery</span></div>
        <div class="enque-source-card"><strong>Communication</strong><span>Chats, comments, meetings and decisions</span></div>
        <div class="enque-source-card"><strong>Performance</strong><span>Campaign, marketplace and outcome signals</span></div>
      </div>
    </div>
    <div class="enque-connect-panel">
      <span class="enque-visual-kicker">APIs and integrations</span>
      <h3>Connect the systems your agency already uses.</h3>
      <p>The Control layer governs every connection while Context keeps data reusable across modules, agents, clients, and projects.</p>
      <div class="enque-connect-core"><div><img src="/bluecolorsite/icon.svg" alt=""><strong>Enque integration layer</strong></div></div>
      <div class="enque-system-grid">
        ${['CRM', 'Communication', 'Storage', 'AI models', 'Payments', 'Agency tools'].map((item) => `<div class="enque-system-card">${item}</div>`).join('')}
      </div>
    </div>`;

  const patchIntegrationSection = () => {
    const heading = [...document.querySelectorAll('h6')].find((node) => node.textContent.trim() === 'Connect anywhere through APIs & Integrations');
    const section = heading?.closest('section');
    if (!section) return;
    section.className = 'wrapper enque-integration-section';
    if (!section.querySelector('.enque-data-panel')) section.innerHTML = integrationMarkup;
  };

  const replaceCardVisual = (headingText, kicker, title, cards) => {
    const heading = [...document.querySelectorAll('h5')].find((node) => node.textContent.trim() === headingText);
    const canvas = heading?.parentElement?.querySelector('canvas');
    const holder = canvas?.parentElement;
    if (!holder || holder.querySelector('.enque-visual-shell')) return;
    holder.className = '';
    holder.innerHTML = `<div class="enque-visual-shell"><span class="enque-visual-kicker">${kicker}</span><h6>${title}</h6><div class="enque-mini-grid">${cards.map(([name, description]) => `<div class="enque-mini-card"><strong>${name}</strong><span>${description}</span></div>`).join('')}</div></div>`;
  };

  const orchestrationMarkup = `
    <div class="enque-orchestration-head">
      <div><span class="enque-visual-kicker">The Enque orchestration</span><h2>The whole agency system, in one governed loop.</h2></div>
      <p>Control governs. Intelligence chooses skills and workflows. Context informs every action. Work produces outcomes that return to memory and learning.</p>
    </div>
    <div class="enque-orchestration-tiers">
      <article class="enque-orchestration-tier" style="--tier-color:#8a52ff"><small>TIER 1</small><h4>Work</h4><p>Prospects, proposals, projects and expandable delivery modules create agency value.</p></article>
      <article class="enque-orchestration-tier" style="--tier-color:#2687e8"><small>TIER 2</small><h4>Context</h4><p>Communication, knowledge, histories, files, data and insights remain shared.</p></article>
      <article class="enque-orchestration-tier" style="--tier-color:#ff8238"><small>TIER 3</small><h4>Intelligence</h4><p>Skills, workflows, memory, routing, reasoning, evaluation and learning coordinate work.</p></article>
      <article class="enque-orchestration-tier" style="--tier-color:#19a774"><small>TIER 4</small><h4>Control</h4><p>Roles, administration, security, integrations, isolation and auditability govern every action.</p></article>
    </div>
    <div class="enque-loop">CONTROL → INTELLIGENCE → CONTEXT → WORK → OUTCOMES → MEMORY & LEARNING → BETTER EXECUTION</div>`;

  const patchFinalOrchestration = () => {
    const canvases = [...document.querySelectorAll('canvas')];
    const canvas = canvases.find((item) => Number(item.getAttribute('width')) >= 1000);
    const wrapper = canvas?.parentElement?.parentElement;
    if (!wrapper || wrapper.querySelector('.enque-orchestration-shell')) return;
    wrapper.className = 'wrapper enque-orchestration-shell';
    wrapper.innerHTML = orchestrationMarkup;
  };

  const patchExperience = () => {
    patchHeroConsole();
    patchPlatformPillars();
    patchLegacyTestGraphic();
    patchSiteFooter();
    replaceCardVisual('Agency expertise that compounds at scale', 'The second brain', 'Capture, organise and retrieve agency knowledge.', [
      ['Capture', 'Conversations, documents and outcomes enter the system'],
      ['Organise', 'Knowledge connects to the correct client and project'],
      ['Retrieve', 'Agents find context with natural-language questions'],
    ]);
    replaceCardVisual('Focus on outcomes, not handoffs', 'The language Enque speaks', 'Every activity has the attributes needed for governed execution.', [
      ['State', 'Where the activity is now'],
      ['Assignment', 'Who or what does the work'],
      ['Execution', 'The governed workflow and output'],
    ]);
    patchIntegrationSection();
    patchFinalOrchestration();
  };

  const searchItems = [
    ['Platform overview', 'Work, context, intelligence, and control in one orchestration loop.', '#platform'],
    ['Work execution', 'Prospects, proposals, projects, and expandable agency services.', '#work'],
    ['Shared context', 'Communication, knowledge, histories, files, data, and insights.', '#context'],
    ['Operational intelligence', 'Skills, workflows, memory, routing, reasoning, and evaluation.', '#intelligence'],
    ['Control and governance', 'Roles, permissions, administration, security, APIs, and auditability.', '#control'],
    ['Roadmap', 'Built foundation and the next stage of the digital workforce.', '#roadmap'],
    ['Contact Enque', 'Tell us where agency work slows down and design the first queue.', 'contact/'],
    ['About enque.ai', 'The digital workforce for agency that never sleeps.', '#about'],
  ];

  const ensureSearch = () => {
    if (document.getElementById('enque-search')) return;
    const style = document.createElement('style');
    style.textContent = '#enque-search{border:0;padding:0;background:transparent;width:min(42rem,calc(100% - 2rem));max-width:none}#enque-search::backdrop{background:rgba(8,6,13,.7);backdrop-filter:blur(6px)}.enque-search-panel{background:#fff;color:#08060d;border:1px solid #d9d9e3;border-radius:14px;box-shadow:0 24px 80px rgba(0,0,0,.3);overflow:hidden}.dark .enque-search-panel{background:#111;color:#fff;border-color:#34343c}.enque-search-head{display:flex;align-items:center;gap:.75rem;padding:1rem;border-bottom:1px solid #d9d9e3}.dark .enque-search-head{border-color:#34343c}.enque-search-head input{width:100%;background:transparent;border:0;outline:0;font:inherit;color:inherit;font-size:1rem}.enque-search-head button{border:0;background:transparent;color:inherit;cursor:pointer;font-size:.85rem}.enque-search-results{display:grid;gap:.5rem;padding:.75rem;max-height:60vh;overflow:auto}.enque-search-item{display:block;padding:.9rem 1rem;border-radius:9px;color:inherit;text-decoration:none}.enque-search-item:hover,.enque-search-item:focus{background:#f0efff;outline:none}.dark .enque-search-item:hover,.dark .enque-search-item:focus{background:#27243b}.enque-search-item strong{display:block;margin-bottom:.2rem}.enque-search-item span{font-size:.85rem;opacity:.68}.enque-search-empty{padding:1.5rem;text-align:center;opacity:.65}';
    document.head.appendChild(style);
    const dialog = document.createElement('dialog');
    dialog.id = 'enque-search';
    dialog.innerHTML = '<div class="enque-search-panel"><div class="enque-search-head"><img src="/bluecolorsite/icon.svg" alt="" width="24" height="24"><input type="search" aria-label="Search enque.ai" placeholder="Search the Enque platform"><button type="button" aria-label="Close search">ESC</button></div><div class="enque-search-results"></div></div>';
    document.body.appendChild(dialog);
    const input = dialog.querySelector('input');
    const results = dialog.querySelector('.enque-search-results');
    const render = () => {
      const query = input.value.trim().toLowerCase();
      const matches = searchItems.filter((item) => !query || item.join(' ').toLowerCase().includes(query));
      results.innerHTML = matches.length ? matches.map(([title, description, href]) => `<a class="enque-search-item" href="${href}"><strong>${title}</strong><span>${description}</span></a>`).join('') : '<div class="enque-search-empty">No matching Enque section</div>';
      results.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => dialog.close()));
    };
    input.addEventListener('input', render);
    dialog.querySelector('button').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { input.value = ''; render(); });
    render();
  };

  const openSearch = () => {
    ensureSearch();
    const dialog = document.getElementById('enque-search');
    if (!dialog.open) dialog.showModal();
    dialog.querySelector('input').focus();
  };

  const bindSearch = () => {
    document.querySelectorAll('button[aria-label="Search"], .VPNavBarSearchButton').forEach((button) => {
      if (button.dataset.enqueSearch) return;
      button.dataset.enqueSearch = 'true';
      button.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        openSearch();
      }, true);
    });
  };

  const drawEnqueCanvas = (canvas, index) => {
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    context.clearRect(0, 0, width, height);
    context.fillStyle = index === 2 ? '#08060d' : '#f7f7fb';
    context.fillRect(0, 0, width, height);
    const colors = ['#7c3aed', '#2185d5', '#f97316', '#15966a'];
    const tiers = index === 0 ? ['Shared Context', 'Reusable Skills', 'Governed Workflows'] : index === 1 ? ['Outcome', 'Evaluation', 'Learning', 'Memory'] : ['WORK', 'CONTEXT', 'INTELLIGENCE', 'CONTROL'];
    const gap = width * 0.025;
    const boxWidth = (width - gap * (tiers.length + 1)) / tiers.length;
    const boxHeight = Math.min(height * .28, 105);
    const y = (height - boxHeight) / 2;
    context.font = `${Math.max(13, width / 55)}px Arial, sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    tiers.forEach((tier, tierIndex) => {
      const x = gap + tierIndex * (boxWidth + gap);
      context.fillStyle = index === 2 ? '#15131d' : '#fff';
      context.strokeStyle = colors[tierIndex % colors.length];
      context.lineWidth = Math.max(2, width / 500);
      context.beginPath();
      context.roundRect(x, y, boxWidth, boxHeight, 12);
      context.fill();
      context.stroke();
      context.fillStyle = colors[tierIndex % colors.length];
      context.fillRect(x, y, boxWidth, 6);
      context.fillStyle = index === 2 ? '#fff' : '#08060d';
      context.fillText(tier, x + boxWidth / 2, y + boxHeight / 2 + 4, boxWidth - 16);
      if (tierIndex < tiers.length - 1) {
        context.strokeStyle = '#8e8b99';
        context.beginPath();
        context.moveTo(x + boxWidth, y + boxHeight / 2);
        context.lineTo(x + boxWidth + gap, y + boxHeight / 2);
        context.stroke();
      }
    });
    context.fillStyle = index === 2 ? '#a9a6b3' : '#615e6b';
    context.font = `${Math.max(11, width / 72)}px Arial, sans-serif`;
    context.fillText(index === 2 ? 'ONE CONTINUOUS ORCHESTRATION LOOP' : 'Every completed action improves the next one', width / 2, y + boxHeight + Math.max(28, height * .1));
  };

  let canvasesReady = false;
  const replaceLegacyCanvases = () => {
    const allCanvases = [...document.querySelectorAll('canvas')];
    allCanvases.filter((canvas) => !canvas.dataset.enqueCanvas).forEach((legacy) => {
      const index = allCanvases.indexOf(legacy);
      const canvas = document.createElement('canvas');
      [...legacy.attributes].forEach((attribute) => canvas.setAttribute(attribute.name, attribute.value));
      canvas.dataset.enqueCanvas = String(index);
      legacy.replaceWith(canvas);
      drawEnqueCanvas(canvas, index);
    });
  };

  let patching = false;
  const patch = () => {
    if (patching) return;
    patching = true;
    patchText(document.body);
    patchLinks(document);
    patchImages(document);
    patchAnchors();
    patchControls();
    patchStats();
    patchExperience();
    bindSearch();
    if (canvasesReady) replaceLegacyCanvases();
    window.__VP_HASH_MAP__ = {};
    document.title = 'enque.ai | The Digital Workforce for Agency that Never Sleeps';
    patching = false;
  };

  patch();
  const observer = new MutationObserver(() => patch());
  observer.observe(document.body, { childList: true, subtree: true });
  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      openSearch();
    }
  });
  document.addEventListener('click', (event) => {
    const searchButton = event.target.closest?.('button[aria-label="Search"], .VPNavBarSearchButton');
    if (searchButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openSearch();
      return;
    }
    const orchestration = event.target.closest?.('button');
    if (orchestration?.textContent.trim() === 'View Orchestration') {
      event.preventDefault();
      event.stopImmediatePropagation();
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, true);
  setTimeout(() => {
    canvasesReady = true;
    patchExperience();
    replaceLegacyCanvases();
  }, 300);
  setTimeout(() => observer.disconnect(), 8000);
})();
