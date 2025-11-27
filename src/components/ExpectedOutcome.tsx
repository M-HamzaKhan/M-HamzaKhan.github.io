import { motion } from "motion/react";
import { Shield, TrendingUp, Zap, DollarSign } from "lucide-react";

export function ExpectedOutcomes() {
  const outcomes = [
    {
      icon: Shield,
      title: "High Fraud Detection Accuracy",
      metric: "95%+",
      description:
        "Precision and recall metrics exceeding 95% through ensemble ML models and advanced feature engineering",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "100M+ Claims Processing",
      metric: "100M+",
      description:
        "Scalable big data infrastructure processing over 100 million healthcare claims annually",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Zap,
      title: "Real-Time Scoring",
      metric: "<50ms",
      description:
        "Ultra-low latency predictions with containerized deployment and caching for instant fraud detection",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: DollarSign,
      title: "Reduced Financial Loss",
      metric: "$2B+",
      description:
        "Preventing billions in fraudulent claims through intelligent pattern recognition and anomaly detection",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0a0e27] to-[#1a1f4d] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 opacity-5 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1740908900906-a51032597559?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmF1ZCUyMGRldGVjdGlvbiUyMHNlY3VyaXR5fGVufDF8fHx8MTc2NDI1NTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Security Background"
          className="w-[500px] h-[500px] object-contain"
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
          <h2 className="text-white mb-4">Expected Outcomes</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Measurable impact and performance metrics from our fraud detection pipeline.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="bg-[#1a1f4d]/50 backdrop-blur-sm rounded-[22px] shadow-xl hover:shadow-2xl hover:shadow-[#00BCD4]/20 transition-all duration-500 p-6 border border-[#00BCD4]/20 hover:border-[#00BCD4]/50"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-[16px] bg-gradient-to-br ${outcome.gradient} shadow-lg flex items-center justify-center flex-shrink-0`}
                >
                  <outcome.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-2 text-sm">{outcome.title}</h3>
                  <div
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${outcome.gradient} mb-2`}
                  >
                    {outcome.metric}
                  </div>
                  <p className="text-gray-400 text-xs">{outcome.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-[#00BCD4] to-[#00BCD4]/80 rounded-[22px] p-6 shadow-2xl shadow-[#00BCD4]/30"
        >
          <div className="text-center text-white">
            <h3 className="mb-3">Business Impact</h3>
            <p className="max-w-3xl mx-auto text-white/90 mb-6 text-sm">
              ML-powered fraud detection delivering measurable ROI through reduced false positives and accelerated claim processing.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <div className="text-white/80 text-xs">Cost Savings</div>
                <div className="text-sm">40% Reduction</div>
              </div>
              <div>
                <div className="text-white/80 text-xs">Processing Time</div>
                <div className="text-sm">60% Faster</div>
              </div>
              <div>
                <div className="text-white/80 text-xs">Accuracy</div>
                <div className="text-sm">3x Better</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
