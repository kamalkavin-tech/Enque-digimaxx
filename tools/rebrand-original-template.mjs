import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
let html = execFileSync('git', ['show', 'HEAD:site/index.html'], {
  cwd: root,
  encoding: 'utf8',
  maxBuffer: 4 * 1024 * 1024,
});

const replacements = new Map([
  ['<title>Vite+ | The Unified Toolchain for the Web</title>', '<title>enque.ai | The Digital Workforce for Agency that Never Sleeps</title>'],
  ['<meta name="description" content="The Unified Toolchain for the Web">', '<meta name="description" content="The Digital Workforce for Agency that Never Sleeps">'],
  ['<meta property="og:site_name" content="Vite+">', '<meta property="og:site_name" content="enque.ai">'],
  ['<meta name="twitter:site" content="@voidzerodev">', '<meta name="twitter:site" content="@enqueai">'],
  ['<meta property="og:title" content="Vite+">', '<meta property="og:title" content="enque.ai">'],
  ['<meta property="og:image" content="https://viteplus.dev/og.jpg">', '<meta property="og:image" content="https://enque.ai/og.jpg">'],
  ['<meta property="og:url" content="https://viteplus.dev/">', '<meta property="og:url" content="https://enque.ai/">'],
  ['<meta property="og:description" content="The Unified Toolchain for the Web">', '<meta property="og:description" content="The Digital Workforce for Agency that Never Sleeps">'],
  ['<link rel="canonical" href="https://viteplus.dev/">', '<link rel="canonical" href="https://enque.ai/">'],

  ['>Guide</span>', '>Platform</span>'],
  ['>Config</span>', '>Modules</span>'],
  ['>Resources</span>', '>Company</span>'],
  ['>Team</span>', '>About</span>'],
  ['>Releases</span>', '>Roadmap</span>'],
  ['>Announcement</span>', '>Vision</span>'],
  ['>Contributing</span>', '>Contact</span>'],

  ['alt="Vite+"', 'alt="enque.ai"'],
  ['alt="Vite+ Logo"', 'alt="enque.ai logo"'],
  ['The Unified</span><span class="inline-block" data-v-145a2b37>Toolchain for the Web', 'The Digital Workforce</span><span class="inline-block" data-v-145a2b37>for Agency that Never Sleeps'],
  [' Manage your runtime, package manager, and frontend stack with one tool. ', ' Connect work, shared context, reusable intelligence, and governance in one expandable platform. '],
  ['Free and open source under the MIT license.', 'Built to keep agency work moving around the clock.'],
  ['> Get started </a>', '> Request a Demo </a>'],
  ['> Read the Beta Announcement </a>', '> Explore the Platform </a>'],
  ['Copy Prompt for setting up Vite+ with an AI assistant', 'View the Enque orchestration model'],
  ['<span data-v-28334ed3>Copy Prompt</span>', '<span data-v-28334ed3>View Orchestration</span>'],

  ['>Getting started</span>', '>The agency problem</span>'],
  ['<h4>Install vp globally</h4>', '<h4>Digital marketing has grown. Digital employees have not.</h4>'],
  [' Install Vite+ once, open a new terminal session, then run <code>vp help</code>. ', ' Critical expertise stays in individuals while conversations, files, and tools fragment client context. '],
  [' For CI, use ', ' Enque turns repeatable agency processes into '],
  [' setup-vp ', ' governed execution '],
  ['macOS / Linux', 'Agency challenge'],
  ['curl -fsSL https://vite.plus | bash', 'expertise stays inside individuals'],
  ['Windows (PowerShell)', 'Enque response'],
  ['irm https://vite.plus/ps1 | iex', 'knowledge becomes reusable action'],

  ['Manages your runtime and package manager', 'Unifies agency work from demand to delivery'],
  ['Use</span> <code>node</code> automatically, with the right package manager selected for every project.', 'Connect prospects, proposals, projects, production, and optimization in one expandable work layer.'],
  ['Simplifies everyday development', 'Shares context across every module'],
  ['One configuration file and one consistent flow of commands across your whole stack.', 'Conversations, knowledge, histories, files, and insights remain available across the agency.'],
  ['Powering your favorite frameworks', 'Coordinates a reusable digital workforce'],
  ['Supports every framework built on Vite.', 'Skills, workflows, memory, routing, reasoning, and learning move work forward.'],
  ['+ 20 more', '+ expandable modules'],

  ['A trusted stack to standardize on', 'A reusable foundation to build every service on'],
  ['Vite+ is built on established open source industry standards, and maintained by the same experts behind these projects.', 'Enque builds specialized work modules on one shared foundation for agents, skills, workflows, memory, tools, security, and governance.'],
  ['147m+', '111'],
  ['Weekly npm downloads', 'Reusable skills'],
  ['81.8k', '47'],
  ['GitHub stars', 'Workflows'],
  ['67m+', '78'],
  ['16.8k', '51'],
  ['10m+', '4'],
  ['21.8k', '24/7'],

  ['Stay fast at scale', 'Agency expertise that compounds at scale'],
  ['With low-level components written in Rust, Vite+ delivers enterprise-scale performance: up to 40× faster builds than webpack, ~50× to ~100× faster linting than ESLint, and up to 30× faster formatting than Prettier.', 'Reusable skills, shared context, governed workflows, and continuous learning help every completed engagement improve the next one.'],
  ['Focus on shipping, not tooling', 'Focus on outcomes, not handoffs'],
  ['Supply chain security', 'Govern every action'],
  ['Vite+ development follows rigorous security practices, and we vet its dependencies across the unified toolchain.', 'Roles, permissions, isolation, approvals, and auditability apply across every module, agent, and action.'],

  ['Everything you need in one tool', 'Everything your agency needs in one connected workforce'],
  ['Vite+ unifies your entire web development workflow into a single, powerful command-line interface.', 'Enque connects work, context, intelligence, and control in one continuous orchestration loop.'],
  ['Vite+ dev &amp; build', 'Enque Work'],
  ['Blazingly fast builds', 'Demand to delivery in one connected queue'],
  ['Spin up dev servers and create production builds with extreme speed. Stay in the flow and keep CI fast.', 'Move opportunities through prospects, proposals, projects, specialist delivery, outcomes, and learning.'],
  ['Powered by', 'Core modules'],
  ['Vite+ check', 'Enque Context'],
  ['Format, lint, and type-check in one pass', 'Shared context across every module'],
  ['Keep every repo consistent with one command powered by <a', 'Keep conversations, knowledge, histories, files, and insights connected through <a'],
  ['Oxc / Oxlint', 'Communication Hub'],
  ['Oxc / Oxfmt', 'Second Brain'],
  ['Vite+ test', 'Enque Intelligence'],
  ['Testing made simple', 'Reusable intelligence made practical'],
  ['Feature rich test runner that automatically reuses the same resolve and transform config from your application.', 'Select skills, route agents and modules, execute workflows, preserve memory, and improve through evaluation.'],
  ['Vite+ run', 'Enque Control'],
  ['Vite Task for monorepos and scripts', 'Governance across every tier and action'],
  ['Run built-in commands and package.json scripts with automated caching and dependency-aware execution.', 'Apply roles, agency administration, integrations, security, isolation, approvals, and audit logs consistently.'],
  ['Vite+ pack', 'Enque Learning'],
  ['Library packaging with best practices baked in', 'Every outcome makes the next run better'],
  ['Package TS and JS libraries for npm or build standalone app binaries with a single <code>vp pack</code> command.', 'Record each run, measure its outcome, return decisions to context and memory, and improve future execution.'],

  ['Fullstack? No problem.', 'Expandable by design.'],
  ['Vite+ can be the foundation of any type of web apps - from SPAs to fullstack meta frameworks.', 'New agency services and work modules can be added without rebuilding the system underneath.'],
  ['Meta Frameworks', 'Expandable work modules'],
  ['You can use meta-frameworks that ship as Vite plugins with Vite+', 'Add production, marketplace, performance, content, media, web, RFP, audits, and more'],
  ['Platform Agnostic', 'External systems'],
  ['First-class support on Vercel, Netlify, Cloudflare &amp; more', 'Connect CRM, communications, storage, models, payments, and agency tools'],
  ['Deploy anywhere by pairing with Nitro', 'Connect anywhere through APIs &amp; Integrations'],

  ['Free &amp; open source', 'The shared foundation is built'],
  ['Vite+ is free and open source, made possible by a full-time team and passionate open-source contributors.', 'Enque has a working agent foundation, reusable intelligence, and delivered use cases. The next stage expands the complete digital workforce.'],
  ['>Contribute</a>', '>View the Roadmap</a>'],
  ['Take your team&#39;s productivity to the next level with Vite+', 'Your agency can keep moving, even when your team is not online'],
  ['>Get started</a>', '>Request a Demo</a>'],
  ['>Company</p>', '>Platform</p>'],
  ['>VoidZero</a>', '>enque.ai</a>'],
  ['>Vite</a>', '>Work</a>'],
  ['>Vitest</a>', '>Context</a>'],
  ['>Rolldown</a>', '>Intelligence</a>'],
  ['>Oxc</a>', '>Control</a>'],
  ['>Social</p>', '>Connect</p>'],
  ['> X.com</a>', '> Roadmap</a>'],
  ['> Discord</a>', '> Contact</a>'],
  ['> Bluesky</a>', '> About</a>'],
  ['© 2026 VoidZero Inc. and Vite+ contributors.', '© 2026 enque.ai. All rights reserved.'],

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

  ['"title":"Vite+"', '"title":"enque.ai"'],
  ['"titleTemplate":":title | The Unified Toolchain for the Web"', '"titleTemplate":":title | The Digital Workforce for Agency that Never Sleeps"'],
  ['"description":"The Unified Toolchain for the Web"', '"description":"The Digital Workforce for Agency that Never Sleeps"'],
]);

