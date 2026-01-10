import  { useState } from 'react';
import { ClipboardCheck, Truck, Ruler, BadgeCheck, Play, X } from 'lucide-react';
import Layout from '../components/layout';
import { motion } from 'framer-motion';


const steps = [
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "01. Consultation",
    description: "We begin by understanding your project requirements, whether it's bulk material supply or bespoke interior design."
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    title: "02. Site Assessment",
    description: "Our experts conduct precision measurements and site inspections to ensure technical accuracy and material compatibility."
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "03. Sourcing & Supply",
    description: "We leverage our direct importer status to source industrial-grade materials, ensuring zero compromise on quality."
  },
  {
    icon: <BadgeCheck className="w-8 h-8" />,
    title: "04. Delivery & Fitting",
    description: "Final execution involving logistics management and professional installation of interior fittings by our expert team."
  }
];

// DATA: Add your project images here
const projectImages = [
  { id: 1, src: "/polystyrene-and-corner-bead-project-portfolio-image.webp", title: "Bulk Polystyrene & Corner Bead Supply", description: "An industry-focused shot of Charanne Limited’s core supplies. Stacks of high-density polystyrene sheets are shown fitted with protective metal corner beads, ready for site delivery and professional installation." },
  { id: 2, src: "/polystyrene-bar.webp", title: "Polystyrene Display Bar & Custom Gilded Console", description: "A luxury interior showcase featuring recessed bottle displays built into a polystyrene wall. The scene is complemented by an ornate, gold-finished wheat-sheaf console table and a carved floral mirror, blending custom construction with high-end furniture." },
  { id: 3, src: "/Polystyrene-interior-project-portfolio-image.webp", title: "Recessed Polystyrene Wall Shelving", description: "A contemporary architectural wall feature during the finishing stage. This project utilizes precision-cut polystyrene to create recessed, illuminated geometric shelving units, ideal for modern display alcoves." },
  { id: 4, src: "/tv-console-finishing-with-Polystyrene-project-portfolio-image.webp", title: "Media Wall Construction Stage", description: "A \"behind-the-scenes\" look at a TV console installation using high-density polystyrene. This image illustrates the framing and structural layout of the recessed units before the final paint and lighting are applied, demonstrating the precision of our process." },
  { id: 5, src: "/tv-console-interior-design-2.webp", title: "Modern Marble-Finish TV Console (Night View)", description: "A sophisticated living room centerpiece featuring a floating marble-textured console and matching backdrop. The installation is accented by warm ambient LED strip lighting set against a deep-grooved wooden fluted wall panel." },
  { id: 6, src: "/tv-console-interior-design.webp", title: "Full Wall TV Media Unit (Wide View)", description: "A wide-angle look at a custom-built media wall. This project integrates a large marble-finish mounting panel with a matching four-cabinet floating console, bordered by full-height wood-slat panelling to create a luxury industrial feel." },
  { id: 7, src: "/use-of-corner-bead-project-portfolio-image.webp", title: "Structural Corner Bead Application", description: "A technical view of bulk building material supply and application. This image shows the precise alignment of perforated metal corner beads on large-scale polystyrene blocks, ensuring reinforced, sharp edges for structural installations." },
  { id: 8, src: "/interior-project-portfolio-image.webp", title: "High-Gloss Interior Wall Panelling", description:"A close-up showcasing premium high-gloss white wall panelling. This installation highlights the reflective quality and seamless finishing achieved with industrial-grade materials, providing a clean, luxury aesthetic to residential corridors." },
  { id: 9, src: "/ceiling-project-portfolio-image.webp", title: "Geometric Circular Ceiling Design", description: "An elegant ceiling installation featuring a recessed circular centerpiece. The design incorporates integrated \"halo\" lighting and modern LED spotlights, showcasing our expertise in bespoke polystyrene ceiling finishing and interior lighting." },
];

