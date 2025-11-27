import { motion } from "motion/react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function ChallengesSection() {
  const items = [
    {
      challenge: "Class Imbalance",
      challengeDesc: "Fraudulent claims: only 1-2% of total, severe imbalance",
      solution: "SMOTE & Class Weights",
      solutionDesc: "Synthetic oversampling + class weights for balanced training",
    },
    {
      challenge: "Feature Complexity",
      challengeDesc: "Complex relationships: providers, patients, procedures",
      solution: "Graph Features",
      solutionDesc: "Network analysis captures relationships & collusion patterns",
    },
    {
      challenge: "Scalability",
      challengeDesc: "100M+ claims need distributed infrastructure",
      solution: "Spark Scaling",
      solutionDesc: "Distributed processing with Hadoop HDFS for horizontal scaling",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#1a1f4d] to-[#0a0e27]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Challenges & Solutions</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Key technical challenges and innovative solutions.
          </p>
        </motion.div>

        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-4 bg-[#1a1f4d]/30 rounded-[20px] shadow-lg p-6 border border-[#00BCD4]/20"
            >
              {/* Challenge */}
              <div className="bg-[#1a1f4d]/50 rounded-[16px] p-4 border border-red-500/30">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-[12px] bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-red-400 mb-0.5 text-xs">Challenge</h4>
                    <h3 className="text-white text-sm">{item.challenge}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-xs">{item.challengeDesc}</p>
              </div>

              {/* Solution */}
              <div className="bg-[#1a1f4d]/50 rounded-[16px] p-4 border border-green-500/30">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-[12px] bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-green-400 mb-0.5 text-xs">Solution</h4>
                    <h3 className="text-white text-sm">{item.solution}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-xs">{item.solutionDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-gradient-to-r from-[#00BCD4]/10 to-transparent rounded-[20px] p-6 border border-[#00BCD4]/30"
        >
          <h3 className="text-[#00BCD4] mb-4 text-center text-sm">
            Additional Considerations
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#1a1f4d]/50 rounded-[14px] p-3">
              <p className="text-white mb-1 text-xs">Data Privacy</p>
              <p className="text-gray-400 text-xs">
                HIPAA-compliant with encryption
              </p>
            </div>
            <div className="bg-[#1a1f4d]/50 rounded-[14px] p-3">
              <p className="text-white mb-1 text-xs">Model Drift</p>
              <p className="text-gray-400 text-xs">
                Automated retraining pipelines
              </p>
            </div>
            <div className="bg-[#1a1f4d]/50 rounded-[14px] p-3">
              <p className="text-white mb-1 text-xs">Real-Time</p>
              <p className="text-gray-400 text-xs">
                Optimized inference & caching
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
