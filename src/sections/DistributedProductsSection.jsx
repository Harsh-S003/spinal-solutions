import { useState } from "react";
import { ChevronDown, FileText, ShieldCheck } from "lucide-react";

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4"
      >
        <span className="text-sm font-medium text-[#1e293b]">{title}</span>

        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && <div className="pb-4 text-sm text-[#475569]">{children}</div>}
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[420px] object-contain"
      />

      <h3 className="text-center text-[#1e293b] font-semibold text-lg mt-4 mb-4">
        {product.title}
      </h3>

      <AccordionItem title="Download White Paper">
        <a
          href={product.whitePaper}
          target="_blank"
          rel="noreferrer"
          className="text-[#00a3e0] font-medium"
        >
          Download White Paper
        </a>
      </AccordionItem>

      <AccordionItem title="Download Order Form">
        <a
          href={product.orderForm}
          target="_blank"
          rel="noreferrer"
          className="text-[#00a3e0] font-medium"
        >
          Download Order Form
        </a>
      </AccordionItem>

      <AccordionItem title="Warranty">{product.warranty}</AccordionItem>
    </div>
  );
};

const products = [
  {
    id: 1,
    category: "Knee Brace",
    title: "OA KNEE BRACE",
    image: "/KneeBrace.webp",
    whitePaper: "/pdfs/oa-whitepaper.pdf",
    orderForm: "/pdfs/oa-order-form.pdf",
    warranty: "Warranty content",
  },

  {
    id: 2,
    category: "Knee Brace",
    title: "ACL/PCL KNEE BRACE",
    image: "/ACL.webp",
    whitePaper: "/pdfs/acl-whitepaper.pdf",
    orderForm: "/pdfs/acl-order-form.pdf",
    warranty: "Warranty content",
  },

  {
    id: 3,
    category: "Knee Brace",
    title: "POST-OP KNEE BRACE",
    image: "/PostOp.webp",
    whitePaper: "/pdfs/postop-whitepaper.pdf",
    orderForm: "/pdfs/postop-order-form.pdf",
    warranty: "Warranty content",
  },

  {
    id: 4,
    category: "Knee Brace",
    title: "OSTEOARTHRITIS UNLOADER KNEE BRACE",
    image: "/Unloader.webp",
    whitePaper: "/pdfs/oa2-whitepaper.pdf",
    orderForm: "/pdfs/oa2-order-form.pdf",
    warranty: "Warranty content",
  },

  {
    id: 5,
    category: "Knee Brace",
    title: "WRAP AROUND KNEE BRACE",
    image: "/WrapKneeBrace.webp",
    whitePaper: "/pdfs/wrap-whitepaper.pdf",
    orderForm: "/pdfs/wrap-order-form.pdf",
    warranty: "Warranty content",
  },
  {
  id: 6,
  category: "Ankle Foot Orthosis",
  title: "SHORT PNEUMATIC WALKING BOOT",
  image: "/ShortPneumaticBoot.webp",
  whitePaper: "/pdfs/boot-whitepaper.pdf",
  orderForm: "/pdfs/boot-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 7,
  category: "Ankle Foot Orthosis",
  title: "APO DYNAMIC CARBON AFO",
  image: "/APODynamicAFO.webp",
  whitePaper: "/pdfs/apo-whitepaper.pdf",
  orderForm: "/pdfs/apo-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 8,
  category: "Ankle Foot Orthosis",
  title: "EZ-OP CARBON FIBER AFO",
  image: "/EZOPFlyer.webp",
  whitePaper: "/pdfs/ezop-whitepaper.pdf",
  orderForm: "/pdfs/ezop-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 9,
  category: "Ankle Foot Orthosis",
  title: "TALL PNEUMATIC BOOT",
  image: "/TallBoot.webp",
  whitePaper: "/pdfs/tall-boot-whitepaper.pdf",
  orderForm: "/pdfs/tall-boot-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 10,
  category: "Ankle Foot Orthosis",
  title: "PREMIUM PNEUMATIC BOOT",
  image: "/PremiumBoot.webp",
  whitePaper: "/pdfs/premium-boot-whitepaper.pdf",
  orderForm: "/pdfs/premium-boot-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 11,
  category: "Ankle Foot Orthosis",
  title: "EZ ATB CARBON FIBER AFO",
  image: "/OPAFO.webp",
  whitePaper: "/pdfs/ezatb-whitepaper.pdf",
  orderForm: "/pdfs/ezatb-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 12,
  category: "Ankle Foot Orthosis",
  title: "EZ PLS AFO",
  image: "/PLSAnkle.webp",
  whitePaper: "/pdfs/ezpls-whitepaper.pdf",
  orderForm: "/pdfs/ezpls-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 13,
  category: "Ankle Foot Orthosis",
  title: "NIGHT SPLINT",
  image: "/NIGHT2.webp",
  whitePaper: "/pdfs/night-splint-whitepaper.pdf",
  orderForm: "/pdfs/night-splint-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 14,
  category: "Ankle Foot Orthosis",
  title: "PODUS BOOT",
  image: "/podussquare.webp",
  whitePaper: "/pdfs/podus-boot-whitepaper.pdf",
  orderForm: "/pdfs/podus-boot-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 15,
  category: "Upper Extremity",
  title: "POST OP TELESCOPING ELBOW BRACE",
  image: "/TelescopingElbow.webp",
  whitePaper: "/pdfs/elbow-brace-whitepaper.pdf",
  orderForm: "/pdfs/elbow-brace-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 16,
  category: "Upper Extremity",
  title: "WRIST BRACE",
  image: "/WristBrace.webp",
  whitePaper: "/pdfs/wrist-brace-whitepaper.pdf",
  orderForm: "/pdfs/wrist-brace-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 17,
  category: "Upper Extremity",
  title: "HUMERAL FRACTURE BRACE",
  image: "/HumeralFractureBrace.webp",
  whitePaper: "/pdfs/humeral-brace-whitepaper.pdf",
  orderForm: "/pdfs/humeral-brace-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 18,
  category: "Upper Extremity",
  title: "WRIST BRACE WITH THUMB",
  image: "/WristBraceThumb.webp",
  whitePaper: "/pdfs/wrist-thumb-whitepaper.pdf",
  orderForm: "/pdfs/wrist-thumb-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 19,
  category: "Upper Extremity",
  title: "HAND SPLINT",
  image: "/HandSplint.webp",
  whitePaper: "/pdfs/hand-splint-whitepaper.pdf",
  orderForm: "/pdfs/hand-splint-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 20,
  category: "Upper Extremity",
  title: "CERVICAL THORACIC ORTHOSIS",
  image: "/NECK.webp",
  whitePaper: "/pdfs/cto-whitepaper.pdf",
  orderForm: "/pdfs/cto-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 21,
  category: "Prefab Spinal",
  title: "SPINE-A-LIGN L0627 PREFAB BACK BRACE",
  image: "/SpinealignL0627.webp",
  whitePaper: "/pdfs/spine-l0627-whitepaper.pdf",
  orderForm: "/pdfs/spine-l0627-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 22,
  category: "Prefab Spinal",
  title: "VERTILOCK 464",
  image: "/Vertilock464.webp",
  whitePaper: "/pdfs/vertilock-whitepaper.pdf",
  orderForm: "/pdfs/vertilock-order-form.pdf",
  warranty: "Warranty content",
},
{
  id: 23,
  category: "Prefab Spinal",
  title: "SPINE-A-LIGN 464 TLSO W/STERNAL PAD",
  image: "/Spinalign4642.webp",
  whitePaper: "/pdfs/spine-464-whitepaper.pdf",
  orderForm: "/pdfs/spine-464-order-form.pdf",
  warranty: "Warranty content",
},
];

const tabs = [
  "Knee Brace",
  "Ankle Foot Orthosis",
  "Upper Extremity",
  "Prefab Spinal",
];

const DistributedProductsSection = () => {
  const [activeTab, setActiveTab] = useState("Knee Brace");

  const filteredProducts = products.filter(
    (product) => product.category === activeTab,
  );

  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[#1e293b] text-2xl sm:text-3xl font-extrabold">
            Distributed Products
          </h2>

          <div className="h-[3px] w-12 bg-[#71a82b] rounded-full mt-3" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 border-b border-slate-200 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-[#00a3e0] text-white"
                  : "bg-white text-[#1e293b] border border-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistributedProductsSection;