// DATA: Add your project videos here
const projectVideos = [
  { id: 1,  title: "Precision Exterior Moldings & Column Fabrication", videoUrl: "/charanne-exterior-project-1.mp4", description:"Focusing on the \"face\" of the building, this project demonstrates Charanne Limited’s expertise in industrial-grade exterior finishes. The video showcases the installation of custom-profiled polystyrene cornices and reinforced decorative columns. These elements are engineered to provide a classic masonry aesthetic while utilizing modern, lightweight materials that offer superior durability and weather resistance. Our site supervisor is seen coordinating the final alignment, ensuring that every architectural line is perfectly horizontal and every pillar is plumb."},
  { id: 2,  title: "Technical Site Execution", videoUrl: "/charanne-interior-project-video.mp4", description:"Go behind the scenes with our expert installation team. This video captures the intensive labor and technical skill involved in fitting high-density polystyrene ceiling units. Observe the use of specialized scaffolding and the careful application of bonding agents to ensure long-term structural integrity. This footage emphasizes our commitment to site safety and technical accuracy, showing the rigorous process of smoothing, sanding, and prepping surfaces before the final coat of premium paint is applied."},
  { id: 3,  title: "Large-Scale Architectural Integration", videoUrl: "/charanne-large-scale-project.mp4", description: "This video offers a comprehensive look at a high-end residential project during its critical finishing phase. It highlights the seamless integration of custom-engineered polystyrene ceiling structures with expansive open-plan architecture. Viewers can observe the complexity of the multi-tiered recessed lighting troughs and the precision required to align geometric ceiling panels across vast vertical spaces. The footage captures the raw industrial beauty of a site in transformation, demonstrating our ability to manage large-scale interior fittings and structural reinforcements simultaneously." },
  { id: 4,  title: "Residential Design: The 80% Milestone", videoUrl: "/charanne-residential-project-2.mp4", description:"This video captures a project at the 80% completion mark, providing a unique look at the structural preparation required for luxury finishes. Viewers can see the intricate framework of the built-in shelving units and the pre-wiring for complex lighting systems. It showcases the \"marble-and-wood\" feature walls before their final polish, giving clients a clear view of the craftsmanship and structural honesty that lies beneath the finished surface of a Charanne Limited project." },
  { id: 5,  title: "The Furnishing Hub Showcase", videoUrl: "/charannes-furnishing-hub.mp4" , description:"A tour through a flagship installation that defines modern luxury. This video captures the high-gloss, reflective wall panelling and the intricate \"nested square\" wall features that have become a signature of our interior hub. The footage highlights how ambient LED lighting interacts with our precision-cut materials to create a sense of depth and opulence. From the seamless marble-tiled floors to the bespoke illuminated alcoves, this project serves as a masterclass in combining material supply with professional fitting."},
  { id: 6,  title: "Interior Hub: Material Innovations", videoUrl: "/displays-from-the-best-interior-hub.mp4" , description:"This project features one of our most complex ceiling designs—a recessed circular \"halo\" unit that dominates the grand entryway. The video highlights the fluid lines and smooth transitions achieved through our precision-cut polystyrene blocks. By integrating spotlighting and hidden strip lights within these curves, we create a futuristic yet elegant atmosphere. The footage also showcases our high-gloss wall finishes, which provide a seamless, glass-like backdrop to the home's architectural features."},
  { id: 7,  title: "Master Bedroom & Wardrobe Systems", videoUrl: "/finished-home-project-2.mp4" , description:"Moving into the private quarters, this video highlights our bespoke wardrobe solutions and bedroom interior design. It showcases floor-to-ceiling high-gloss cabinetry with integrated handles and soft-close technology. The ceiling features a multi-layered design that incorporates both direct and indirect lighting to create a versatile living environment. This project demonstrates our ability to maximize space and functionality without compromising on the luxury aesthetic demanded by our elite clientele."},
  { id: 8,  title: "Finished Home: Modern Minimalism", videoUrl: "/finished-home-project.mp4" , description:"A showcase of how smaller architectural details can redefine a space. This video focuses on the stairwell and transitional corridors of a luxury home. It features custom-designed \"brick-effect\" wall inserts framed by classic wainscoting and crown moldings. The footage demonstrates how we use textures and light to turn a functional staircase into a gallery-like experience. The white-on-white palette emphasizes the clean lines and flawless junctions of our professional fitting service."},
  { id: 9,  title: "Client Project: The Art of Living", videoUrl: "/finished-project-charanne-did-for-a-client.mp4", description:"A deep dive into a finished residential masterpiece. This video pans through a lavishly appointed living and dining area, showcasing the harmony between structural polystyrene ceiling designs and high-end furniture. Note the intricate gold-leaf detailing on the hand-carved console tables and the ornate wheat-sheaf pedestal dining set. This project highlights our \"end-to-end\" capability—from sourcing the raw building materials to the final professional installation of luxury interior fittings."},
  { id: 10,  title: "Advanced Interior Capabilities", videoUrl: "/our-capabilities.mp4", description:"This walkthrough showcases our ability to create functional art within a home. The focus is a massive, custom-built media center featuring fluted wood-slat vertical panels contrasted against a central marble-texture mounting surface. The video details the technical execution of the integrated electric fireplace and the hidden LED channels that provide a warm, atmospheric glow. It demonstrates how Charanne Limited transforms a simple wall into a high-tech focal point through meticulous carpentry and innovative material use."},
  { id: 11,  title: "Architectural Innovation: The Power of Polystyrene Design", videoUrl: "/our-polystyrene-capabilities.mp4", description:"Discover the secret behind our most ambitious architectural geometries. This final segment explores the versatility of High-Density Polystyrene (HDP) as a revolutionary material for modern interiors. Our lead designers demonstrate how lightweight polystyrene boards and sheets are transformed into elaborate, multi-layered curved ceilings and custom-sculpted wall niches that would be nearly impossible to achieve with traditional plaster. By merging creative engineering with integrated LED technology, we showcase a luxurious living space where the ceiling becomes a piece of art. From the fluid lines of the \"Halo\" coves to the geometric precision of the built-in shelving units, this video highlights how we utilize innovative materials to deliver complex, high-end aesthetics without the weight or structural limitations of conventional construction."},
  { id: 12,  title: "Material Mastery: Sculpting Space with Polystyrene", videoUrl: "/polystyrene-job-done-by-charanne.mp4", description:"Witness the transformative power of modern material engineering in this showcase of high-density polystyrene craftsmanship. This video highlights an interior mid-transition, where raw boards and sheets have been expertly sculpted into complex, aesthetically pleasing architectural elements. The centerpiece is a magnificent multi-layered, circular ceiling pop, illuminated by hidden LED strips and a statement geometric pendant light. The walls are equally dynamic, featuring a series of custom-built, arched and rectangular recessed niches, each fitted with integrated spotlights to create a dramatic gallery effect. This project exemplifies how we use polystyrene to achieve intricate, fluid designs and deep-relief wall features that are as lightweight as they are luxurious, turning a standard room into a masterclass of contemporary form."},
  { id: 13,  title: "The Final Flourish: Artistry in the Finishing Touches", videoUrl: "/project-completion-phase.mp4", description:"Experience the meticulous care that goes into the \"white-glove\" stage of our projects. This behind-the-scenes look captures the transition from a construction site to a curated home as we install the final design layers. Precision is paramount as our team sets the grand, gold-threaded drapery, perfectly complementing the architectural depth of the white coffered ceilings and integrated spotlights. The room’s aesthetic is anchored by a bespoke decorative wall panel featuring a delicate tree-branch motif, bridging the gap between modern structure and organic art. Every movement is handled with professional care—utilizing protective coverings to ensure that the transition to the final, polished state is as flawless as the design itself."},
  { id: 14,  title: "Curated Luxury & Culinary Sophistication", videoUrl: "/residential-job-2.mp4", description:"Go beyond the surface and explore the intricate details that define the character of this residence. This feature focuses on the high-performance zones and artisanal finishes that elevate the living experience. Witness the precision of our built-in illuminated wall niches and the flawless integration of mirrored textures. The spotlight then shifts to the kitchen—a masterclass in modern utility—boasting high-gloss black cabinetry, premium granite surfaces, and a statement ring-light installation. Get an exclusive look at our technical process as we integrate custom LED lighting into the staircase to highlight the organic patterns of the laser-cut steel. The experience reaches its peak with a view of the grand ceiling, where a multi-tiered crystal chandelier is framed by a signature concentric lighting design." },
  { id: 15,  title: "Bespoke Elegance: Modern Sophistication in Motion", videoUrl: "/residential-job.mp4" , description:"Step into a refined world of contemporary luxury with this exclusive walkthrough of our latest residential masterpiece. This video captures the home in its final finishing phase, where architecture meets artistry. Experience the seamless transition from pristine white walls and elegant mirrored paneling to the striking contrast of polished white floors inlaid with deep black marble. Highlighting our commitment to high-end detail, the tour features a custom-built recessed shelving unit and a dramatic black marble feature wall accented by vertical metallic slats. The journey culminates in a breathtaking double-height atrium, anchored by a signature laser-cut balustrade and bathed in an abundance of natural light. This project exemplifies Charanne Limited's dedication to delivering bespoke interior solutions that embody modern sophistication and timeless elegance."},
  { id: 16,  title: "Crafting Excellence: The Art of the Build", videoUrl: "/videos-from-an-active-workforce.mp4", description:"Get an exclusive behind-the-scenes look at the precision and passion that fuel our projects. This \"Work in Progress\" feature pulls back the curtain on the our Furnishing Hub team in action under the supervison of our Managing Director (Eagle Anne). From the structural framing of bespoke coffered ceilings to the meticulous installation of custom wall units and staircase assemblies, this video captures the raw energy of an active site. Witness the transformation as premium materials like high-density polystyrene and structural timber are expertly handled by our dedicated craftsmen. We believe that true luxury is built on a foundation of hard work and technical expertise—see firsthand how we bridge the gap between architectural blueprints and your dream interior."},
  { id: 17,  title: "Illuminated Grandeur: A Symphony of Light and Shadow", videoUrl: "/we-handled-a-clients-building-project.mp4", description:"Experience the transformation of architecture through the power of light. This cinematic tour begins at dusk, capturing the striking presence of the building’s illuminated exterior and private balconies. Upon entering, the space unfolds into a vibrant interior where light is used as a primary design material. From the centerpiece tiered chandelier to the subtle glow of color-wash LEDs, every corner is engineered for visual impact. The journey highlights our signature design elements, including a dramatic black marble accent wall punctuated by vertical light ribbons and a gourmet kitchen framed by smart, color-changing ceiling strips. The architectural narrative is completed by the staircase, where light spills through the intricate patterns of laser-cut steel and beneath every tread, creating a floating effect that defines modern luxury."},

];

