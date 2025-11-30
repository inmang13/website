# Design Guidelines: Professional Water Resource Engineer Portfolio

## Design Approach
**System Selected:** Hybrid approach combining Apple HIG minimalism with Material Design's structural clarity, optimized for professional credibility and technical expertise presentation.

## Typography System

**Font Families:**
- Primary: Inter (headings and UI elements)
- Secondary: System fonts for body text (SF Pro/Segoe UI fallback)

**Hierarchy:**
- Hero name: text-5xl md:text-7xl, font-bold, tracking-tight
- Section headings: text-3xl md:text-4xl, font-semibold
- Subsection titles: text-xl md:text-2xl, font-medium
- Body text: text-base md:text-lg, font-normal, leading-relaxed
- Captions/metadata: text-sm, opacity-70

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 md:py-32
- Container max-width: max-w-6xl mx-auto px-6
- Component spacing: space-y-12 or gap-8
- Card padding: p-6 md:p-8

**Grid Structure:**
- Projects: grid-cols-1 md:grid-cols-2 gap-8
- Services/Expertise: grid-cols-1 md:grid-cols-3 gap-6
- Single column for About and Contact sections (max-w-3xl)

## Page Structure

### 1. Hero Section (80vh minimum)
- Full-width dark gradient background
- Large hero image: Professional headshot or water infrastructure project (bridge over water, dam, watershed aerial view)
- Centered content: Name, title "Water Resource Engineer", 2-3 line value proposition
- Single CTA button with backdrop-blur-md background
- Subtle scroll indicator at bottom

### 2. About Section
- Single column, max-w-3xl centered
- Professional biography (3-4 paragraphs)
- Key credentials/certifications in clean list format
- Years of experience highlight

### 3. Expertise/Services Section
- 3-column grid on desktop
- 6-8 service cards with icons (Heroicons)
- Each card: Icon, title, 2-3 line description
- Examples: Hydraulic Modeling, Stormwater Management, Watershed Analysis, Flood Risk Assessment, Water Quality Analysis, Sustainable Design

### 4. Featured Projects Section
- 2-column grid on desktop
- 4-6 project cards with images
- Each card: Project image, title, client/location, brief description (2-3 lines), key outcomes
- Images: Infrastructure photos, site plans, technical diagrams
- Hover state: subtle scale and shadow increase

### 5. Technical Skills Section (Optional but Recommended)
- Single row or 2-column layout
- Software proficiencies: HEC-RAS, SWMM, AutoCAD Civil 3D, ArcGIS
- Methodologies and standards
- Clean badge/pill style presentation

### 6. Contact Section
- Centered single column
- Professional email, LinkedIn, optional phone
- Simple contact form: Name, Email, Message fields
- Location/office information if applicable
- Footer with copyright and social links

## Component Specifications

**Cards:**
- Background: slightly lighter than page background (bg-gray-800 vs bg-gray-900)
- Border: 1px subtle border (border-gray-700)
- Rounded corners: rounded-lg
- Padding: p-6 md:p-8
- Hover: transform scale-[1.02] transition-transform

**Buttons:**
- Primary CTA: px-8 py-3, rounded-full, font-semibold
- With backdrop-blur-md when on images
- Clear hover state with scale/shadow

**Navigation:**
- Fixed header with blur background (backdrop-blur-lg)
- Smooth scroll links to sections
- Mobile: hamburger menu

## Images

**Required Images:**
1. **Hero Image:** Professional headshot or iconic water infrastructure project (bridge, dam, water treatment facility) - full-width, high-quality
2. **Project Images (4-6):** Site photos, infrastructure, technical work examples - landscape orientation, 16:9 ratio preferred
3. **Optional:** Icon set from Heroicons for services/expertise

**Image Treatment:**
- Subtle overlay (opacity-20 to opacity-40) on hero for text contrast
- Project images: slight grayscale filter with color on hover
- Maintain aspect ratios, use object-cover for consistency

## Visual Hierarchy Principles

1. **Contrast:** Dark background (bg-gray-900/950) with bright white/off-white text for primary content
2. **Density:** Generous whitespace between sections, tight within components
3. **Focus:** Each section has clear visual anchor (heading + supporting content)
4. **Professional tone:** Clean lines, no playful animations, subtle micro-interactions only

## Responsive Behavior

- Mobile: Single column, larger touch targets (min 44px)
- Tablet: Maintain 2-column grids where possible
- Desktop: Full multi-column layouts, optimal reading widths
- Hero scales proportionally across breakpoints