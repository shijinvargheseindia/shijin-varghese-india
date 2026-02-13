import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Briefcase, Building, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

interface Position {
  role: string;
  organization: string;
  detail?: string;
}

const parsePosition = (raw: string): Position => {
  const dashIndex = raw.indexOf("–");
  if (dashIndex === -1) return { role: raw, organization: "" };
  const role = raw.slice(0, dashIndex).trim();
  const rest = raw.slice(dashIndex + 1).trim();
  const parenIndex = rest.indexOf("(");
  if (parenIndex === -1) return { role, organization: rest };
  return {
    role,
    organization: rest.slice(0, parenIndex).trim(),
    detail: rest.slice(parenIndex).trim(),
  };
};

const currentPositions = [
  "Managing Director and Family Wealth Advisor – SVI Wealth Management",
  "Managing Director and Transformation Coach – SVI NextGen Pro",
  "Chairman – Dr. APJ Abdul Kalam Memorial Sandwanam Charitable Trust, Kerala (Recipient of the Government of Kerala's Best NGO Award)",
  "Kerala State President – National Integrated Forum of Artists and Activists (NIFAA) (Recipient of the Government of India's Prestigious Best NGO Award)",
  "General Secretary – Central Travancore Development Council (CTDC)",
  "General Secretary – Mar Chrysostom Foundation, Pathanamthitta",
  "Pathanamthitta District Coordinator – 24 Connect",
  "Member – Janamaitri Police Station, Pathanamthitta",
  "Executive Member – Souparnika Arts and Sports Club, Kaipattoor",
  "Resource Person – National Service Scheme (NSS), MY Bharat, 24 Study Abroad",
];

const governmentRoles = [
  "Advisory Board Member – Nehru Yuva Kendra, Alappuzha (Government of India)",
  "District Award Committee Member – Nehru Yuva Kendra, Pathanamthitta (Government of India)",
  "Social Worker Member – District Legal Services Authority (DLSA)",
  "Youth Coordinator – Kerala State Youth Welfare Board (Government of Kerala)",
  "District Social Media Coordinator – Kerala State Youth Welfare Board, Pathanamthitta",
  "District Marunnuvandi Project Coordinator (COVID-19 Special Project) – Kerala State Youth Welfare Board, Pathanamthitta",
  "SWEEP Election Campaign Coordinator – Election Commission of India, Pathanamthitta",
  "Resource Person – Suchithwa Mission, Pathanamthitta District",
  "Resource Person – Suchithwa Mission, Alappuzha District",
  "Para Legal Volunteer – District Legal Services Authority, Pathanamthitta",
];

const internationalRoles = [
  "V-Force Volunteer – United Nations India",
  "Global Peace Ambassador – Global Peace Chain",
  "Member – World Federation Against Drugs",
  "Member – International Youth Council",
  "Member – United Youth Circuit",
  "Advisor – Generation of Peace and Literacy, Afghanistan",
  "Council of Representative – World Peace Committee",
  "Brand Ambassador – United Nation World Community Organisation",
  "Youth Ambassador – International Youth Society",
  "National Executive Member – National Youth Awardees Federation of India",
  "Privileged Member – Confederation of Young Leaders",
  "National Core Committee Member – Divya Yuva Manch",
  "Kerala State Coordinator – Global Youth Peace Committee (GYPC)",
];

const academicRoles = [
  "Founder & Executive Member – Chirag Foundation",
  "Secretary – Bharatheeya Vicharakendram",
  "Founder and President – Any Time Blood Any Where in Kerala",
  "Executive Member – Souparnika Arts & Sports Club",
  "Member – Gulmohar Foundation",
  "Legal Aid Clinic Incharge – Vallicode Grama Panchayath",
  "Youth Coordinator – Vallicode Grama Panchayath",
  "Secretary – Red Ribbon Club, NSS College Pandalam",
  "Secretary – Teen's Club, NSS College Pandalam",
  "Secretary – Environmental Club, NSS College Pandalam",
  "Secretary – Nature Club, NSS College Pandalam",
  "Secretary – Anti-Narcotic Cell, NSS College Pandalam",
  "Secretary – Bhoomitrasna Club, NSS College Pandalam",
  "Secretary – Sports Club, NSS College Pandalam",
  "Kerala Team Leader – National Mega Camp of NSS, Jharkhand",
  "Volunteer Secretary – National Service Scheme (NSS), NSS College, Pandalam",
];

interface PositionCardProps {
  position: Position;
  index: number;
}

const PositionCard = ({ position, index }: PositionCardProps) => (
  <motion.div
    className="group relative pl-8 md:pl-10"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.35, delay: index * 0.04 }}
  >
    {/* Timeline dot */}
    <div className="absolute left-0 top-3 w-3 h-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300" />
    {/* Timeline line */}
    <div className="absolute left-[5px] top-6 bottom-0 w-[2px] bg-border" />

    <div className="pb-6">
      <div className="bg-card rounded-lg border border-border/60 px-5 py-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)] transition-shadow duration-300">
        <p className="font-semibold text-foreground leading-snug text-[0.95rem]">
          {position.role}
        </p>
        {position.organization && (
          <p className="text-muted-foreground font-medium text-sm mt-1">
            {position.organization}
          </p>
        )}
        {position.detail && (
          <p className="text-muted-foreground/70 text-xs mt-1.5 italic">
            {position.detail}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

interface PositionSectionProps {
  title: string;
  icon: React.ElementType;
  positions: string[];
}

const PositionSection = ({ title, icon: Icon, positions }: PositionSectionProps) => {
  const parsed = positions.map(parsePosition);

  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground tracking-tight">
            {title}
          </h2>
        </motion.div>

        <div className="relative">
          {parsed.map((position, index) => (
            <PositionCard key={index} position={position} index={index} />
          ))}
          {/* Hide the last timeline tail */}
          <div className="absolute left-[5px] bottom-0 w-[2px] h-6 bg-background" />
        </div>
      </div>
    </section>
  );
};

const Positions = () => {
  return (
    <Layout>
      <PageHeader
        title="Positions Held"
        subtitle="Leadership roles across government, national, international, and community organizations"
      />

      <div className="bg-background">
        <PositionSection
          title="Current Positions"
          icon={Briefcase}
          positions={currentPositions}
        />

        {/* Divider with label */}
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-4 py-4">
            <div className="flex-1 h-px bg-border" />
            <span className="font-serif text-lg md:text-xl font-semibold text-muted-foreground whitespace-nowrap">
              Previous Leadership Roles
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>

        <PositionSection
          title="Government & Statutory Roles"
          icon={Building}
          positions={governmentRoles}
        />

        <PositionSection
          title="National & International Organizations"
          icon={Globe}
          positions={internationalRoles}
        />

        <PositionSection
          title="Academic & Community Organizations"
          icon={Users}
          positions={academicRoles}
        />
      </div>
    </Layout>
  );
};

export default Positions;
