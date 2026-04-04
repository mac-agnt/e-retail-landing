"use client";

import { motion } from "framer-motion";
import { Building, Ruler } from "lucide-react";
import { Section } from "@/components/section";
import { BeveledPanel } from "@/components/beveled-panel";
import type { ProductData } from "@/lib/products-data";

function DimensionsBlock({ product }: { product: ProductData }) {
  return (
    <div className="space-y-6">
      {"noteUnit" in product.dimensions && product.dimensions.noteUnit && (
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Note unit
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-4">
            <div className="text-muted">
              Width <span className="block font-mono text-text">{product.dimensions.noteUnit.width}</span>
            </div>
            <div className="text-muted">
              Height <span className="block font-mono text-text">{product.dimensions.noteUnit.height}</span>
            </div>
            <div className="text-muted">
              Depth <span className="block font-mono text-text">{product.dimensions.noteUnit.depth}</span>
            </div>
            <div className="text-muted">
              Weight <span className="block font-mono text-text">{product.dimensions.noteUnit.weight}</span>
            </div>
          </div>
        </div>
      )}
      {"coinUnit" in product.dimensions && product.dimensions.coinUnit && (
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Coin unit
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-4">
            <div className="text-muted">
              Width <span className="block font-mono text-text">{product.dimensions.coinUnit.width}</span>
            </div>
            <div className="text-muted">
              Height <span className="block font-mono text-text">{product.dimensions.coinUnit.height}</span>
            </div>
            <div className="text-muted">
              Depth <span className="block font-mono text-text">{product.dimensions.coinUnit.depth}</span>
            </div>
            <div className="text-muted">
              Weight <span className="block font-mono text-text">{product.dimensions.coinUnit.weight}</span>
            </div>
          </div>
        </div>
      )}
      {"combined" in product.dimensions && product.dimensions.combined && (
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Unit dimensions
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-4">
            <div className="text-muted">
              Width <span className="block font-mono text-text">{product.dimensions.combined.width}</span>
            </div>
            <div className="text-muted">
              Height <span className="block font-mono text-text">{product.dimensions.combined.height}</span>
            </div>
            <div className="text-muted">
              Depth <span className="block font-mono text-text">{product.dimensions.combined.depth}</span>
            </div>
            <div className="text-muted">
              Weight <span className="block font-mono text-text">{product.dimensions.combined.weight}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type Props = {
  product: ProductData;
};

export function ProductDimensionsSection({ product }: Props) {
  return (
    <Section id="dimensions" className="bg-panel">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BeveledPanel className="h-full p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Ruler className="h-7 w-7 text-accent" aria-hidden />
              <h3 className="text-xl font-semibold text-text">Dimensions</h3>
            </div>
            <DimensionsBlock product={product} />
          </BeveledPanel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
        >
          <BeveledPanel className="h-full p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Building className="h-7 w-7 text-accent" aria-hidden />
              <h3 className="text-xl font-semibold text-text">
                A Solution by {product.manufacturer}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted md:text-base">{product.manufacturerNote}</p>
          </BeveledPanel>
        </motion.div>
      </div>
    </Section>
  );
}