for (const [from, to] of replacements) {
  html = html.split(from).join(to);
}

html = html
  .replace(/With low-level components written in Rust, Vite\+ delivers enterprise-scale performance:[\s\S]*?Prettier\./g, 'Reusable skills, shared context, governed workflows, and continuous learning help every completed engagement improve the next one.')
  .replace(/Keep every repo consistent with one command powered by[\s\S]*?<\/p>/g, 'Give every module access to the same conversations, knowledge, histories, files, and insights. </p>')
  .replace(/Run built-in commands and[\s\S]*?dependency-aware execution\.\s*<\/p>/g, 'Apply roles, permissions, administration, integrations, security, and auditability across every tier. </p>')
  .replace(/Package TS and JS libraries for npm[\s\S]*?command\.\s*<\/p>/g, 'Record every run, measure its outcome, and return the learning to shared context and memory. </p>')
  .replace(/<li([^>]*)>\s*<code[^>]*>Prettier<\/code> compatible formatting\s*<\/li>/g, '<li$1> Communication and knowledge stay connected </li>')
  .replace(/<li([^>]*)>\s*750\+[\s\S]*?compatible rules\s*<\/li>/g, '<li$1> Client and project history stays available </li>')
  .replace(/<li([^>]*)>\s*Type-aware linting[\s\S]*?tsgo<\/code>\s*<\/li>/g, '<li$1> Files, data, search, and insights remain governed </li>')
  .replace(/<li([^>]*)>\s*<code[^>]*>vp check --fix<\/code>[\s\S]*?<\/li>/g, '<li$1> Every module reads and writes shared context </li>')
  .replace(/<li([^>]*)>\s*<code[^>]*>Jest<\/code> compatible API\s*<\/li>/g, '<li$1> Skills select reusable expertise </li>')
  .replace(/<li([^>]*)>\s*Familiar script execution via[\s\S]*?<\/li>/g, '<li$1> Every run stays traceable and reviewable </li>')
  .replace(/<li([^>]*)>\s*<code[^>]*>DTS<\/code> generation &amp; bundling\s*<\/li>/g, '<li$1> Capture decisions, files, and outcomes </li>')
  .replace(/>pnpm</g, '>Prospects<')
  .replace(/>npm</g, '>Proposals<')
  .replace(/>yarn</g, '>Projects<')
  .replace(/>bun</g, '>Production<')
  .replace(/>vp env</g, '>Knowledge<')
  .replace(/>vp install</g, '>Communication<')
  .replace(/>vp dev</g, '>Client History<')
  .replace(/>vp check</g, '>Project History<')
  .replace(/>vp build</g, '>Files &amp; Data<')
  .replace(/>vp run</g, '>Search &amp; Insights<')
  .replace(/>dev &amp; build</g, '>work<')
  .replace(/>check</g, '>context<')
  .replace(/>test</g, '>intelligence<')
  .replace(/>run</g, '>control<')
  .replace(/>pack</g, '>learning<')
  .replace(/>78<\/p><p class="leading-tight text-base">Reusable skills/g, '>78</p><p class="leading-tight text-base">Tools')
  .replace(/>51<\/p><p class="leading-tight text-base">Workflows/g, '>51</p><p class="leading-tight text-base">Use cases')
  .replace(/>4<\/p><p class="leading-tight text-base">Reusable skills/g, '>4</p><p class="leading-tight text-base">Platform tiers')
  .replace(/>24\/7<\/p><p class="leading-tight text-base">Workflows/g, '>24/7</p><p class="leading-tight text-base">Always moving')
  .replace(/>Vite</g, '>Prospects<')
  .replace(/>Rolldown</g, '>Projects<')
  .replace(/>Vitest</g, '>Evaluation &amp; Learning<')
  .replace(/alt="Brought to you by VoidZero"/g, 'alt="Built by enque.ai"')
  .replace(/alt="Deploy anywhere with Nitro"/g, 'alt="Connect through Enque integrations"');

