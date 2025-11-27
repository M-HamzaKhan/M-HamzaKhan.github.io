import { motion } from "motion/react";
import { Database, Cloud, Brain, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMEFJfGVufDF8fHx8MTc2NDI1NTQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Healthcare AI Technology"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27]/90 via-[#1a1f4d]/85 to-[#00BCD4]/80" />
      </div>

      {/* Floating Animated Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-20 z-10 opacity-20"
      >
        <Cloud className="w-16 h-16 text-white" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-32 z-10 opacity-20"
      >
        <Database className="w-20 h-20 text-white" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 right-24 z-10 opacity-20"
      >
        <Brain className="w-24 h-24 text-white" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6 tracking-tight">
              Healthcare Claims Fraud Detection
            </h1>
            <h2 className="text-white/90 mb-4">
              Big Data & ML Pipeline
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 mb-12 max-w-3xl mx-auto"
          >
            End-to-End Architecture • Dataset • ML Models • Deployment
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white border-0 rounded-[20px] px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open(
                  "https://data.cms.gov/provider-summary-by-type-of-service/medicare-physician-other-practitioners/medicare-physician-other-practitioners-by-provider-and-service",
                  "_blank"
                )
              }
            >
              View Dataset (Part B)
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              className="bg-white hover:bg-gray-50 text-[#0D47A1] border-0 rounded-[20px] px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open(
                  "https://data.cms.gov/provider-summary-by-type-of-service/medicare-part-d-prescribers",
                  "_blank"
                )
              }
            >
              View Dataset (Part D)
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-[20px] px-8 py-4">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-[#00BCD4]" />
                <span className="text-white/90">37M+ Records</span>
              </div>
              <div className="w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#00BCD4]" />
                <span className="text-white/90">ML Pipeline</span>
              </div>
              <div className="w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-[#00BCD4]" />
                <span className="text-white/90">Cloud Native</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
