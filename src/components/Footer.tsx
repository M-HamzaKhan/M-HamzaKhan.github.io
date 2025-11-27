import { motion } from "motion/react";
import { Github, GraduationCap, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a1f4d] to-[#0a0e27] py-12 px-6 border-t border-[#00BCD4]/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 bg-[#00BCD4]/10 backdrop-blur-sm rounded-[16px] px-5 py-2 mb-4 border border-[#00BCD4]/30">
              <Sparkles className="w-4 h-4 text-[#00BCD4]" />
              <span className="text-white text-sm">
                Powered by Big Data & ML
              </span>
            </div>
          </div>

          <h3 className="text-white mb-4">Project Team</h3>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
            <div className="text-center">
              <div className="text-white text-sm mb-0.5">Ahmad Umer Farooq</div>
              <div className="text-gray-400 text-xs">ML Engineer</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[#00BCD4]/30" />
            <div className="text-center">
              <div className="text-white text-sm mb-0.5">Muhammad Hamza Khan</div>
              <div className="text-gray-400 text-xs">Data Engineer</div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mb-6">
            <GraduationCap className="w-4 h-4 text-[#00BCD4]" />
            <p className="text-gray-300 text-sm">
              Institute of Management Sciences, Peshawar
            </p>
          </div>

          <div className="border-t border-[#00BCD4]/20 pt-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-xs">
              <div className="flex items-center gap-2 text-gray-400">
                <Github className="w-3 h-3" />
                <span>GitHub Pages Compatible</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-[#00BCD4]/40" />
              <div className="text-gray-400">
                Healthcare Claims Fraud Detection © 2024
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