const linkReplacements = [
  [/href="\/guide\/?[^"]*"/g, 'href="#platform"'],
  [/href="\/config\/?[^"]*"/g, 'href="#modules"'],
  [/href="\/team"/g, 'href="#about"'],
  [/href="https:\/\/github\.com\/voidzero-dev\/vite-plus(?:\/releases|\/blob\/main\/CONTRIBUTING\.md)?"/g, 'href="https://github.com/kamalkavin-tech/Enque-digimaxx"'],
  [/href="https:\/\/github\.com\/voidzero-dev\/setup-vp"/g, 'href="#intelligence"'],
  [/href="https:\/\/voidzero\.dev\/posts\/announcing-vite-plus-beta"/g, 'href="#platform"'],
  [/href="https:\/\/voidzero\.dev"/g, 'href="#about"'],
  [/href="https:\/\/vite\.dev"/g, 'href="#work"'],
  [/href="https:\/\/vitest\.dev"/g, 'href="#context"'],
  [/href="https:\/\/rolldown\.rs"/g, 'href="#intelligence"'],
  [/href="https:\/\/oxc\.rs"/g, 'href="#control"'],
  [/href="https:\/\/tsdown\.dev\/?"/g, 'href="#intelligence"'],
  [/href="https:\/\/x\.com\/voidzerodev"/g, 'href="#roadmap"'],
  [/href="https:\/\/discord\.gg\/cC6TEVFKSx"/g, 'href="mailto:hello@enque.ai"'],
  [/href="https:\/\/bsky\.app\/profile\/voidzero\.dev"/g, 'href="#about"'],
];
for (const [pattern, replacement] of linkReplacements) {
  html = html.replace(pattern, replacement);
}

