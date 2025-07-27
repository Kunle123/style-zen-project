import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is CandidateV?",
      answer: "CandidateV is an AI-powered platform that helps you create professional CVs and cover letters tailored to specific job applications. We analyze job descriptions and match them with your career data to produce optimized documents."
    },
    {
      question: "How does the Application Wizard work?",
      answer: "Simply paste a job description, and our AI will analyze it against your career data (Career Arc). We'll show you keyword matches and gaps, then generate a tailored CV and cover letter optimized for that specific role."
    },
    {
      question: "What is the Career Arc?",
      answer: "The Career Arc is your structured career profile containing your work history, skills, education, and achievements. This data is used to generate personalized documents for each job application."
    },
    {
      question: "Can I edit the generated CVs and cover letters?",
      answer: "Yes! All generated documents can be downloaded and edited to your preferences. We provide a strong foundation that you can customize further if needed."
    },
    {
      question: "How accurate is the keyword matching?",
      answer: "Our AI analyzes job descriptions and matches them against your career data with high accuracy. We use color-coded indicators: green for strong matches, amber for partial matches, and red for missing keywords."
    },
    {
      question: "Can I generate multiple CVs for different roles?",
      answer: "Absolutely! You can generate unlimited CVs and cover letters for different job applications. Each document is tailored specifically to the job description you provide."
    },
    {
      question: "What file formats are supported for downloads?",
      answer: "Generated CVs and cover letters are available in PDF format for easy sharing with employers. We ensure professional formatting that looks great both digitally and when printed."
    },
    {
      question: "Is my personal data secure?",
      answer: "Yes, we take data security seriously. Your career information is encrypted and stored securely. We never share your personal data with third parties without your consent."
    },
    {
      question: "Can I update my Career Arc data?",
      answer: "Yes! You can update your Career Arc at any time. When you add new experiences or skills, our system will use the updated information for future CV generations."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we provide customer support via email at enquiries@candidate5.co.uk. We typically respond within 24 hours during business days."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access to your account until the end of your current billing period."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your Career Arc data and generated documents remain accessible for 30 days after cancellation. After this period, the data is permanently deleted unless you reactivate your account."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Frequently Asked Questions
            </CardTitle>
            <p className="text-muted-foreground text-center">
              Find answers to common questions about CandidateV
            </p>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;