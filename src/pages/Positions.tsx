import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Briefcase, Building, GraduationCap, Globe, Users } from "lucide-react";

const currentPositions = [
  "Managing Director and Family Wealth Advisor – SVI Wealth Management",
  "Managing Director and Transformation Coach – SVI NextGen Pro",
  "Chairman – Dr. APJ Abdul Kalam Memorial Sandwanam Charitable Trust, Kerala (Recipient of the Government of Kerala's Best NGO Award)",
  "Kerala State President – National Integrated Forum of Artists and Activists (NIFAA) (Recipient of the Government of India's Prestigious Best NGO Award)",
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

interface PositionSectionProps {
  title: string;
  icon: React.ElementType;
  positions: string[];
  bgColor?: string;
}

const PositionSection = ({ title, icon: Icon, positions, bgColor = "bg-background" }: PositionSectionProps) => (
  <section className={`py-16 ${bgColor}`}>
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron to-india-green flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="grid gap-3 max-w-4xl">
        {positions.map((position, index) => (
          <div
            key={index}
            className="card-tricolour bg-card p-4 hover:shadow-card transition-shadow duration-300"
          >
            <p className="text-foreground">{position}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Positions = () => {
  return (
    <Layout>
      <PageHeader
        title="Positions Held"
        subtitle="Leadership roles across government, national, international, and community organizations"
      />

      <PositionSection
        title="Current Positions"
        icon={Briefcase}
        positions={currentPositions}
      />

      <div className="tricolour-divider mx-auto" />

      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Previous Leadership Roles
          </h2>
          <div className="tricolour-divider" />
        </div>
      </section>

      <PositionSection
        title="Government & Statutory Roles"
        icon={Building}
        positions={governmentRoles}
        bgColor="bg-background"
      />

      <PositionSection
        title="National & International Organizations"
        icon={Globe}
        positions={internationalRoles}
        bgColor="bg-muted"
      />

      <PositionSection
        title="Academic & Community Organizations"
        icon={Users}
        positions={academicRoles}
        bgColor="bg-background"
      />
    </Layout>
  );
};

export default Positions;
