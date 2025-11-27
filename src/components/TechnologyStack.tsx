import { motion } from "motion/react";
import {
  Sparkles,
  Database,
  Workflow,
  Code,
  Brain,
  Package,
  Container,
  BarChart3,
} from "lucide-react";

export function TechnologyStack() {
  const technologies = [
    {
      name: "Apache Spark",
      category: "Data Processing",
      icon: Sparkles,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Apache Kafka",
      category: "Stream Processing",
      icon: Workflow,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Hadoop HDFS",
      category: "Distributed Storage",
      icon: Database,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Python",
      category: "Programming Language",
      icon: Code,
      color: "from-blue-500 to-yellow-400",
    },
    {
      name: "TensorFlow",
      category: "Deep Learning",
      icon: Brain,
      color: "from-orange-600 to-orange-400",
    },
    {
      name: "MLflow",
      category: "ML Lifecycle",
      icon: Package,
      color: "from-blue-600 to-cyan-500",
    },
    {
      name: "Docker + Kubernetes",
      category: "Container Orchestration",
      icon: Container,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Grafana + Tableau",
      category: "Visualization & Monitoring",
      icon: BarChart3,
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#1a1f4d] to-[#0a0e27] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1761305135230-a626d3c8d0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb25jZXB0fGVufDF8fHx8MTc2NDI1NTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="ML Background"
          className="w-[600px] h-[600px] object-contain"
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
          <h2 className="text-white mb-4">Technology Stack</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade technologies for big data & ML infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-[#1a1f4d]/50 backdrop-blur-sm rounded-[20px] shadow-lg hover:shadow-2xl hover:shadow-[#00BCD4]/20 transition-all duration-300 p-5 border border-[#00BCD4]/20 hover:border-[#00BCD4]/50 cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-[14px] bg-gradient-to-br ${tech.color} shadow-lg shadow-${tech.color}/30 flex items-center justify-center mb-3`}
              >
                <tech.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white mb-1 text-sm">{tech.name}</h4>
              <p className="text-gray-400 text-xs">{tech.category}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-[#00BCD4]/10 to-[#00BCD4]/5 rounded-[22px] p-6 border border-[#00BCD4]/30"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-[#00BCD4] mb-1 text-sm">Distributed Processing</div>
              <p className="text-gray-400 text-xs">
                Spark & Hadoop for petabyte-scale workloads
              </p>
            </div>
            <div>
              <div className="text-[#00BCD4] mb-1 text-sm">ML Infrastructure</div>
              <p className="text-gray-400 text-xs">
                Experiment tracking & model registry
              </p>
            </div>
            <div>
              <div className="text-[#00BCD4] mb-1 text-sm">Cloud Native</div>
              <p className="text-gray-400 text-xs">
                K8s for auto-scaling & resilience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
