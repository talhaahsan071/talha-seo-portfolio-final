import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  MapPin, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  Calendar,
  AlertCircle,
  HelpCircle,
  Clock,
  Layers,
  Sparkle
} from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function ServiceDetailPage() {
  const { id } = useParams();

  const serviceData = {
    'ecommerce-seo': {
      title: 'E-Commerce & Online Store SEO',
      subtitle: 'Engineered for Shopify, WooCommerce, and Custom Storefronts',
      badge: 'REVENUE & CONVERSIONS',
      icon: ShoppingCart,
      tagline: 'Stop burning cash on meta ads. Turn search visibility into steady, automated product sales on Google.',
      problemTitle: 'Why Most E-Commerce Stores Fail on Google',
      problemDescription: 'Many store owners believe adding products and generic descriptions will bring traffic. In reality, Google ignores unorganized stores with flat collections, thin content, and duplicated filter URLs. As ad costs rise on Facebook and Instagram, your profit margins disappear unless you build high-intent organic search channels.',
      deliverables: [
        {
          title: 'Collection Silo & Hierarchy Architecture',
          description: 'Restructure your product categories so Google understands exactly which collection solves which buyer query, concentrating page authority where it converts.'
        },
        {
          title: 'High-Intent Buyer Keyword Mapping',
          description: 'Target commercial intent queries (e.g., "buy wireless lavalier mic lahore") rather than broad keywords that bring curiosity clicks but zero sales.'
        },
        {
          title: 'Faceted Navigation & Duplicate Index Control',
          description: 'Prevent color, size, and sort URL parameters from eating crawl budget and diluting ranking signals with clean canonical tags and robots rules.'
        },
        {
          title: 'Rich Product & Review Schema (JSON-LD)',
          description: 'Implement structured data that displays gold review stars, stock availability, and prices directly in Google search snippets, increasing click-through rates by up to 35%.'
        },
        {
          title: 'Product-Led Informational Funnels',
          description: 'Write buying guides and product comparison blogs that answer pre-purchase questions and channel contextual authority straight into priority collection pages.'
        },
        {
          title: 'Speed & Mobile Checkout Optimization',
          description: 'Streamline catalog asset loading and eliminate render-blocking code to achieve fast load times on 4G mobile devices.'
        }
      ],
      roadmap: [
        { stage: 'Month 1', name: 'Catalog Audit & Technical Cleanup', detail: 'Deep crawl of all product URLs, fixing 404s, indexation parameters, and restructuring collection silos.' },
        { stage: 'Month 2', name: 'Commercial Keyword Injection & On-Page', detail: 'Optimizing titles, meta tags, and collection descriptions with verified high-intent buyer queries.' },
        { stage: 'Month 3', name: 'Topical Authority & Content Hubs', detail: 'Publishing problem-solving buying guides and linking them directly into priority product categories.' },
        { stage: 'Ongoing', name: 'GSC Tracking & Revenue Scaling', detail: 'Monitoring keyword position velocity, optimizing click-through rates, and building relevant backlinks.' }
      ],
      caseStudyLink: '/case-studies/hope-enterprises',
      caseStudyText: 'Hope Enterprises: 10,700 Clicks (+280% Surge) in 6 Months',
      faqs: [
        { q: 'How long does it take for an e-commerce store to rank?', a: 'Typically, noticeable ranking movements and impression surges begin in 60 to 90 days. Large collection gains and revenue scale take 4 to 6 months of steady optimization.' },
        { q: 'Do you work on Shopify and WooCommerce?', a: 'Yes. I specialize in Shopify Liquid architectures, WooCommerce on WordPress, and modern headless Next.js e-commerce platforms.' },
        { q: 'Will SEO replace my paid ads?', a: 'SEO complements paid ads by lowering your overall customer acquisition cost (blended CAC), giving you profitable sales even when ad spend is turned off.' }
      ]
    },

    'local-seo': {
      title: 'Google Maps & Local 3-Pack Optimization',
      subtitle: 'Dominate Local Search & Win Customers in Your City',
      badge: 'PHONE CALLS & STORE VISITS',
      icon: MapPin,
      tagline: 'Rank in the Top 3 on Google Maps when local customers search for your service or store nearby.',
      problemTitle: 'Why Competitors Steal Your Nearby Customers',
      problemDescription: 'Over 78% of local mobile searches result in an offline purchase or immediate phone call. If your business is hidden below the Top 3 Map Pack or has inconsistent business details, local customers will simply call your competitor instead.',
      deliverables: [
        {
          title: 'Google Business Profile (GBP) Primary & Secondary Category Alignment',
          description: 'Align your business profile with verified Google categories that match high-volume local customer searches.'
        },
        {
          title: 'NAP (Name, Address, Phone) Consistency Across Directories',
          description: 'Audit and unify your contact information across Pakistan, UAE, and international web directories to build algorithmic trust.'
        },
        {
          title: 'Geo-Targeted Landing Pages with Embedded Schema',
          description: 'Build city and area-specific landing pages with LocalBusiness structured data and Google Maps embeds.'
        },
        {
          title: 'Automated 5-Star Review Funnel System',
          description: 'Set up a customer review workflow that encourages satisfied clients to leave authentic keyword-rich reviews.'
        },
        {
          title: 'Local Citation & Backlink Authority',
          description: 'Secure citations in relevant local business directories and regional publications to solidify geographical authority.'
        },
        {
          title: 'Google Business Profile Posts & Product Catalogs',
          description: 'Regularly publish weekly updates, offers, and showcase featured products directly inside Google Maps results.'
        }
      ],
      roadmap: [
        { stage: 'Month 1', name: 'Profile Optimization & Category Fix', detail: 'Auditing existing GBP, selecting high-intent categories, correcting NAP, and setting up tracking.' },
        { stage: 'Month 2', name: 'Local Landing Pages & Schema Setup', detail: 'Developing localized service pages on your website and embedding local schema and maps.' },
        { stage: 'Month 3', name: 'Review Acceleration & Citations', detail: 'Deploying the review acquisition system and building verified local citations in target cities.' },
        { stage: 'Ongoing', name: 'Map Pack Monitoring & Local Posts', detail: 'Tracking 3-pack rankings across target geo-radius, updating photos, and answering customer Q&As.' }
      ],
      caseStudyLink: '/case-studies/hope-local-gmb',
      caseStudyText: 'Delenzo Studio / Retail: 3,077 Profile Views & 619 Customer Calls',
      faqs: [
        { q: 'Can I rank on Google Maps without a physical office?', a: 'Google requires a verified service area or physical address. We can set up a Service Area Business (SAB) where your physical address is hidden from the public.' },
        { q: 'How important are Google reviews for ranking?', a: 'Crucial. Review volume, recency, star rating, and keywords inside customer reviews are direct ranking signals in Google Maps algorithm.' },
        { q: 'Which cities do you optimize for?', a: 'I optimize local businesses in Lahore, Karachi, Islamabad, Dubai, Abu Dhabi, and international metro areas.' }
      ]
    },

    'tech-seo': {
      title: 'Technical SEO & Core Web Vitals Speed',
      subtitle: 'Eliminate Hidden Code Errors & Speed Up Your Site Under 2s',
      badge: 'CRAWLABILITY & ALGORITHMIC HEALTH',
      icon: Cpu,
      tagline: 'Google will not rank a website it cannot crawl or load smoothly. We fix the code and speed so rankings unlock.',
      problemTitle: 'The Silent Killers of Organic Rankings',
      problemDescription: 'Slow loading times, bloated JavaScript, 404 broken loops, and incorrect canonical tags waste Google’s crawl budget. When search engine bots encounter technical roadblocks, they abandon your pages before indexing them, stranding your content on page 3 or worse.',
      deliverables: [
        {
          title: 'Deep Screaming Frog 500+ Metric Crawler Audit',
          description: 'Uncover hidden redirect loops, missing canonicals, orphan pages, duplicate titles, and server response code bottlenecks.'
        },
        {
          title: 'Core Web Vitals Engineering (LCP, INP, CLS)',
          description: 'Optimize Largest Contentful Paint to sub-2.2s, eliminate Cumulative Layout Shift, and ensure lightning-fast mobile responsiveness.'
        },
        {
          title: 'Robots.txt & XML Sitemap Hierarchy',
          description: 'Build clean crawling instructions directing Googlebot only to high-value commercial pages while blocking wasteful utility URLs.'
        },
        {
          title: 'JavaScript Rendering & Hydration Auditing',
          description: 'Verify that client-side JavaScript content is fully rendered and indexed by Googlebot without delay.'
        },
        {
          title: 'Mobile-First Indexation Verification',
          description: 'Ensure identical HTML elements, structured data, and content parity between mobile and desktop versions.'
        },
        {
          title: 'Advanced JSON-LD Structured Data Schema',
          description: 'Write custom JSON-LD schema for Organization, FAQPage, Article, Product, and BreadcrumbList.'
        }
      ],
      roadmap: [
        { stage: 'Sprint 1', name: 'Comprehensive Crawl & Leak Audit', detail: 'Running multi-angle crawls, identifying critical index leaks, 404 errors, and slow server responses.' },
        { stage: 'Sprint 2', name: 'Speed & Code Optimization', detail: 'Compressing assets, deferring non-critical JS/CSS, optimizing fonts, and tuning Core Web Vitals.' },
        { stage: 'Sprint 3', name: 'Crawl Directives & Schema Deployment', detail: 'Refining XML sitemaps, robots.txt rules, and deploying clean structured data markup.' },
        { stage: 'Ongoing', name: 'Automated GSC Health Monitoring', detail: 'Continuous monitoring of Google Search Console indexing reports to catch drops immediately.' }
      ],
      caseStudyLink: '/case-studies/carrot-sun',
      caseStudyText: 'Carrot Sun: Scaled from 0 to 60+ Daily Clicks with Clean Technical Indexing',
      faqs: [
        { q: 'What is Core Web Vitals and why does it matter?', a: 'Core Web Vitals are Google official page experience metrics measuring speed (LCP), interactivity (INP), and visual stability (CLS). Passing them gives you a direct ranking advantage.' },
        { q: 'Do you need access to my website backend?', a: 'Yes, to implement technical fixes, speed optimizations, and schema, access to WordPress, Shopify admin, or codebase is required under an NDA.' },
        { q: 'Can technical SEO alone fix my ranking?', a: 'Technical SEO provides the essential foundation. Without it, even great content cannot rank. For maximum traffic, it works together with on-page content and authority.' }
      ]
    },

    'ai-seo': {
      title: 'AI-Powered Search & Automation Pipelines',
      subtitle: '5x Faster Execution Using Custom Semantic Scripts & Modern LLMs',
      badge: 'INNOVATION & SPEED',
      icon: Sparkles,
      tagline: 'Leave slow manual spreadsheets behind. Use intelligent AI search pipelines to capture buyer intent faster than competitors.',
      problemTitle: 'Why Traditional SEO Agencies Are Falling Behind',
      problemDescription: 'Old agencies spend 4 to 6 weeks manually researching keywords, writing generic outlines, and building outdated reports. In the age of AI search (Google Gemini, AI Overviews), winning brands use intelligent pipelines to analyze search patterns at scale and deploy topical authority in days, not months.',
      deliverables: [
        {
          title: 'Semantic Keyword Intent Clustering with Python & LLMs',
          description: 'Group 500+ raw search queries into logical topic clusters based on actual user intent, completely eliminating keyword cannibalization.'
        },
        {
          title: 'Programmatic SERP Brief Generation',
          description: 'Extract competitor content gaps, required semantic entities, and optimal heading blueprints in hours.'
        },
        {
          title: 'Generative Engine Optimization (GEO) for AI Overviews',
          description: 'Structure your content with factual entity associations so Google Gemini and AI search engines cite your brand directly.'
        },
        {
          title: 'Automated GSC Anomaly & Ranking Monitor Scripts',
          description: 'Deploy automated Python scripts that detect sudden ranking drops, 404 spikes, and low-hanging page 2 keyword opportunities.'
        },
        {
          title: 'Automated Internal Link Mapping',
          description: 'Use semantic similarity algorithms to find optimal internal linking opportunities across hundreds of existing pages.'
        },
        {
          title: 'Custom Client Growth Dashboards',
          description: 'Automated reporting feeds pulling directly from Search Console and Analytics so you see clear performance without fluff.'
        }
      ],
      roadmap: [
        { stage: 'Week 1', name: 'Data Ingestion & Competitor Scrape', detail: 'Pulling 2,000+ commercial keywords and scraping top 10 competitors across all core topics.' },
        { stage: 'Week 2', name: 'AI Intent Clustering & Gap Matrix', detail: 'Running semantic clustering algorithms to map pillar collections and supporting content spokes.' },
        { stage: 'Week 3-4', name: 'Topical Authority Deployment', detail: 'Creating entity-rich content briefs with built-in schema ready for rapid ranking.' },
        { stage: 'Ongoing', name: 'Automated 24/7 Health Monitoring', detail: 'Running scripts that alert us immediately to search opportunity queries and ranking shifts.' }
      ],
      caseStudyLink: '/case-studies/2s-lawyers',
      caseStudyText: '2S Lawyers UAE: +300% Inbound Leads Built on Topical Authority Clusters',
      faqs: [
        { q: 'Does Google penalize AI-assisted SEO?', a: 'No. Google official search guidance states they reward high-quality, helpful content regardless of how it is produced. We use AI for research, clustering, and analysis—not generic spam.' },
        { q: 'How does AI help my website rank faster?', a: 'By analyzing thousands of search data points in minutes, we find high-converting, low-competition keywords that traditional agencies overlook, accelerating results by 5x.' },
        { q: 'What tools and models do you use?', a: 'I use custom Python scripts integrated with Claude 3.5, OpenAI GPT-4o, Google Gemini API, Screaming Frog, and Google Search Console APIs.' }
      ]
    },

    'on-page-seo': {
      title: 'On-Page SEO Optimization',
      subtitle: 'Engineered to Make Google Understand and Rank Every Page',
      badge: 'PAGE 1 RANKINGS',
      icon: ShoppingCart,
      tagline: 'Optimize your page titles, headings, and text so Google easily understands what you sell and ranks you on Page 1.',
      problemTitle: 'Why Great Websites Still Don’t Rank on Page 1',
      problemDescription: 'Google doesn’t guess. If your website lacks high-intent buyer keywords, has messy headings, or lacks internal links, Google simply ranks your competitor instead. On-page SEO aligns your website perfectly with Google algorithmic signals.',
      deliverables: [
        {
          title: 'High-Intent Buyer Keyword Research & Mapping',
          description: 'Identify the exact terms paying customers type and map each keyword to the most relevant landing page.'
        },
        {
          title: 'Click-Winning Title Tags & Meta Descriptions',
          description: 'Craft titles and snippets designed to stand out on Page 1 and maximize your organic click-through rate (CTR).'
        },
        {
          title: 'H1, H2, H3 Heading Content Structure',
          description: 'Organize page content logically so both human readers and search engine bots immediately grasp your core offerings.'
        },
        {
          title: 'Smart Internal Linking Architecture',
          description: 'Channel authority from informational blogs directly into your high-converting money pages.'
        },
        {
          title: 'Image Alt Text & Media Optimization',
          description: 'Optimize image filenames, descriptive alt tags, and WebP compression for Google Image search visibility.'
        },
        {
          title: 'Search Intent & Content Depth Matching',
          description: 'Ensure every page provides complete, authoritative answers to eliminate bounce rate and satisfy Google algorithms.'
        }
      ],
      roadmap: [
        { stage: 'Month 1', name: 'Keyword Mapping & Intent Audit', detail: 'Mapping all priority products and services to high-intent commercial queries.' },
        { stage: 'Month 2', name: 'Title, Meta & Heading Overhaul', detail: 'Rewriting titles, metas, and structuring page content for maximum click-through rate.' },
        { stage: 'Month 3', name: 'Internal Link & Content Siloing', detail: 'Connecting related pages to build strong topical clusters and funnel ranking authority.' },
        { stage: 'Ongoing', name: 'CTR Testing & SERP Tracking', detail: 'Continuously refining snippets and monitoring Page 1 keyword position jumps.' }
      ],
      caseStudyLink: '/case-studies/carrot-sun',
      caseStudyText: 'Carrot Sun Oil: Reached Average Position 7.2 on Page 1 in 90 Days',
      faqs: [
        { q: 'How long does on-page SEO take to show results?', a: 'On-page changes are usually re-crawled by Google within 2 to 4 weeks, with clear ranking and traffic improvements appearing within 30 to 60 days.' },
        { q: 'Will on-page SEO change my website design?', a: 'No. On-page SEO focuses on text, headings, meta tags, and internal link structure without altering your brand design or layout.' },
        { q: 'Do you work directly on my CMS?', a: 'Yes. I can implement all on-page optimizations directly inside WordPress, Shopify, Webflow, or provide clear code blueprints.' }
      ]
    },

    'link-building': {
      title: 'High-Authority Link Building (Off-Page SEO)',
      subtitle: '100% White-Hat Real Backlinks to Outrank Your Competitors',
      badge: '100% WHITE-HAT',
      icon: Zap,
      tagline: 'Get trusted, high-authority websites to link back to your business, giving you the algorithmic power to beat competitors.',
      problemTitle: 'Why Your Website Is Stuck on Page 2 or Page 3',
      problemDescription: 'Google treats backlinks as votes of confidence. If competitors have more quality websites linking to them, Google will rank them higher. Low-quality automated spam links get your site banned, which is why only real, safe white-hat links work.',
      deliverables: [
        {
          title: '100% Safe Manual Outreach (Zero Spam Networks)',
          description: 'Direct outreach to real, relevant blogs and webmasters. No private blog networks (PBNs) or toxic spam links.'
        },
        {
          title: 'High DA / DR Niche Guest Posts',
          description: 'Publish authoritative, original guest articles on established websites in your industry with natural editorial backlinks.'
        },
        {
          title: 'Competitor Backlink Replication',
          description: 'Reverse-engineer your top 5 ranking competitors to identify and acquire their best, highest-impact backlinks.'
        },
        {
          title: 'Local Pakistani & Global Business Citations',
          description: 'Establish consistent NAP profiles across trusted national and international business directories.'
        },
        {
          title: 'Brand Mentions & Digital PR Outreach',
          description: 'Get your brand featured in news outlets, podcasts, and industry roundups to build lasting algorithmic trust.'
        },
        {
          title: 'Transparent Live Backlink Reporting',
          description: 'Access a live spreadsheet with every acquired URL, domain metrics, anchor text, and verification date.'
        }
      ],
      roadmap: [
        { stage: 'Month 1', name: 'Competitor Link Gap Analysis', detail: 'Dissecting competitor backlink profiles and identifying easy-win link sources.' },
        { stage: 'Month 2', name: 'Foundation Citations & Brand Profiles', detail: 'Building high-trust directory citations and brand authority profiles.' },
        { stage: 'Month 3', name: 'High-DA Guest Post Outreach', detail: 'Publishing niche-relevant articles on authority websites with contextual links.' },
        { stage: 'Ongoing', name: 'Continuous Link Velocity & Tracking', detail: 'Acquiring steady monthly backlinks to sustain and grow Page 1 rankings.' }
      ],
      caseStudyLink: '/case-studies/2s-lawyers',
      caseStudyText: '2S Lawyers UAE: +300% Inbound Leads Powered by Authority Backlinks',
      faqs: [
        { q: 'Are your backlinks safe from Google penalties?', a: '100% safe. I only use manual white-hat outreach to real websites with genuine traffic, following Google Webmaster guidelines.' },
        { q: 'What Domain Authority (DA) do the websites have?', a: 'I target authoritative websites with DA 30 to 70+ and verified real organic traffic.' },
        { q: 'Do backlinks stay live permanently?', a: 'Yes. All acquired guest posts and editorial links are permanent, contextual placements.' }
      ]
    },

    'seo-audit': {
      title: 'Complete Website SEO Audit & Action Plan',
      subtitle: 'Find Out Exactly What Is Stopping You From Ranking #1',
      badge: '100+ POINT AUDIT',
      icon: CheckCircle2,
      tagline: 'I do a deep check of your website to find the exact errors holding you back, and give you a simple step-by-step plan to rank #1.',
      problemTitle: 'Why Blind Changes Waste Time & Money',
      problemDescription: 'Many store owners and businesses spend months tweaking random text or paying for cheap backlinks without understanding why their site is not ranking. A comprehensive professional audit finds the exact roadblocks so you only fix what drives results.',
      deliverables: [
        {
          title: '100+ Point Full Technical Site Inspection',
          description: 'Deep crawl for redirect loops, 404 broken links, index bloat, crawl traps, and canonical errors.'
        },
        {
          title: 'Top 5 Competitor Ranking & Traffic Breakdown',
          description: 'Detailed analysis of why your competitors are beating you on Google and what it takes to surpass them.'
        },
        {
          title: 'Low-Hanging Buyer Keyword Opportunities',
          description: 'Identify keywords where you already sit on Page 2 (positions 11–20) that can be pushed to Page 1 quickly.'
        },
        {
          title: 'Core Web Vitals & Mobile Speed Diagnostics',
          description: 'Identify slow scripts, uncompressed media, and render bottlenecks delaying page load times.'
        },
        {
          title: 'Prioritized Action Plan (What to Fix First)',
          description: 'A clear, no-nonsense checklist ranked from highest impact to lowest impact so you see fast ranking gains.'
        },
        {
          title: '15-Minute 1-on-1 Strategy Call on WhatsApp',
          description: 'Direct consultation where I walk you through the audit findings in plain Grade 5 English and answer all questions.'
        }
      ],
      roadmap: [
        { stage: 'Day 1-2', name: 'Deep Crawler & GSC Ingestion', detail: 'Running multi-point technical crawls and connecting Search Console performance data.' },
        { stage: 'Day 3', name: 'Competitor Reverse Engineering', detail: 'Analyzing competitor backlink authority, top ranking pages, and keyword gaps.' },
        { stage: 'Day 4', name: 'Action Plan & Priority Matrix', detail: 'Compiling the clear, plain-English fix checklist and opportunity roadmap.' },
        { stage: 'Day 5', name: 'Live WhatsApp Walkthrough', detail: 'Personal 1-on-1 call with Talha to review findings and outline next steps.' }
      ],
      caseStudyLink: '/case-studies/hope-enterprises',
      caseStudyText: 'Hope Enterprises: 10,700 Clicks (+280% Surge) After Fixing Core Bottlenecks',
      faqs: [
        { q: 'What do I receive after the audit?', a: 'You receive a clear, plain-English report with a prioritized fix checklist, competitor gap data, and a 1-on-1 strategy call on WhatsApp.' },
        { q: 'Can you fix the issues found in the audit?', a: 'Yes. Once the audit is complete, we can either implement all fixes for you or hand the blueprint to your in-house developer.' },
        { q: 'How fast do you deliver the audit?', a: 'The comprehensive audit is delivered within 3 to 5 business days.' }
      ]
    }
  };

  const service = serviceData[id];

  useEffect(() => {
    if (service) {
      document.title = `${service.title} - Professional SEO Services | Talha Ahsan`;
    } else {
      document.title = 'Service Not Found - Talha Ahsan';
    }
    window.scrollTo(0, 0);
  }, [service, id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-white text-[#0F0728] font-sans antialiased pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#F3E8FF] border border-[#E9D8FD] flex items-center justify-center mx-auto mb-4 text-[#7C3AED]">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="font-heading text-3xl font-extrabold text-[#0F0728] mb-3">Service Not Found</h1>
          <p className="text-[#3B2B5C] mb-6">The requested service does not exist or has been relocated.</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7C3AED] text-white font-mono text-xs font-bold hover:bg-[#6D28D9] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Services Overview</span>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon || Sparkles;
  const otherServices = Object.keys(serviceData).filter(k => k !== id);

  return (
    <div className="min-h-screen bg-white text-[#0F0728] font-sans antialiased selection:bg-[#7C3AED] selection:text-white pt-24 pb-20">
      
      {/* 01. Breadcrumb Bar */}
      <div className="bg-[#FAF8FF] border-b border-[#E9D8FD] py-3 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#6B5B8D] flex-wrap">
          <Link to="/" className="hover:text-[#7C3AED] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-[#7C3AED] transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0F0728] font-bold truncate">{service.title}</span>
        </div>
      </div>

      {/* 02. Header Section */}
      <div className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8FF] via-white to-white border-b border-[#E9D8FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D8FD] font-mono text-xs text-[#7C3AED] font-bold mb-4 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#059669]" />
              <span>{service.badge}</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#7C3AED] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#7C3AED]/25">
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0F0728] tracking-tight leading-tight">
                  {service.title}
                </h1>
                <p className="font-mono text-xs text-[#7C3AED] font-bold mt-1">
                  {service.subtitle}
                </p>
              </div>
            </div>

            <p className="text-base sm:text-xl text-[#3B2B5C] font-medium leading-relaxed mt-4">
              {service.tagline}
            </p>

            {/* Direct Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <a
                href={`https://wa.me/923204966959?text=Hi%20Talha,%20I%20need%20help%20with%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#7C3AED]/25"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss This Service on WhatsApp</span>
              </a>

              <a
                href="https://calendly.com/talhaahsanofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-white hover:bg-[#F3E8FF] text-[#7C3AED] border border-[#E9D8FD] font-mono text-xs font-bold transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 15-Min Strategy Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 03. Problem Statement & Case Study Tie-In */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Problem Statement */}
          <div className="lg:col-span-7 bg-[#FAF8FF] border border-[#E9D8FD] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#DC2626] mb-3">
                <AlertCircle className="w-4 h-4" /> THE BOTTLENECK
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#0F0728] mb-4">
                {service.problemTitle}
              </h2>
              <p className="text-[#3B2B5C] text-sm sm:text-base leading-relaxed font-medium">
                {service.problemDescription}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E9D8FD] flex items-center gap-2 font-mono text-xs text-[#059669] font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineered to turn traffic into paying customers.</span>
            </div>
          </div>

          {/* Real Proven Proof Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B0614] to-[#1A0F33] border border-[#2D1B4E] rounded-3xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#A78BFA] mb-3">
                <ShieldCheck className="w-4 h-4 text-[#059669]" /> DOCUMENTED CASE PROOF
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">
                Real Results in This Domain
              </h3>
              <p className="text-xs sm:text-sm text-[#C8B8E8] leading-relaxed mb-6 font-medium">
                We have deployed this exact methodology on live commercial brands with verified Google Search Console proof.
              </p>
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs mb-6">
                <div className="font-mono text-xs text-[#A78BFA] font-bold mb-1">Featured Case Study</div>
                <div className="font-heading text-lg font-bold text-white">{service.caseStudyText}</div>
              </div>
            </div>

            <Link
              to={service.caseStudyLink}
              className="py-3 px-5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <span>Read Full Case Study Proof</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

      {/* 04. Detailed Deliverables */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs text-[#7C3AED] font-bold uppercase tracking-wider block mb-1">
            WHAT YOU RECEIVE
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728]">
            Detailed Service Deliverables
          </h2>
          <p className="text-sm sm:text-base text-[#3B2B5C] mt-2 font-medium">
            Clear, high-impact deliverables tailored to get your website to the top of Google.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8FF] hover:bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-6 transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-[#7C3AED]/10 flex flex-col justify-between"
            >
              <div>
                <span className="w-8 h-8 rounded-xl bg-[#F3E8FF] text-[#7C3AED] font-mono text-xs font-bold flex items-center justify-center mb-4 border border-[#E9D8FD]">
                  0{idx + 1}
                </span>
                <h3 className="font-heading text-base font-bold text-[#0F0728] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3B2B5C] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 05. The 4-Stage Execution Roadmap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs text-[#7C3AED] font-bold uppercase tracking-wider block mb-1">
              SYSTEMATIC PROCESS
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0F0728]">
              The Execution Sprint Roadmap
            </h2>
            <p className="text-sm sm:text-base text-[#3B2B5C] mt-2 font-medium">
              How we systematically move your business from initial audit to search domination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.roadmap.map((stage, sIdx) => (
              <div key={sIdx} className="bg-white border border-[#E9D8FD] rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-[#F3E8FF] text-[#7C3AED] font-mono text-[11px] font-bold inline-block mb-3">
                    {stage.stage}
                  </span>
                  <h3 className="font-heading text-base font-bold text-[#0F0728] mb-2">
                    {stage.name}
                  </h3>
                  <p className="text-xs text-[#3B2B5C] leading-relaxed font-medium">
                    {stage.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 06. Service FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-[#7C3AED] font-bold uppercase tracking-wider block mb-1">
            CLARITY &amp; ANSWERS
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F0728]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, fIdx) => (
            <div key={fIdx} className="bg-[#FAF8FF] border border-[#E9D8FD] rounded-2xl p-5 shadow-xs">
              <h3 className="font-heading text-base font-bold text-[#0F0728] flex items-start gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#7C3AED] shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#3B2B5C] leading-relaxed font-medium pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 07. Other Services Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-[#E9D8FD] mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-xl font-bold text-[#0F0728]">Explore Other SEO Services</h2>
          <Link to="/services" className="font-mono text-xs font-bold text-[#7C3AED] hover:underline flex items-center gap-1">
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {otherServices.map((key) => {
            const item = serviceData[key];
            const OtherIcon = item.icon || Sparkles;
            return (
              <Link
                key={key}
                to={`/services/${key}`}
                className="group bg-[#FAF8FF] hover:bg-white border border-[#E9D8FD] hover:border-[#7C3AED] rounded-2xl p-4 transition-all shadow-xs flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] text-[#7C3AED] flex items-center justify-center shrink-0 group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                  <OtherIcon className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <h3 className="font-heading text-xs font-bold text-[#0F0728] group-hover:text-[#7C3AED] transition-colors truncate">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[10px] text-[#6B5B8D]">{item.badge}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 08. Bottom Consultation CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#0B0614] border border-[#2D1B4E] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Ready to Scale Your Organic Traffic &amp; Sales?
          </h2>
          <p className="text-sm sm:text-base text-[#C8B8E8] max-w-xl mx-auto mb-6">
            Get in touch directly with Talha Ahsan for a customized proposal and live audit of your website.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/923204966959?text=Hi%20Talha,%20I%20want%20to%20get%20started%20with%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-mono text-xs font-bold shadow-lg transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Started via WhatsApp</span>
            </a>
            <a
              href="https://calendly.com/talhaahsanofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#1A0F33] hover:bg-[#251547] text-white border border-[#3E2468] font-mono text-xs font-bold transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#A78BFA]" />
              <span>Book Strategy Call</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