html = html
  .replace(/\s*<meta name="generator"[^>]*>/g, '')
  .replaceAll('Vite+', 'enque.ai')
  .replaceAll('The Unified Toolchain for the Web', 'The Digital Workforce for Agency that Never Sleeps')
  .replaceAll('https://github.com/voidzero-dev/vite-plus', 'https://github.com/kamalkavin-tech/Enque-digimaxx')
  .replaceAll('https://voidzero.dev/posts/announcing-vite-plus-beta', '#platform')
  .replaceAll('https://voidzero.dev', '#about')
  .replaceAll('https://vite.dev', '#work')
  .replaceAll('https://vitest.dev', '#context')
  .replaceAll('https://rolldown.rs', '#intelligence')
  .replaceAll('https://oxc.rs', '#control')
  .replaceAll('https://x.com/voidzerodev', '#roadmap')
  .replaceAll('https://discord.gg/cC6TEVFKSx', 'mailto:hello@enque.ai')
  .replaceAll('https://bsky.app/profile/voidzero.dev', '#about')
  .replace(/\\"text\\":\\"Guide\\"/g, '\\"text\\":\\"Platform\\"')
  .replace(/\\"text\\":\\"Config\\"/g, '\\"text\\":\\"Modules\\"')
  .replace(/\\"text\\":\\"Resources\\"/g, '\\"text\\":\\"Company\\"')
  .replace(/\\"text\\":\\"Team\\"/g, '\\"text\\":\\"About\\"')
  .replace(/\\"text\\":\\"Releases\\"/g, '\\"text\\":\\"Roadmap\\"')
  .replace(/\\"text\\":\\"Announcement\\"/g, '\\"text\\":\\"Vision\\"')
  .replace(/\\"text\\":\\"Contributing\\"/g, '\\"text\\":\\"Contact\\"')
  .replace(/\\"text\\":\\"VoidZero\\"/g, '\\"text\\":\\"enque.ai\\"')
  .replace(/\\"text\\":\\"Vite\\"/g, '\\"text\\":\\"Work\\"')
  .replace(/\\"text\\":\\"Vitest\\"/g, '\\"text\\":\\"Context\\"')
  .replace(/\\"text\\":\\"Rolldown\\"/g, '\\"text\\":\\"Intelligence\\"')
  .replace(/\\"text\\":\\"Oxc\\"/g, '\\"text\\":\\"Control\\"');

