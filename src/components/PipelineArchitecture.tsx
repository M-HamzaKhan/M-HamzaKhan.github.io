import { motion } from "motion/react";
import { useState } from "react";
import {
  Upload,
  Cog,
  Sparkles,
  Brain,
  CheckCircle,
  Rocket,
  Activity,
  ChevronRight,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface PipelineStep {
  id: number;
  title: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
  details: {
    description: string;
    technologies: string[];
    keyPoints: string[];
  };
}

export function PipelineArchitecture() {
  const [selectedStep, setSelectedStep] = useState<PipelineStep | null>(null);

  const steps: PipelineStep[] = [
    {
      id: 1,
      title: "Data Ingestion",
      icon: Upload,
      color: "#00BCD4",
      gradient: "from-cyan-500 to-blue-500",
      details: {
        description: "Scalable ingestion from CMS sources using distributed processing.",
        technologies: ["Apache Spark", "Kafka", "HDFS"],
        keyPoints: [
          "Batch: 37M+ Medicare Part B records",
          "Stream: Real-time claim updates",
          "Validation at ingestion layer",
        ],
      },
    },
    {
      id: 2,
      title: "Processing & ETL",
      icon: Cog,
      color: "#0D47A1",
      gradient: "from-blue-600 to-indigo-600",
      details: {
        description: "ETL pipelines for cleaning and transforming healthcare data.",
        technologies: ["PySpark", "Pandas"],
        keyPoints: [
          "Missing data imputation",
          "Outlier detection & removal",
          "Schema mapping & deduplication",
        ],
      },
    },
    {
      id: 3,
      title: "Feature Engineering",
      icon: Sparkles,
      color: "#9C27B0",
      gradient: "from-purple-500 to-pink-500",
      details: {
        description: "Advanced features including graph-based network analysis.",
        technologies: ["NetworkX", "Scikit-learn"],
        keyPoints: [
          "Graph network features",
          "Aggregation & temporal patterns",
          "Behavioral deviation scores",
        ],
      },
    },
    {
      id: 4,
      title: "Model Training",
      icon: Brain,
      color: "#FF5722",
      gradient: "from-orange-500 to-red-500",
      details: {
        description: "Ensemble models and DNNs for fraud classification.",
        technologies: ["XGBoost", "TensorFlow", "PyTorch"],
        keyPoints: [
          "XGBoost for tabular data",
          "DNNs for pattern recognition",
          "SMOTE for class imbalance",
        ],
      },
    },
    {
      id: 5,
      title: "Evaluation",
      icon: CheckCircle,
      color: "#4CAF50",
      gradient: "from-green-500 to-emerald-500",
      details: {
        description: "Comprehensive evaluation using multiple metrics.",
        technologies: ["MLflow", "SHAP"],
        keyPoints: [
          "Precision, Recall, F1-Score",
          "ROC-AUC analysis",
          "SHAP for interpretability",
        ],
      },
    },
    {
      id: 6,
      title: "Deployment",
      icon: Rocket,
      color: "#2196F3",
      gradient: "from-blue-500 to-cyan-500",
      details: {
        description: "Containerized deployment with auto-scaling.",
        technologies: ["Docker", "Kubernetes", "FastAPI"],
        keyPoints: [
          "Dockerized model serving",
          "K8s auto-scaling",
          "<50ms response time",
        ],
      },
    },
    {
      id: 7,
      title: "Monitoring",
      icon: Activity,
      color: "#FF9800",
      gradient: "from-yellow-500 to-orange-500",
      details: {
        description: "Continuous monitoring and drift detection.",
        technologies: ["Grafana", "Prometheus"],
        keyPoints: [
          "Real-time dashboards",
          "Data drift detection",
          "Auto-retraining triggers",
        ],
      },
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0a0e27] to-[#1a1f4d] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1690627931320-16ac56eb2588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMG5ldHdvcmt8ZW58MXx8fHwxNzY0MjA1ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cloud Network"
          className="w-[500px] h-[500px] object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Pipeline Architecture</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            End-to-end ML pipeline from ingestion to deployment. Click any step for details.
          </p>
        </motion.div>

        {/* Desktop Horizontal Pipeline */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Connection Lines */}
            <div className="absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-[#00BCD4] via-[#00BCD4]/50 to-[#00BCD4] z-0" />

            <div className="relative z-10 grid grid-cols-7 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -8 }}
                  onClick={() => setSelectedStep(step)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <div
                    className={`w-24 h-24 rounded-[20px] bg-gradient-to-br ${step.gradient} shadow-xl group-hover:shadow-2xl group-hover:shadow-[#00BCD4]/40 transition-all duration-300 flex items-center justify-center mb-3 relative`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00BCD4] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs">{step.id}</span>
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-300 group-hover:text-[#00BCD4] transition-colors duration-300 max-w-[90px]">
                    {step.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Pipeline */}
        <div className="lg:hidden space-y-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setSelectedStep(step)}
              className="bg-[#1a1f4d]/50 backdrop-blur-sm rounded-[18px] shadow-lg border border-[#00BCD4]/20 hover:border-[#00BCD4]/50 transition-all duration-300 p-4 cursor-pointer flex items-center gap-3"
            >
              <div
                className={`w-14 h-14 rounded-[14px] bg-gradient-to-br ${step.gradient} shadow-md flex items-center justify-center relative flex-shrink-0`}
              >
                <step.icon className="w-7 h-7 text-white" />
                <div className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-[#00BCD4] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-xs">{step.id}</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-white text-sm mb-0.5">{step.title}</h4>
                <p className="text-gray-400 text-xs">Tap for details</p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#00BCD4]" />
            </motion.div>
          ))}
        </div>

        {/* Modal Dialog */}
        <Dialog open={!!selectedStep} onOpenChange={() => setSelectedStep(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-[22px] bg-[#1a1f4d] border border-[#00BCD4]/30">
            {selectedStep && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-14 h-14 rounded-[16px] bg-gradient-to-br ${selectedStep.gradient} shadow-xl flex items-center justify-center`}
                    >
                      <selectedStep.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <DialogTitle className="text-white">
                        {selectedStep.title}
                      </DialogTitle>
                      <p className="text-gray-400 text-sm">
                        Step {selectedStep.id} of {steps.length}
                      </p>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-4 mt-3">
                  <div>
                    <p className="text-gray-300 text-sm">
                      {selectedStep.details.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#00BCD4] mb-2 text-sm">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStep.details.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-[#00BCD4]/20 text-[#00BCD4] rounded-full text-xs border border-[#00BCD4]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#00BCD4] mb-2 text-sm">Key Points</h4>
                    <ul className="space-y-2">
                      {selectedStep.details.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] mt-1.5 flex-shrink-0" />
                          <span className="text-gray-300 flex-1 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