const OurProcess = () => {
const [selectedImage, setSelectedImage] = useState<typeof projectImages[0] | null>(null);

const [selectedVideo, setSelectedVideo] = useState<typeof projectVideos[0] | null>(null);
return (
    <Layout>
      <section id="our-process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600 mb-4">Workflow</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">
              Our <span className="text-slate-400">Process.</span>
            </h3>
            <div className="h-1.5 w-full bg-linear-to-r from-slate-900 to-transparent mt-6"></div>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-32 border-t border-slate-100">
  {steps.map((step, index) => (
    <div key={index} className="group relative p-8 border-r border-b border-slate-100 last:border-r-0 hover:bg-slate-50 transition-colors duration-500">
      {/* Step Number Background */}
      <span className="absolute top-4 right-6 text-6xl font-black text-slate-100/50 group-hover:text-red-600/10 transition-colors">
        0{index + 1}
      </span>
      
      <div className="mb-8 inline-flex items-center justify-center w-12 h-12 text-red-600 group-hover:scale-110 transition-transform duration-500">
        {step.icon}
      </div>
      
      <h4 className="text-lg font-black tracking-tight text-slate-900 mb-4 uppercase">
        {step.title.split('. ')[1]} {/* Removes the '01.' since we have the big number */}
      </h4>
      <p className="text-xs leading-relaxed text-slate-500 font-medium max-w-[200px]">
        {step.description}
      </p>
    </div>
  ))}
</div>

          {/* IMAGE GALLERY CAROUSEL */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900">Project Portfolio</h3>
              <div className="grow h-px bg-slate-100"></div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest animate-pulse">Scroll &rarr;</span>
            </div>
            
            <div className="flex overflow-x-auto gap-4 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth">
              {projectImages.map((img) => (
                <div 
  key={img.id} 
  className={`relative flex-none aspect-[4/5] bg-slate-100 overflow-hidden snap-center cursor-pointer group
    ${img.id % 3 === 0 ? 'w-[85vw] md:w-[60vw] lg:w-[35vw]' : 'w-[85vw] sm:w-[45vw] lg:w-[22vw]'}
  `}
  onClick={() => setSelectedImage(img)}
>
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">{img.title}</p>
                    <p className="text-white/60 text-[8px] mt-1 uppercase tracking-widest">Tap to expand</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VIDEO GALLERY (Existing) */}
          <div className="mb-20">
  {/* Header Section */}
  <div className="flex items-center gap-4 mb-12">
    <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900">Execution in Motion</h3>
    <div className="grow h-px bg-slate-100"></div>
    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest animate-pulse">Scroll &rarr;</span>
  </div>

  {/* Horizontal Carousel Container */}
  <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth">
    {projectVideos.map((video) => (
      <div 
        key={video.id} 
        onClick={() => setSelectedVideo(video)}
        className="relative flex-none w-[85vw] md:w-[60vw] lg:w-[40vw] aspect-video bg-slate-950 group cursor-pointer overflow-hidden border border-slate-900 shadow-2xl snap-center"
      >
        {/* The Live GIF/Image Preview or Pattern */}
        {/* If you use the GIF method, add the <img> tag here. Otherwise, the pattern below remains: */}
       <div className="absolute inset-0 z-0">
  <video 
    src={video.videoUrl} 
    muted 
    loop 
    playsInline 
    autoPlay
    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
  />
  {/* Gradient Overlay to keep text readable */}
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
</div>

        {/* Play Interface */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="relative mb-4">
            {/* Outer pulse ring */}
            <div className="absolute inset-0 rounded-full bg-red-600/20 animate-ping"></div>
            
            <button className="relative w-20 h-20 md:w-24 md:h-24 bg-white text-slate-950 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
              <Play size={32} fill="currentColor" className="ml-1" />
            </button>
          </div>
          
          <div className="text-center px-6">
            <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.4em] mb-2 group-hover:text-red-500 transition-colors">
              Click to Play Film
            </p>
            <h4 className="text-white text-base md:text-xl font-black uppercase tracking-tighter leading-tight">
              {video.title}
            </h4>
          </div>
        </div>

        {/* Technical Corner Accents */}
        <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-red-600 transition-all duration-500"></div>
        <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-red-600 transition-all duration-500"></div>
        
        {/* Industrial ID Tag */}
        <div className="absolute top-6 right-6 text-[8px] font-mono text-white/20 uppercase tracking-widest">
          Ref_0{video.id}
        </div>
      </div>
    ))}
  </div>
</div>

          {/* CTA */}
          <div className="mt-20 p-8 md:p-12 bg-slate-950 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-white text-2xl font-black tracking-tight uppercase">Ready to start your project?</h4>
              <p className="text-slate-400 text-sm mt-2 font-medium">Get a comprehensive quote for your building or interior needs today.</p>
            </div>
            <button 
            onClick={() => window.open("https://wa.me/2348033562978", "_blank")} className="whitespace-nowrap px-8 py-4 bg-red-600 text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all">
              Request a Quote
            </button>
          </div>
        </div>

        {/* --- MODALS --- */}

        {/* FULL IMAGE MODAL */}
{selectedImage && (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 lg:p-12"
  >
    {/* Close Button - Larger tap target for iPad */}
    <button 
      onClick={() => setSelectedImage(null)} 
      className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-red-600 transition-all z-[110] p-3 bg-slate-900/80 rounded-full shadow-xl"
    >
      <X size={28} />
    </button>
    
    <div className="bg-white w-full max-w-7xl max-h-[90vh] flex flex-col lg:flex-row overflow-hidden shadow-2xl rounded-sm">
      
      {/* Image Side - Responsive Height for iPad */}
      <div className="w-full lg:w-2/3 bg-slate-100 flex items-center justify-center overflow-hidden h-[60vh] md:h-[50vh] lg:h-[80vh]">
        <img 
          src={selectedImage.src} 
          alt={selectedImage.title} 
          className="w-full h-full object-contain p-2 md:p-8" 
        />
      </div>
      
      {/* Text Side - Scrollable for longer descriptions on Tablet */}
      <div className="w-full lg:w-1/3 p-6 md:p-10 lg:p-12 flex flex-col border-t lg:border-t-0 lg:border-l border-slate-100 overflow-y-auto">
        <div className="mb-6">
          <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-3 block">
            Project Case Study
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase mb-4 leading-tight">
            {selectedImage.title}
          </h3>
          
          <div className="relative mb-6 w-full">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 1.2, ease: "circOut" }}
              className="flex items-center gap-2"
            >
              <div className="grow h-[2px] bg-red-600"></div>
              <div className="w-1.5 h-1.5 bg-red-600 rotate-45 shrink-0"></div>
            </motion.div>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              {selectedImage.description}
            </p>
          </div>
        </div>

        {/* Action Button - Sticky-like at the bottom of the text side */}
        <div className="mt-auto pt-6 border-t border-slate-50">
          <a 
            href="https://wa.me/2348033562978" 
            target="_blank" 
            rel="noreferrer"
            className="w-full block text-center py-4 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all active:scale-95"
          >
            Inquire About This Service
          </a>
        </div>
      </div>
    </div>
  </motion.div>
)}
       {/* VIDEO MODAL */}
{selectedVideo && (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 z-[110] bg-slate-950/98 backdrop-blur-xl flex items-center justify-center p-2 md:p-8 lg:p-12"
  >
    {/* Close Button */}
    <button 
      onClick={() => setSelectedVideo(null)} 
      className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-red-600 transition-all z-[120] p-3 bg-slate-900/80 rounded-full shadow-xl"
    >
      <X size={28} />
    </button>
    
    <div className="bg-white w-full max-w-7xl max-h-[95vh] md:max-h-[90vh] flex flex-col lg:flex-row overflow-hidden shadow-2xl rounded-sm">
      
      {/* VIDEO PLAYER SIDE */}
      <div className="w-full lg:w-2/3 bg-black flex items-center justify-center overflow-hidden h-[40vh] md:h-[50vh] lg:h-[80vh]">
        {selectedVideo.videoUrl.includes('youtube.com') || selectedVideo.videoUrl.includes('youtu.be') ? (
          <iframe 
            className="w-full h-full" 
            src={`${selectedVideo.videoUrl}?autoplay=1`} 
            title={selectedVideo.title} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        ) : (
          <video 
            controls 
            autoPlay 
            className="w-full h-full object-contain"
          >
            <source src={selectedVideo.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      
      {/* DESCRIPTION SIDE */}
      <div className="w-full lg:w-1/3 p-6 md:p-10 lg:p-12 flex flex-col border-t lg:border-t-0 lg:border-l border-slate-100 overflow-y-auto bg-white">
        <div className="mb-8">
          <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-3 block">
            Execution in Motion
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase mb-4 leading-tight">
            {selectedVideo.title}
          </h3>
          
          <div className="relative mb-6 w-full">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 1.2, ease: "circOut" }}
              className="flex items-center gap-2"
            >
              <div className="grow h-[2px] bg-red-600"></div>
              <div className="w-1.5 h-1.5 bg-red-600 rotate-45 shrink-0"></div>
            </motion.div>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              {selectedVideo.description}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-6 border-t border-slate-50">
          <a 
            href="https://wa.me/2348033562978" 
            target="_blank" 
            rel="noreferrer"
            className="w-full block text-center py-4 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all active:scale-95"
          >
            Inquire About This Project
          </a>
        </div>
      </div>
    </div>
  </motion.div>
)}
      </section>
    </Layout>
  );
};

export default OurProcess;