html = html.replace('</head>', '    <link rel="stylesheet" href="/bluecolorsite/assets/enque-experience.css">\n    <script src="/bluecolorsite/assets/enque-template-content.js" defer></script>\n  </head>');
writeFileSync(resolve(root, 'site/index.html'), html, 'utf8');

const clientText = new Map([
  ['The Unified', 'The Digital Workforce'],
  ['Toolchain for the Web', 'for Agency that Never Sleeps'],
  ['Get started', 'Request a Demo'],
  ['Read the Beta Announcement', 'Explore the Platform'],
  ['Copy Prompt', 'View Orchestration'],
  ['Getting started', 'The agency problem'],
  ['Install vp globally', 'Digital marketing has grown. Digital employees have not.'],
  ['vp env', 'Knowledge'],
  ['vp install', 'Communication'],
  ['vp dev', 'Client History'],
  ['vp check', 'Project History'],
  ['vp build', 'Files & Data'],
  ['vp run', 'Search & Insights'],
]);

const remainingContent = new Map([
  ['VITE+', 'ENQUE'],
  ['are correctly formatted', 'are connected to shared context'],
  ['Found no warnings, lint errors, or type errors in', 'Verified permissions, approvals, and auditability across'],
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
  [' automatically, with the right package manager selected for every project. ', ' across prospects, proposals, projects, and delivery on one shared work layer. '],
  ['Keep every repo consistent with one command powered by Oxlint, Oxfmt, and', 'Give every module access to the same conversations, knowledge, histories, files, and insights through'],
  ['Prettier', 'Approvals'],
  ['ESLint', 'Governance'],
  ['tsgo', 'Shared Memory'],
  ['Vite Task cache examples', 'Workflow execution examples'],
  ['compatible formatting', 'and delivery standards'],
  ['compatible rules', 'policies applied'],
  ['Type-aware linting and fast type contexts with', 'Client and project context retained in'],
  ['Project History --fix', 'Search & Insights'],
  ['auto-fixes where possible', 'turns shared knowledge into action'],
  ['Always instant Hot Module Replacement (HMR)', 'Prospects, proposals, and projects stay connected'],
  ['VITE+ building for production', 'ENQUE orchestrating agency work'],
  ['VITE+ delivering for production', 'ENQUE orchestrating agency work'],
  ['enque.ai building for production', 'ENQUE orchestrating agency work'],
  ['✓ Transformed 128 modules', '✓ Shared context connected'],
  ['✓ 128 modules transformed', '✓ Shared context connected'],
  ['dist/index.html 0.42 kB', 'context/client-history ready'],
  ['dist/index.html', 'context/client-history'],
  ['dist/assets/index.css 5.1 kB', 'context/project-history ready'],
  ['dist/assets/index.css', 'context/project-history'],
  ['dist/assets/index.js 46.2 kB', 'intelligence/workflow ready'],
  ['dist/assets/index.js', 'intelligence/workflow'],
  ['✓ Built in 421ms', '✓ Outcome recorded and measured'],
  ['$ vp build', '$ enque execute'],
  ['$ vp check', '$ enque context'],
  ['$ vp pack', '$ enque learn'],
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
  ['CLI tsdown 0.14.1 powered by Projects', 'RUN Returning approved knowledge to memory'],
  ['tsdown 0.14.1 powered by Rolldown', 'Returning approved knowledge to memory'],
  ['tsdown 0.14.1 powered by Projects', 'Returning approved knowledge to memory'],
  ['ESM dist/index.js 4.8 kB', 'MEMORY client and project history updated'],
  ['dist/index.js', 'memory/client-project-history'],
  ['DTS dist/index.d.ts 1.2 kB', 'EVALUATION outcome scored and reviewed'],
  ['dist/index.d.ts', 'evaluation/outcome-score'],
  ['✓ Pack completed in 128ms', '✓ The next execution is now better'],
  ['Scaffold a project', 'Start an agency workflow'],
  ['Select a template', 'Select a service line'],
  ['vite:application', 'proposal:qualification'],
  ['Project directory', 'Client workspace'],
  ['vite-app', 'acme-growth'],
  ['Dependencies installed', 'Skills and context connected'],
  ['Next:', 'Next action:'],
  ['cd vite-app && Client History', 'assign workflow and request approval'],
  ['Start local development', 'Execute governed work'],
  ['VITE+ ready in', 'ENQUE ready in'],
  ['enque.ai ready in', 'ENQUE ready in'],
  ['http://localhost:5173/', 'Agent + human reviewer'],
  ['--host', 'role-based access'],
  ['to expose', 'applied'],
  ['[hmr]', '[context]'],
  ['src/App.tsx', 'client/acme/project/launch'],
  ['Check the whole project', 'Verify context and governance'],
  ['Run tests with fast feedback', 'Evaluate the completed outcome'],
  ['test/button.spec.ts', 'project/outcome'],
  ['(3 tests)', '(3 measures)'],
  ['button renders loading state', 'deliverable meets client directive'],
  ['12 tests passed', '12 quality checks passed'],
  ['across 4 files', 'across work and context'],
  ['Duration', 'Evaluation'],
  ['(transform 22ms, tests 31ms)', '(quality, impact, and learning)'],
  ['Ship a production build', 'Deliver and learn'],
  ['Projects building for production', 'Projects moving to client delivery'],
  ['128 modules transformed', 'Shared context and outputs connected'],
  ['dist/assets/index-B6h2Q8.js', 'output/client-deliverable'],
  ['dist/assets/index-H3a8K2.css', 'memory/approved-learning'],
  ['Built in', 'Outcome completed in'],
]);

