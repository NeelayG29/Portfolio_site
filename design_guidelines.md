# DevOps/SRE Portfolio Design Guidelines

## Design Approach

**Reference-Based Approach** drawing inspiration from developer-focused platforms (Linear, GitHub, Vercel) combined with monitoring dashboard aesthetics (Datadog, Grafana) to reflect the candidate's DevOps/SRE expertise. The design should feel technical yet polished, emphasizing metrics, achievements, and systematic organization.

## Core Design Principles

1. **Technical Credibility**: Visual language that resonates with engineering teams and technical recruiters
2. **Metrics-First**: Highlight quantifiable achievements (99.9995% uptime, 40% MTTR reduction, 60% faster delivery)
3. **Systematic Organization**: Clear information hierarchy mimicking well-organized infrastructure documentation
4. **Professional Polish**: Modern, clean design that stands out in competitive tech hiring

## Typography System

**Primary Font**: Inter (Google Fonts) - excellent readability, technical feel
**Monospace Font**: JetBrains Mono (Google Fonts) - for technical elements, metrics, code references

**Type Scale**:
- Hero Heading: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- Section Headings: text-3xl md:text-4xl, font-bold
- Subsection Headings: text-2xl md:text-3xl, font-semibold
- Job Titles/Roles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Metrics/Stats: text-2xl md:text-3xl, font-mono, font-bold
- Technical Labels: text-sm md:text-base, font-mono
- Metadata (dates, locations): text-sm, font-medium, opacity-75

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6, p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Card spacing: space-y-8, gap-6
- Element margins: mb-4, mb-8, mb-12

**Container Strategy**:
- Maximum width: max-w-6xl mx-auto
- Section padding: px-6 md:px-8
- Content width for readability: max-w-4xl for text-heavy sections

**Grid System**:
- Skills section: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Certifications: grid-cols-1 md:grid-cols-2
- Work experience: Single column with timeline visual
- Technical stats: grid-cols-2 md:grid-cols-4 for metric highlights

## Hero Section

**Structure**: Full-viewport hero (min-h-screen) with strong technical imagery
- Background: Abstract visualization of infrastructure/monitoring dashboards, network topology, or cloud architecture
- Include semi-transparent overlay for text readability
- Profile image: Professional headshot (optional, top-right or integrated)

**Content Layout**:
- Name: Hero heading size, bold
- Professional title: "DevOps Engineer | SRE Platform Specialist"
- Summary: 2-3 line elevator pitch highlighting 3+ years experience, 500K+ DAU systems, 99.9995% uptime
- Contact bar: Horizontal layout with GitHub, LinkedIn, Email, Location using Heroicons
- CTA buttons: "View Experience" (scroll anchor), "Download Resume" (PDF) - buttons with blurred backgrounds

**Hero Metrics Bar** (below intro):
Grid of 4 key metrics in monospace font:
- "99.9995% Uptime"
- "500K+ Daily Active Users"
- "40% MTTR Reduction"
- "3+ Years Experience"

## Navigation

**Fixed Header**:
- Logo/Name on left
- Navigation links: Experience | Skills | Education | Certifications
- Download Resume button on right
- Smooth scroll behavior to sections
- Backdrop blur when scrolling

## Work Experience Section

**Timeline Layout**:
- Left-aligned vertical timeline with visual connector
- Each role as a card component with subtle border
- Company logo placeholder (circular, 48px)
- Role title, company name, duration, location
- Achievement bullets with metric highlights in monospace font
- Icon indicators for key technologies used

**Card Structure per Role**:
- Header: Company + Role + Duration
- Technology tags: Small pills/badges for AWS, Kubernetes, Terraform, etc.
- Achievement list: Bullet points with emphasized metrics
- Use icons from Heroicons for achievement categories (performance, cost, security, automation)

## Technical Skills Section

**Organization**: Categorized skill cards
Categories: Cloud Platforms | DevOps & IaC | Monitoring & Observability | CI/CD | Security | Programming & Scripting | Databases

**Skill Display**:
- Technology badges in grid layout
- Each badge: Icon (Heroicons) + Technology name
- Subtle hover effect (lift/glow)
- Primary skills larger/more prominent
- Group by category with category header

## Certifications Section

**Layout**: 2-column grid on desktop, stack on mobile
**Certification Cards**:
- Certification badge/logo placeholder (128px)
- Certification name: text-xl, font-semibold
- Issuing organization
- Date earned
- Credential ID (if applicable)
- "Verify" link with external icon

## Education Section

**Layout**: Timeline similar to experience or stacked cards
**Per Degree**:
- Degree title and field
- University name with location
- Duration and GPA (prominent, monospace)
- Relevant coursework in expandable section or tags
- University logo placeholder (optional)

## Additional Sections

**Projects/Highlights** (if space allows):
- Grid of 2-3 notable achievements
- Each with icon, metric, and brief description
- Links to GitHub repositories (if applicable)

**Contact/Footer**:
- Repeat contact links (GitHub, LinkedIn, Email)
- "Open to opportunities" status indicator
- Location with timezone
- Copyright notice
- Back to top button

## Component Library

**Buttons**:
- Primary: Large, bold, with icon
- Secondary: Outlined variant
- Icon buttons: For external links, downloads
- All with smooth transitions

**Cards**:
- Experience cards: Border with subtle shadow, rounded corners
- Skill badges: Compact, pill-shaped with icons
- Certification cards: Elevated with stronger shadow
- All with consistent padding (p-6 or p-8)

**Icons**: Heroicons throughout
- Navigation: menu, close, chevrons
- Contact: envelope, link, location
- Achievements: check, arrow-up, shield, code
- Skills: cloud, server, chart, code
- External links: arrow-top-right-on-square

**Timeline Elements**:
- Vertical line connector (border-l-2)
- Circular nodes at each position
- Connecting to experience cards

## Images

**Hero Background**: 
Large, high-quality abstract image representing DevOps/cloud infrastructure. Suggested themes:
- Network topology visualization
- Cloud infrastructure diagram (abstract)
- Monitoring dashboard with graphs/metrics (blurred/abstracted)
- Server room or data center (modern aesthetic)
- Code editor with infrastructure-as-code (Terraform/YAML)

Image should be full-width, 100vh, with gradient overlay for text legibility. Position: center, cover sizing.

**Optional Secondary Images**:
- Office/workspace photo in About section (if added)
- Technology stack visual representation

## Responsive Behavior

**Breakpoints**:
- Mobile: Stack all grids, full-width cards, larger touch targets
- Tablet (md): 2-column grids, side-by-side content
- Desktop (lg): Full multi-column layouts, maximum information density

**Mobile Optimizations**:
- Hamburger menu for navigation
- Stacked timeline instead of side-by-side
- Reduced font sizes for headings
- Priority content first

## Interaction Patterns

**Scroll Behavior**:
- Smooth scroll to sections on navigation click
- Fade-in animations on scroll (subtle, performance-conscious)
- Sticky header with backdrop blur

**Micro-interactions**:
- Skill badge hover: subtle scale/glow
- Card hover: slight elevation increase
- Button hover states: built-in component states
- Timeline node pulse/highlight on scroll

## Accessibility

- Semantic HTML5 structure
- ARIA labels for navigation and interactive elements
- Focus indicators on all interactive elements
- Sufficient contrast ratios throughout
- Alt text for all images
- Keyboard navigation support

This design creates a polished, professional portfolio that effectively showcases DevOps/SRE expertise while maintaining technical credibility and visual appeal for both technical recruiters and engineering managers.