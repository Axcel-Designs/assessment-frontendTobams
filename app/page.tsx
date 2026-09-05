import Consultant from "@/components/Consultant";
import BookConsultation from "@/components/BookConsultation";
import Hero from "@/components/Hero";
import LearningManagementSystem from "@/components/LearningManagementSystem";
import ManagementDevelopmentProgram from "@/components/ManagementDevelopmentProgram";
import Testimonials from "@/components/Testimonials";
import Training from "@/components/Training";
import TransformationHub from "@/components/TransformationHub";

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-between">
      <Hero/>
      <LearningManagementSystem/>
      <Training/>
      <ManagementDevelopmentProgram/>
      <TransformationHub/>
      <Consultant/>
      <BookConsultation/>
      <Testimonials/>
    </div>
  );
}