const finalContent = new Map([
  ['context/client-history', 'PROSPECT qualified'],
  ['context/project-history', 'PROJECT workflow active'],
  ['intelligence/workflow', 'OUTCOME recorded'],
  ['Outcome completed in', 'Outcome recorded in shared memory'],
  ['memory/client-project-history', 'Updated with outcome'],
  ['evaluation/outcome-score', 'Outcome scored and reviewed'],
  ['pass:', 'verified:'],
]);

const transformClientAsset = (source) => {
  let output = source;
  for (const [from, to] of replacements) output = output.split(from).join(to);
  for (const [from, to] of clientText) output = output.split(from).join(to);
  output = output
    .replaceAll('Vite+', 'enque.ai')
    .replaceAll('Vitest', 'Evaluation & Learning')
    .replaceAll('Rolldown', 'Projects')
    .replaceAll('VoidZero', 'enque.ai')
    .replaceAll('Nitro', 'APIs & Integrations')
    .replace(/https:\/\/github\.com\/voidzero-dev\/vite-plus(?:\/releases|\/blob\/main\/CONTRIBUTING\.md)?/g, 'https://github.com/kamalkavin-tech/Enque-digimaxx')
    .replace(/https:\/\/github\.com\/voidzero-dev\/setup-vp/g, '#intelligence')
    .replace(/https:\/\/github\.com\/voidzero-plan\/setup-vp/g, '#intelligence')
    .replace(/https:\/\/voidzero\.dev\/posts\/announcing-vite-plus-beta/g, '#platform')
    .replace(/https:\/\/voidzero\.dev/g, '#about')
    .replace(/https:\/\/x\.com\/voidzerodev/g, '#roadmap')
    .replace(/https:\/\/discord\.gg\/cC6TEVFKSx/g, 'mailto:hello@enque.ai')
    .replace(/https:\/\/bsky\.app\/profile\/voidzero\.dev/g, '#about');
  output = output
    .replace(/https:\/\/vite\.dev/g, '#work')
    .replace(/https:\/\/vitest\.dev/g, '#context')
    .replace(/https:\/\/rolldown\.rs/g, '#intelligence')
    .replace(/https:\/\/oxc\.rs/g, '#control');
  output = output.replace(/https:\/\/tsdown\.dev\/?/g, '#intelligence');
  for (const [from, to] of remainingContent) output = output.split(from).join(to);
  for (const [from, to] of finalContent) output = output.split(from).join(to);
  output = output.replace(/<a\b([^>]*)href="(?:https:\/\/github\.com\/kamalkavin-tech\/Enque-digimaxx|mailto:hello@enque\.ai)"([^>]*)>((?:(?!<\/a>)[\s\S])*?Contact(?:(?!<\/a>)[\s\S])*?)<\/a>/g, '<a$1href="contact/"$2>$3</a>');
  output = output.replace(/(<a\b[^>]*href="\/bluecolorsite\/contact\/"[^>]*)\s+target="_blank"/g, '$1').replace(/(<a\b[^>]*href="\/bluecolorsite\/contact\/"[^>]*)\s+rel="[^"]*"/g, '$1');
  return output
    .replace(/With low-level components written in Rust, enque\.ai delivers enterprise-scale performance:[\s\S]*?Prettier\./g, 'Reusable skills, shared context, governed workflows, and continuous learning help every completed engagement improve the next one.')
    .replace(/I want to use enque\.ai in my project\.[\s\S]*?Help me get set up and explain anything I should know\./g, 'Help me map an agency workflow in enque.ai. Start with the desired outcome, identify the client and project context, select reusable skills and a governed workflow, assign agents and human approvals, then define how results should be evaluated and returned to shared memory.')
    .replace(/Hot Module Replacement(?: \(HMR\))?/g, 'Shared Context Synchronization')
    .replace(/>\s*tsdown\s*</g, '> Learning <')
    .replace(/h\("code",null,"node"\)/g, 'h("code",null,"Work")')
    .replace(/alt:"node",href:"https:\/\/nodejs\.org"/g, 'alt:"Enque Work",href:"#work"')
    .replace(/h\("p",\{class:"max-w-\[26rem\] text-pretty"\},\[et\(" With low-level components written in Rust,[\s\S]*?et\(" than Approvals\. "\)\],-1\)/g, 'h("p",{class:"max-w-[26rem] text-pretty"},"Reusable skills, shared context, governed workflows, and continuous learning help every completed engagement improve the next one.",-1)');
};

const clientAssets = [
  'site/assets/chunks/theme.DUdUjBn9.js',
  'site/assets/index.md.B2HYu66S.js',
  'site/assets/index.md.B2HYu66S.lean.js',
];
for (const relativePath of clientAssets) {
  const original = execFileSync('git', ['show', `HEAD:${relativePath}`], {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 8 * 1024 * 1024,
  });
  writeFileSync(resolve(root, relativePath), transformClientAsset(original), 'utf8');
}
for (const [from, to] of remainingContent) html = html.split(from).join(to);
for (const [from, to] of finalContent) html = html.split(from).join(to);
html = html.replace(/>\s*tsdown\s*</g, '> Learning <');
html = html
  .replace(/href="https:\/\/github\.com\/voidzero-plan\/setup-vp"/g, 'href="#intelligence"')
  .replace(/href="https:\/\/nodejs\.org"/g, 'href="#work"')
  .replace(/src="data:image\/png;base64,[^"]+" alt="node"/g, 'src="/bluecolorsite/icon.svg" alt="Enque Work"')
  .replace(/src="\/bluecolorsite\/assets\/vite-by-voidzero\.[^"]+\.png"/g, 'src="/bluecolorsite/icon.svg"')
  .replace(/(<a\b[^>]*href="#[^"]+"[^>]*)\s+target="_blank"([^>]*>)/g, '$1$2')
  .replace(/href="#platform"([^>]*)>(\s*)Request a Demo(\s*)<\/a>/g, 'href="contact/"$1>$2Request a Demo$3</a>')
  .replace(/\\"text\\":\\"Contact\\",\\"link\\":\\"https:\/\/github\.com\/kamalkavin-tech\/Enque-digimaxx\\"/g, '\\"text\\":\\"Contact\\",\\"link\\":\\"contact/\\"')
  .replace('>111</p><p class="leading-tight text-base">Reusable skills', '>2</p><p class="leading-tight text-base">Built work modules')
  .replace('>47</p><p class="leading-tight text-base">Workflows', '>3</p><p class="leading-tight text-base">Built intelligence modules')
  .replace('>78</p><p class="leading-tight text-base">Tools', '>3</p><p class="leading-tight text-base">Built control modules')
  .replace('>51</p><p class="leading-tight text-base">Use cases', '>6</p><p class="leading-tight text-base">Context modules in development')
  .replace('>4</p><p class="leading-tight text-base">Platform tiers', '>1</p><p class="leading-tight text-base">Routing module in development')
  .replace('>24/7</p><p class="leading-tight text-base">Always moving', '>24/7</p><p class="leading-tight text-base">Digital workforce')
  .replace(/window\.__VP_HASH_MAP__=JSON\.parse\("[\s\S]*?"\);window\.__VP_SITE_DATA__/g, 'window.__VP_HASH_MAP__={};window.__VP_SITE_DATA__');
html = html.replace(/<a\b([^>]*)href="(?:https:\/\/github\.com\/kamalkavin-tech\/Enque-digimaxx|mailto:hello@enque\.ai)"([^>]*)>((?:(?!<\/a>)[\s\S])*?Contact(?:(?!<\/a>)[\s\S])*?)<\/a>/g, '<a$1href="contact/"$2>$3</a>');
html = html.replace(/(<a\b[^>]*href="contact\/"[^>]*)\s+target="_blank"/g, '$1').replace(/(<a\b[^>]*href="contact\/"[^>]*)\s+rel="[^"]*"/g, '$1');

// This page is intentionally delivered as fully-rendered static HTML and is
// enhanced by enque-template-content.js. Loading the original VitePress app
// would hydrate against rebranded markup, producing mismatches and stale URL
// handling from the old site.
html = html
  .replace(/\s*<script type="module" src="\/bluecolorsite\/assets\/app\.[^"]+\.js"><\/script>/, '')
  .replace(/\s*<link rel="modulepreload" href="\/bluecolorsite\/assets\/(?:chunks\/)?[^"]+">/g, '');

const homeContactMarkup = `<section id="contact" class="wrapper enque-home-contact">
  <div class="enque-home-contact__copy">
    <span class="enque-visual-kicker">START THE QUEUE</span>
    <h2>Where should your digital workforce start?</h2>
    <p>Show us the agency workflow that slows down, loses context, or depends on one person. We will map the work, context, intelligence, and controls needed to keep it moving.</p>
    <div class="enque-home-contact__tags"><span>Prospects</span><span>Proposals</span><span>Projects</span><span>Knowledge</span><span>Operations</span></div>
    <a class="button button--primary" href="contact/">Request a Demo</a>
  </div>
  <div class="enque-home-contact__panel">
    <span class="enque-visual-kicker">THE FIRST GOVERNED QUEUE</span>
    <h3>Turn one repeated agency process into a workforce that keeps learning.</h3>
    <ol>
      <li><b>01</b><span><strong>Discover</strong> the bottleneck and desired outcome.</span></li>
      <li><b>02</b><span><strong>Connect</strong> conversations, files, histories, and systems.</span></li>
      <li><b>03</b><span><strong>Execute</strong> with skills, workflows, agents, and approvals.</span></li>
      <li><b>04</b><span><strong>Improve</strong> through evaluation, memory, and learning.</span></li>
    </ol>
    <a href="mailto:hello@enque.ai">hello@enque.ai &rarr;</a>
  </div>
</section>`;

html = html.replace(
  /<div class="wrapper md:border-none mt-10 md:mt-0"><div class="touch-none select-none"><canvas width="1280" height="580" class="w-full"><\/canvas><\/div><\/div>/,
  homeContactMarkup,
);
writeFileSync(resolve(root, 'site/index.html'), html, 'utf8');
console.log('Restored the original template and applied Enque content.');
