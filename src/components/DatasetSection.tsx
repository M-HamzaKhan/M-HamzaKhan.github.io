import { motion } from "motion/react";
import { Download, Database, FileText, Table } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function DatasetSection() {
  const datasets = [
    {
      title: "Medicare Provider Utilization & Payment (Part B)",
      description:
        "Comprehensive data on services and procedures provided to Medicare beneficiaries by physicians and other healthcare professionals.",
      records: "37M+",
      attributes: "50+",
      format: "CSV",
      url: "https://data.cms.gov/provider-summary-by-type-of-service/medicare-physician-other-practitioners/medicare-physician-other-practitioners-by-provider-and-service",
      highlights: [
        "Provider demographics & specialties",
        "Service utilization metrics",
        "Payment & beneficiary data",
      ],
    },
    {
      title: "Medicare Part D Prescriber Dataset",
      description:
        "Detailed prescription drug event data including prescriber information, drug costs, and beneficiary demographics.",
      records: "25M+",
      attributes: "45+",
      format: "CSV",
      url: "https://data.cms.gov/provider-summary-by-type-of-service/medicare-part-d-prescribers",
      highlights: [
        "Prescriber credentials & IDs",
        "Drug cost & utilization data",
        "Pharmacy supplier information",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#1a1f4d] to-[#0a0e27] relative overflow-hidden">
      {/* Background Chart Illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDE0OTc0OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Chart Background"
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
          <h2 className="text-white mb-4">Dataset Specification</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            CMS Medicare datasets with 60M+ records for training and validation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {datasets.map((dataset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#1a1f4d]/50 backdrop-blur-sm rounded-[22px] shadow-2xl border border-[#00BCD4]/20 hover:border-[#00BCD4]/50 transition-all duration-500 p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-[#00BCD4] to-[#00BCD4]/70 rounded-[16px] shadow-lg shadow-[#00BCD4]/30">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-2">{dataset.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-[#00BCD4]/20 text-[#00BCD4] rounded-full border border-[#00BCD4]/30"
                    >
                      <Table className="w-3 h-3 mr-1" />
                      {dataset.records} Records
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {dataset.attributes} Attributes
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mb-4 text-sm">{dataset.description}</p>

              <div className="mb-4">
                <h4 className="text-[#00BCD4] mb-2 text-sm">Key Features</h4>
                <ul className="space-y-1.5">
                  {dataset.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] mt-1.5 flex-shrink-0" />
                      <span className="text-gray-400 text-xs">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-[#00BCD4] to-[#00BCD4]/80 hover:from-[#00BCD4]/90 hover:to-[#00BCD4]/70 text-white rounded-[18px] shadow-lg shadow-[#00BCD4]/30 hover:shadow-xl hover:shadow-[#00BCD4]/50 transition-all duration-300"
                onClick={() => window.open(dataset.url, "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Dataset
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}