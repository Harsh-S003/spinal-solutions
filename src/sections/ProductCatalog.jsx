import { useState } from "react";
import {
  ChevronDown,
  FileText,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

const products = [
  {
    id: 1,
    title: "SPINE-A-LIGN 464 TLSO W/STERNAL PAD",
    image: "/Spin-a-lign+464.webp",
    productDetails: (
      <div className="space-y-4 text-[#475569] text-sm leading-relaxed">
        <p>
          <span className="font-bold text-[#1e293b]">Model:</span> "CAFO - PLS"
          (Carbon Fiber Ankle Foot Orthotic Posterior Leaf Spring)
        </p>

        <p>
          <span className="font-bold text-[#1e293b]">Product Code:</span> EZ -
          "Size" - PLS (insert size XSL, XSR, SL, SR, ML, MR, LL, LR)
        </p>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            Super flexible calf band accommodates a wide range of circumferences
          </li>

          <li>Structurally reinforced in high stress areas</li>

          <li>Two piece design with height adjustment</li>

          <li>Full dynamic foot plate</li>
        </ul>

        <p>
          <span className="font-bold text-[#1e293b]">
            Prefabricated sizes available:
          </span>{" "}
          XS, Small, Medium and Large in right or left orientation
        </p>

        <p className="font-bold text-[#1e293b]">HCPC L1930</p>
      </div>
    ),

    warranty:
      "Every Spinal Solutions orthotic s guaranteed to free from defects in materials or workmanship for a period not to exceed one year from the date the orthotic is properly fitted to the patient.  If your spinal orthosis is defective, we will replace it or repair it at no charge to you.  Implied warranties, including those of fitness for a particular purpose and merchantability are limited to one year from the first day of patient use.  We will not pay for loss of time, inconvenience, loss of use, or any incidental or consequential damages. This warranty does not cover defects resulting from accidents, patient alterations, unauthorized repair, misuse, failure to follow instructions, fire, flood, or any other acts of God.Every Spinal Solutions orthotic s guaranteed to free from defects in materials or workmanship for a period not to exceed one year from the date the orthotic is properly fitted to the patient.  If your spinal orthosis is defective, we will replace it or repair it at no charge to you.  Implied warranties, including those of fitness for a particular purpose and merchantability are limited to one year from the first day of patient use.  We will not pay for loss of time, inconvenience, loss of use, or any incidental or consequential damages. This warranty does not cover defects resulting from accidents, patient alterations, unauthorized repair, misuse, failure to follow instructions, fire, flood, or any other acts of God.",
    orderForm: "/pdfs/order-form.pdf",
    whitePaper: "/pdfs/white-paper.pdf",
  },
  {
    id: 2,
    title: "VERTILOCK 464",
    image: "/VERTILOCK_464.webp",
    productDetails: (
      <div className="text-[#475569] text-sm leading-relaxed">
        It all begins with an idea. Maybe you want to launch a business. Maybe
        you want to turn a hobby into something more.
      </div>
    ),

    warranty:
      "Every Spinal Solutions orthotics guaranteed to free from defects in materials or workmanship for a period not to exceed one year from the date the orthotic is properly fitted to the patient.  If your spinal orthosis is defective, we will replace it or repair it at no charge to you.  Implied warranties, including those of fitness for a particular purpose and merchantability are limited to one year from the first day of patient use.  We will not pay for loss of time, inconvenience, loss of use, or any incidental or consequential damages. This warranty does not cover defects resulting from accidents, patient alterations, unauthorized repair, misuse, failure to follow instructions, fire, flood, or any other acts of God.Every Spinal Solutions orthotic s guaranteed to free from defects in materials or workmanship for a period not to exceed one year from the date the orthotic is properly fitted to the patient.  If your spinal orthosis is defective, we will replace it or repair it at no charge to you.  Implied warranties, including those of fitness for a particular purpose and merchantability are limited to one year from the first day of patient use.  We will not pay for loss of time, inconvenience, loss of use, or any incidental or consequential damages. This warranty does not cover defects resulting from accidents, patient alterations, unauthorized repair, misuse, failure to follow instructions, fire, flood, or any other acts of God.",
    orderForm: "/pdfs/order-form.pdf",
    whitePaper: "/pdfs/white-paper.pdf",
  },
  {
    id: 3,
    title: "SPINE-A-LIGN L0627 PREFAB BACK BRACE",
    image: "/Spine-a-lign+L0627.webp",
    productDetails: (
      <div className="text-[#475569] text-sm leading-relaxed">
        It all begins with an idea. Maybe you want to launch a business. Maybe
        you want to turn a hobby into something more.
      </div>
    ),

    warranty:
      "Every Spinal Solutions orthotics guaranteed to free from defects in materials or workmanship for a period not to exceed one year from the date the orthotic is properly fitted to the patient.  If your spinal orthosis is defective, we will replace it or repair it at no charge to you.  Implied warranties, including those of fitness for a particular purpose and merchantability are limited to one year from the first day of patient use.  We will not pay for loss of time, inconvenience, loss of use, or any incidental or consequential damages. This warranty does not cover defects resulting from accidents, patient alterations, unauthorized repair, misuse, failure to follow instructions, fire, flood, or any other acts of God.Every Spinal Solutions orthotic s guaranteed to free from defects in materials or workmanship for a period not to exceed one year from the date the orthotic is properly fitted to the patient.  If your spinal orthosis is defective, we will replace it or repair it at no charge to you.  Implied warranties, including those of fitness for a particular purpose and merchantability are limited to one year from the first day of patient use.  We will not pay for loss of time, inconvenience, loss of use, or any incidental or consequential damages. This warranty does not cover defects resulting from accidents, patient alterations, unauthorized repair, misuse, failure to follow instructions, fire, flood, or any other acts of God.",
    orderForm: "/pdfs/order-form.pdf",
    whitePaper: "/pdfs/white-paper.pdf",
  },
  {
    id: 4,
    title: "PREFAB RIGID TLSO / LSO",
    image: "/PREFAB_RIGID.webp",
    productDetails: (
      <div className="text-[#475569] text-sm leading-relaxed">
        <ul className="list-disc pl-5 space-y-3">
          <li>Rigid Spinal System</li>

          <li>Clamshell, Anterior Opening, Posterior Opening or BOB designs</li>

          <li>Finished or Unfinished</li>

          <li>Male or Female</li>

          <li>1/8", 3/16", or 1/4" Aliplast liner</li>

          <li>1/8", 5/32", or 3/16" LDPE or MDPE</li>

          <li>0°, 5°, 7°, 15°, 20° or 25° Lordosis</li>

          <li>Neutral, Slight PA, or Corpulent Abdominal relief</li>

          <li>High or Low Profile</li>

          <li>Closure kit includes Chicago screw attachment system</li>

          <li>
            Reinforced, extended Posterior Straps hold their position and are
            easy to locate
          </li>

          <li>Easily customized to fit Custom HCPC code criteria</li>

          <li>PDAC approved</li>
        </ul>
      </div>
    ),
    warranty:
      "Every Spinal Solutions orthotics guaranteed to free from defects in materials or workmanship for a period not to exceed one year from the date the orthotic is properly fitted to the patient.  If your spinal orthosis is defective, we will replace it or repair it at no charge to you.  Implied warranties, including those of fitness for a particular purpose and merchantability are limited to one year from the first day of patient use.  We will not pay for loss of time, inconvenience, loss of use, or any incidental or consequential damages. This warranty does not cover defects resulting from accidents, patient alterations, unauthorized repair, misuse, failure to follow instructions, fire, flood, or any other acts of God.Every Spinal Solutions orthotic s guaranteed to free from defects in materials or workmanship for a period not to exceed one year from the date the orthotic is properly fitted to the patient.  If your spinal orthosis is defective, we will replace it or repair it at no charge to you.  Implied warranties, including those of fitness for a particular purpose and merchantability are limited to one year from the first day of patient use.  We will not pay for loss of time, inconvenience, loss of use, or any incidental or consequential damages. This warranty does not cover defects resulting from accidents, patient alterations, unauthorized repair, misuse, failure to follow instructions, fire, flood, or any other acts of God.",
    orderForm: "/pdfs/order-form.pdf",
    whitePaper: "/pdfs/white-paper.pdf",
  },
  {
    id: 5,
    title: "PREFAB RIGID TLSO / LSO",
    image: "/PREFAB-2.webp",
    productDetails: (
      <div className="text-[#475569] text-sm leading-relaxed">
        It all begins with an idea. Maybe you want to launch a business. Maybe
        you want to turn a hobby into something more.
      </div>
    ),

    warranty:
      "Every Spinal Solutions orthotics guaranteed to free from defects in materials or workmanship for a period not to exceed one year from the date the orthotic is properly fitted to the patient.  If your spinal orthosis is defective, we will replace it or repair it at no charge to you.  Implied warranties, including those of fitness for a particular purpose and merchantability are limited to one year from the first day of patient use.  We will not pay for loss of time, inconvenience, loss of use, or any incidental or consequential damages. This warranty does not cover defects resulting from accidents, patient alterations, unauthorized repair, misuse, failure to follow instructions, fire, flood, or any other acts of God.Every Spinal Solutions orthotic s guaranteed to free from defects in materials or workmanship for a period not to exceed one year from the date the orthotic is properly fitted to the patient.  If your spinal orthosis is defective, we will replace it or repair it at no charge to you.  Implied warranties, including those of fitness for a particular purpose and merchantability are limited to one year from the first day of patient use.  We will not pay for loss of time, inconvenience, loss of use, or any incidental or consequential damages. This warranty does not cover defects resulting from accidents, patient alterations, unauthorized repair, misuse, failure to follow instructions, fire, flood, or any other acts of God.",
    orderForm: "/pdfs/order-form.pdf",
    whitePaper: "/pdfs/white-paper.pdf",
  },
];

const AccordionItem = ({ title, children, icon: Icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon className="w-4 h-4 text-[#00a3e0]" strokeWidth={2.2} />
          )}

          <span className="text-sm font-semibold text-[#1e293b]">{title}</span>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <div className="text-sm text-[#475569] leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="bg-white p-5">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[360px] object-contain"
        />
      </div>

      {/* Product Content */}
      <div className="px-6 pb-6">
        <h3 className="text-[#1e293b] text-xl font-bold leading-snug mb-4 min-h-[60px]">
          {product.title}
        </h3>

        <AccordionItem title="Product Details" icon={FileText}>
          {product.productDetails}
        </AccordionItem>

        <AccordionItem title="Warranty" icon={ShieldCheck}>
          {product.warranty}
        </AccordionItem>

        <AccordionItem title="Order Form" icon={ClipboardList}>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#00a3e0] font-semibold hover:text-[#71a82b] transition-colors"
          >
            Download Order Form
          </a>
        </AccordionItem>

        <AccordionItem title="Product White Paper" icon={FileText}>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#00a3e0] font-semibold hover:text-[#71a82b] transition-colors"
          >
            Download White Paper
          </a>
        </AccordionItem>
      </div>
    </div>
  );
};

const ProductCatalog = () => {
  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[#1e293b] text-2xl sm:text-3xl font-extrabold tracking-tight">
            Product Catalog
          </h2>

          <div className="h-[3px] w-12 bg-[#71a82b] rounded-full mt-3" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
