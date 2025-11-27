import { motion } from "motion/react";
import { Shield, TrendingUp, Building2 } from "lucide-react";
import { useState } from "react";

export function UseCaseOverview() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const features = [
    {
      id: "fraud-types",
      icon: Shield,
      title: "Fraud Types",
      description: "Upcoding, unbundling, phantom billing, and kickback schemes",
    },
    {
      id: "big-data",
      icon: TrendingUp,
      title: "Why Big Data",
      description: "Processing 100M+ claims with real-time analytics at scale",
    },
    {
      id: "enterprise",
      icon: Building2,
      title: "Enterprise Use Case",
      description: "Saving billions in healthcare costs through ML-powered detection",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0a0e27] to-[#1a1f4d] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1755287066058-80c68aaaf0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2hhcnQlMjBhbmFseXNpc3xlbnwxfHx8fDE3NjQyNTU0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Use Case Overview</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Healthcare fraud costs $60B+ annually. Our ML pipeline detects fraudulent claims in real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1a1f4d]/50 backdrop-blur-sm rounded-[22px] shadow-2xl border border-[#00BCD4]/20 p-8"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-[#00BCD4] mb-4">The Challenge</h3>
              <p className="text-gray-300 mb-6">
                Traditional systems fail to detect sophisticated fraud patterns. ML + Big Data enables intelligent, scalable detection.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    onHoverStart={() => setHoveredIcon(feature.id)}
                    onHoverEnd={() => setHoveredIcon(null)}
                    className="flex items-start gap-4 p-4 rounded-[18px] bg-gradient-to-r from-[#00BCD4]/10 to-transparent hover:from-[#00BCD4]/20 cursor-pointer transition-all duration-300 border border-[#00BCD4]/10 hover:border-[#00BCD4]/40"
                  >
                    <div
                      className={`p-3 rounded-[14px] transition-all duration-300 ${
                        hoveredIcon === feature.id
                          ? "bg-[#00BCD4] shadow-lg shadow-[#00BCD4]/50"
                          : "bg-[#00BCD4]/20"
                      }`}
                    >
                      <feature.icon
                        className={`w-6 h-6 transition-colors duration-300 ${
                          hoveredIcon === feature.id
                            ? "text-white"
                            : "text-[#00BCD4]"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
